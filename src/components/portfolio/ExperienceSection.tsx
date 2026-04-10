import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst",
    company: "Purpose Financial",
    location: "Remote",
    period: "Jul 2024 - Present",
    bullets: [
      "Designed interactive Power BI dashboards using DAX and Power Query to track revenue, churn, and acquisition KPIs, which improved reporting efficiency by 35% and enabled faster executive decision-making.",
      "Consolidated multi-source financial data through Azure Data Factory and SQL pipelines into Snowflake, reducing manual data preparation by 40%.",
      "Optimized reporting performance by implementing star schema data models, which reduced dashboard load time by 30% and supported scalable analysis.",
      "Automated recurring reports via Power BI Service dataflows and scheduled refresh, cutting turnaround time from days to hours.",
      "Analyzed customer transaction patterns using advanced SQL with window functions, leading to a 15% increase in targeted campaign conversions."
    ]
  },
  {
    title: "Reporting Analyst",
    company: "Express Scripts Inc",
    location: "NJ",
    period: "Dec 2023 - Jun 2024",
    bullets: [
      "Developed interactive Tableau dashboards to monitor claims processing and eligibility KPIs, reducing reporting latency by 30%.",
      "Optimized data extraction by writing advanced SQL queries with window functions, which improved query efficiency.",
      "Enabled self-service analytics by publishing structured datasets on Tableau Server, reducing manual report requests.",
      "Improved data accuracy by conducting data profiling and validation checks, identifying inconsistencies and increasing reliability by 20%.",
      "Consolidated claims, billing, and patient datasets using Azure Data Factory, resulting in a unified reporting layer."
    ]
  },
  {
    title: "Business Intelligence Analyst",
    company: "Barclays Bank",
    location: "Remote",
    period: "Feb 2023 - Nov 2023",
    bullets: [
      "Created Power BI and Tableau dashboards for transaction and fraud KPIs, which improved reporting visibility and reduced analysis turnaround time by 30%.",
      "Uncovered anomaly patterns by analyzing transaction datasets using advanced SQL, increasing fraud detection accuracy by 20%.",
      "Streamlined reporting operations through Power BI Service dataflows, improving data availability and reducing manual reporting effort.",
      "Improved dashboard responsiveness by implementing star schema data models, reducing query execution time by 25% for large datasets.",
      "Generated customer segmentation insights using SQL and Python with Pandas, increasing campaign engagement by 15%."
    ]
  },
  {
    title: "Operations Analyst",
    company: "Smartron",
    location: "India",
    period: "Mar 2019 - Dec 2021",
    bullets: [
      "Structured Tableau dashboards to track inventory movement, sales trends, and supply chain KPIs, which improved operational visibility.",
      "Analyzed inventory and sales datasets using SQL, identifying stock imbalances and reducing discrepancies by 18%.",
      "Integrated product, logistics, and sales data through Azure Data Factory pipelines, creating a centralized data layer.",
      "Gathered reporting requirements from business teams and translated them into KPI-driven dashboards, improving decision-making speed.",
      "Supported demand planning by analyzing historical sales data using SQL and Python, improving forecast accuracy by 15%."
    ]
  }
];


export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-charcoal-light/30" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Career Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2 mt-2 z-10 animate-pulse-gold" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-left" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className="glass-card p-6 md:p-8 hover:gold-glow transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 text-gold text-sm ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                      <span className="text-gold font-medium">{exp.company}</span>
                      <span>•</span>
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 1 ? "md:text-right" : ""}`}>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
