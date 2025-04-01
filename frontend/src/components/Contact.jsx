import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Section from "./Section";
import Title from "./Title";
import Button from "./Button";
import aibotgen from "../../src/assets/aibotgen.png";
import { smallSphere, stars } from "../assets";
import heroai from "../../src/assets/heroai.png";

const Contact = () => {
  return (
    <Section id="contact" className="mt-12  py-12">
      {/* Decorative Sphere and Stars */}
      <div className="hidden relative justify-center mb-16 lg:flex">
        <img
          src={smallSphere}
          className="relative z-10"
          width={255}
          height={255}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div>

      {/* Title Section */}
      <Title
        className="md:max-w-md text-black lg:max-w-2xl text-center lg:text-xl text-md"
        title="Contact"
        text="Pour toute question ou assistance, n'hésitez pas à nous contacter via notre formulaire en ligne ou par email. Nous sommes là pour vous aider !"
      />

      {/* Contact Details and Image */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={heroai}
            alt="Service"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* Contact Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between space-y-8">
          {/* Address, Phone, Email */}
          {/* <div className="space-y-6">
            <div>
              <h5 className="text-xl font-semibold text-gray-900">Notre Adresse</h5>
              <p className="text-gray-600">123 Rue de l'Innovation, Paris, France</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-gray-900">Téléphone</h5>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-gray-900">Email</h5>
              <p className="text-gray-600">botgeneration.ai@gmail.com</p>
            </div>
          </div> */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col">
              <h5 className="lg:text-xl text-md font-semibold text-gray-900 mb-2">
                Adresse
              </h5>
              <p className="lg:text-lg text-md text-gray-700">
              99c boulevard Constantin Descat, 59200 Tourcoing, France
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="lg:text-xl text-md font-semibold text-gray-900 mb-2">
                Téléphone
              </h5>
              <p className="lg:text-lg text-md text-gray-700">
              +33 6 10 08 33 86
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="lg:text-xl text-md font-semibold text-gray-900 mb-2">
                Email
              </h5>
              <p className="lg:text-lg text-md text-gray-700">
                strategic.partnerfrance@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h5 className="lg:text-xl text-md font-semibold text-gray-900 mb-4">
              Suivez-nous
            </h5>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/people/Botgenerationia/61569901421109/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/botgeneration.ia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/company/leadsgenerationai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          {/* Contact Form Button */}
          <div className="flex">
            <Button
              href="/formaulaire"
              className="hover:bg-[#5ea76c] bg-[#77be89] text-white text-lg rounded-lg flex items-center px-6 py-2 transition duration-300"
            >
              <Link className="mr-2 font-semibold">Formulaire</Link>
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
