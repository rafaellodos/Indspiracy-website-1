import Link from "next/link"
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter">INSPIRACY</span>
              <span className="text-xs font-light tracking-widest">BRANDING LABS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We craft distinctive brand identities that stand the test of time.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/branding" className="text-sm text-muted-foreground hover:text-foreground">
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-sm text-muted-foreground hover:text-foreground">
                  Social Media & Content
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-sm text-muted-foreground hover:text-foreground">
                  Website & Digital
                </Link>
              </li>
              <li>
                <Link href="/services/video" className="text-sm text-muted-foreground hover:text-foreground">
                  Video & Photography
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-muted-foreground hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              hello@inspiracy.com
              <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Inspiracy Branding Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

