import React, { useState } from "react";
import { faqData } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // FontAwesome icon
import Title from "./Title";

const Faq = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="lg:mt-32 mt-4">
        <Title
          title="Questions Fréquemment Posées"
           className="md:max-w-md text-black text-start lg:max-w-3xl lg:text-lg text-md"
          text="Trouvez rapidement des réponses à vos questions grâce à notre section dédiée aux Questions Fréquemment Posées."
        />
      <div className="container relative z-2 grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
        {/* Left Panel */}
        <div className="lg:flex hidden items-center justify-center">
          <div>
            {/* <h2 className="md:max-w-md text-black lg:max-w-2xl text-center lg:text-xl text-md">
              Questions Fréquemment Posées
            </h2> */}
            <p className="text-gray-700 mb-4 md:max-w-md lg:max-w-2xl text-center lg:text-xl text-sm">
              Pour plus de questions, contactez-nous via <br /> L'email où Formulaire.
            </p>

            {/* Contact Button */}
            <div className="lg:ml-28 ml-16">
            <Button href="/formaulaire" className="hover:bg-[#5ea76c] bg-[#77be89] text-white text-lg rounded-lg flex items-center px-6 py-2 transition duration-300">
              <Link className="mr-2 font-semibold" >
                Formulaire
              </Link>
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-4 rounded-lg shadow-lg">
          <ul className="space-y-4">
            {faqData.map((faq, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-black">{index + 1}.</span>
                    <span className="text-black">{faq.question}</span>
                  </span>
                  <span className="text-gray-500">
                    {selectedQuestionIndex === index ? "-" : "+"}
                  </span>
                </button>
                {selectedQuestionIndex === index && (
                  <div className="p-4 lg:text-justify text-start text-sm text-gray-700 border-t border-gray-300">
                    {faq.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden flex  items-center justify-center">
          <div>
            {/* <h2 className="md:max-w-md text-black lg:max-w-2xl text-center lg:text-xl text-md">
              Questions Fréquemment Posées
            </h2> */}
            <p className="text-gray-700 mb-4 md:max-w-md lg:max-w-2xl text-center lg:text-xl text-sm">
              Pour plus de questions, contactez-nous via <br /> L'email où Formulaire.
            </p>

            {/* Contact Button */}
            <div className="lg:ml-28 flex ml-16">
            {/* <Button href="/formaulaire" className="hover:bg-[#5ea76c] text-white text-lg justify-end rounded-lg flex items-center bg-[#77be89] transition">
              <Link className="mr-2 font-semibold">
                Formulaire
              </Link>
              <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            </Button> */}
             <Button href="/formaulaire" className="hover:bg-[#5ea76c] bg-[#77be89] text-white text-lg rounded-lg flex items-center px-6 py-2 transition duration-300">
              <Link className="mr-2 font-semibold" >
                Formulaire
              </Link>
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
