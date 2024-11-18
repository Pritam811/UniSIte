import React from 'react'
import './contact.css'
import mail from '../../assets/mail.jpg'
import phone from '../../assets/phone.jpg'
import home from '../../assets/home.png'
export const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ae805981-86d5-45ae-ae81-f1ac94cee5dc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => {
            setResult(""); 
          }, 2000); 
      }
       else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    
    <div className="c-container" name= 'contact'>
       <div className="c-left">
            <h3>Send Message</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Explicabo, veniam ratione, repellat error ab eveniet soluta ullam fugit nam iste animi hic perspiciatis deserunt tempore beatae eos sequi eligendi nulla.</p>
            <ul>
                <li><img src={mail} alt="" />pritamd@hiof.no</li>
                <li><img src={phone} alt="" />+47 966 50 852</li>
                <li><img src={home} alt="" />Mossveien 14A, Oslo 0193</li>
            </ul>
        </div>
        <div className="c-right">
            <form onSubmit={onSubmit} >
                <input className='' type="text" placeholder='Your Name' required />
                <input type="text" placeholder='Your Email' required />
                <input type="text" placeholder='Subject'/>
                <textarea className='text' name="message" id="" rows='6' placeholder='Your Message'></textarea>
                <button type='submit' className='btn c-btn'>Click to Send</button>
                <span>{result}</span>
            </form>
            
        </div>
        
    </div>
    
  )
}
