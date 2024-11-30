import React from 'react';
import './Chatbot.css'

if (!window.grecaptcha) {
  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`
  script.async = true
  script.defer = true
  script.onload = () => {
    console.log('reCAPTCHA script loaded')
  }
  document.body.appendChild(script)
}

let messageFeed = [
  {
    host: true,
    message:
      "Hello, I'm SeanAI! Ask me any questions you might have about Sean's professional career and I'll try help.",
  },
  {
    host: false,
    message: "What is Sean's work experience?",
  },
  {
    host: true,
    message:
      'Great question! Sean have 2.5 years experience with Ericsson and half a year with Retail Solutions, altogether he has 3 years experience in the field.',
  },
]

function Chatbot() {
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [typingMessage, setTypingMessage] = React.useState(false);

  async function getCapcthaToken() {
      return await window.grecaptcha.execute(process.env.REACT_APP_SITE_KEY, { action: 'submit' })
  }

  async function sendMessage(msg) {
    let token = await getCapcthaToken();
    console.log("token: ", token)
    messageFeed = messageFeed.concat({ host: false, message: msg });
    let url = process.env.REACT_APP_CHATBOT_ENDPOINT
    let body = {
      question : currentMessage
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'g-recaptcha-response': token
      },
      body: JSON.stringify(body)
    });
    setTypingMessage(false)
    let data = await response.json();
  }

  return (

    <article className="portfolio active" data-page="chatbot">
      <header>
        <h2 className="h2 article-title">Chatbot</h2>
      </header>
      <section className="flex flex-col mt-auto">
        <div className="overflow-y-scroll has-scrollbar h-screen-1/2">
          {messageFeed.map((message, index) => (
            <div key={index} className={`m-2 p-2 rounded-lg ${message.host ? 'ml-auto host-message' : 'mr-auto guest-message'} w-2/3`}>
              <span className="message">{message.message}</span>
            </div>
          ))}
          <div className={`m-2 p-2 rounded-lg ml-auto ${typingMessage ? 'block' : 'hidden'} `}>
              <div className="typing-dots ml-auto w-fit">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        </div>
        <div className="flex flex-row">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Type message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button
            className="form-btn max-w-fit"
            onClick={() => {
              if (currentMessage.trim() !== '') {
                messageFeed = messageFeed.concat({ host: false, message: currentMessage });
                sendMessage(currentMessage)
                setCurrentMessage('');
                setTypingMessage(true)
              }
            }}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span className="max-w-min md:min-w-max hidden md:flex">Send Message</span>
          </button>
        </div>
      </section>
    </article>
  );
}

export default Chatbot;