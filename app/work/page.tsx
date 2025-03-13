import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MotionSection } from "@/components/motion-section"
import { CaseStudyCard } from "@/components/case-study-card"
import { WaveBackground } from "@/components/wave-background"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black text-white">
          <WaveBackground />
          <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl">Our Work</h1>
              <p className="mb-10 text-lg text-gray-300 sm:text-xl md:text-2xl">
                Transformative brand experiences that drive results
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Filter */}
        <section className="border-b py-6">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button variant="ghost" className="rounded-full">
                All
              </Button>
              <Button variant="ghost" className="rounded-full">
                Branding
              </Button>
              <Button variant="ghost" className="rounded-full">
                Digital
              </Button>
              <Button variant="ghost" className="rounded-full">
                Social Media
              </Button>
              <Button variant="ghost" className="rounded-full">
                Video
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <MotionSection className="py-24 md:py-32">
          <div className="container">
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
              <CaseStudyCard
                title="Pulse Athletics"
                category="Sports & Fitness"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Evergreen Foods"
                category="Food & Beverage"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Horizon Finance"
                category="Finance & Banking"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Urban Dwellings"
                category="Real Estate"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Bloom Botanicals"
                category="Health & Wellness"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <CaseStudyCard
                title="Velocity Motors"
                category="Automotive"
                imageSrc="/placeholder.svg?height=600&width=800"
              />
            </div>
          </div>
        </MotionSection>

        {/* Testimonials */}
        <MotionSection className="bg-muted py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client testimonials</h2>
              <p className="mb-16 text-lg text-muted-foreground">
                Don't just take our word for it—hear what our clients have to say.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-background p-8 shadow-sm">
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-6 text-lg">
                    "Inspiracy transformed our brand from ordinary to extraordinary. Their strategic approach and
                    creative execution exceeded our expectations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Client" width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-muted-foreground">CEO, Company Name</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="bg-black py-24 text-white md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to create your success story?
              </h2>
              <p className="mb-10 text-lg text-gray-300">
                Let's collaborate to create a brand experience that captivates your audience and drives business growth.
              </p>
              <Button size="lg" className="group bg-white text-black hover:bg-amber-200">
                Start a project
              </Button>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}

