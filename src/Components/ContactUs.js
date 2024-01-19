import { useState } from'react';

function ContactUs () {
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Telephone Number:
          <input
            type="tel"
            value={telephone}
            onChange={handleTelephoneChange}
            placeholder="Enter your telephone number"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
