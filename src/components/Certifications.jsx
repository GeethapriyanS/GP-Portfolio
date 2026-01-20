import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [1, 2, 3, 4, 5, 6,7,8];
  return (
    <section id="certifications">
      <div className="heading">
        <h2>Recognition</h2>
        <span>Certifications & Achievements</span>
      </div>
      <div style={certGrid}>
        {certs.map((c) => (
          <motion.div 
            key={c}
            whileHover={{ scale: 1.02 }}
            style={certCard}
          >
            <img 
              src={`/images/blog-${c}.png`} 
              alt="Cert" 
              style={{ width: '100%', filter: 'grayscale(100%) contrast(1.2)' }} 
              onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const certGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' };
const certCard = { overflow: 'hidden', borderRadius: '8px', border: '1px solid #333', cursor: 'pointer' };

export default Certifications;