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
            Term 6 Impact Report
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            ENS Public Goods Working Group funded infrastructure, security, and education projects in 2025. All grants include verifiable metrics.
          </p>
          
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
                      <h4 className="text-2xl font-bold mb-1">Compiler Diversity for DeFi Security</h4>
                      <p className="text-muted-foreground">Vyper • Security Infrastructure • $50,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  Vyper secures $4.7 billion in TVL across Curve, Lido, and Yearn, providing compiler diversity that reduces systemic risk from Solidity vulnerabilities.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Why This Funding Matters</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Vyper provides compiler diversity for Ethereum, protecting $4.7 billion in TVL across Curve, Lido, and Yearn. A vulnerability in Solidity could compromise the DeFi ecosystem. ENS funding enabled deployment of four security fixes including CVE-2025-21607, which prevented silent failures in smart contract logic. The grant supported translation of the ENS Universal Resolver to Vyper, demonstrating production readiness for protocol development. Ethereum Foundation provided matching funds for continued development. The team conducted workshops at ETHTokyo, worked with the Chinese community on translations, and partnered with BuidlGuidl for educational content.
                  </p>
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
                      <h4 className="text-2xl font-bold mb-1">Decentralization Policy Research</h4>
                      <p className="text-muted-foreground">Decentralization Research Center • Policy & Advocacy • $150,000 USDC</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Strategic Grant</Badge>
                </div>
                <p className="text-sm">
                  DRC conducts research on decentralization policy. Their work has been cited by a16z Crypto, Chia Network, and referenced in SEC discussions.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Why This Funding Matters</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    DRC conducts research on decentralization policy. Their April 2025 report "Designing Policy for a Flourishing Blockchain Industry" proposed a control-based framework for defining decentralization under law. The research was cited by a16z Crypto in their SEC submission and by Chia Network in their S-1 filing. ENS funding enabled DRC to submit a response to the Senate Banking Committee's RFI on digital assets, meet with the SEC Crypto Task Force, and host the 2025 Decentralized Tech Summit at the National Press Club, attended by over 100 policymakers, academics, and industry experts. DRC has partnerships with Harvard Kennedy School and Stanford Center for Blockchain Research.
                  </p>
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
                      <h4 className="text-2xl font-bold mb-1">Solidity Maintenance and Development</h4>
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
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Why This Funding Matters</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Argot Collective maintains Solidity, which powers ENS contracts and $250 billion in TVL across Ethereum. The team includes 25 former Ethereum Foundation employees. ENS funding supports the transition to Core Solidity 1.0, including a new IR pipeline to improve compilation times and prepare for network upgrades. In October 2025, Argot launched the Sourcify 4byte API with 4.7 million function signatures, making 1.9 million unverified contracts transparent to wallets, block explorers, and security tools. The team maintains hevm (formal verification), Sourcify (contract verification), and Act (specification language). Argot published the "Road to Core Solidity" blog series and participated in Solidity Summit 2025.
                  </p>
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
                      <h4 className="text-2xl font-bold mb-1">Layer 2 Infrastructure for ENS</h4>
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
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Why This Funding Matters</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Fabric builds infrastructure to enable ENS's Namechain to achieve 99% cost reduction for domain operations. The initiative coordinates over 20 ecosystem participants including Optimism, Arbitrum, Scroll, and Namechain to develop standards for based rollups. ENS funding supported completion of two security audits on the registry contract and helped achieve approximately 30% validator adoption for Commit-Boost on Ethereum mainnet. This infrastructure enables pre-confirmations and L2-to-L2 bridging. Fabric provided the technical foundation for Namechain's proof of concept with Linea.
                  </p>
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
                      <h4 className="text-2xl font-bold mb-1">Browser-Based Ethereum IDE</h4>
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
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Why This Funding Matters</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Remix has deployed over 12 million smart contracts and is used for Ethereum education globally. Used in university courses, bootcamps, and hackathons worldwide, Remix requires no installation. ENS funding (25% of $200,000 total with Ethereum Foundation matching) supports Remix's transition from EF stewardship to independent sustainability. The first iteration of the new Remix platform launched in Q1 2025, with ENS integration and dedicated subdomains for storage and test contracts under discussion. The team is developing an impact page with Dune analytics integration.
                  </p>
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
                      <h4 className="text-2xl font-bold mb-1">ICANN Policy Engagement</h4>
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
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Why This Funding Matters</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    ICANN governs the traditional internet's domain name system. Its policies impact ENS users. ENS funding enabled Emily Murray to attend ICANN84 in Dublin (October 25-30, 2025), participate in the SSAC RIDE Working Party on web3 naming issues, and submit two rounds of public comments on the 2026 gTLD Applicant Guidebook. This ensures ENS interests are represented in internet governance discussions. ICANN85 in Mumbai is planned for continued engagement.
                  </p>
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Builder Grants</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              46 grants supporting developers, educators, and community builders.
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Data and Transparency</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metrics are backed by publicly verifiable sources: GitHub, government databases, official websites, and third-party validation.
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
