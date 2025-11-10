import Hero from "@/components/hero";
import {LogoCloud} from "@/components/logo-cloud";
import Features from '@/components/features/index'

export default function Home() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      {/* <ModeToggle /> */}
      <Hero />
      {/* <LogoCloud /> */}
      <Features />
    </div>
  );
}
