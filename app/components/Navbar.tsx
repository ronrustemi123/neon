import Link from 'next/link';
import MobileNavbar from "@/app/components/MobileNavbar";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";


export type navItemType = {
    label: string;
    href?: string;
    isDropdown?: boolean;
    dropdownItems?: {label: string, href:string}[];
}

const navItems: navItemType[] = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
    return (
        <header className={`sticky top-4 md:top-10 h-[80px] w-full flex items-center z-50`}>
            <nav className={`h-full border mx-auto w-page-width transition-colors duration-300 rounded-full px-9  flex items-center justify-between backdrop-blur-md bg-neutral-200/10`}>
                <h1 className="text-xl font-bold glowing-text">NEON</h1>

                {/* Desktop Navigation */}
                <NavigationMenu viewport={false} className="hidden lg:flex">
                    <NavigationMenuList className={'gap-3.5'}>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.label}>
                                    <Link
                                        className="bg-transparent  text-neutral-100  text-base px-3 py-2  data-[active]:hover:bg-accent  data-[active]:text-accent-foreground hover:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4"
                                        // @ts-expect-error
                                        href={item.href}
                                        scroll={true}
                                    >
                                        {item.label}
                                    </Link>
                            </NavigationMenuItem>
                        ))}

                    </NavigationMenuList>

                </NavigationMenu>
                <MobileNavbar navItems={navItems}/>
            </nav>
        </header>
    );
}
