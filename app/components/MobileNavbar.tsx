'use client';

import {useState} from "react";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose} from "@/components/ui/sheet";
import {MenuIcon, XIcon} from "lucide-react";
import Link from "next/link";

import {navItemType} from "@/app/components/Navbar";

export default function MobileNavbar({navItems}: {navItems: navItemType[]}) {

    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild >
                <MenuIcon size={24} className="lg:hidden " />
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-full xs:w-[384px] h-full border-0 bg-neutral-800/20 backdrop-blur-lg"
            >
                <SheetHeader>
                    <SheetTitle className="text-lg font-bold glowing-text">NEON</SheetTitle>
                </SheetHeader>

                <div className="flex justify-between px-2 pr-4">
                    <ul className="space-y-0 font-geist text-neutral-200">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                    <Link
                                        // @ts-expect-error - Component expects different prop types
                                        href={item.href}
                                        className="block py-2 px-3"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </SheetContent>
        </Sheet>
    )
}