import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Financial Performance Analytics Dashboard",
    description: "Developed Power BI dashboards with DAX measures and Power Query transformations to track revenue, profitability, and customer metrics.",
    bullets: [
      "Consolidated multi-source financial data using Azure Data Factory and SQL into Azure Synapse Analytics.",
      "Improved real-time monitoring and reduced reporting delays by 40% through automated data ingestion.",
      "Structured dimensional data models with star schema and tabular models, improving query performance across large datasets."
    ],
    tech: ["Power BI", "DAX", "SQL", "Azure Synapse", "Azure Data Factory"],
    color: "from-gold/20 to-gold-dark/10",
    image: "/financial_dashboard.png"
  },
  {
    title: "Healthcare Claims Analytics System",
    description: "Built Tableau dashboards with interactive filters and KPI tracking to monitor claims processing and patient trends.",
    bullets: [
      "Integrated claims, patient, and billing datasets using SQL, enabling a unified data layer for healthcare reporting.",
      "Optimized data extraction using advanced SQL query tuning, improving query performance for large healthcare datasets.",
      "Improved operational visibility and reduced reporting lag through interactive KPI dashboards."
    ],
    tech: ["Tableau", "SQL", "Data Integration", "KPI Tracking"],
    color: "from-accent/20 to-gold/10",
    image: "/healthcare_claims.png"
  },
  {
    title: "Customer Insights & Marketing Analytics",
    description: "Analyzed customer datasets using Python (Pandas) and SQL to identify high-value segments and track campaign ROI.",
    bullets: [
      "Identified high-value customer segments that improved targeting strategies and increased campaign conversion by 15%.",
      "Designed Power BI dashboards with DAX-based KPIs to track campaign performance and marketing effectiveness.",
      "Prepared and transformed datasets using Power Query and SQL, ensuring clean and structured data for accurate reporting."
    ],
    tech: ["Python", "Pandas", "Power BI", "SQL", "Power Query"],
    color: "from-gold-light/20 to-secondary/30",
    image: "/marketing_analytics.png"
  }
];

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Featured Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            My <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        {/* Project Card */}
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Visual */}
            <div className="p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 bg-gold/10 rounded-xl group-hover:bg-gold/0 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback to placeholder if image copy failed
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3 mb-8">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gold/20 text-gold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentProject(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentProject ? "bg-gold w-6" : "bg-muted-foreground/30"
                        }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="glass"
                    size="icon"
                    onClick={prevProject}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="glass"
                    size="icon"
                    onClick={nextProject}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};