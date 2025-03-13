import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionSection } from "@/components/motion-section"
import { WaveBackground } from "@/components/wave-background"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black text-white">
          <WaveBackground />
          <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl">Our Story</h1>
              <p className="mb-10 text-lg text-gray-300 sm:text-xl md:text-2xl">
                Redefining branding for the digital age
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <MotionSection className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our mission</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  At Inspiracy, we believe that exceptional branding transcends visual aesthetics—it tells a compelling
                  story that resonates with your audience on a profound level.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to help brands evolve into legacies through strategic thinking, creative innovation,
                  and meticulous execution that creates brand experiences that leave a lasting impression.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=800&width=800" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Timeline Section */}
        <MotionSection className="bg-muted py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our journey</h2>
              <p className="mb-16 text-lg text-muted-foreground">
                From humble beginnings to industry leadership, our path has been defined by innovation and excellence.
              </p>
            </div>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

              <div className="grid gap-12">
                <div className="relative grid gap-6 md:grid-cols-2">
                  <div className="flex md:justify-end">
                    <div className="relative max-w-sm rounded-lg bg-background p-6 shadow-lg md:text-right">
                      <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary md:left-auto md:right-0 md:translate-x-[calc(100%+16px)]" />
                      <h3 className="mb-2 text-xl font-bold">2015</h3>
                      <p className="text-muted-foreground">
                        Founded with a vision to revolutionize branding for the digital age.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>

                <div className="relative grid gap-6 md:grid-cols-2">
                  <div className="hidden md:block" />
                  <div className="flex md:justify-start">
                    <div className="relative max-w-sm rounded-lg bg-background p-6 shadow-lg">
                      <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-[calc(100%+16px)] -translate-y-1/2 rounded-full bg-primary" />
                      <h3 className="mb-2 text-xl font-bold">2018</h3>
                      <p className="text-muted-foreground">
                        Expanded our team and opened our flagship studio in the heart of the city.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative grid gap-6 md:grid-cols-2">
                  <div className="flex md:justify-end">
                    <div className="relative max-w-sm rounded-lg bg-background p-6 shadow-lg md:text-right">
                      <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary md:left-auto md:right-0 md:translate-x-[calc(100%+16px)]" />
                      <h3 className="mb-2 text-xl font-bold">2020</h3>
                      <p className="text-muted-foreground">
                        Launched our digital transformation division to help brands thrive in the new normal.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>

                <div className="relative grid gap-6 md:grid-cols-2">
                  <div className="hidden md:block" />
                  <div className="flex md:justify-start">
                    <div className="relative max-w-sm rounded-lg bg-background p-6 shadow-lg">
                      <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-[calc(100%+16px)] -translate-y-1/2 rounded-full bg-primary" />
                      <h3 className="mb-2 text-xl font-bold">Today</h3>
                      <p className="text-muted-foreground">
                        A global team of strategists, designers, and storytellers helping brands make their mark.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Team Section */}
        <MotionSection className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our team</h2>
              <p className="mb-16 text-lg text-muted-foreground">
                A diverse group of creative minds united by a passion for exceptional branding.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group overflow-hidden rounded-xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=600&width=450&text=Team Member ${i}`}
                      alt={`Team member ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">Creative Director</p>
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
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join our team</h2>
              <p className="mb-10 text-lg text-gray-300">
                We're always looking for talented individuals who are passionate about creating exceptional brand
                experiences.
              </p>
              <Button size="lg" className="group bg-white text-black hover:bg-red-800 hover:text-white">
                View open positions
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

