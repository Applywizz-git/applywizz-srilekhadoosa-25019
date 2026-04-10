import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const typewriterWords = ["Power BI", "SQL", "Tableau", "Python", "Snowflake", "dbt"];

export const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[currentWord];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  const handleDownloadResume = () => {
    // URL to the new resume file in the public directory
    const resumeUrl = "/AWL-25019-02042026-0521-resume_srilekha-doosa_da.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Srilekha_Doosa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Data Analyst Professional
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Srilekha
              <span className="block text-gradient-gold">Doosa</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Transforming Data into{" "}
              <span className="text-gold font-semibold">{displayText}</span>
              <span className="animate-pulse text-gold">|</span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Data Analyst professional with 6 years of experience delivering scalable reporting solutions, interactive dashboards, and data visualization insights across banking, healthcare, and retail domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-8 border-2 border-gold/20 rounded-full animate-pulse" />
              <div className="absolute inset-0 -m-16 border border-gold/10 rounded-full" />

              {/* Profile image container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card flex items-center justify-center gold-glow overflow-hidden relative">
                <img 
                  src="/image.png" 
                  alt="Srilekha Doosa" 
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
