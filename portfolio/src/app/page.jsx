import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="bg-background text-text min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
