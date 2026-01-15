// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Github,
// } from "lucide-react";

// export const ContactSection = () => {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-4 bg-background text-foreground"
//     >
//       {/* content */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* heading */}
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Get In <span className="text-primary">Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* LEFT SIDE */}
//           <div className="space-y-10">
//             <h3 className="text-2xl font-semibold">
//               Contact Information
//             </h3>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Email</p>
//                   <p className="text-muted-foreground">
//                     anshuking576@gmail.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Phone</p>
//                   <p className="text-muted-foreground">
//                     +91 935-7890
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Location</p>
//                   <p className="text-muted-foreground">
//                     Delhi
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* social */}
//             <div>
//               <p className="font-medium mb-4">
//                 Connect With Me
//               </p>
//               <div className="flex gap-4">
//   {/* LinkedIn */}
//   <a
//     href="https://www.linkedin.com/in/anshu-kumar-261020333"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-primary transition"
//   >
//     <Linkedin className="h-5 w-5 cursor-pointer" />
//   </a>

//   {/* GitHub */}
//   <a
//     href="https://github.com/anshu-kr576"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-primary transition"
//   >
//     <Github className="h-5 w-5 cursor-pointer" />
//   </a>

//   {/* Email */}
//   <a
//     href="mailto:anshuking576@gmail.com"
//     className="hover:text-primary transition"
//   >
//     <Mail className="h-5 w-5 cursor-pointer" />
//   </a>
// </div>

//             </div>
//           </div>

          {/* RIGHT SIDE FORM */}
          {/* <div className="bg-card/60 backdrop-blur-md rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Anshu Kumar"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="anshuking576@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Send Message →
              </button>
            </form>
          </div> */}
        {/* </div>
      </div>
    </section>
  );
};

export default ContactSection; */}

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-4 bg-background text-foreground"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-5xl font-semibold mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-20 text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Centered Content */}
        <div className="flex flex-col items-center gap-14">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  anshuking576@gmail.com
                </p>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">
                  +91 935-7890
                </p>
              </div>
            </div> */}

            {/* <div className="flex items-center justify-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">
                  Delhi
                </p>
              </div>
            </div> */}
          </div>

          {/* Social Icons */}
          <div>
            <p className="font-medium mb-6">
              Connect With Me
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/anshu-kumar-261020333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 
                           flex items-center justify-center
                           hover:bg-primary hover:text-primary-foreground transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="https://github.com/anshu-kr576"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 
                           flex items-center justify-center
                           hover:bg-primary hover:text-primary-foreground transition"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="mailto:anshuking576@gmail.com"
                className="w-14 h-14 rounded-full bg-primary/10 
                           flex items-center justify-center
                           hover:bg-primary hover:text-primary-foreground transition"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
