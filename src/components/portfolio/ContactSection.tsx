import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "New Jersey, NJ",
    href: null
  },
  {
    icon: Mail,
    label: "Email",
    value: "Srilekhadoosa@gmail.com",
    href: "mailto:Srilekhadoosa@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (551) 414-8929",
    href: "tel:+15514148929"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "srilekha-doosa",
    href: "https://www.linkedin.com/in/srilekha-doosa/"
  }
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Let's <span className="text-gradient-gold">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to opportunities in Data Analysis, Business Intelligence, and Data Engineering roles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Srilekha Doosa
                </h3>

                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-gold transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold-dark/5">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <Mail className="w-10 h-10 text-gold" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                  Ready to Collaborate?
                </h4>
                <p className="text-muted-foreground mb-6 text-sm">
                  Let's discuss how I can help transform your data into actionable insights for your organization.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a href="mailto:Srilekhadoosa@gmail.com">
                    Send an Email
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
