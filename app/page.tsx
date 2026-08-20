import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <iframe
        src="http://localhost:3009/embed/pk_live_bc39ea942635fb2ba09d1e836a667210"
        style={{
          border: "0",
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "350px",
          height: "400px",
          zIndex: 9999,
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
        }}
        title="Product assistant"
        loading="lazy"
      ></iframe>
      <Nav />
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
