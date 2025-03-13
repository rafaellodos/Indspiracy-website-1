import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionSection } from "@/components/motion-section"
import { ServiceCard } from "@/components/service-card"
import { WaveBackground } from "@/components/wave-background"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black text-white">
          <WaveBackground />
          <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="mb-10 text-lg text-gray-300 sm:text-xl md:text-2xl">
                Premium branding solutions for ambitious brands
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <MotionSection className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive branding solutions
              </h2>
              <p className="mb-16 text-lg text-muted-foreground">
                We offer a full suite of services designed to elevate your brand and drive business growth.
              </p>
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
        </MotionSection>

        {/* Branding & Identity */}
        <MotionSection className="bg-muted py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Branding & Identity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl">Branding & Identity</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Your brand is more than just a logo—it's the emotional connection you forge with your audience. We
                  help you develop a distinctive visual identity that captures your brand's essence and resonates with
                  your target audience.
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Brand strategy & positioning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Logo design & visual identity</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Brand guidelines & style guides</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Brand messaging & tone of voice</span>
                  </li>
                </ul>
                <Button className="w-fit">Learn more</Button>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Social Media & Content */}
        <MotionSection className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center md:order-1">
                <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl">Social Media & Content</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  In today's digital landscape, content is king. We help you create engaging content strategies that
                  amplify your brand's voice and drive meaningful engagement with your audience across all platforms.
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Social media strategy & management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Content creation & curation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Influencer partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>Community management & engagement</span>
                  </li>
                </ul>
                <Button className="w-fit">Learn more</Button>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl md:order-2">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Social Media & Content"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="bg-black py-24 text-white md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to elevate your brand?
              </h2>
              <p className="mb-10 text-lg text-gray-300">
                Let's collaborate to create a brand experience that captivates your audience and drives business growth.
              </p>
              <Button size="lg" className="group bg-white text-black hover:bg-red-800 hover:text-white">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}

