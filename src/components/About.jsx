import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div style={container}>
        
        {/* Left Side: Visual/Profile Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={imageSide}
        >
          <div style={imageWrapper}>
             <img 
               src="/images/profile2.png" 
               alt="Geethapriyan" 
               style={profileImg} 
             />
             <div style={experienceBadge}>
               <h4 style={{ margin: 0 }}>BE CSE</h4>
               <span style={{ fontSize: '0.7rem' }}>Sri Eshwar College</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={textSide}
        >
          <span style={subtitle}>WHO I AM</span>
          <h2 style={mainTitle}>Full Stack Developer & <br/> Problem Solver</h2>
          
          <p style={description}>
            I am a Computer Science Engineering student dedicated to building clean, 
            high-performance digital solutions. My approach blends technical 
            rigor with minimalist design, ensuring every project is as efficient 
            as it is beautiful.
          </p>

          <div style={statsGrid}>
            <div style={statBox}>
              <h3 style={statNum}>8+</h3>
              <p style={statLabel}>Web Projects</p>
            </div>
            <div style={statBox}>
              <h3 style={statNum}>90%</h3>
              <p style={statLabel}>Frontend Precision</p>
            </div>
          </div>

          <motion.div whileHover={{ x: 10 }} style={ctaContainer}>
            <a href="/images/Geethapriyan_Resume.pdf" download style={resumeLink}>
              Download CV <span style={{ marginLeft: '10px' }}>→</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  padding: '120px 10%',
  backgroundColor: '#0a0a0a',
  overflow: 'hidden'
};

const container = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '80px',
  alignItems: 'center',
  justifyContent: 'center'
};

const imageSide = {
  flex: '1',
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center'
};

const imageWrapper = {
  position: 'relative',
  padding: '15px',
  border: '1px solid #222',
  borderRadius: '24px'
};

const profileImg = {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '16px',
  filter: 'grayscale(100%)',
  display: 'block'
};

const experienceBadge = {
  position: 'absolute',
  bottom: '-20px',
  right: '-20px',
  backgroundColor: '#fff',
  color: '#000',
  padding: '15px 25px',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  textAlign: 'center'
};

const textSide = {
  flex: '1.2',
  minWidth: '300px'
};

const subtitle = {
  color: '#666',
  letterSpacing: '4px',
  fontSize: '0.8rem',
  fontWeight: '600'
};

const mainTitle = {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  margin: '15px 0 25px',
  lineHeight: '1.1',
  color: '#fff'
};

const description = {
  color: '#a0a0a0',
  fontSize: '1.1rem',
  lineHeight: '1.7',
  marginBottom: '40px'
};

const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  marginBottom: '40px'
};

const statBox = {
  padding: '20px',
  border: '1px solid #222',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.02)'
};

const statNum = {
  fontSize: '1.8rem',
  color: '#fff',
  marginBottom: '5px'
};

const statLabel = {
  color: '#555',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const resumeLink = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  borderBottom: '1px solid #fff',
  paddingBottom: '5px'
};

const ctaContainer = {
  marginTop: '20px'
};

export default About;