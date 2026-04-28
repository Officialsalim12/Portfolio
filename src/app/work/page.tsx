import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/sections/Projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <Projects />
    </main>
  );
}
