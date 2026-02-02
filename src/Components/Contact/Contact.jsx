import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {


  const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const form = event.target;
  const formData = new FormData(form);
  formData.append("access_key", "85cd9a97-8bed-48cc-ba50-3cc146771000");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent successfully!");
      form.reset(); // THIS resets the form
    } else {
      setResult("Error sending email");
    }
  } catch (error) {
    setResult("Something went wrong");
  }
};








  return (
    <div className='contact'>
          <div className="contact-col">
              <h3>Send us a message <img src={msg_icon} alt="" /></h3>
              <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
              <ul>
                  <li> <img src={mail_icon} alt="" />
                      princekapar.builder@gmail.com</li>
                  <li> <img src={phone_icon} alt="" /> + 6268369495</li>
                  <li> <img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge <br/> MA 02139, United  States </li>
              </ul>
      </div>
          <div className="contact-col">
              <form onSubmit={onSubmit}>
                  <label >Your Name</label>
                  <input type="text" name='name' placeholder='Enter your name' required />
                  <label>Phone Number</label>
                  <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                  <label> Write your massages here</label>
                  <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                  <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
              </form>
              <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
