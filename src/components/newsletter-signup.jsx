import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();

      try {
        const { result, msg } = await addToMailChimp(email);

        if (result !== 'success') {
          throw msg; //error with subscription from our end or plugin
        }

        setEmail('');
        setMessage('Thank you for subscribing!');
      } catch (err) {
        if (err.includes('already subscribed')) {
          setMessage("You're already subscribed!");
        } else {
          setMessage('Please enter a valid email.');
        }
      }
    };

    const handleEmailChange = e => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <div className="header__form-heading">Sign up for our newsletter</div> */}
                    <input
                        placeholder="Email address"
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                        className="header__newsletter-input"
                    />
                    <div className="header__form-msg">{message}</div>

                    <button className="header__cta" type="submit">
                        Join our newsletter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsletterSignup;
