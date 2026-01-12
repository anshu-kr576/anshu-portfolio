import { ArrowDown } from "lucide-react";
import profileImg from "../assets/profilepic.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE – TEXT */}
          <div className="space-y-6 text-center md:text-left">
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight whitespace-nowrap">
               <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                 Anshu
                </span>{" "}
                 <span className="opacity-0 animate-fade-in-delay-2">
                   Kumar
                  </span>
            </h1>


            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
              I’m exploring web development by learning modern tools and technologies.
              I focus on building responsive, usable, and well-structured web experiences.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
 <img
  src={profileImg}
  alt="Anshu Kumar"
  className="
    w-64 h-64 md:w-80 md:h-80
    rounded-full
    object-cover
    object-[50%_20%]
    border-4 border-primary
    shadow-[0_0_40px_rgba(255,165,0,0.6)]
    animate-float
  "
/>



          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
