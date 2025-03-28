import React from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom";

const ThankYouPage = () => (
  <Section
    className="pt-20 md:pt-20  min-h-screen flex flex-col justify-center items-center p-6"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
  >
    <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        Merci pour remplir le formulaire! 🎉
      </h1>
      
      <p className="text-xl text-gray-700 text-center mb-6">
        Nous vous contacterons bientôt. 😊
      </p>
      
    

      
      <p className="text-lg text-gray-600 text-center mb-8">
        Nous sommes ravis de vous avoir parmi nos utilisateurs! 🚀
      </p>
      
      <div className="flex justify-center space-x-6">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Retour à l'accueil 🏠
        </Link>
        <Link
          to="/offres"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Découvrez nos offres 💼
        </Link>
      </div>
    </div>
  </Section>
);

export default ThankYouPage;
