import { ArrowRight, CheckCircle2, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="\logo.svg" alt="HireSightPro Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">HireSightPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </a>
            <a href="#how" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 md:py-24">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex flex-col gap-6 md:w-1/2">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="font-medium">Trusted by 10,000+ job seekers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Land job interviews <span className="text-primary">10X faster</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Professional resume optimization that gets your application noticed. Stand out from the competition and
                secure more interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  View Success Stories
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                    >
                      <img src="/placeholder.svg" alt="User" width={32} height={32} />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>
            <div className="relative md:w-1/2 flex justify-center">
              <div className="relative h-[400px] w-[300px] rounded-xl border bg-background p-4 shadow-xl">
                <div className="absolute -right-4 -top-4 rounded-lg border bg-background p-2 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">10X</span>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <h3 className="font-semibold text-primary">JOBS & RESUME TRACKING GUIDE</h3>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-2 rounded bg-muted"></div>
                    <div className="h-2 rounded bg-muted w-4/5"></div>
                    <div className="h-2 rounded bg-muted w-3/5"></div>
                    <div className="h-2 rounded bg-muted"></div>
                    <div className="h-2 rounded bg-muted w-4/5"></div>
                  </div>
                  <img
                    src="/placeholder.svg"
                    alt="Guide Preview"
                    width={250}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-secondary/20 blur-xl"></div>
            </div>
          </div>
        </section>

        <section id="how" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Our proven 4-step process helps you optimize your job search and land interviews faster
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Submit Resume Form",
                  description: "Upload your current resume and tell us about your career goals.",
                },
                {
                  step: 2,
                  title: "We do the expert part",
                  description:
                    "Our team of industry experts optimizes your resume for ATS systems and hiring managers.",
                },
                {
                  step: 3,
                  title: "You receive our file recommendations",
                  description: "Get your enhanced resume with personalized application strategies.",
                },
                {
                  step: 4,
                  title: "You get the interviews",
                  description: "Apply with confidence and start receiving interview invitations.",
                },
              ].map((item) => (
                <Card key={item.step} className="border-none shadow-none bg-muted/50 relative overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-primary/5 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Us</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Meet the team of industry experts dedicated to helping you succeed
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Andrew",
                  role: "Founder and Career Strategist",
                  img: "/placeholder.svg",
                  bio: "Andrew is the founder of HireSightPro with over 15 years of experience in recruitment and career coaching. He has helped thousands of professionals land their dream jobs at top companies worldwide.",
                },
                {
                  name: "Emily",
                  role: "Lead Resume Writer and Interview Coach",
                  img: "/placeholder.svg",
                  bio: "Emily is our expert resume writer with a background in HR and talent acquisition. She specializes in crafting compelling resumes that pass ATS systems and catch the attention of hiring managers.",
                },
              ].map((person) => (
                <Card key={person.name} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                      <div className="shrink-0">
                        <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-primary/10">
                          <img
                            src={person.img || "/placeholder.svg"}
                            alt={person.name}
                            width={120}
                            height={120}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-center sm:text-left">
                        <h3 className="text-xl font-semibold">{person.name}</h3>
                        <p className="text-primary font-medium mb-2">{person.role}</p>
                        <p className="text-muted-foreground">{person.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">
                Learn more about our team of experts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Have To Say</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Success stories from professionals who landed their dream jobs with our help
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex text-primary">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-primary" />
                        ))}
                      </div>
                      <p className="italic">
                        "Thanks to HireSightPro, I received 3 interview invitations within a week of updating my resume.
                        The personalized guidance was exactly what I needed to stand out in a competitive job market."
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-medium">{String.fromCharCode(64 + i)}</span>
                        </div>
                        <div>
                          <p className="font-medium">Client {i}</p>
                          <p className="text-sm text-muted-foreground">Software Engineer</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button>
                See more testimonials
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Us?</h2>
              <p className="text-muted-foreground max-w-[600px]">
                What sets HireSightPro apart from other resume services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Tried, Tested, Trusted",
                  description:
                    "Our proven methodology has helped thousands of job seekers land interviews at top companies.",
                  icon: "🛡️",
                },
                {
                  title: "Real People, Real Help",
                  description: "Work with experienced career professionals who understand your industry and goals.",
                  icon: "👥",
                },
                {
                  title: "Best-in-Class",
                  description:
                    "Our success rates and customer satisfaction scores consistently outperform industry standards.",
                  icon: "⭐",
                },
              ].map((feature) => (
                <Card key={feature.title} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="text-4xl mb-2">{feature.icon}</div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Job Application Service Plans</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Choose the plan that fits your career goals and budget
              </p>
            </div>

            <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Starter",
                      price: "$50",
                      period: "/month",
                      description: "Essential tools to start your job search",
                      features: [
                        "Basic resume review",
                        "ATS optimization",
                        "Job search guidance",
                        "Email support",
                        "1 revision per month",
                      ],
                      popular: false,
                    },
                    {
                      name: "Plus",
                      price: "$100",
                      period: "/month",
                      description: "Complete toolkit for serious job seekers",
                      features: [
                        "Everything in Starter",
                        "Cover letter templates",
                        "aedIn profile optimization",
                        "Priority email support",
                        "3 revisions per month",
                        "Interview preparation guide",
                      ],
                      popular: true,
                    },
                    {
                      name: "Advance",
                      price: "$150",
                      period: "/month",
                      description: "Premium support for accelerated results",
                      features: [
                        "Everything in Plus",
                        "1-on-1 coaching session",
                        "Custom application strategy",
                        "Unlimited revisions",
                        "Priority application review",
                        "Phone & email support",
                      ],
                      popular: false,
                    },
                  ].map((plan) => (
                    <Card
                      key={plan.name}
                      className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                            Most Popular
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl font-semibold">{plan.name}</h3>
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground ml-1">{plan.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{plan.description}</p>
                          <ul className="space-y-2 mt-4">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>
                            Get Started
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">April Promo: Weekly Plan</h3>
                        <p className="text-primary-foreground/80 max-w-md">
                          Try our services with a flexible weekly plan. Perfect for immediate job search needs.
                        </p>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="text-3xl font-bold">
                          $35<span className="text-lg font-normal">/week</span>
                        </div>
                        <Button variant="secondary" size="lg">
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="yearly" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Starter",
                      price: "$480",
                      period: "/year",
                      description: "Essential tools to start your job search",
                      features: [
                        "Basic resume review",
                        "ATS optimization",
                        "Job search guidance",
                        "Email support",
                        "1 revision per month",
                      ],
                      popular: false,
                    },
                    {
                      name: "Plus",
                      price: "$960",
                      period: "/year",
                      description: "Complete toolkit for serious job seekers",
                      features: [
                        "Everything in Starter",
                        "Cover letter templates",
                        "aedIn profile optimization",
                        "Priority email support",
                        "3 revisions per month",
                        "Interview preparation guide",
                      ],
                      popular: true,
                    },
                    {
                      name: "Advance",
                      price: "$1,440",
                      period: "/year",
                      description: "Premium support for accelerated results",
                      features: [
                        "Everything in Plus",
                        "1-on-1 coaching session",
                        "Custom application strategy",
                        "Unlimited revisions",
                        "Priority application review",
                        "Phone & email support",
                      ],
                      popular: false,
                    },
                  ].map((plan) => (
                    <Card
                      key={plan.name}
                      className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                            Most Popular
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl font-semibold">{plan.name}</h3>
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground ml-1">{plan.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{plan.description}</p>
                          <ul className="space-y-2 mt-4">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>
                            Get Started
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Resume Building & Coaching</h2>
              <p className="text-muted-foreground max-w-[600px]">
                One-time professional services to elevate your career
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Resume Rebuild",
                  price: "$1000",
                  period: "one time",
                  description: "Complete resume transformation by industry experts",
                  features: [
                    "In-depth consultation",
                    "Complete rewriting and reformatting",
                    "ATS optimization",
                    "Keyword optimization for your industry",
                    "2 rounds of revisions",
                    "Digital and print-ready formats",
                  ],
                },
                {
                  name: "Interview Prep",
                  price: "$500",
                  period: "one time",
                  description: "Comprehensive interview preparation package",
                  features: [
                    "90-minute coaching session",
                    "Industry-specific question preparation",
                    "Mock interview with feedback",
                    "Salary negotiation strategies",
                    "Follow-up templates",
                    "Post-interview support",
                  ],
                },
              ].map((service) => (
                <Card key={service.name} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">{service.price}</span>
                        <span className="text-muted-foreground ml-1">{service.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <ul className="space-y-2 mt-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full">Get Started</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <Card className="bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="md:max-w-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Doubts?</h2>
                    <p className="text-primary-foreground/90 mb-6">
                      Our team is ready to answer any questions you might have about our services and how we can help
                      you land your dream job.
                    </p>
                    <Button variant="secondary" size="lg">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src="/placeholder.svg"
                      alt="Contact Us"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="HireSightPro Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold">HireSightPro</span>
              </div>
              <p className="text-muted-foreground max-w-xs mb-4">
                Professional resume services that help you land interviews faster and advance your career.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick as</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#how" className="text-muted-foreground hover:text-foreground">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  123 Career Street, Suite 456
                  <br />
                  San Francisco, CA 94103
                </li>
                <li>
                  <a href="mailto:support@hiresightpro.com" className="text-muted-foreground hover:text-foreground">
                    support@hiresightpro.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1-800-555-0123" className="text-muted-foreground hover:text-foreground">
                    (800) 555-0123
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HireSightPro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}