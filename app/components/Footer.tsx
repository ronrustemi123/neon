import {MailIcon, PhoneIcon} from "lucide-react";


export default function Footer() {
    return (
        <footer className={' w-full border-t mt-24 md:mt-12 pb-12'}>
            <div className={'w-page-width mx-auto min-h-[320px] h-full grid grid-cols-2 md:grid-cols-4 gap-6'}>
                <div className={'col-span-2 md:col-span-1'}>
                    <h2 className={'text-5xl glowing-text font-medium inline-block mt-12'}>NEON</h2>
                    <span className={'flex items-center-safe text-neutral-400 gap-2.5 mt-6'}>
                        <MailIcon size={16} />
                        <p className={'text-lg'}>sheval@email.com</p>
                    </span>
                    <span className={'flex items-center-safe  text-neutral-400 gap-2.5 mt-3'}>
                            <PhoneIcon size={16} />
                            <p className={'text-lg'}>+389 71 234 567</p>
                    </span>
                </div>
                <div className={'mt-12'}>
                    <h3 className={'text-2xl font-medium text-neutral-200'}>Quick Links</h3>
                    <p className={'text-neutral-400 hover:text-neutral-200 mt-1.5'}>Contacts</p>
                    <p className={'text-neutral-400 hover:text-neutral-200'}>About Us</p>
                    <p className={'text-neutral-400 hover:text-neutral-200'}>FAQs</p>
                </div>
                <div className={'mt-12'}>
                    <h3 className={'text-2xl font-medium inline-block text-neutral-200'}>Other</h3>
                    <p className={'text-neutral-400 hover:text-neutral-200 mt-1.5'}>Contacts</p>
                    <p className={'text-neutral-400 hover:text-neutral-200'}>About Us</p>
                    <p className={'text-neutral-400 hover:text-neutral-200'}>FAQs</p>
                </div>
                <div className={'mt-12'}>
                    <h3 className={'text-2xl font-medium w-full text-neutral-200'}>Something</h3>
                    <p className={'text-neutral-400 hover:text-neutral-200 mt-1.5'}>Contacts</p>
                    <p className={'text-neutral-400 hover:text-neutral-200'}>About Us</p>
                    <p className={'text-neutral-400 hover:text-neutral-200'}>FAQs</p>
                </div>
            </div>
        </footer>
    )
}