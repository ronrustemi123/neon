import {MonitorIcon, SmartphoneIcon, ZapIcon} from "lucide-react";
import {StaticImageData} from "next/image";
import {ForwardRefExoticComponent} from "react";
import {LucideProps} from "lucide-react";
import {RefAttributes} from "react";

interface offerInterface {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    label: string,
    description: string,
}

const offerArr: offerInterface[] = [
    {
        icon: MonitorIcon,
        label: 'Web Development',
        description: 'Modern, responsive websites built to engage and convert.'
    },
    {
        icon: SmartphoneIcon,
        label: 'Mobile Apps',
        description: 'Native and cross-platform solutions tailored to your audience.'
    },
    {
        icon: ZapIcon,
        label: 'Performance',
        description: 'Lightning-fast, optimized experiences that keep users coming back.'
    }
]


export default function HomeSection2() {
    return (
        <section className={'min-h-[70vh] relative z-10 w-page-width mx-auto'}>
            <h2 className={'text-5xl md:text-6xl text-white text-center'}>What we <span className={'glowing-text'}>offer</span></h2>
            <p className={'text-lg md:text-xl text-neutral-400 text-center max-w-[600px] font-medium mx-auto mt-4'}>
                At <span className={'glowing-text'}>NEON</span>, we blend modern design with powerful functionality to create digital experiences that truly stand out.
                Our team of developers and designers is dedicated to delivering solutions that don’t just look great, but also perform seamlessly.
            </p>
            <div className={' mt-24 flex items-center'}>
                <div className={'min-h-[600px] w-1/2  '}>
                    {offerArr.map((el: offerInterface) => (
                        <div className={'flex gap-2.5 items-center mt-8 group w-fit'} key={el.label}>
                            <span className={'p-3 border-1 group-hover:text-blue-500 group-hover:border-blue-500 transition duration-150 text-neutral-400 border-neutral-500 rounded-lg'}>
                                <el.icon size={24} />
                            </span>
                                <div className={'flex flex-col '}>
                                    <h4 className={'text-lg font-medium'}>{el.label}</h4>
                                    <p className={'text-neutral-400'}>{el.description}</p>
                                </div>
                        </div>
                    ))}
                </div>
                <div className={'min-h-[600px] w-1/2'}>

                </div>
            </div>
        </section>
    )
}