import React, { useState } from 'react';
import './Contact.css';
const ContactPage = () =>
{       
  const [inputs, setInputs] = useState([
    {
      fname: '',
      phone: '',
      mail: '',
      msg: ''
    }
  ]);

  function inputChange(e)
  {
    let name = e.target.name;
    let value = e.target.value;
    setInputs((input)=>
    {
      return{
        ...input,
        [name] : value
      }
    })
  }

  function getData(e)
  {
    alert(`I'am ${inputs.fname} my phone: ${inputs.phone}, email: ${inputs.mail} and i want to say that ${inputs.msg}`);
  }

  return(
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={getData}>
        <label>Full Name</label>
        <input type="text" spellcheck="false" required placeholder='name' name="fname" value={inputs.fname} onChange={inputChange}/>
        <label>Phone</label>
        <input type="number" spellCheck="false" required placeholder='mobile number' name="phone" value={inputs.phone} onChange={inputChange}/>
        <label>Email address</label>
        <input type="email" spellcheck="false" required placeholder='name@example.com' name="mail" value={inputs.mail} onChange={inputChange}/>
        <label>Message</label>
        <textarea required rows="3" name="msg" value={inputs.msg} onChange={inputChange}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
export default ContactPage;