import DarkVeil from "@/public/reactbits/DarkVeil";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import HomeSection1 from "@/app/components/HomeSection1";
import HomeSection2 from "@/app/components/HomeSection2";
import HomeSection3 from "@/app/components/HomeSection3";

export default function Home() {
  return (
        <main className={'w-full bg-black '}>
            <Navbar />
            <section className={'min-h-screen'}>
                <DarkVeil hueShift={25}/>
                <Hero />
            </section>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
        </main>
  );
}
