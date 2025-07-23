'use strict';

// Chatbot functionality
async function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (message) {
    try {
      // 사용자 메시지 표시
      addMessage('user', message);
      
      // 서버로 메시지 전송
      const response = await fetch('http://localhost:8000/chat', {  // 실제 서버 URL로 변경 필요
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message })
      });

      if (!response.ok) {
        throw new Error('서버 응답 오류');
      }

      const data = await response.json();
      
      // 챗봇 응답 표시
      addMessage('bot', data.response);

    } catch (error) {
      console.error('Error:', error);
      addMessage('bot', '죄송합니다. 일시적인 오류가 발생했습니다.');
    }

    // 입력창 초기화
    input.value = '';
  }
}

function addMessage(type, text) {
  const messagesDiv = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}-message`;
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 챗봇 초기화 함수
function initializeChatbot() {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
} 