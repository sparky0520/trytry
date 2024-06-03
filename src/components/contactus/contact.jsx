import React, {useRef} from 'react';
import './contact.css'
import emailjs from '@emailjs/browser'

const Home = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_beaatgd','template_q0z2ywe', form.current, 'noANm6mX7jkQblsQJ')
    .then((result)=>{
      console.log(result.text);
      window.location.reload();
    }, (error)=>{
      console.log(error.text)
    });
  };

  return(
    <body>
      <section class="contact">
        <div class="content">
          <h2>Contact Us</h2>
          <p>Thank you for visiting our website. 
            You can drop all your queries in the given box along with your contact details.</p>
        </div>
        <div class="container">
          <div class="contactInfo">
            <div class="box">
              <div class="icon"></div>
              <div class="text">
                <h2>Address</h2>
                <p> G.B. pant engineering college, Okhla, New Delhi</p>
              </div>
            </div>    
            <div class="box">
              <div class="icon"></div>
              <div class="text">
                <h2>Email</h2>
                <p>abc@9mm.com</p>
              </div>
            </div>
            <div class="box">
              <div class="icon"></div>
              <div class="text">
                <h2>Phone</h2>
                <p>8794379849658</p>
              </div>
            </div>
          </div>
          <div class="contactform">
            <form ref={form} onSubmit={sendEmail} class="contact-left">
              <h2><b>Send message</b></h2>
              <div class="inputBox">
                <input type="text" name='from_name' placeholder="Your Name" required="required"></input>
                <span></span>
              </div>
              <div class="inputBox">
                <input type="text" name='from_email' placeholder="Your E-mail" required="required"></input>
                <span></span>
              </div>
              <div class="inputBox">
                <textarea type="text" name='message' placeholder="Type your message" required="required"></textarea>
                <span></span>
              </div>
              <div class="input box" id="button" >
                <input type="submit" id="but" value="SUBMIT"></input>
              </div>
            </form>
            </div>
            </div>
      </section>
    </body>
  );

  {/* return (
      <div class='cont'>
       <div class='container'>
       <form ref={form} onSubmit={sendEmail} class="contact-left">
       <label className='name' class='name'>Name :</label>
       <input type="text" name='from_name' />
       <label class='email'>Email : </label>
       <input type="text" name='from_email'/>
       <label class='message'>How can we help you? :</label>
       <textarea name="message"></textarea>
       <input class='send_button' type="submit" value="send"/>
     </form>
     </div>
     <div class='contact_box'>
       <p class='head'>CONTACT US</p>
       <div class='ab'>
       <p class='text'>Need to get in touch with us ?</p>
       <p class='text'>Fill out the form below and get your query resolved</p>
       </div>
     </div>
   ); */}
};

export default Home;