import './NewsletterForm.css';

const NewsletterForm = () => {
  return <div className='newsletterform'>
    <h3 id="newsletterh3">Sign Up For Newsletter</h3>
    <h4 id="newsletterh4">Be the first to know Wen...</h4>
    <h3 id="newsletter-soonh3">Soon</h3>

    <div className="newsletter__form-inputwrapper">
      <div className="newsletter__fullinput">
        <input type='text' className='newsletter__input' name="firstname" placeholder='Enter First Name'></input>
        <label className='newsletter__label' htmlFor="firstname">First Name</label>
      </div>

      <div className="newsletter__fullinput">
        <input type='text' className='newsletter__input' name="lastname" placeholder='Enter Last Name'></input>
        <label className='newsletter__label' htmlFor="lastname">Last Name</label>
      </div>

      <div className="newsletter__fullinput">
        <input type='text' className='newsletter__input' name="email" placeholder='Enter E-mail'></input>
        <label className='newsletter__label' htmlFor="email">E-mail</label>
      </div>
    </div>

    <button type='submit' className='newsletter_submit'>Sign Up</button>

  </div>;
};

export default NewsletterForm;
