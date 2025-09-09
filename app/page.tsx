import Hero from "@/app/components/Hero";
import HomeSection1 from "@/app/components/HomeSection1";
import HomeSection2 from "@/app/components/HomeSection2";
import HomeSection3 from "@/app/components/HomeSection3";
import RippleGrid from "@/components/reactbits/RippleGrid";
import HomeSection4 from "@/app/components/HomeSection4";

export default function Home() {
  return (
        <main className={''}>
            <section className={'min-h-screen'}>
                <RippleGrid
                    gridSize={20}
                    rippleIntensity={0}
                    gridColor={'#193cb8'}
                    opacity={0.9}
                    vignetteStrength={50}
                    mouseInteraction={false}
                />
                <Hero />
            </section>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
        </main>
  );
}
