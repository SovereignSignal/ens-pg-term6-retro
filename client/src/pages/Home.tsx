import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Globe, Shield, Code, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { GrantDistributionCharts } from "@/components/GrantDistributionCharts";
import { StrategicGrantsTimeline } from "@/components/StrategicGrantsTimeline";
import { ImpactStories } from "@/components/ImpactStories";

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

      {/* Strategic Grants Section */}
      <section id="strategic" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Strategic Grants</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Infrastructure & Advocacy</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six strategic grants supporting essential ecosystem infrastructure, evaluated on <strong>Infrastructure</strong>, <strong>Utility</strong>, and <strong>Education</strong> impact.
            </p>
          </div>

          {/* Timeline */}
          <StrategicGrantsTimeline />

          {/* Grant Cards with Enhanced Impact Evidence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Vyper */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Vyper</CardTitle>
                    <CardDescription>Smart Contract Language</CardDescription>
                  </div>
                  <Badge variant="secondary">$50,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Vyper secures over <strong>$4.7 billion in TVL</strong> across Curve, Lido, and Yearn. Term 6 funding enabled critical security fixes including <strong>CVE-2025-21607</strong> and the translation of ENS Universal Resolver to Vyper.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Infrastructure Impact</p>
                      <p className="text-xs text-muted-foreground">4 security fixes deployed (March 2025), ENS Universal Resolver translation, compiler diversity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Utility Impact</p>
                      <p className="text-xs text-muted-foreground">$4.7B TVL protected, systemic risk mitigation, EF matching funds secured</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Education Impact</p>
                      <p className="text-xs text-muted-foreground">ETHTokyo workshop (Sept 2025), India events (Oct 2025), Chinese community translations</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-vyper/21171" target="_blank" rel="noopener noreferrer">
                    View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* DRC */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Decentralization Research Center</CardTitle>
                    <CardDescription>Policy & Advocacy</CardDescription>
                  </div>
                  <Badge variant="secondary">$150,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  DRC's research framework was cited in <strong>a16z Crypto's SEC submission</strong> (Aug 2025) and <strong>Chia Network's S-1 filing</strong>. The 2025 Summit convened <strong>100 policymakers and industry leaders</strong>.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Infrastructure Impact</p>
                      <p className="text-xs text-muted-foreground">Control-based framework for defining decentralization under law</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Utility Impact</p>
                      <p className="text-xs text-muted-foreground">Senate RFI response (Aug 5), cited by a16z and Chia Network, SEC meeting (Sept 16)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Education Impact</p>
                      <p className="text-xs text-muted-foreground">100 attendees at 2025 Summit (April 2, DC), Harvard & Stanford partnerships</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-the-decentralization-research-center-drc/20319" target="_blank" rel="noopener noreferrer">
                    View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Argot */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Argot Collective</CardTitle>
                    <CardDescription>Solidity & Dev Tools</CardDescription>
                  </div>
                  <Badge variant="secondary">$100,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Argot maintains Solidity (<strong>25,357 GitHub stars</strong>) and launched the Sourcify 4byte API with <strong>4.7M function signatures</strong>, making <strong>1.9M unverified contracts</strong> transparent.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Infrastructure Impact</p>
                      <p className="text-xs text-muted-foreground">Core Solidity 1.0 development, new IR pipeline, $250B+ TVL depends on maintained tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Utility Impact</p>
                      <p className="text-xs text-muted-foreground">4.7M signatures in new 4byte database, 1.9M from unverified contracts now decodable</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Education Impact</p>
                      <p className="text-xs text-muted-foreground">"Road to Core Solidity" blog series (Oct 2025), Solidity Summit presentation (Nov 18)</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-argot/21443" target="_blank" rel="noopener noreferrer">
                    View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Fabric */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Fabric</CardTitle>
                    <CardDescription>Based Rollup Infrastructure</CardDescription>
                  </div>
                  <Badge variant="secondary">$50,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Fabric's Commit-Boost has <strong>~30% validator adoption</strong> on Ethereum mainnet. Critical for ENS's Namechain, enabling <strong>99% cost reduction</strong> for domain operations.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Infrastructure Impact</p>
                      <p className="text-xs text-muted-foreground">Based rollup standards, 2 audits completed, 20+ ecosystem participants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Utility Impact</p>
                      <p className="text-xs text-muted-foreground">99% cost reduction for ENS, L2 interoperability, 30% validator adoption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Education Impact</p>
                      <p className="text-xs text-muted-foreground">Fabric website compiles research, testnet for DevConnect, ecosystem coordination</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795" target="_blank" rel="noopener noreferrer">
                    View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Remix Labs */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Remix Labs</CardTitle>
                    <CardDescription>Ethereum IDE</CardDescription>
                  </div>
                  <Badge variant="secondary">$50,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Remix has deployed <strong>12+ million smart contracts</strong> and is the primary tool for Ethereum education globally. Grant supports transition from EF to independent sustainability.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Infrastructure Impact</p>
                      <p className="text-xs text-muted-foreground">Browser-based IDE, 12M+ contracts deployed, new platform launched (Q1 2025)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Utility Impact</p>
                      <p className="text-xs text-muted-foreground">Zero-friction onboarding, ENS integration planned, EF matching (25% of $200k total)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Education Impact</p>
                      <p className="text-xs text-muted-foreground">Global standard for Ethereum education, university courses, hackathon workshops</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-remix-labs-fabric/19795" target="_blank" rel="noopener noreferrer">
                    View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* ICANN */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">ICANN Engagement</CardTitle>
                    <CardDescription>Policy Advocacy</CardDescription>
                  </div>
                  <Badge variant="secondary">$25,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Expert representation in ICANN forums, with <strong>2 public comment submissions</strong> on the 2026 gTLD Applicant Guidebook and participation at <strong>ICANN84 in Dublin</strong>.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Infrastructure Impact</p>
                      <p className="text-xs text-muted-foreground">Influencing 2026 gTLD policy, SSAC RIDE Working Party engagement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Utility Impact</p>
                      <p className="text-xs text-muted-foreground">Web3 representation at ICANN, 2 public comments on gTLD AGB, collision prevention</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Education Impact</p>
                      <p className="text-xs text-muted-foreground">ICANN84 report shared with community, stakeholder education on web3 domains</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://discuss.ens.domains/t/ens-public-goods-working-group-funding-icann-engagement-and-policy-advocacy/19918" target="_blank" rel="noopener noreferrer">
                    View Forum Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
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

      {/* Impact Stories */}
      <ImpactStories />

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
