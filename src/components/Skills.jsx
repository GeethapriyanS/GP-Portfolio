import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3/Sass", "Tailwind CSS"]
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express", "SQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Programming",
      skills: ["C", "C++", "Java", "Python"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div className="heading">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0px" }}
          whileInView={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 1 }}
        >
          Tech Stack
        </motion.h2>
        <span>My Technical Expertise</span>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={gridStyle}
      >
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            style={categoryCard}
          >
            <h3 style={categoryTitle}>{cat.title}</h3>
            <div style={skillList}>
              {cat.skills.map((skill, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.1, color: "#fff", backgroundColor: "#333" }}
                  style={skillBadge}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Decorative animated line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={bottomLine}
      />
    </section>
  );
};

const sectionStyle = {
  position: 'relative',
  paddingBottom: '100px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px',
  marginTop: '50px'
};

const categoryCard = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid #222',
  padding: '30px',
  borderRadius: '16px',
  transition: '0.3s',
};

const categoryTitle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
  color: '#fff',
  borderLeft: '3px solid #fff',
  paddingLeft: '15px',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const skillList = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px'
};

const skillBadge = {
  padding: '8px 16px',
  background: '#111',
  border: '1px solid #333',
  borderRadius: '4px',
  fontSize: '0.85rem',
  color: '#a0a0a0',
  cursor: 'default',
  transition: 'all 0.3s ease'
};

const bottomLine = {
  height: '1px',
  background: 'linear-gradient(to right, transparent, #333, transparent)',
  marginTop: '80px'
};

export default Skills;