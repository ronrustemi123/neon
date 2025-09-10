import {MonitorIcon, SmartphoneIcon, ZapIcon} from "lucide-react";
import {ForwardRefExoticComponent} from "react";
import {LucideProps} from "lucide-react";
import {RefAttributes} from "react";
import Image from "next/image";
import placeholderImg from '@/public/desktop.jpg'

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
        <section className={'min-h-[100vh] relative z-10 w-page-width mx-auto mt-24'}>
            <h2 className={'text-5xl md:text-6xl text-white text-center'}>What we <span className={'glowing-text'}>offer</span></h2>
            <p className={'text-lg md:text-xl text-neutral-400 text-center max-w-[600px] font-medium mx-auto mt-4'}>
                At <span className={'glowing-text'}>NEON</span>, we blend modern design with powerful functionality to create digital experiences that truly stand out.
                Our team of developers and designers is dedicated to delivering solutions that don’t just look great, but also perform seamlessly.
            </p>
            <div className={' mt-12 md:mt-24 flex flex-col md:flex-row gap-12 items-center'}>
                <div className={' w-full md:w-1/2 flex items-start flex-col gap-8 justify-center'}>
                    {offerArr.map((el: offerInterface) => (
                        <div className={'flex gap-2.5 items-center group w-fit'} key={el.label}>
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
                <div className={'w-full hidden md:block md:w-1/2'}>
                    <Image src={placeholderImg} alt={'placeholder image'} className={'rounded-2xl w-full h-full sm:h-[300px] object-cover object-center'} width={600} height={300} />
                </div>
            </div>
        </section>
    )
}