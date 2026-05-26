import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import CaseStudies from "./sections/CaseStudies"
import Testimonials from "./sections/Testimonials"
import Pricing from "./sections/Pricing"
import FAQ from "./sections/FAQ"
import Contact from "./sections/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  )
}
