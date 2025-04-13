import React, { useState, useEffect, useRef } from "react";
import botImage from "../assets/bot.png";
import ai from '../../src/assets/ai.png';
import iconbot from '../../src/assets/iconbot.png';
import bull from "../assets/bull.png";
import { scenarios } from "../constants/scénario";
import axios from "axios";


import { sendChatData } from "../api/sendChatData";
const ChatbotDemo = () => {
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [currentScenario, setCurrentScenario] = useState("besoin");
  const [userInfo, setUserInfo] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isChatVisible, setChatVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasShownInitialMessage, setHasShownInitialMessage] = useState(false);
  const [groupedData, setGroupedData] = useState({});
  const [ads, setAds] = useState([]);


  const handleAISubmit = async () => {
    if (!inputValue.trim()) return; // Prevent empty submissions
  
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputValue },
    ]);
  
    setInputValue(""); // Clear the input field
    setIsTyping(true); // Show typing indicator
  
    try {
      const response = await axios.post("/bot", { input: inputValue });
      console.log("Response from backend:", response.data);
      const data = response.data;
  
      if (data.message) {
        const formattedMessage = formatResponse(data.message);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: data.message,
            htmlContent: formattedMessage, // Use formatted HTML content
          },
        ]);
      } else {
        console.warn("No message in response:", data);
        const errorMessage = "Je suis désolé, je n'ai pas pu générer de réponse.";
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: errorMessage,
            htmlContent: formatResponse(errorMessage)
          }
        ]);
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
      const errorMessage = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: errorMessage,
          htmlContent: formatResponse(errorMessage)
        },
      ]);
    } finally {
      setIsTyping(false); // Hide typing indicator
    }
  };
  
  const formatResponse = (text) => {
    // Convert Markdown to HTML
    let formattedText = text;
  
    // First handle the dot-separated sentences
    formattedText = formattedText.replace(/^\.(.*$)/gm, '<p class="mb-3 leading-relaxed">$1</p>');
  
    // Headings
    formattedText = formattedText.replace(/^##\s+(.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
    formattedText = formattedText.replace(/^###\s+(.*$)/gm, '<h4 class="text-lg font-medium mt-4 mb-2">$1</h4>');
  
    // Bold text
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  
    // Lists - improved to handle contact information format
    formattedText = formattedText.replace(/^-\s(.+?):\s(.+)$/gm, '<li class="mb-2"><span class="font-semibold">$1:</span> $2</li>');
    formattedText = formattedText.replace(/^\s*-\s(.*$)/gm, '<li class="list-disc ml-5 mb-1">$1</li>');
    formattedText = formattedText.replace(/^\s*\*\s(.*$)/gm, '<li class="list-disc ml-5 mb-1">$1</li>');
  
    // Wrap the entire list in a <ul> if we have list items
    if (formattedText.includes('<li')) {
      formattedText = `<ul class="space-y-2 my-3">${formattedText}</ul>`;
    }
  
    // Paragraphs (only for text that isn't already wrapped in tags and doesn't start with special characters)
    formattedText = formattedText.replace(/^(?!<[a-z]|<\/[a-z]|\.|\*|#|-)(.*$)/gm, '<p class="mb-3 leading-relaxed">$1</p>');
  
    // Links
    const urlRegex = /(\bhttps?:\/\/[^\s]+)\b/g;
    formattedText = formattedText.replace(
      urlRegex, 
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline transition-colors">$1</a>'
    );
  
    // Email links
    const emailRegex = /(\b[\w.-]+@[\w.-]+\.\w{2,}\b)/g;
    formattedText = formattedText.replace(
      emailRegex,
      '<a href="mailto:$1" class="text-blue-600 hover:text-blue-800 underline transition-colors">$1</a>'
    );
  
    // Phone number links
    const phoneRegex = /(\+\d{1,3}\s\d{1,3}\s\d{2}\s\d{2}\s\d{2})/g;
    formattedText = formattedText.replace(
      phoneRegex,
      '<a href="tel:$1" class="text-blue-600 hover:text-blue-800 underline transition-colors">$1</a>'
    );
  
    // Code blocks
    formattedText = formattedText.replace(
      /```([\s\S]*?)```/g, 
      '<pre class="bg-gray-100 p-3 rounded-md overflow-x-auto my-2"><code>$1</code></pre>'
    );
  
    return formattedText;
  };
 
useEffect(() => {
  const fetchAds = async () => {
    try {
      const response = await axios.get("/pub");
      console.log("ads:", response.data);
      setAds(response.data);
    } catch (error) {
      console.error(error);
    } 
  };
  fetchAds();
}, []);
  

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidFrenchPhone = (phone) => {
    const sanitizedPhone = phone.replace(/\s|\.|-/g, "");
    const regex = /^06\d{8}$/;
    return regex.test(sanitizedPhone);
  };

  const sendData = (userChoice, inputValue) => {
    setGroupedData((prevData) => ({
      ...prevData,
      [userChoice]: inputValue,
    }));

    // Send grouped data when finished
    if (isFinalScenario(currentScenario)) {
      sendChatData(groupedData);
      // Reset grouped data after sending
      setGroupedData({});
    }
  };
  const isFinalScenario = (scenario) => {
    // Define your final scenarios, where you want to send data
    return ["final_response", "verification_phone"].includes(scenario);
  };

  const handleInputSubmit = () => {
    const userResponse = userInfo[scenarios[currentScenario].inputType];

    if (!userResponse) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userResponse, sender: "user" },
    ]);

    if (currentScenario === "email") {
      if (!isValidEmail(userResponse)) {
        scenarios[currentScenario].invalidResponse.forEach((message) => {
          displayMessageWithTypingIndicator(message, "bot");
        });

        displayMessageWithTypingIndicator(
          scenarios[currentScenario].question(userInfo.name || ""),
          "bot"
        );

        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          [scenarios[currentScenario].inputType]: "",
        }));
        return;
      }
    } else if (currentScenario === "phone") {
      if (!isValidFrenchPhone(userResponse)) {
        scenarios[currentScenario].invalidResponse.forEach((message) => {
          displayMessageWithTypingIndicator(message, "bot");
        });
        displayMessageWithTypingIndicator(
          scenarios[currentScenario].question,
          "bot"
        );

        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          [scenarios[currentScenario].inputType]: "",
        }));
        return;
      }
    }

    const nextScenario = scenarios[currentScenario].next;

    if (currentScenario === "nom") {
      setTimeout(() => {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse(userResponse),
        "bot"
      );}, 2000);
      setTimeout(() => {
      displayMessageWithTypingIndicator(
        scenarios[nextScenario].question,
        "bot"
      );}, 4000);
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [scenarios[currentScenario].inputType]: "",
      }));
    } else if ((currentScenario === "prénom")) {
       setTimeout(() => {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse,
        "bot"
      );}, 2000);
      setTimeout(() => {
      displayMessageWithTypingIndicator(
        scenarios[nextScenario].question,
        "bot"
      );}, 4000);
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [scenarios[currentScenario].inputType]: "",
      }));
      setCurrentScenario(nextScenario)
    } else if (currentScenario === "email") {
      displayMessageWithTypingIndicator(
        scenarios[nextScenario].question,
        "bot"
      );
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [scenarios[currentScenario].inputType]: "",
      }));
      // setCurrentScenario(nextScenario)
    } else if (currentScenario === "email1") {
      setTimeout(() => {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse,
        "bot"
      );}, 2000)
      setTimeout(() => {
        displayMessageWithTypingIndicator(
          scenarios[nextScenario].question,
          "bot"
        );
        setCurrentScenario(nextScenario);
      }, 4000);
    } else if (currentScenario === "phone") {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse,
        "bot"
      );
      setTimeout(() => {
        displayMessageWithTypingIndicator(
          scenarios[nextScenario].question,
          "bot"
        );
        setCurrentScenario(nextScenario);
      }, 3000);
    } 
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [scenarios[currentScenario].inputType]: "",
    }));

    setCurrentScenario(nextScenario);

    sendData(currentScenario, userInfo[scenarios[currentScenario].inputType]);
  }

