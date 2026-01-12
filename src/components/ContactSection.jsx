import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-background text-foreground"
    >
      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    ABC123@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">
                    +1 (123) 456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Delhi
                  </p>
                </div>
              </div>
            </div>

            {/* social */}
            <div>
              <p className="font-medium mb-4">
                Connect With Me
              </p>
              <div className="flex gap-4">
                <Linkedin className="h-5 w-5 hover:text-primary cursor-pointer" />
                <Twitter className="h-5 w-5 hover:text-primary cursor-pointer" />
                <Instagram className="h-5 w-5 hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card/60 backdrop-blur-md rounded-xl p-8 shadow-sm">
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
                  placeholder="ABC@gmail.com"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
