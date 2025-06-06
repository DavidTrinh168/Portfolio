import { useEffect, useState } from "react";

// Stars properties: id, size, x, y, opacity, animationDuration
// Meteors properties: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    useEffect(() => {
        generateStars();
        generateMeteors();
    
        const handleResize = () => {
            generateStars();
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const newStars = [];

        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1, // Size between 1px and 4px
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Animation duration between 2s and 6s
            });
        }
        setStars(newStars);
    };


    const generateMeteors = () => {
        const newMeteors = [];

        const numberOfMeteors = 5; // Adjust density based on screen size;

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 0.25 + 0.5, // Size between 0.25px and 0.5px
                delay: Math.random() * 5, // Delay before animation starts
                animationDuration: Math.random() * 3 + 2, // Animation duration between 2s and 5s
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: `${star.opacity}`,
                        animation: `${star.animationDuration}s `,
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
