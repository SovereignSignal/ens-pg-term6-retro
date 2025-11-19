import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Globe, Shield, Code, GraduationCap, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { GrantDistributionCharts } from "@/components/GrantDistributionCharts";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="ENS Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-lg font-bold">ENS Public Goods</h1>
              <p className="text-xs text-muted-foreground">Term 6 (2025) Impact Report</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('overview')} className="text-sm font-medium hover:text-primary transition-colors">Overview</button>
            <button onClick={() => scrollToSection('strategic')} className="text-sm font-medium hover:text-primary transition-colors">Strategic Grants</button>
            <button onClick={() => scrollToSection('builder')} className="text-sm font-medium hover:text-primary transition-colors">Builder Grants</button>
            <button onClick={() => scrollToSection('impact')} className="text-sm font-medium hover:text-primary transition-colors">Impact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <Badge className="mb-4" variant="outline">Term 6 • 2025</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Demonstrating Impact Through Verifiable Evidence
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Term 6 marked the most productive and strategically aligned period for the ENS Public Goods Working Group. 
            Every grant is backed by publicly verifiable metrics demonstrating real-world impact.
          </p>
          
          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-3xl">$250B+</CardTitle>
                <CardDescription>TVL Protected</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Through compiler diversity and core infrastructure maintenance</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-3xl">12M+</CardTitle>
                <CardDescription>Contracts Deployed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Via Remix IDE support for global developers</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-3xl">99%</CardTitle>
                <CardDescription>Cost Reduction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Enabled for ENS through Fabric's L2 infrastructure</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-3xl">100+</CardTitle>
                <CardDescription>Policymakers Educated</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">At DRC's 2025 Decentralized Tech Summit</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-3xl">$4.7B</CardTitle>
                <CardDescription>Secured by Vyper</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Critical security fixes deployed in Term 6</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-3xl">1.9M</CardTitle>
                <CardDescription>Contracts Made Transparent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Via Argot's new Sourcify 4byte database</p>
              </CardContent>
            </Card>
          </div>

          {/* Funding Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Grants</CardTitle>
                <CardDescription>Infrastructure & Ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">$425,000 USDC</div>
                <p className="text-sm text-muted-foreground">6 grants • Co-funded with Ethereum Foundation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Builder Grants</CardTitle>
                <CardDescription>Community & Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">57.75 ETH + 10,000 USDC</div>
                <p className="text-sm text-muted-foreground">46 grants • 278 proposals • 26+ unique grantees</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Grants as Case Studies */}
      <section id="strategic" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Strategic Grants</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Impact Case Studies</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six strategic grants supporting essential ecosystem infrastructure, each demonstrating measurable impact through verifiable evidence.
            </p>
          </div>

          <div className="space-y-12">
            {/* Vyper Case Study */}
            <Card className="overflow-hidden border-2">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">Protecting Critical DeFi Infrastructure</h4>
                      <p className="text-muted-foreground">Vyper • Security Infrastructure • $50,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  Vyper secures over $4.7 billion in TVL across Curve, Lido, and Yearn, providing critical compiler diversity that prevents catastrophic ecosystem-wide failure from Solidity vulnerabilities.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      A single vulnerability in Solidity could compromise the entire Ethereum DeFi ecosystem. Without compiler diversity, billions in TVL remain at systemic risk. Security vulnerabilities like CVE-2025-21607 could cause silent failures in smart contract logic.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      ENS funding enabled critical security fixes including CVE-2025-21607 (March 2025), translation of ENS Universal Resolver to Vyper, and ongoing compiler hardening through fuzz testing. Secured Ethereum Foundation matching funds for sustained development.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Impact Metrics</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">TVL Secured</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">At Risk</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">$4.7B+</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Security Fixes</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Vulnerable</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">4 Deployed</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Developer Reach</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Limited</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">Global</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-vyper/21171" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* DRC Case Study */}
            <Card className="overflow-hidden border-2">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">Shaping Global Crypto Policy</h4>
                      <p className="text-muted-foreground">Decentralization Research Center • Policy & Advocacy • $150,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  DRC has emerged as the leading think tank for decentralization policy, directly influencing regulatory frameworks through research cited by a16z Crypto, Chia Network, and the SEC.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      Regulatory uncertainty threatens the entire Web3 ecosystem. Without clear legal frameworks for decentralization, protocols face existential risk from enforcement actions. Policymakers lack research-backed standards to evaluate blockchain projects.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      DRC published "Designing Policy for a Flourishing Blockchain Industry" (April 2025), proposing a control-based framework for defining decentralization under law. Submitted response to Senate Banking Committee RFI (Aug 5) and met with SEC Crypto Task Force (Sept 16).
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Impact Metrics</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Policy Influence</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">No Framework</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">2 Citations</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Policymakers Reached</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Limited</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">100+</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Regulatory Engagement</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">None</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">SEC Meeting</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-the-decentralization-research-center-drc/20319" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Argot Case Study */}
            <Card className="overflow-hidden border-2">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">Sustaining Ethereum's Core Development</h4>
                      <p className="text-muted-foreground">Argot Collective • Solidity & Dev Tools • $100,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  Argot maintains Solidity (25,357 GitHub stars) and launched Sourcify 4byte API with 4.7M function signatures, making 1.9M unverified contracts transparent.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      Every ENS contract and $250B+ TVL across Ethereum depends on Solidity, but the language faces technical debt and needs evolution toward 1.0. Nearly 2 million unverified contracts remain opaque to security tools, creating blind spots for users.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      Argot launched Core Solidity development (Oct 2025), implemented new IR pipeline for optimization, and released Sourcify 4byte API (Oct 2025) with 4.7M signatures. This makes transaction data human-readable across wallets, explorers, and security tools.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Impact Metrics</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Contracts Made Transparent</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Opaque</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">1.9M</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Function Signatures</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Limited</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">4.7M</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">TVL Protected</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">At Risk</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">$250B+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-argot/21443" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fabric Case Study */}
            <Card className="overflow-hidden border-2">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">Enabling ENS Layer 2 Interoperability</h4>
                      <p className="text-muted-foreground">Fabric • Based Rollup Infrastructure • $50,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  Fabric's Commit-Boost has ~30% validator adoption on Ethereum mainnet, enabling ENS's Namechain to achieve 99% cost reduction for domain operations.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      ENS domain registration costs on mainnet are prohibitively expensive for many users. Without Layer 2 infrastructure, ENS cannot scale to serve billions of users. L2 fragmentation prevents seamless interoperability.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      Fabric developed based rollup standards with support from Optimism, Namechain, Arbitrum, and Scroll. Completed 2 security audits on registry contract. Achieved ~30% validator adoption for Commit-Boost, enabling pre-confirmations and L2-to-L2 bridging.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Impact Metrics</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Cost Reduction</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Mainnet</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">99%</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Validator Adoption</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">0%</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">~30%</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Ecosystem Participants</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Fragmented</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">20+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Remix Labs Case Study */}
            <Card className="overflow-hidden border-2">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">Maintaining Ethereum's Gateway IDE</h4>
                      <p className="text-muted-foreground">Remix Labs • Ethereum IDE • $50,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  Remix has deployed 12+ million smart contracts and is the primary tool for Ethereum education globally, used in university courses and hackathons worldwide.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      New developers face high barriers to entry with complex local development environments. Without zero-friction onboarding, Ethereum loses potential builders. Remix's transition from EF stewardship requires sustainable funding.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      ENS grant (25% of $200k total EF match) supports Remix's transition to independent sustainability. Browser-based IDE requires no installation, enabling immediate smart contract development. New platform launched Q1 2025 with ENS integration planned.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Impact Metrics</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Contracts Deployed</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">10M</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">12M+</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Developer Onboarding</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Complex</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">Zero-Friction</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Global Education</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Limited</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">Standard</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ICANN Case Study */}
            <Card className="overflow-hidden border-2">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">Representing Web3 in Global Internet Governance</h4>
                      <p className="text-muted-foreground">ICANN Engagement • Policy Advocacy • Up to $25,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  Expert representation in ICANN forums with 2 public comment submissions on the 2026 gTLD Applicant Guidebook and participation at ICANN84 in Dublin.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      Web3 domains face potential namespace collisions with traditional DNS. ICANN's 2026 gTLD policy could impact ENS users. Without expert representation, web3 perspectives are absent from global internet governance discussions.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      Emily Murray attended ICANN84 in Dublin (Oct 25-30, 2025), submitted 2 rounds of public comments on 2026 gTLD Applicant Guidebook, and participated in SSAC RIDE Working Party. Educated ICANN stakeholders on web3 domains and countered misinformation.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Impact Metrics</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Web3 Representation</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">None</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">Expert Voice</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Policy Submissions</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">0</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">ICANN Meetings</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Before:</span>
                        <span className="text-lg font-bold">Limited</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-primary my-1" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">After:</span>
                        <span className="text-lg font-bold text-primary">ICANN84</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-icann-engagement-and-policy-advocacy/19918" target="_blank" rel="noopener noreferrer">
                      View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Builder Grants Section */}
      <section id="builder" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Builder Grants</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Empowering Grassroots Innovation</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              46 grants supporting developers, educators, and community builders across the Ethereum ecosystem.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">57.75 ETH</CardTitle>
                <CardDescription>+ 10,000 USDC Distributed</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">46</CardTitle>
                <CardDescription>Grants Awarded</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">278</CardTitle>
                <CardDescription>Proposals Submitted</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">26+</CardTitle>
                <CardDescription>Unique Grantees</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Developer Tools & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Revoke.cash</strong>: $140M+ in losses prevented through token approval management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>EVM Tools</strong>: 22+ developer utilities for decoding and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Rust Ethereum Client</strong>: Modular execution client for network diversity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Education & Community</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Women in DeFi</strong>: 5,000+ women trained across Africa, 30% launched projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Dev3pack Fellowship</strong>: Web2→Web3 bootcamp for global students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>SheFi Summit Africa</strong>: Major African web3 event empowering women</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Hackathons & Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Hackatsuon</strong>: Two-week residency in Kesennuma, Japan exploring ENS for local governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>ETHAccra</strong>: Flagship African Ethereum hackathon with ENS workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Ethereum México 2025</strong>: 900+ developers, ENS integration focus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <a href="https://builder.ensgrants.xyz/" target="_blank" rel="noopener noreferrer">
                View All Grantees <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact & Data Section */}
      <section id="impact" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Impact Analysis</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Verifiable Evidence & Transparency</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every metric is backed by publicly verifiable sources: GitHub, government databases, official websites, and third-party validation.
            </p>
          </div>

          {/* Charts */}
          <GrantDistributionCharts />

          {/* Verification Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-2xl">How to Verify Our Claims</CardTitle>
              <CardDescription>All impact metrics are publicly verifiable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">GitHub Metrics</p>
                    <p className="text-sm text-muted-foreground">Stars, releases, commits for all infrastructure projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Government Databases</p>
                    <p className="text-sm text-muted-foreground">NVD CVE database, SEC filings, Senate RFI responses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Third-Party Validation</p>
                    <p className="text-sm text-muted-foreground">EF co-funding, a16z citations, validator adoption metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">On-Chain Transparency</p>
                    <p className="text-sm text-muted-foreground">All grants tracked on Dune dashboard with public data</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button variant="outline" asChild>
                  <a href="https://dune.com/jondar/ens-pg-builder-grants" target="_blank" rel="noopener noreferrer">
                    View Dune Dashboard <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://discuss.ens.domains/c/public-goods/37" target="_blank" rel="noopener noreferrer">
                    ENS Forum <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* EF Alignment */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl">Ethereum Foundation Alignment</CardTitle>
              <CardDescription>Strategic co-funding for maximum ecosystem impact</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Term 6 marked deep operational alignment with the Ethereum Foundation's Funding Coordination team. This collaboration ensured ENS Public Goods resources were strategically directed toward shared ecosystem priorities, reducing duplication while amplifying impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Co-Funded Projects</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Vyper ($50k + EF matching)</li>
                    <li>• Remix Labs ($50k, 25% of $200k total)</li>
                    <li>• Fabric ($50k + ecosystem matching)</li>
                    <li>• DRC ($150k + ~$300k additional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Reduced review duplication</li>
                    <li>• Increased long-term runway</li>
                    <li>• Shared transparency standards</li>
                    <li>• Stronger ecosystem signaling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">ENS Public Goods</h4>
              <p className="text-sm text-muted-foreground">
                Supporting foundational public goods in the Ethereum and Web3 ecosystems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://discuss.ens.domains/c/public-goods/37" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">ENS Forum</a></li>
                <li><a href="https://builder.ensgrants.xyz/" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">Builder Grants Platform</a></li>
                <li><a href="https://dune.com/jondar/ens-pg-builder-grants" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">Dune Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://twitter.com/ens_dao" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
                <li><a href="https://ens.domains" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">ENS Domains</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>ENS Public Goods Working Group • Term 6 (2025) • All metrics publicly verifiable</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
