import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <About />
    </main>
  );
}
