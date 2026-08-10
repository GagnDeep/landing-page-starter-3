import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About | Setu Direct",
  description: "About Setu Direct. We provide independent private preparation of Indian consular paperwork in the UK to prevent administrative rejections at the counter.",
  path: "/about/"
})

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Prose className="mx-auto">
            <h1>About Setu Direct</h1>
            <p className="lead">
              We are an independent private company based in the UK, specializing in the correct preparation of Indian consular applications.
            </p>

            <h2>Our Purpose</h2>
            <p>
              Navigating the rules for OCI cards, passport renewals, and renunciation certificates is often frustrating. The requirements can be complex, and finding clear, actionable advice that applies strictly to your specific situation is difficult.
            </p>
            <p>
              Setu Direct was founded to solve this problem. We provide a structured, professional service that maps your exact circumstances to the current guidelines, ensuring your application pack is complete and technically correct before you ever approach the submission counter.
            </p>

            <h2>Independence Notice</h2>
            <p>
              <strong>Setu Direct is strictly independent.</strong> We are not a government body, we are not the issuing authority, and we are not their outsourced processing partner.
            </p>
            <p>
              We do not issue visas, passports, or OCI cards, nor can we influence processing times or guarantee outcomes. Our sole service is the private preparation and verification of your paperwork, acting only on your behalf, to help you submit a compliant application and avoid common administrative rejections.
            </p>

            <h2>Company Information</h2>
            <p>
              Setu Direct operates under {"{{VERIFY: Company Name Ltd}}"}, registered in England and Wales.
              <br />Company Number: {"{{VERIFY: Company Number}}"}
              <br />Registered Office: {"{{VERIFY: Registered Office Address}}"}
            </p>

          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
