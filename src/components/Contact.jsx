import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={formContainer}
      >
        <h2 style={{ marginBottom: '40px' }}>Get In Touch</h2>
        <form style={formStyle}>
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <textarea placeholder="Message" rows="5" style={inputStyle}></textarea>
          <motion.button 
            whileHover={{ backgroundColor: '#fff', color: '#000' }}
            style={submitBtn}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

const formContainer = { maxWidth: '600px', margin: '0 auto' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const inputStyle = { 
  background: '#111', border: '1px solid #333', padding: '15px', 
  color: 'white', borderRadius: '4px', outline: 'none' 
};
const submitBtn = { 
  background: 'transparent', border: '1px solid #fff', color: '#fff', 
  padding: '15px', cursor: 'pointer', fontWeight: '600', textTransform: 'uppercase' 
};

export default Contact;