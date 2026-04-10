import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    platform: "Coursera",
    icon: "G"
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    platform: "Coursera",
    icon: "I"
  },
  {
    title: "Microsoft Power BI Data Analyst Professional Certificate",
    platform: "Coursera",
    icon: "M"
  },
  {
    title: "Tableau Business Intelligence Analyst Professional Certificate",
    platform: "Coursera",
    icon: "T"
  },
  {
    title: "Power BI Essential Training",
    platform: "LinkedIn Learning",
    icon: "P"
  },
  {
    title: "SQL for Data Analysis",
    platform: "LinkedIn Learning",
    icon: "S"
  }
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            <span className="text-gradient-gold">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:gold-glow transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/10 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold-dark/20 transition-all">
                  <span className="font-display text-2xl font-bold text-gold">
                    {cert.icon}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    {cert.platform}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
