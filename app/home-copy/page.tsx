import { ArrowRight, ChevronDown } from "lucide-react"
import { Footer } from "@/components/footer"
import { CaseStudyCard } from "@/components/case-study-card"
import { ServiceCard } from "@/components/service-card"
import { WaveBackground } from "@/components/wave-background"
import { SiteHeader } from "@/components/site-header"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedTitle } from "@/components/animated-title"

export default function HomeCopy() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
          <WaveBackground />
          <div className="container relative z-10 mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <AnimatedText
                text="Where brands evolve into legacies"
                tag="h1"
                className="mb-6 text-4xl font-normal leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                duration={0.08}
              />
              <AnimatedText
                text="We craft distinctive brand identities that stand the test of time."
                tag="p"
                className="mb-10 text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl"
                delay={0.5}
                duration={0.04}
              />
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <AnimatedButton size="lg" className="group bg-white text-black hover:bg-red-800 hover:text-white">
                  Explore our work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
                <AnimatedButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Get in touch
                </AnimatedButton>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <AnimatedTitle className="mb-6 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                  Redefining branding for the digital age
                </AnimatedTitle>
                <AnimatedText
                  text="At Inspiracy, we believe that exceptional branding transcends visual aesthetics—it tells a compelling story that resonates with your audience on a profound level."
                  tag="p"
                  className="mb-6 text-lg leading-relaxed text-muted-foreground"
                  delay={0.2}
                />
                <AnimatedText
                  text="Our approach combines strategic thinking, creative innovation, and meticulous execution to create brand experiences that leave a lasting impression."
                  tag="p"
                  className="text-lg leading-relaxed text-muted-foreground"
                  delay={0.3}
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <AnimatedImage src="/placeholder.svg?height=800&width=800" alt="Creative team at work" fill />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="bg-muted py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedTitle className="mb-6 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                Premium branding solutions
              </AnimatedTitle>
              <AnimatedText
                text="We offer a comprehensive suite of services designed to elevate your brand to new heights."
                tag="p"
                className="mb-16 text-lg leading-relaxed text-muted-foreground"
                delay={0.2}
              />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="Branding & Identity"
                description="Develop a distinctive visual identity that captures your brand's essence and resonates with your target audience."
                icon="Palette"
              />
              <ServiceCard
                title="Social Media & Content"
                description="Create engaging content strategies that amplify your brand's voice and drive meaningful engagement."
                icon="Share2"
              />
              <ServiceCard
                title="Website & Digital"
                description="Design immersive digital experiences that showcase your brand and convert visitors into loyal customers."
                icon="Globe"
              />
              <ServiceCard
                title="Video & Photography"
                description="Produce high-quality visual content that tells your brand's story in a compelling and authentic way."
                icon="Camera"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedTitle className="mb-6 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                Featured work
              </AnimatedTitle>
              <AnimatedText
                text="Explore our portfolio of transformative brand experiences that have helped our clients achieve their business objectives."
                tag="p"
                className="mb-16 text-lg leading-relaxed text-muted-foreground"
                delay={0.2}
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                title="Lumina Cosmetics"
                category="Beauty & Lifestyle"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Vertex Technologies"
                category="Tech & Innovation"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Meridian Hotels"
                category="Hospitality & Leisure"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
            </div>
            <div className="mt-16 text-center">
              <AnimatedButton size="lg" variant="outline" className="group">
                View all case studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </AnimatedButton>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="bg-black py-24 text-white md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedTitle className="mb-6 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your brand?
              </AnimatedTitle>
              <AnimatedText
                text="Let's collaborate to create a brand experience that captivates your audience and drives business growth."
                tag="p"
                className="mb-10 text-lg leading-relaxed text-gray-300"
                delay={0.2}
              />
              <AnimatedButton size="lg" className="group bg-white text-black hover:bg-red-800 hover:text-white">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </AnimatedButton>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}

