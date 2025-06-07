import { Briefcase, Code, User } from "lucide-react";

const aboutContent = {
    firstHalfTitle: "About",
    secondHalfTitle: "Me",
};

const dOB = new Date("2003-08-16"); // YYYY-MM-DD format

export const AboutSection = () => {
    const calculateAge = (birthDate) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <section id="about" className="py-24 px-4 relative min-h-screen">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {aboutContent.firstHalfTitle} <span className="text-primary">{aboutContent.secondHalfTitle}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="about-img flex justify-center items-center">
                        <img
                            src="../../public/assets/me.jpg"
                            alt="About"
                            style={{ width: "100%", height: "auto", verticalAlign: "middle" }}
                        />
                    </div>

                    {/* optional */}
                    {/* <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div> */}

                    <div className="space-y-6 text-justify md:text-left">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                        <p className="text-muted-foreground">
                            With over 5 years of experience in web development, I specialize in creating responsive,
                            accessible, and performant web applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex problems, and I'm constantly
                            learning new technologies and techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>

                        <ol>
                            <li>
                                <span className="pro-title">Name</span>
                                <span>Trịnh Ngọc Đại</span>
                            </li>
                            <li>
                                <span className="pro-title">Age</span>
                                <span>{calculateAge(dOB)}</span>
                            </li>
                            <li>
                                <span className="pro-title">Address</span>
                                <span>Thanh Khe, Da Nang, Viet Nam</span>
                            </li>
                            <li>
                                <span className="pro-title">Phone</span>
                                <span>+84 326 223 250</span>
                            </li>
                            <li>
                                <span className="pro-title">E-mail</span>
                                <span>daitnworkspace@gmail.com</span>
                            </li>
                        </ol>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
