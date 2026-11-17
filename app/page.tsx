import { AboutTeaser } from "@/components/home/about-teaser";
import { ConnectStrip } from "@/components/home/connect-strip";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { NextSteps } from "@/components/home/next-steps";
import { Programs } from "@/components/home/programs";
import { Publications } from "@/components/home/publications";
import { Services } from "@/components/home/services";
import { Why } from "@/components/home/why";

export default function Home() {
  return (
    <>
      <Hero />
      <ConnectStrip />
      <Why />
      <HowWeWork />
      <Programs />
      <Services />
      <Publications />
      <AboutTeaser />
      <NextSteps />
    </>
  );
}
