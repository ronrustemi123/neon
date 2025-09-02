import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";

export default function Hero() {
    return (
        <section className={'w-page-width mx-auto relative z-10 min-h-[600px] top-10 flex flex-col items-center justify-center'}>
            <h1 className={'text-white text-5xl md:text-7xl text-center font-medium'}>Illuminate your<span className={'glowing-text'}> ideas</span></h1>
            <h2 className={'max-w-[600px] mt-6 text-lg md:text-xl font-medium text-neutral-400 text-center'}>
                We craft exceptional web and mobile solutions that drive business growth. From concept to deployment,
                we bring your <span className={'glowing-text'}>ideas</span> to life with precision and innovation.
            </h2>
            <div className={'flex items-center gap-4 mt-8'}>
                <Button className={'bg-neutral-200'}>
                    Contact Us
                </Button>
                <Button variant={'outline'} className={'group'}>
                    Our Work
                    <ChevronRight className={'group-hover:rotate-90 transition-transform duration-200 '} />
                </Button>
            </div>
        </section>
    )
}