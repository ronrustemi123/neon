import {MailIcon, PhoneIcon} from "lucide-react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className={' w-full border-t mt-24 md:mt-12 pb-12'}>
            <div className={'w-page-width mx-auto min-h-[320px] h-full grid grid-cols-2 md:grid-cols-3 gap-6'}>
                <div className={'col-span-2 md:col-span-1'}>
                    <h2 className={'text-5xl glowing-text font-medium inline-block mt-12'}>NEON</h2>
                    <span className={'flex items-center-safe text-neutral-400 gap-2.5 mt-6'}>
                        <MailIcon size={16} />
                        <p className={'text-lg'}>neoncomputers1999@email.com</p>
                    </span>
                    <span className={'flex items-center-safe  text-neutral-400 gap-2.5 mt-3'}>
                            <PhoneIcon size={16} />
                            <p className={'text-lg'}>+389 75 246 835</p>
                    </span>
                </div>
                <div className={'mt-12 flex flex-col gap-1.5'}>
                    <h3 className={'text-2xl font-medium text-neutral-200'}>Quick Links</h3>
                    <Link
                        href={'#about'}
                        className={'text-neutral-400 hover:text-neutral-200 mt-1.5'}
                    >
                        About Us
                    </Link>
                    <Link
                        href={'#projects'}
                        className={'text-neutral-400 hover:text-neutral-200'}
                    >
                        Projects
                    </Link>
                    <Link
                        href={'#contact'}
                        className={'text-neutral-400 hover:text-neutral-200'}
                    >
                        Contact
                    </Link>
                </div>
                <div className={'mt-12 flex flex-col gap-1.5'}>
                    <h3 className={'text-2xl font-medium text-neutral-200'}>Socials</h3>
                    <Link
                        href={'https://instagram.com/neonsysdev/'}
                        target={'_blank'}
                        className={'text-neutral-400 hover:text-neutral-200 mt-1.5'}>
                        Instagram
                    </Link>
                    <Link
                        href={'https://facebook.com/neonsysdev/'}
                        target={'_blank'}
                        className={'text-neutral-400 hover:text-neutral-200'}
                    >
                        Facebook
                    </Link>
                    <Link
                        href={'https://tiktok.com/neonsysdev/'}
                        target={'_blank'}
                        className={'text-neutral-400 hover:text-neutral-200'}
                    >
                        TikTok
                    </Link>
                </div>
            </div>
        </footer>
    )
}