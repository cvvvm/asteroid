import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row-f10 vh-20 jc-evenly col-gap-5 px-md-10">
          <div className="col-3">
            <p className="badge">about</p>
            <p>professional computer user living in the PNW.</p>
          </div>

          <div className="col-4">
            <p className="badge-outline">resources</p>
            <a
              className="plink"
              href="https://configure.zsa.io/moonlander/layouts/wGzJq/latest/0"
            >
              my moonlander keyboard layout
            </a>
          </div>
        </div>
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export function ContactForm() {
  const [userName, setUserName] = useState('');
  const [userPronouns, setUserPronouns] = useState('');
  const [otherPronouns, setOtherPronouns] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [emailSent, setEmailSent] = useState('');

  // submit
  //---------------------------------------------------------------------
  const submit = () => {
    if (userName && userEmail && userMessage) {
      const serviceId = 'service_thcv72o';
      const templateId = 'template_xx1gb07';
      const templateParams = {
        userName,
        userPronouns,
        otherPronouns,
        userEmail,
        userMessage,
      };
      const pubKey = 'QNizfndHi7rOennFH';

      emailjs
        .send(serviceId, templateId, templateParams, pubKey)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setUserName('');
      setUserEmail('');
      setUserMessage('');
      setUserPronouns('');
      setOtherPronouns('');
      setEmailSent(true);
    } else {
      alert("sorry, a field is missing but i can't tell you which one yet.");
    }
  };

  // check email validity
  //---------------------------------------------------------------------
  const isValidEmail = (userEmail) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regex.test(String(userEmail).toLowerCase()));
    return regex.test(String(userEmail).toLowerCase());
  };

  // render
  //---------------------------------------------------------------------
  return (
    <div className="row-10 vh-50 invert jc-start px-md-4 py-4">
      <h2>done reading, wanna contact me?</h2>
      <form>
        <div className="row-10 jc-start pt-2 row-gap-4">
          {/* name -------------------------------------------------------- */}
          <label>
            name
            <input
              name="name"
              id="name"
              type="text"
              placeholder="what should i call you?"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          {/* email -------------------------------------------------------- */}

          <label>
            email
            <input
              name="email"
              id="email"
              type="email"
              placeholder="where i'll respond"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>

          {/* pronouns -------------------------------------------------------- */}

          <fieldset>
            <legend>pronouns</legend>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="sheHer"
                  name="pronouns"
                  value={'she/her'}
                  onChange={(e) => setUserPronouns(e.target.value)}
                />
                she/her
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="theyThem"
                  name="pronouns"
                  value={'they/them'}
                  onChange={(e) => setUserPronouns(e.target.value)}
                />
                they/them
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="heHim"
                  name="pronouns"
                  value={'he/him'}
                  onChange={(e) => setUserPronouns(e.target.value)}
                />
                he/him
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  id="pronounOtherText"
                  name="pronounOtherText"
                  placeholder="something else?"
                  value={otherPronouns}
                  onChange={(e) => setOtherPronouns(e.target.value)}
                />
              </label>
            </div>
          </fieldset>
          {/* message -------------------------------------------------------- */}
          <label>
            message
            <textarea
              id="message"
              name="message"
              placeholder="wanna work together? website feedbaack?"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              rows={10}
            ></textarea>
          </label>
        </div>
      </form>
      {/* submit button -------------------------------------------------------- */}
      <div className="row-f10 pt-1">
        <button className="button" onClick={submit}>
          submit
        </button>
      </div>
    </div>
  );
}
