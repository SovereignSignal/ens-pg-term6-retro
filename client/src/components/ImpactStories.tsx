import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Shield, Layers, ArrowRight } from "lucide-react";

interface Metric {
  label: string;
  before: string;
  after: string;
  change: string;
}

interface ImpactStory {
  id: string;
  title: string;
  grantee: string;
  grantAmount: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  link: string;
  color: string;
}

const impactStories: ImpactStory[] = [
  {
    id: "revoke-cash",
    title: "Protecting Users from Token Approval Exploits",
    grantee: "Revoke.cash",
    grantAmount: "Builder Grant",
    category: "Security Infrastructure",
    icon: <Shield className="h-8 w-8" />,
    summary: "Revoke.cash provides a critical security tool that helps users manage and revoke token approvals across EVM chains, preventing unauthorized access to funds.",
    challenge: "Token approval exploits have cost users millions in lost funds. Many users unknowingly grant unlimited token approvals to smart contracts, creating security vulnerabilities that malicious actors can exploit.",
    solution: "ENS funding enabled Revoke.cash to maintain and expand their free, open-source platform that allows users to easily view and revoke dangerous token approvals across 100+ blockchain networks.",
    metrics: [
      {
        label: "Networks Supported",
        before: "50+",
        after: "100+",
        change: "+100%",
      },
      {
        label: "Monthly Active Users",
        before: "~50K",
        after: "~150K",
        change: "+200%",
      },
      {
        label: "Approvals Revoked",
        before: "500K+",
        after: "1M+",
        change: "+100%",
      },
    ],
    quote: {
      text: "ENS Public Goods funding has been instrumental in allowing us to continue providing essential web3 security tools without charging users.",
      author: "Revoke.cash Team",
      role: "Public Good Security Tool",
    },
    link: "https://revoke.cash/acknowledgements",
    color: "bg-green-500",
  },
  {
    id: "vyper",
    title: "Ensuring Compiler Diversity for Ethereum",
    grantee: "Vyper",
    grantAmount: "$50,000 USDC",
    category: "Developer Infrastructure",
    icon: <Layers className="h-8 w-8" />,
    summary: "Vyper provides an alternative smart contract language emphasizing auditability and simplicity, reducing systemic risk from Solidity monoculture.",
    challenge: "Over $250B in TVL depends on Solidity-based contracts. A single critical bug in the Solidity compiler could have catastrophic ecosystem-wide consequences. Compiler diversity is essential for Ethereum's security and resilience.",
    solution: "Co-funded with the Ethereum Foundation, this grant provides sustainable support for Vyper development, ensuring continued maintenance and improvements to the alternative compiler that powers $4.7B in DeFi protocols.",
    metrics: [
      {
        label: "Protocols Using Vyper",
        before: "Major: Curve, Yearn",
        after: "Expanded ecosystem",
        change: "Growing adoption",
      },
      {
        label: "TVL in Vyper Contracts",
        before: "$3.5B",
        after: "$4.7B",
        change: "+34%",
      },
      {
        label: "Compiler Releases",
        before: "Quarterly",
        after: "Regular updates",
        change: "Sustained development",
      },
    ],
    quote: {
      text: "This funding ensures Vyper remains a viable alternative to Solidity, providing the Ethereum ecosystem with critical compiler diversity.",
      author: "Vyper Team",
      role: "Smart Contract Language",
    },
    link: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-vyper/19858",
    color: "bg-blue-500",
  },
  {
    id: "fabric",
    title: "Building Infrastructure for Based Rollups",
    grantee: "Fabric",
    grantAmount: "$50,000 USDC",
    category: "L2 Infrastructure",
    icon: <TrendingUp className="h-8 w-8" />,
    summary: "Fabric develops standards and tooling for based rollups, directly supporting ENS's roadmap for Namechain while benefiting the broader Ethereum L2 ecosystem.",
    challenge: "Based rollups represent the future of Ethereum scaling, but lack standardized infrastructure for validator coordination and pre-confirmations. This creates fragmentation and limits adoption.",
    solution: "ENS funding enabled Fabric to develop Commit-boost and other critical infrastructure for based rollup coordination, creating standards that will benefit ENS's Namechain and the entire L2 ecosystem.",
    metrics: [
      {
        label: "Validator Adoption",
        before: "~10%",
        after: "~30%",
        change: "+200%",
      },
      {
        label: "Security Audits",
        before: "0",
        after: "2 completed",
        change: "Production-ready",
      },
      {
        label: "Mainnet Validators",
        before: "Early testing",
        after: "Thousands",
        change: "Live on Mainnet",
      },
    ],
    quote: {
      text: "ENS's strategic support has accelerated our work on based rollup infrastructure, which will directly benefit Namechain and the broader Ethereum ecosystem.",
      author: "Fabric Team",
      role: "Based Rollup Infrastructure",
    },
    link: "https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795",
    color: "bg-purple-500",
  },
];

export function ImpactStories() {
  return (
    <div className="space-y-16">
      {impactStories.map((story, index) => (
        <Card key={story.id} className="border-2 overflow-hidden">
          <div className={`h-2 ${story.color}`} />
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className={`${story.color} text-white p-3 rounded-lg shrink-0`}>
                {story.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {story.category}
                    </Badge>
                    <CardTitle className="text-2xl mb-1">{story.title}</CardTitle>
                    <CardDescription className="text-base">
                      {story.grantee} • {story.grantAmount}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-sm mt-3">{story.summary}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-destructive">The Challenge</h4>
                <p className="text-sm text-muted-foreground">{story.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-primary">The Solution</h4>
                <p className="text-sm text-muted-foreground">{story.solution}</p>
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="font-semibold mb-4">Impact Metrics</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {story.metrics.map((metric, idx) => (
                  <Card key={idx} className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardDescription className="text-xs">{metric.label}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Before:</span>
                        <span className="font-medium">{metric.before}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">After:</span>
                        <span className="font-bold text-primary">{metric.after}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {metric.change}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quote */}
            {story.quote && (
              <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r">
                <p className="text-sm italic mb-2">"{story.quote.text}"</p>
                <footer className="text-xs text-muted-foreground">
                  — {story.quote.author}, {story.quote.role}
                </footer>
              </blockquote>
            )}

            {/* Link */}
            <div className="pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href={story.link} target="_blank" rel="noopener noreferrer">
                  Learn More <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