// const handleAISubmit = async () => {
//   if (!inputValue.trim()) return; // Prevent empty submissions

//   setMessages((prevMessages) => [
//     ...prevMessages,
//     { sender: "user", text: inputValue },
//   ]);

//   setInputValue(""); // Clear the input field
//   setIsTyping(true); // Show typing indicator

//   try {
//     const response = await axios.post("/bot", { input: inputValue });
//     console.log("Response from backend:", response.data);
//     const data = response.data;

//     if (data.message) {
//       const formattedMessage = data.message
//         .split("\n")
//         .filter(line => line.trim()) // Remove empty lines
//         .map((line, index) => {
//           // Format headings (lines ending with :)
//           if (line.trim().endsWith(':')) {
//             return `<h3 class="response-heading">${line.trim().replace(':', '')}</h3>`;
//           }
//           // Format code blocks (lines wrapped in ```)
//           else if (line.trim().startsWith('```') && line.trim().endsWith('```')) {
//             const codeContent = line.trim().slice(3, -3);
//             return `<pre class="response-code">${codeContent}</pre>`;
//           }
//           // Format regular lines with bullet points
//           else {
//             return `<li class="response-item">
//                       <span class="bullet">•</span>
//                       <span class="response-text">${line.trim()}</span>
//                     </li>`;
//           }
//         })
//         .join("");

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           sender: "bot",
//           text: data.message,
//           htmlContent: `<div class="ai-response-container">
//                           <div class="ai-response-content">
//                             ${formattedMessage.includes('<li') 
//                               ? `<ul class="response-list">${formattedMessage}</ul>` 
//                               : formattedMessage}
//                           </div>
//                         </div>`,
//         },
//       ]);
//     } else {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           sender: "bot",
//           text: "Je suis désolé, je n'ai pas pu générer de réponse.",
//           htmlContent: `<div class="ai-error-message">
//                           <div class="ai-avatar">AI</div>
//                           <div class="error-text">Je suis désolé, je n'ai pas pu générer de réponse.</div>
//                         </div>`
//         },
//       ]);
//     }
//   } catch (error) {
//     console.error("Error fetching bot response:", error);
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       {
//         sender: "bot",
//         text: "Une erreur s'est produite. Veuillez réessayer plus tard.",
//         htmlContent: `<div class="ai-error-message">
//                         <div class="ai-avatar">AI</div>
//                         <div class="error-text">Une erreur s'est produite. Veuillez réessayer plus tard.</div>
//                       </div>`
//       },
//     ]);
//   } finally {
//     setIsTyping(false); // Hide typing indicator
//   }
// };


  const displayMessageWithTypingIndicator = (message, sender) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender },
      ]);
      setIsTyping(false);
    }, 3000);
  };

  
  
  

  const handleOptionClick = (selectedOptionLabel, nextScenario) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: selectedOptionLabel, sender: "user" },
    ]);
    
    if (
      selectedOptionLabel === "Entrepreneur" ||
      selectedOptionLabel === "Autre" ||
      selectedOptionLabel === "Particulier" ||
      selectedOptionLabel === "Entreprise" ||
      selectedOptionLabel === ""
    ) {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse,
        "bot"
      );
      setTimeout(() => {
        displayMessageWithTypingIndicator(
          scenarios[nextScenario].question,
          "bot"
        );
        setCurrentScenario(nextScenario);
      }, 3000);
    }  else if (nextScenario === "phone") {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse,
        "bot"
      );
      setTimeout(() => {
        displayMessageWithTypingIndicator(
          scenarios[nextScenario].question,
          "bot"
        );
        setCurrentScenario(nextScenario);
      }, 6000);
    } else {
      displayMessageWithTypingIndicator(
        scenarios[currentScenario].botResponse,
        "bot"
      );
      setTimeout(() => {
        displayMessageWithTypingIndicator(
          scenarios[nextScenario].question,
          "bot"
        );
        setCurrentScenario(nextScenario);
      }, 3000);
      
    }
    sendData(
      currentScenario,
      selectedOptionLabel,
      userInfo[scenarios[currentScenario].inputType]
    );
  };

  const displayMessageLineByLine = (message, sender) => {
    const text = React.Children.toArray(message.props.children)
      .map((child) =>
        typeof child === "string" ? child : child.props.children
      )
      .flat()
      .join("\n");

    const lines = text.split("\n").filter((line) => line.trim() !== "");

    setIsTyping(true); // Start typing indicator

    const displayNextLine = async (index) => {
      if (index < lines.length) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: lines[index], sender },
        ]);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        displayNextLine(index + 1);
        setIsTyping(false);
      } else {
        setIsTyping(false);
      }
    };

    displayNextLine(0);
  };



