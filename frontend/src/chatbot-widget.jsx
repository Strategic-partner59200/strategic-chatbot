// import ReactDOM from 'react-dom';
// import Chatbot from './components/Chatbot';
// import './index.css';

// const createChatbotWidget = () => {
//   const container = document.createElement("div");
//   container.id = "chatbot-root";
//   document.body.appendChild(container);

//   ReactDOM.render(<Chatbot />, container);
// };

// window.createChatbotWidget = createChatbotWidget

import ReactDOM from 'react-dom/client';
import Chatbot from './components/Chatbot';
import './index.css';

const createChatbotWidget = () => {
  const container = document.createElement("div");
  container.id = "chatbot-root";
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(<Chatbot />);
};

window.createChatbotWidget = createChatbotWidget;
