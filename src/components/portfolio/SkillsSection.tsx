import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Search,
  FileCheck,
  Globe,
  BookOpen,
  Database,
  BarChart3,
  Cloud,
  Layers,
  Repeat
} from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "BI & Visualization",
    skills: ["Power BI", "Tableau", "DAX", "Power Query (M)", "Row-Level Security", "Performance Optimization"]
  },
  {
    icon: Database,
    title: "Data Analysis & Querying",
    skills: ["Advanced SQL", "Python (Pandas, NumPy)", "Window Functions", "Stored Procedures", "Query Optimization"]
  },
  {
    icon: Layers,
    title: "Data Modeling",
    skills: ["Dimensional Modeling", "Star Schema", "Fact & Dimension Design", "Tabular Models", "Semantic Layer"]
  },
  {
    icon: Cloud,
    title: "Data Warehousing",
    skills: ["Snowflake", "Amazon Redshift", "Azure Synapse Analytics", "PostgreSQL", "Data Lake"]
  },
  {
    icon: Repeat,
    title: "Integration & Transformation",
    skills: ["Azure Data Factory", "dbt", "Data Profiling", "Data Validation", "Data Cleansing"]
  },
  {
    icon: Search,
    title: "Analytics & Strategy",
    skills: ["KPI Development", "Dashboard Design", "Self-Service BI", "Data Storytelling", "Automation"]
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-charcoal-light/30" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Technical Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Skills & <span className="text-gradient-gold">Tools</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:gold-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <category.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary/50 text-muted-foreground rounded-full hover:bg-gold/20 hover:text-gold transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
