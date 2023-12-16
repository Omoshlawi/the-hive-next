import Image from "next/image";
import Hero from "./index_components/Hero";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-slate-200 to-zinc-400  dark:from-red-950 dark:to-zinc-950">
      <Hero />
    </main>
  );
}
