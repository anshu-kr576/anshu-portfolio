import { ArrowUp, Mail } from "lucide-react";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-10 px-4 border-t border-border bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anshu Kumar. All rights reserved.
        </p>

        

        {/* Right - Socials */}
        <div className="flex gap-5">
          <a href="https://github.com/anshu-kr576/anshu-kr576.git" className="hover:text-primary transition">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/anshu-kumar-261020333" className="hover:text-primary transition">
            <Linkedin size={18} />
          </a>
          <a href="mailto:anshuking576@gmail.com" className="hover:text-primary transition">
            <Mail size={18} />
          </a>
          {/* <a href="#" className="hover:text-primary transition">
            <Instagram size={18} />
          </a> */}
          <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