// const displaycardcourse = () => {
//   const courseCard = (
//     <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300 mb-4">
//       <div className="flex overflow-x-auto space-x-4 mb-4">
//         {ads?.map((a, index) => (
//           <div key={index} className="course-card flex-shrink-0 w-64">
//             <img
//               src={a.imageUrl}
//               alt=""
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <div className="text-gray-800 mt-2 font-semibold">
//               {a.title}
//             </div>
//             {/* Set a fixed height for mainText */}
//             <p
//               className="text-sm text-gray-600 mt-2 h-12 overflow-hidden text-ellipsis"
//               style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
//             >
//               {a.mainText}
//             </p>
//             <button
//               onClick={() => {
//                 setChatVisible(false); // Close the chat
//                 if (a.link.startsWith("http")) {
//                   // Open external links
//                   window.open(a.link, "_blank");
//                 } else {
//                   // Scroll to internal section
//                   const section = document.querySelector(a.link);
//                   if (section) {
//                     section.scrollIntoView({ behavior: "smooth" });
//                   } else {
//                     console.warn("Section not found:", a.link);
//                   }
//                 }
//               }}
//               className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Plus Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   setMessages((prevMessages) => [
//     ...prevMessages,
//     { text: courseCard, sender: "bot" },
//   ]);
// };
const displaycardcourse = () => {
  if (!ads || ads.length === 0) {
    // Return nothing if ads data is empty or undefined
    return null;
  }

  const courseCard = (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300 mb-4">
      <div className="flex overflow-x-auto space-x-4 mb-4">
        {ads.map((a, index) => (
          <div key={index} className="course-card flex-shrink-0 w-64">
            <img
              src={a.imageUrl}
              alt=""
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="text-gray-800 mt-2 font-semibold">{a.title}</div>
            <p
              className="text-sm text-gray-600 mt-2 h-12 overflow-hidden text-ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {a.mainText}
            </p>
            <button
              onClick={() => {
                setChatVisible(false); // Close the chat
                if (a.link.startsWith("http")) {
                  // Open external links
                  window.open(a.link, "_blank");
                } else {
                  // Scroll to internal section
                  const section = document.querySelector(a.link);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  } else {
                    console.warn("Section not found:", a.link);
                  }
                }
              }}
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Plus Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  setMessages((prevMessages) => [
    ...prevMessages,
    { text: courseCard, sender: "bot" },
  ]);
};



  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isChatVisible && !isTyping) {
      if (!hasShownInitialMessage) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setHasShownInitialMessage(true);
          setHasInteracted(true);
        }, 900);
      }
    }
  }, [isChatVisible, isTyping]);

  const toggleChatVisibility = () => {
    setChatVisible(!isChatVisible);
    if (!hasInteracted) {
      setHasInteracted(true);
      setIsTyping(true);
      displaycardcourse();
      // setTimeout(() => {
      // }, 3000);
        displayMessageLineByLine(scenarios.besoin.question, "bot");

        setCurrentScenario("besoin");
        setIsTyping(false);
    } else if (!isChatVisible) {
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
        }
      }, 0);
    }
  };

  const closeChat = () => {
    setChatVisible(false);
  };

  // const handleInitialMessage = () => {
  //   if (isFirstVisit) {
  //     displayMessageWithTypingIndicator(
  //       "Bonjour 👋, besoin d'aide ? 😃",
  //       "bot"
  //     );
  //     setIsFirstVisit(false); // Prevent it from showing again
  //   }
  // };

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  // useEffect(() => {
  //   if (isChatVisible) {
  //     handleInitialMessage();
  //   }
  // }, [isChatVisible]);

  return (
    <div>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-4 z-50 right-4 flex items-center cursor-pointer">
        {isChatVisible ? (
          <button
            onClick={closeChat}
            className="bg-black text-white hover:bg-gray-800 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <div className="flex items-center  text-black  p-1">
            {!hasInteracted ? (
              // <img
              //   src={iconbot}
              //   onClick={toggleChatVisibility}
              //   alt="Bot Logo"
              //   className="w-16 h-16"
              // />
              <div className="bg-[#97d197] shadow-lg rounded-lg p-3">
                <span className="text-sm font-semibold">
                  Bonjour 👋, besoin d'aide ? 😃
                </span>
                <p
                  onClick={toggleChatVisibility}
                  className="text-sm mt-1 cursor-pointer text-center rounded-lg w-48 py-4 bg-gray-200 text-black hover:bg-black hover:text-white"
                >
                  👉 Par ici la démo 😀
                </p>
              </div>
            ) : (
              
              <img
                src={iconbot}
                onClick={toggleChatVisibility}
                alt="Bot Logo"
                className="w-16 h-16 object-contain"
              />
            )}
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {isChatVisible && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeChat}
          ></div>

          {/* Chat Window */}
          <div className="fixed bottom-16 right-4 bg-gray-200 border border-gray-600 rounded-lg mb-2 pb-2 w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-md max-w-sm z-50">
            {/* Header */}
            <div className="flex items-center bg-[#97d197] space-x-2 text-white p-2  rounded-t-lg">
              <img src={ai} alt="BotLogo" className="w-10 bg-gray-900 items-center justify-center rounded-full object-contain h-10" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Strategic partner</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-100">
                  {isTyping ? "En train d'écrire..." : "En ligne"}
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              className="h-[336px] w-full overflow-y-auto flex flex-col px-2"
              ref={chatContainerRef}
            >
              {/* {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end text-xs"
                      : "justify-start text-sm items-center"
                  } mb-2`}
                >
                  {msg.sender === "bot" && (
                    <img
                      src={bull}
                      alt="Bot"
                      className="w-12 h-12  object-contain mr-2"
                    />
                  )}

                   {msg.htmlContent ? (
        <div
        className={`p-2 max-w-xs text-xs rounded-lg ${
          msg.sender === "user"
            ? "bg-blue-500 text-white text-sm"
            : "bg-gray-200 text-gray-800"
        }`}
          dangerouslySetInnerHTML={{ __html: msg.htmlContent }} // Render HTML safely
        />
      ) : (
        <span  className={`p-2 max-w-xs text-xs rounded-lg ${
          msg.sender === "user"
            ? "bg-blue-500 text-white text-sm"
            : "bg-gray-200 text-gray-800"
        }`}>
          {msg.text}</span> // Otherwise, render the plain text
      )}
                </div>
              ))} */}
     {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.sender === "user"
          ? "justify-end text-xs"
          : "justify-start text-sm items-center"
      } mb-2`}
    >
      {msg.sender === "bot" && (
        <img
          src={bull}
          alt="Bot"
          className="w-12 h-12 object-contain mr-2"
        />
      )}

      {msg.htmlContent ? (
        <div
          className={`p-2 max-w-xs text-xs rounded-lg ${
            msg.sender === "user"
              ? "bg-blue-500 text-white text-sm"
              : "bg-gray-200 text-gray-800"
          }`}
          dangerouslySetInnerHTML={{ __html: msg.htmlContent }} // Render structured HTML
        />
      ) : (
        <span
          className={`p-2 max-w-xs text-xs rounded-lg ${
            msg.sender === "user"
              ? "bg-blue-500 text-white text-sm"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {msg.text}
        </span>
      )}
    </div>
  ))}

              {isTyping && (
                <div className="flex items-center">
                  <img
                    src={bull}
                    alt="Typing..."
                    className="w-12 h-12 object-contain mr-2"
                  />
                  <div className="text-gray-500 text-xs font-bold">
                    Bot est en train d'écrire...
                  </div>
                </div>
              )}
            </div>

            {/* Options or Input */}
            <div className="mt-4 px-4">
              <div className="border-b border-gray-500 mb-2"></div>
              {!isTyping && scenarios[currentScenario]?.options && (
                <div className="flex flex-row items-end space-x-1 mb-4">
                  {scenarios[currentScenario].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleOptionClick(option.label, option.next)
                      }
                      className="text-blue-500 border text-xs border-blue-500 py-1 px-1 rounded-lg hover:bg-blue-500 hover:text-white"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="mt-4">
                {/* Specific Scenario Input */}
                {scenarios[currentScenario]?.inputType ? (
                  <div className="flex items-center gap-2 mb-2 justify-between">
                    <input
                      type={scenarios[currentScenario].inputType}
                      placeholder={`Entrez votre ${
                        scenarios[currentScenario].inputType === "email"
                          ? "email"
                          : scenarios[currentScenario].inputType === "name"
                          ? "prenom"
                          : scenarios[currentScenario].inputType === "lastname"
                          ? 'nom'
                          : scenarios[currentScenario].inputType ===
                            "phone (+33 xxxxxxxxx)"
                          ? "numéro de téléphone"
                          : ''
                      }`}
                      value={
                        userInfo[scenarios[currentScenario].inputType] || ""
                      }
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          [scenarios[currentScenario].inputType]:
                            e.target.value,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleInputSubmit(); // Trigger submission on Enter
                        }
                      }}
                      className="bg-white border text-sm rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    <button
                      onClick={handleInputSubmit}
                      className="text-white bg-[#97d197] px-4 py-2 rounded-lg hover:bg-[#97d197]"
                    >
                      Envoyer
                    </button>
                  </div>
                ) : (
                  // General Chat Input
                  <div className="flex items-center gap-2 justify-between">
                    <input
                      type="text"
                      placeholder="Comment puis-je vous aider ?"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAISubmit(); // Call the submit function
                        }
                      }}
                      className="bg-white border text-sm rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                    <button
                      onClick={handleAISubmit}
                      className="text-white bg-[#97d197] px-4 py-2 rounded-lg hover:bg-green-400"
                    >
                      Envoyer
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatbotDemo;