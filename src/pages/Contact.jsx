const Contact = () => {
  return (
    <div className="page contact-container">
      <h1>Get in Touch</h1>
      <p>Have questions about an order or a specific product? We're here to help.</p>
      
      <div className="contact-details">
        <div className="contact-card">
          <h4>📧 Email</h4>
          <p>support@technova.com</p>
        </div>
        <div className="contact-card">
          <h4>📱 Phone</h4>
          <p>+1 (555) 0123-4567</p>
        </div>
        <div className="contact-card">
          <h4>📍 Location</h4>
          <p>123 Innovation Drive, Silicon Valley, CA</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="input"/>
        <input type="email" placeholder="Your Email" className="input"/>
        <textarea placeholder="How can we help?" className="input"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;