import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import {SquareArrowOutUpRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";


export default function HomeProjectCard({title, desc, fromDate, toDate, link, img}: {title: string; desc: string, fromDate: string, toDate: string, link: string, img: StaticImageData}) {
    return (
        <SpotlightCard
            className="w-full min-h-80 flex flex-col md:flex-row gap-6 "
            spotlightColor="rgba(20, 71, 230, 0.25)"
        >
            <div className={'w-full md:w-1/2'}>
                <Link href={link} target={'_blank'}>
                    <Image src={img} alt={'placeholder image'} width={600} height={300} className={'w-full h-full rounded-2xl relative z-30 object-cover object-center'} />
                </Link>
            </div>
            <div className={'w-full md:w-1/2 flex flex-col '}>
                <Link
                    href={link}
                    target={'_blank'}
                    className={'text-4xl font-medium glowing-text mt-4 flex items-center gap-2 w-fit'}
                >
                    {title}
                    <SquareArrowOutUpRight className={'text-blue-600 mt-1'}/>
                </Link>
                <p className={'text-neutral-400 font-medium mt-2'}>{desc}</p>
                <Badge variant={'secondary'} className={'text-sm mt-2.5'}>{fromDate} - {toDate}</Badge>

            </div>
        </SpotlightCard>
    )
}