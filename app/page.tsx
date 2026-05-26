import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import CaseStudies from "./sections/CaseStudies"
import Testimonials from "./sections/Testimonials"
import Pricing from "./sections/Pricing"
import BookCall from "./sections/BookCall" // ADD THIS LINE
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
      <BookCall /> {/* ADD THIS LINE */}
      <FAQ />
      <Contact />
    </main>
  )
}
