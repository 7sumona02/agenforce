import Hero from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      {/* <ModeToggle /> */}
      <Hero />
      <LogoCloud />
    </div>
  );
}
