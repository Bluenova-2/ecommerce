import React from 'react';
import '../styles/footer.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer-all'>
        <div className='footer'>


      <h1>Subscribe now and earn 500 points!</h1>
      <p>Get the latest TechNova News and Giveaways</p>
      <input type="text" placeholder=' Enter your email address'  className='input-style'/> <button type="button" className='button'> 🔔 </button>
</div>
      <div className='footer-cover-for-links'>

      <div className='customer-service-card'>
        <h4>Customer Service</h4>
        <br className='br'/>
        Service hours
        <br />
        <h4>Monday-Friday(Excluding public holidays)
            <br />
            9AM to 1PM
            <br />
            2PM to 5:30PM
            <br />
            Saturday 10AM to 12:30PM
            <br />
            phone:
            <br />
            09123143233
            <br />
            Email:
            <br />
            me@gmail.com
            <br />
            whatsapp:
            <br />
            +234 342453454
        </h4>
        
      </div>

      <div className='quick-links'>
        <h4>Quick links</h4>
        <br />
         <NavLink to="/About"  className="navlink">About</NavLink>
        <br />
        Where to buy
        <br />
         <NavLink to="/Products"  className="navlink">Shop</NavLink>
        <br />
            <NavLink to="/Contact" className="navlink">Contact</NavLink>
      </div>

</div>

      </div>
    
  )
}

export default Footer






