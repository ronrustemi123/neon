import CountUp from "@/public/reactbits/CountUp";
import {PlusIcon} from "lucide-react";

export default function CountUpCustom({text, from, to, icon = true}: {text: string, from: number, to: number, icon?: boolean}) {
    return (
        <div className={'flex flex-col items-center gap-1.5 text-center'}>
                    <span className={'text-4xl font-bold flex text-blue-600 items-center '}>
                        <span className={'glowing-text'}>
                             <CountUp
                                 from={from}
                                 to={to}
                                 separator="/"
                                 direction="up"
                                 duration={0.7}
                                 className="count-up-text"
                                 delay={0.1}
                             />
                        </span>
                        {icon ? (
                            <PlusIcon width={24} height={24}  />
                        ) : <p>h</p>}
                    </span>
            <p className={'text-neutral-400 text-lg'}>{text}</p>
        </div>
    )
}