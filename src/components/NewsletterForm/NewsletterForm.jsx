import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './NewsletterForm.css';
import { useEffect, useState } from 'react';

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email,
      MERGE1: firstName,
      MERGE2: lastName
    });
  }

  return (
    <form onSubmit={(e) => submitHandler(e)} className='newsletterform'>
    <h3 id="newsletterh3">Sign Up For Newsletter</h3>
    <h4 id="newsletterh4">Be the first to know Wen...</h4>
    <h3 id="newsletter-soonh3">Soon</h3>

    {status === "sending" && (
      <div className='newsletter__alert-sending'>
        Sending...
      </div> 
    )}
    {status === "error" && (
      <div className='newsletter__alert-error' dangerouslySetInnerHTML={{__html: message}} />
    )}
    {status === "success" && (
      <div className='newsletter__alert-success' dangerouslySetInnerHTML={{__html: message}} />
    )}

    <div className="newsletter__form-inputwrapper">
      <div className="newsletter__fullinput">
        <input required={true} type='text' className='newsletter__input' name="firstname" placeholder='Enter First Name' onChange={handleFirstName} value={firstName}></input>
        <label className='newsletter__label' htmlFor="firstname">First Name</label>
      </div>

      <div className="newsletter__fullinput">
        <input required={true} type='text' className='newsletter__input' name="lastname" placeholder='Enter Last Name' onChange={handleLastName} value={lastName}></input>
        <label className='newsletter__label' htmlFor="lastname">Last Name</label>
      </div>

      <div className="newsletter__fullinput">
        <input required={true} type='text' className='newsletter__input' name="email" placeholder='Enter E-mail' onChange={handleEmail} value={email}></input>
        <label className='newsletter__label' htmlFor="email">E-mail</label>
      </div>
    </div>
    <button type='submit' className='newsletter_submit'>Sign Up</button>

  </form>
  );
};

const NewsletterForm = () => {

  const postUrl = `https://finance.us8.list-manage.com/subscribe/post?u=9c86cc3884c3911db10b082b9&id=9cccf00f83`

  return (
    <MailchimpSubscribe
      url={postUrl} 
      render={({ subscribe, status, message}) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default NewsletterForm;
