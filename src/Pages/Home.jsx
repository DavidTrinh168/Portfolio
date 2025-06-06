import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground/>
            {/* Navbar */}
            <Navbar/>
            {/* Main Content */}
            <main>
                <HeroSection/>
            </main>

            {/* Footer */}
            <Footer/>

        </div>
    );
};
