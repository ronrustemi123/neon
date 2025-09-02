import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon, PlusIcon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import {navItemType} from "@/app/components/Navbar";


export default function MobileNavbar({navItems}: {navItems: navItemType[]}) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon size={24} className="lg:hidden " />
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-full xs:w-[384px] h-full border-0 bg-neutral-800/20 backdrop-blur-lg"
            >
                <SheetHeader>
                    <SheetTitle>LOGO</SheetTitle>
                </SheetHeader>

                <div className="flex justify-between px-2 pr-4">
                    <ul className="space-y-0 font-geist text-neutral-200">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.isDropdown ? (
                                    <details className="px-3">
                                        <summary className="cursor-pointer py-2">{item.label}</summary>
                                        <ul className="pl-4 space-y-1">
                                            {item.dropdownItems?.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <Link href={subItem.href} className="block py-1">
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    // @ts-ignore
                                    <Link href={item.href} className="block py-2 px-3">
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button variant="outline" size={'sm'} className="gap-2 mt-1 text-white border-white flex lg:hidden">
                        <PlusIcon height={20} width={20} />
                        <span className="text-sm">Post</span>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}