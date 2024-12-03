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

function Chatbot() {
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [typingMessage, setTypingMessage] = React.useState(false);
  const [messageFeed, setMessageFeed] = React.useState([
    {
      host: true,
      message:
        "Hello, I'm SeanAI! Ask me any questions you might have about Sean's professional career and I'll try help.",
    },
  ])

  async function getCapcthaToken() {
      return await window.grecaptcha.execute(process.env.REACT_APP_SITE_KEY, { action: 'submit' })
  }

  async function sendMessage(newMsgFeed, msg) {
    let token = await getCapcthaToken();
    console.log("retrived token", token)
    let url = process.env.REACT_APP_CHATBOT_ENDPOINT
    let body = {
      question: msg
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
    console.log(data)
    setMessageFeed(newMsgFeed.concat({ host: true, message: data.answer }))
  }

  function submitQuestion() {
    if (currentMessage.trim() !== '') {
      let msg = currentMessage
      let newMessageFeed = messageFeed.concat({ host: false, message: currentMessage })
      setMessageFeed(newMessageFeed)
      sendMessage(newMessageFeed, msg)
      setCurrentMessage('');
      setTimeout(() => {
        setTypingMessage(true)
      }, 1500)
    }
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
            disabled={typingMessage}
            placeholder="Type message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitQuestion();
              }
            }}
          />
          <button
            className="form-btn max-w-fit"
            onClick={() => submitQuestion()}
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