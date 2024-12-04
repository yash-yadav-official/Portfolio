import React from 'react';
import './Chatbot.css'

if (!window.grecaptcha) {
  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`
  script.async = true
  script.defer = true
  document.body.appendChild(script)
}

function Chatbot() {
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [typingMessage, setTypingMessage] = React.useState(false);
  const [messageFeed, setMessageFeed] = React.useState([
    {
      host: true,
      error: false,
      message:
        "Hi, I'm SeanAI! Feel free to ask me anything about Sean's professional career, and I'll do my best to help.",
    },
    {
      error: false,
      host: true,
      message:
        "Please note, this feature is still in alpha, so occasional bugs might occur.",
    },
  ])

  async function getCapcthaToken() {
    await window.grecaptcha.ready(function () { })
    return await window.grecaptcha.execute(process.env.REACT_APP_SITE_KEY, { action: 'submit' })
  }

  async function sendMessage(newMsgFeed, msg) {
    let token = await getCapcthaToken();
    let url = process.env.REACT_APP_CHATBOT_ENDPOINT
    let body = {
      question: msg
    }
    try {
      setTypingMessage(true)
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'g-recaptcha-response': token
        },
        body: JSON.stringify(body)
      });

      setTypingMessage(false)
      if (response.status >= 400) {
        throw Error("received:" + response.status)
      }
      let data = await response.json();
      setMessageFeed(newMsgFeed.concat({ host: true, message: data.answer }))
      scrollChatlog()
    } catch (error) {
      newMsgFeed[newMsgFeed.length - 1].error = true;
      setMessageFeed(newMsgFeed);
      setTypingMessage(false);
      console.error('Error sending message:', error);
    }
  }

  function scrollChatlog() {
    setTimeout(() => {
      const chatlog = document.getElementById('chatlog');
      if (chatlog) {
        chatlog.scrollTop = chatlog.scrollHeight;
      }
    })
  }

  function submitQuestion() {
    if (currentMessage.trim() !== '') {
      scrollChatlog()
      let msg = currentMessage
      let newMessageFeed = messageFeed.concat({ host: false, message: currentMessage })
      setMessageFeed(newMessageFeed)
      sendMessage(newMessageFeed, msg)
      setCurrentMessage('');
      scrollChatlog()
    }
  }

  return (

    <article className="portfolio active" data-page="chatbot">
      <header>
        <h2 className="h2 article-title">Chatbot</h2>
      </header>
      <section className="flex flex-col mt-auto">
        <div id="chatlog" className="overflow-y-scroll has-scrollbar h-screen-1/2">
          {messageFeed.map((message, index) => (
            <div key={index} className={`max-w-2/3 w-fit ${message.host ? 'mr-auto' : 'ml-auto'}`}>
              <span className={`text-red-400 mx-2 text-sm ${message.error ? 'block' : 'hidden'}`}>Error sending message! Please try again.</span>
              <div className={`m-2 p-2 rounded-lg ${message.host ? 'host-message' : 'guest-message'}`}>
                <span className="message">{message.message}</span>
              </div>
            </div>
          ))}
          <div className={`m-2 p-2 rounded-lg ml-auto ${typingMessage ? 'block' : 'hidden'} `}>
            <div className="typing-dots mr-auto w-fit">
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