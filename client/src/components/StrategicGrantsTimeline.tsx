import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

interface GrantEvent {
  id: string;
  date: string;
  month: string;
  grantee: string;
  amount: string;
  description: string;
  forumLink: string;
  color: string;
}

const timelineEvents: GrantEvent[] = [
  {
    id: "drc",
    date: "Mar 6",
    month: "March",
    grantee: "Decentralization Research Center",
    amount: "$150,000",
    description: "Research and advocacy for decentralization in policymaking",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-the-decentralization-research-center-drc/19090",
    color: "bg-purple-500",
  },
  {
    id: "remix",
    date: "May 29",
    month: "May",
    grantee: "Remix Labs",
    amount: "$50,000",
    description: "Web-based smart contract development IDE",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795",
    color: "bg-blue-500",
  },
  {
    id: "fabric",
    date: "May 29",
    month: "May",
    grantee: "Fabric",
    amount: "$50,000",
    description: "Standards for based rollups and validator coordination",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795",
    color: "bg-blue-500",
  },
  {
    id: "vyper",
    date: "Aug 7",
    month: "August",
    grantee: "Vyper",
    amount: "$50,000",
    description: "Alternate smart contract language for Ethereum",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-vyper/19858",
    color: "bg-indigo-500",
  },
  {
    id: "argot",
    date: "Sep 18",
    month: "September",
    grantee: "Argot",
    amount: "$100,000",
    description: "Independent collective for Ethereum application infrastructure",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-argot/19747",
    color: "bg-violet-500",
  },
  {
    id: "icann",
    date: "Sep 25",
    month: "September",
    grantee: "ICANN Engagement",
    amount: "$25,000",
    description: "Policy advocacy in Internet governance",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-icann-engagement-and-policy-advocacy/19918",
    color: "bg-violet-500",
  },
  {
    id: "phantom-zone",
    date: "Oct 15",
    month: "October",
    grantee: "Phantom Zone",
    amount: "$25,000",
    description: "Advanced cryptographic tools including FHE and encrypted execution environments",
    forumLink: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-phantom-zone/21646",
    color: "bg-emerald-500",
  },
];

export function StrategicGrantsTimeline() {
  const [selectedGrant, setSelectedGrant] = useState<string | null>(null);

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-primary" />
          <div>
            <CardTitle className="text-2xl">Term 6 Timeline</CardTitle>
            <CardDescription>Strategic grants awarded throughout 2025</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Date marker */}
                <div className="md:w-1/2 flex justify-start md:justify-end md:pr-12 items-start">
                  <div className="flex items-center gap-4">
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${event.color} text-white font-bold shadow-lg`}
                    >
                      <div className="text-center">
                        <div className="text-xs">{event.month}</div>
                        <div className="text-sm">{event.date.split(" ")[1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="md:w-1/2 md:pl-12">
                  <Card
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedGrant === event.id ? "ring-2 ring-primary shadow-lg" : ""
                    }`}
                    onClick={() => setSelectedGrant(selectedGrant === event.id ? null : event.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{event.grantee}</CardTitle>
                        <Badge variant="secondary" className="font-bold shrink-0">
                          {event.amount}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">{event.description}</CardDescription>
                    </CardHeader>
                    {selectedGrant === event.id && (
                      <CardContent className="pt-0">
                        <a
                          href={event.forumLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Forum Post <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardContent>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Summary at the end */}
          <div className="mt-12 pt-8 border-t">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Total Strategic Grants in Term 6
              </p>
              <p className="text-3xl font-bold text-primary">$450,000 USDC</p>
              <p className="text-sm text-muted-foreground">
                Across 7 projects from March to October 2025
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
