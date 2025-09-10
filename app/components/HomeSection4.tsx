import {MailIcon, PhoneIcon} from "lucide-react";
import HomeSection4Form from "@/app/components/HomeSection4Form";

export default function HomeSection4() {
    return (
        <section className={'min-h-[70vh] w-page-width  mx-auto relative z-10  mt-32'} id={'contact'}>
            <div className="flex flex-col md:flex-row w-full gap-12">
                <div className={'w-full md:w-1/2 flex flex-col '}>
                    <h2 className={'text-5xl md:text-6xl glowing-text font-medium inline-block'}>Contact Us</h2>
                    <p className={'text-lg md:text-xl w-full md:w-5/6 text-neutral-400 mt-4'}>We are committed to processing the information in order to contact you and talk about your project. </p>
                    <span className={'flex items-center-safe text-neutral-400 gap-2.5 mt-8'}>
                        <MailIcon size={18} />
                        <p className={'text-lg md:text-2xl'}>neoncomputers1999@email.com</p>
                    </span>
                    <span className={'flex items-center-safe  text-neutral-400 gap-2.5 mt-3'}>
                        <PhoneIcon size={18} />
                        <p className={'text-lg md:text-xl'}>+389 75 246 835</p>
                    </span>
                </div>
                <HomeSection4Form />
            </div>
        </section>
    )
}