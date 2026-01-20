import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Reading Progress Log",
      desc: "A personalized tracker for monitoring reading goals, featuring progress bars and session history.",
      link: "https://reading-progress-log.vercel.app/",
      img: "/images/reading-log.png",
      tags: ["React", "Local Storage"],
    },
    {
      title: "AI Question Generator",
      desc: "React & Node.js app using Gemini LLM to automate test papers.",
      link: "https://ai-question-papper-generator-using.vercel.app/",
      img: "/images/ai-gen.png",
      tags: ["React", "Gemini AI"],
    },
    {
      title: "Appointment System",
      desc: "Student-Teacher booking platform for academic coordination.",
      link: "https://geethapriyans.github.io/Student-Teacher-Booking-Appointment/",
      img: "/images/project-1.png",
      tags: ["JS", "Automation"],
    },
    {
      title: "Super Mall System",
      desc: "Inventory and management system for retail environments.",
      link: "https://geethapriyans.github.io/Super-Mall-Project/",
      img: "/images/project-4.png",
      tags: ["Logic", "Retail"],
    },
    {
      title: "Image Slider",
      desc: "A responsive, smooth-transitioning image gallery with interactive navigation controls.",
      link: "https://geethapriyans.github.io/Image-Slider/",
      img: "/images/project-2.png",
      tags: ["UI/UX", "CSS Animation"],
    },
    {
      title: "To Do List",
      desc: "A productivity tool featuring task persistence, category filtering, and status tracking.",
      link: "https://geethapriyans.github.io/To-Do-List/",
      img: "/images/project-3.png",
      tags: ["JavaScript", "Productivity"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div className="heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "2.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Featured Work
        </motion.h2>
        <span style={{ color: "#666", letterSpacing: "3px" }}>
          Digital Solutions & Innovations
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={gridStyle}
      >
        {projectList.map((p, i) => (
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -10 }}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            style={cardStyle}
          >
            <div style={imgContainer}>
              <motion.img
                src={p.img}
                alt={p.title}
                style={projectImg}
                whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              />
            </div>
            <div style={contentStyle}>
              <div style={tagRow}>
                {p.tags.map((tag) => (
                  <span key={tag} style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={titleStyle}>{p.title}</h3>
              <p style={descStyle}>{p.desc}</p>
              <span style={linkHint}>View Project ↗</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

// Styles
const sectionStyle = { padding: "100px 10%", backgroundColor: "#0a0a0a" };
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  marginTop: "50px",
};
const cardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "16px",
  overflow: "hidden",
  textDecoration: "none",
  transition: "border-color 0.3s",
};
const imgContainer = {
  width: "100%",
  height: "220px",
  overflow: "hidden",
  borderBottom: "1px solid #222",
};
const projectImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(100%)",
  transition: "0.5s ease",
};
const contentStyle = { padding: "25px" };
const tagRow = { display: "flex", gap: "10px", marginBottom: "12px" };
const tagStyle = {
  fontSize: "0.65rem",
  color: "#fff",
  border: "1px solid #444",
  padding: "3px 8px",
  borderRadius: "4px",
  textTransform: "uppercase",
};
const titleStyle = { color: "#fff", fontSize: "1.25rem", marginBottom: "10px" };
const descStyle = {
  color: "#888",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  marginBottom: "20px",
  height: "45px",
  overflow: "hidden",
};
const linkHint = {
  color: "#fff",
  fontSize: "0.85rem",
  fontWeight: "600",
  borderBottom: "1px solid #fff",
};

export default Projects;
