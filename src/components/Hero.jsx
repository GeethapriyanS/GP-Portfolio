import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="home" id="home" style={heroStyle}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="home-text"
      >
        <span style={{ color: '#a0a0a0', letterSpacing: '2px' }}>Hello, I'm</span>
        <h1 style={{ fontSize: '4rem', margin: '10px 0', fontWeight: '800' }}>
          Geethapriyan S
        </h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontWeight: '300', marginBottom: '20px', color: '#fff' }}
        >
          Full Stack Developer
        </motion.h2>
        <p style={{ maxWidth: '500px', color: '#a0a0a0', marginBottom: '30px' }}>
          BE CSE - Sri Eshwar College of Engineering. Specializing in high-performance React applications.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="btn"
        >
          Contact Me
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="home-img"
      >
        <img src="/images/profile.jpg" alt="profile" style={imgStyle} />
      </motion.div>
    </section>
  );
};

const heroStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100vh',
  background: 'radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
};

const imgStyle = {
  width: '380px',
  filter: 'grayscale(100%) contrast(1.1)',
  borderRadius: '40px',
  border: '1px solid #333',
  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
};

export default Hero;