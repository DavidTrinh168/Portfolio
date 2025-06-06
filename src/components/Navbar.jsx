import { useEffect, useState } from "react";
import { classNames } from "../libs/utils";
import { MenuIcon, X } from "lucide-react";

const navbarItems = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    // { name: "Blog", href: "#blog" },
];

const navHeadingData = {
    owner: "DAVIDTECH",
    title: "PORFOLIO",
};

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={classNames(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className={classNames("flex  items-center")} href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow font-bold text-xl text-foreground">{navHeadingData.owner}</span>{" "}
                        {navHeadingData.title}
                    </span>
                </a>

                {/* Desktop menu button */}
                <div className="hidden md:flex space-x-8 pr-2">
                    {navbarItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-1 text-foreground z-50"
                >
                    {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}{" "}
                </button>

                <div
                    className={classNames(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-end justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl items-end pr-10">
                        {navbarItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
