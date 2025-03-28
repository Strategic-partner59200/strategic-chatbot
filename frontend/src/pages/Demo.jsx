import React, { useState } from "react";
import Section from "../components/Section";
import ChatbotDemo from "../components/ChatbotDemo";

const Demo = () => {
  const [displayBot, setDisplayBot] = useState(false);

  return (
    <>
      <Section
        className="pt-8 md:pt-20 md:px-2 px-4 bg-gray-50"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="max-w-4xl  mx-auto text-center space-y-8 max-h-full">
          {/* Header */}
          <h1 className="text-xl text-center mt-12  md:text-2xl font-extrabold text-gray-800">
            Comment fonctionne notre{" "}
            <span className="text-[#5ba85b]">Chatbot</span> ?
          </h1>
          <p className="px-0 sm:px-0 text-balance  text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed">
            Découvrez comment notre chatbot, alimenté par l'intelligence artificielle, s'intègre parfaitement à votre site web, génère des leads précieux et offre un tableau de bord pour une gestion optimisée.
          </p>

          {/* Features Grid */}
          {/* <div className="grid gap-8 md:grid-cols-3 mt-10">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
              <h2 className="text-lg font-bold text-[#5ba85b] mb-4">
                Intégration Simplifiée
              </h2>
              <p className="px-2 sm:px-4 text-start text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700">
              Ajoutez notre widget chatbot directement sur votre site web 
               Choisissez un scénario adapté à vos besoins pour interagir avec vos visiteurs de manière efficace et personnalisée.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
              <h2 className="text-lg font-bold text-[#5ba85b] mb-4">
                Génération de Leads
              </h2>
              <p className="px-0 sm:px-4 text-start text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700">
                Collectez automatiquement les informations clés de vos visiteurs. Notre chatbot transforme les interactions en opportunités, stockées directement dans un tableau de bord clair et accessible.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
              <h2 className="text-lg font-bold text-[#5ba85b] mb-4">
                Tableau de Bord Intuitif
              </h2>
              <p className="px-4 sm:px-4 text-start text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700">
                Suivez et analysez vos leads grâce à un tableau de bord intuitif. Prenez des décisions basées sur des données pour maximiser vos conversions et vos performances.
              </p>
            </div>
          </div> */}
          <div className="grid gap-8 md:grid-cols-3 mt-10">
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 flex flex-col">
    <h2 className="text-lg font-bold text-[#5ba85b] mb-4 h-10">
      Intégration Simplifiée
    </h2>
    <p className="px-4   text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700 flex-1">
      Ajoutez notre widget chatbot directement sur votre site web. Choisissez
      un scénario adapté à vos besoins pour interagir avec vos visiteurs de
      manière efficace et personnalisée.
    </p>
  </div>
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 flex flex-col">
    <h2 className="text-lg font-bold text-[#5ba85b] mb-4 h-10">
      Génération de Leads
    </h2>
    <p className="px-4 text-center text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700 flex-1">
      Collectez automatiquement les informations clés de vos visiteurs. Notre
      chatbot transforme les interactions en opportunités, stockées
      directement dans un tableau de bord clair et accessible.
    </p>
  </div>
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 flex flex-col">
    <h2 className="text-lg font-bold text-[#5ba85b] mb-4 h-10">
      Tableau de Bord Intuitif
    </h2>
    <p className="px-4 text-center text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700 flex-1">
      Suivez et analysez vos leads grâce à un tableau de bord intuitif.
      Prenez des décisions basées sur des données pour maximiser vos
      conversions et vos performances.
    </p>
  </div>
</div>


          {/* Call to Action */}
          <p className="text-gray-600 mt-12 text-start">
            Essayez notre solution dès maintenant et découvrez comment elle peut
            transformer votre activité en améliorant l'engagement client et la
            génération de leads.
          </p>
          <div className="pb-12">
          <button
            onClick={() => setDisplayBot(true)}
            className="px-8 py-4  bg-[#5ba85b] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#4a914a] transition duration-300"
          >
            Démarrer la Démo
          </button>
          </div>

      
        </div>
      </Section>

      {/* Chatbot Demo Display */}
      {displayBot && (
        <div className="mt-10">
          <ChatbotDemo />
        </div>
      )}
    </>
  );
};

export default Demo;
