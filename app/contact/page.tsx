"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MotionSection } from "@/components/motion-section"
import { WaveBackground } from "@/components/wave-background"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      service: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message. We'll be in touch soon!")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black text-white">
          <WaveBackground />
          <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl">Get in Touch</h1>
              <p className="mb-10 text-lg text-gray-300 sm:text-xl md:text-2xl">
                Let's create something extraordinary together
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <MotionSection className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl">Start a project</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Fill out the form below to tell us about your project, and we'll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service
                      </label>
                      <Select value={formState.service} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="branding">Branding & Identity</SelectItem>
                          <SelectItem value="social">Social Media & Content</SelectItem>
                          <SelectItem value="web">Website & Digital</SelectItem>
                          <SelectItem value="video">Video & Photography</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="group w-full sm:w-auto">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>

              <div>
                <div className="mb-8 rounded-xl bg-muted p-8">
                  <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-4 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Visit us</p>
                        <p className="text-muted-foreground">
                          123 Design Street
                          <br />
                          Creative District
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-4 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email us</p>
                        <p className="text-muted-foreground">hello@inspiracy.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-4 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Call us</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=450&width=800&text=Map"
                    alt="Office location map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* FAQ Section */}
        <MotionSection className="bg-muted py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mb-16 text-lg text-muted-foreground">Have questions? We've got answers.</p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6">
              {[
                {
                  question: "What is your typical process for a new branding project?",
                  answer:
                    "Our process typically includes discovery, strategy, design, implementation, and ongoing support. We begin by understanding your business, audience, and goals, then develop a strategic approach before moving into design and execution.",
                },
                {
                  question: "How long does a typical branding project take?",
                  answer:
                    "The timeline varies depending on the scope and complexity of the project. A comprehensive brand identity project typically takes 8-12 weeks, while smaller projects may be completed in 4-6 weeks.",
                },
                {
                  question: "Do you work with clients outside of New York?",
                  answer:
                    "We work with clients globally. While we love face-to-face meetings, we're equally comfortable collaborating remotely using video conferencing and project management tools.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We tailor our services to meet the specific needs of each client, so pricing varies based on the scope and requirements of your project. We're happy to provide a custom quote after learning more about your needs.",
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-lg bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}

