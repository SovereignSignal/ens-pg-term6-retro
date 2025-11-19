import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { APP_LOGO } from "@/const";
import { ExternalLink, TrendingUp, Users, Globe, Award, Code, GraduationCap, Calendar, BarChart3 } from "lucide-react";
import { GrantDistributionCharts } from "@/components/GrantDistributionCharts";
import { StrategicGrantsTimeline } from "@/components/StrategicGrantsTimeline";
import { ImpactStories } from "@/components/ImpactStories";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="ENS Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-lg font-bold">ENS Public Goods</h1>
              <p className="text-xs text-muted-foreground">Term 6 (2025)</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('overview')} className="text-sm font-medium hover:text-primary transition-colors">
              Overview
            </button>
            <button onClick={() => scrollToSection('strategic')} className="text-sm font-medium hover:text-primary transition-colors">
              Strategic Grants
            </button>
            <button onClick={() => scrollToSection('builder')} className="text-sm font-medium hover:text-primary transition-colors">
              Builder Grants
            </button>
            <button onClick={() => scrollToSection('stories')} className="text-sm font-medium hover:text-primary transition-colors">
              Impact Stories
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-sm font-medium hover:text-primary transition-colors">
              Impact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4">Term 6 Retrospective</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Funding the Future of Ethereum
            </h2>
            <p className="text-xl text-muted-foreground">
              The ENS Public Goods Working Group supports foundational infrastructure, developer tools, and community initiatives that strengthen the entire Ethereum ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$425K</div>
                <div className="text-sm text-muted-foreground">Strategic Grants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">57.75 ETH</div>
                <div className="text-sm text-muted-foreground">Builder Grants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">43+</div>
                <div className="text-sm text-muted-foreground">Projects Funded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">26+</div>
                <div className="text-sm text-muted-foreground">Unique Grantees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold">A Two-Pronged Approach</h3>
              <p className="text-lg text-muted-foreground">
                Term 6 combined high-impact Strategic Grants with a vibrant Builder Grants program to maximize ecosystem impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Strategic Grants</CardTitle>
                  <CardDescription>
                    Substantial funding for critical infrastructure and ecosystem foundations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Co-funded with Ethereum Foundation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Long-term support for core tooling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Milestone-based accountability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Builder Grants</CardTitle>
                  <CardDescription>
                    Empowering individual developers and small teams to innovate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Rolling applications, quick decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>0.25 to 4 ETH grants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Full transparency via Dune dashboard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Grants Section */}
      <section id="strategic" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold">Strategic Grants: Fortifying the Core</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Targeted funding for projects building foundational infrastructure for the Ethereum ecosystem, with deep alignment with the Ethereum Foundation.
              </p>
            </div>

            {/* Timeline */}
            <StrategicGrantsTimeline />

            <div className="grid gap-6">
              {/* DRC */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">Decentralization Research Center (DRC)</CardTitle>
                      <CardDescription>Research & advocacy for decentralization in policymaking</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">$150K</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    The DRC unites technologists, academics, and regulators to ensure decentralization is understood and protected in policymaking. This grant supports research and advocacy work that shapes how governments and institutions approach decentralized technologies.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Impact:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• External matching planned (~$300k total)</li>
                      <li>• Policy research protecting decentralization principles</li>
                      <li>• Bridge between technical community and policymakers</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-the-decentralization-research-center-drc/19090" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Vyper */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">Vyper</CardTitle>
                      <CardDescription>Alternate smart contract language for Ethereum</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">$50K</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Vyper provides an alternative to Solidity, emphasizing auditability, simplicity, and compiler diversity. This grant, matched by the Ethereum Foundation, ensures the sustainability of a critical tool for smart contract development.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Impact:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Powers $4.7B in DeFi protocols</li>
                      <li>• Matched by Ethereum Foundation funding</li>
                      <li>• Ensures compiler diversity for security</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-vyper/19858" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Argot */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">Argot</CardTitle>
                      <CardDescription>Independent collective for Ethereum application infrastructure</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">$100K</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Argot maintains critical developer tooling including Solidity, Fe, Sourcify, ethdebug, Act, and hevm. This funding provides sustainable support for the independent maintainers of tools that underpin the entire Ethereum application layer.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Impact:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Supports $250B+ TVL in Solidity-based contracts</li>
                      <li>• Maintains core developer tooling (Solidity, Sourcify, etc.)</li>
                      <li>• Reduces key-person risk for critical infrastructure</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-argot/19747" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Remix Labs */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">Remix Labs</CardTitle>
                      <CardDescription>Web-based smart contract development IDE</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">$50K</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Remix IDE is the foundational Web2 → Web3 bridge for new Ethereum developers. This grant supports its transition from the Ethereum Foundation to an independent public goods organization, ensuring its long-term sustainability.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Impact:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Successfully transitioned to independent organization</li>
                      <li>• Onboards thousands of new Ethereum developers</li>
                      <li>• ENS represented as public good partner</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Fabric */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">Fabric</CardTitle>
                      <CardDescription>Standards for based rollups and validator coordination</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">$50K</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Fabric develops standards and infrastructure for based rollups, validator coordination, and pre-confirmation tooling. This work is strategic for ENS as it has committed to becoming a based rollup (Namechain).
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Impact:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Commit-boost adopted by ~30% of Mainnet validators</li>
                      <li>• Main registry contract underwent 2 audits</li>
                      <li>• Directly supports ENS's Namechain roadmap</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* ICANN */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">ICANN Engagement</CardTitle>
                      <CardDescription>Policy advocacy in Internet governance</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">$25K</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Expert representation in ICANN naming policy processes, especially in the 2026 gTLD Applicant Guidebook consultations. This ensures web3 interests are represented in traditional Internet governance.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Impact:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Participation in ICANN84 (Dublin) and ICANN85 (Mumbai)</li>
                      <li>• Public comments on 2026 gTLD program</li>
                      <li>• Strategic positioning for web3 naming systems</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-icann-engagement-and-policy-advocacy/19918" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Grants Section */}
      <section id="builder" className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold">Builder Grants: Seeding Innovation</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Supporting individual developers and small teams building valuable tools, educational resources, and community initiatives across the Ethereum ecosystem.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Small Grants</CardDescription>
                  <CardTitle className="text-3xl">43</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">57.75 ETH distributed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Large Grants</CardDescription>
                  <CardTitle className="text-3xl">3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">10,000 USDC distributed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Unique Grantees</CardDescription>
                  <CardTitle className="text-3xl">26+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Diverse projects funded</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Total Proposals</CardDescription>
                  <CardTitle className="text-3xl">278</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Growing ecosystem interest</p>
                </CardContent>
              </Card>
            </div>

            {/* Categories */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">Developer Tools & Infrastructure</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Revoke.cash</CardTitle>
                      <CardDescription>Token approval management tool</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Public-good tool for managing and revoking token approvals across EVM chains. Publicly acknowledges ENS funding on their website.
                      </p>
                      <Badge variant="outline">Security</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">EVM Tools</CardTitle>
                      <CardDescription>Suite of 22+ developer utilities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Comprehensive toolkit supporting decoding, EIP playgrounds, and data analysis for Ethereum developers.
                      </p>
                      <Badge variant="outline">Developer Tools</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">multisigned</CardTitle>
                      <CardDescription>Passkey infrastructure for Ethereum</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Credibly neutral passkey-based authentication enabling seamless login with fingerprint or Face ID.
                      </p>
                      <Badge variant="outline">Authentication</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">REEC</CardTitle>
                      <CardDescription>Rust Ethereum Execution Client</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Modular execution client in Rust contributing to network diversity and resilience.
                      </p>
                      <Badge variant="outline">Infrastructure</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">Education & Community</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Women in DeFi (WID)</CardTitle>
                      <CardDescription>Skill-Up Training Program</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Educational workshops and mentorship programs empowering women to participate in DeFi.
                      </p>
                      <Badge variant="outline">Education</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Dev3pack Fellowship</CardTitle>
                      <CardDescription>Web2 → Web3 bootcamp</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Bootcamp fellowship bridging Web2 and Web3 for global student and women developers.
                      </p>
                      <Badge variant="outline">Training</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">SheFi Summit Africa</CardTitle>
                      <CardDescription>Major African web3 event</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Flagship event empowering women in blockchain across the African continent.
                      </p>
                      <Badge variant="outline">Community</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">Hackathons & Events: Bringing Builders Together</h4>
                </div>
                <p className="text-muted-foreground mb-4">
                  These events create vital coordination points where builders connect, collaborate, and advance the ecosystem together.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">ETHAccra</CardTitle>
                      <CardDescription>Flagship African Ethereum hackathon</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Premier Ethereum hackathon in West Africa featuring ENS integration workshops and subdomain tooling.
                      </p>
                      <Badge variant="outline">Africa</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Hackatsuon</CardTitle>
                      <CardDescription>Japan residency & hackathon</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Two-week residency and hackathon in Kesennuma, Japan exploring ENS for local governance.
                      </p>
                      <Badge variant="outline">Asia</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Aleph Hackathon</CardTitle>
                      <CardDescription>Latin American builder event</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Supporting subdomain integrations and identity tooling across Latin America.
                      </p>
                      <Badge variant="outline">Latin America</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ethereum Mexico 2025</CardTitle>
                      <CardDescription>Monterrey conference</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Major Ethereum conference bringing together the Mexican and broader LATAM community.
                      </p>
                      <Badge variant="outline">Latin America</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Transparency */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Full Transparency via Dune Dashboard</CardTitle>
                    <CardDescription>All builder grant transactions are publicly verifiable on-chain</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  The ENS PG Builder Grants Dune Dashboard (itself funded by a 0.25 ETH builder grant) provides real-time tracking of all grants, withdrawals, and metrics. This demonstrates the meta-value of funding infrastructure that increases transparency for the program itself.
                </p>
                <Button asChild>
                  <a href="https://dune.com/jondar/ens-pg-builder-grants" target="_blank" rel="noopener noreferrer">
                    View Dune Dashboard <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section id="stories" className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold">Impact Stories</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world outcomes from ENS Public Goods funding, showing how strategic investments create lasting value for the Ethereum ecosystem.
              </p>
            </div>
            <ImpactStories />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold">Ecosystem Impact & Global Reach</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The Public Goods Working Group's impact extends far beyond individual grants, strengthening the entire Ethereum ecosystem.
              </p>
            </div>

            {/* Interactive Charts */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h4 className="text-2xl font-bold">Grant Distribution Analytics</h4>
              </div>
              <GrantDistributionCharts />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Developer Ecosystem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    By funding projects like Vyper, Argot, and Remix, the PGWG contributes to the stability and diversity of tools that all Ethereum developers rely on. This ensures no single point of failure in critical infrastructure.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Global Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Active support for initiatives in Africa (ETHAccra, SheFi Summit), Latin America (Aleph, Ethereum Mexico), and Asia (Hackatsuon) fosters a more inclusive and globally distributed ENS community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Internet Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The ICANN engagement grant demonstrates forward-thinking approach to ensuring long-term viability of web3 naming systems within broader internet governance landscape.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* EF Alignment */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Ethereum Foundation Alignment</CardTitle>
                <CardDescription>Strategic co-funding model for critical public goods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  A defining achievement of Term 6 was the deep operational alignment with the Ethereum Foundation's Funding Coordination team. This collaboration ensures ENS Public Goods resources are strategically directed toward shared ecosystem priorities, reducing duplication while amplifying impact.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Reduced duplication of reviews and grant fragmentation</li>
                      <li>• Increased long-term runway for critical teams</li>
                      <li>• Shared diligence processes and transparency standards</li>
                      <li>• Stronger signaling across ecosystem for supported teams</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Co-Funded Projects:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Vyper ($50k USDC + EF matching)</li>
                      <li>• Remix Labs ($50k USDC + EF coordination)</li>
                      <li>• Fabric ($50k USDC + ecosystem matching)</li>
                      <li>• DRC ($150k USDC + EF matching)</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-aligning-with-the-new-ef-funding-team/19598" target="_blank" rel="noopener noreferrer">
                    Read About EF Alignment <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Accountability */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Transparency & Accountability</CardTitle>
                <CardDescription>Addressing the call for working group accountability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  In response to the ENS DAO's focus on working group accountability, the Public Goods Working Group has proactively implemented multiple transparency measures:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">On-Chain Tracking</h4>
                    <p className="text-xs text-muted-foreground">
                      All builder grant transactions publicly verifiable via Dune dashboard
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Public Communication</h4>
                    <p className="text-xs text-muted-foreground">
                      All strategic grant decisions announced on ENS forum with rationale
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Regular Reporting</h4>
                    <p className="text-xs text-muted-foreground">
                      Weekly public meetings with 93+ discussions and 2.8k+ views
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">About This Dashboard</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  This dashboard showcases the achievements of the ENS Public Goods Working Group in Term 6 (2025). All data is sourced from official ENS forum posts, the builder grants platform, and on-chain analytics.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://discuss.ens.domains/c/public-goods/37" target="_blank" rel="noopener noreferrer">
                    Visit ENS Forum <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
              <div>
                <h4 className="font-bold mb-4">Key Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://builder.ensgrants.xyz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                      Builder Grants Platform <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://dune.com/jondar/ens-pg-builder-grants" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                      Dune Analytics Dashboard <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-weekly-meeting-12pm-et-5pm-utc-thursday-term-6/19268" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                      Weekly Meetings <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground pt-8 border-t">
              <p>ENS Public Goods Working Group • Term 6 (2025)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
