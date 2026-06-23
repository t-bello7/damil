import {
  Header,
  Hero,
  Intro,
  Projects, 
  Testimonials,
  CTA,
  Footer
} from "@/sections";
export default function Home() {
  return <main className="w-full overflow-x-clip font-sfProDisplay">
    <Header />
    <Hero />
    <Testimonials />
    <Projects />
    <Intro />
    <CTA />
    <Footer />  
  </main>
}
