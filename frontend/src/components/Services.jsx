import Section from "./Section";
import { check, ben } from "../assets";
import { brainwaveServices } from "../constants";
import Title from "./Title";

const Services = () => {
  return (
    <Section id="Comment-fonctionne" className="h-full relative">
      {/* Horizontal Gradient */}

      <div className="relative z-10 container">
        <Title
          title="Comment ça marche notre Chatbot"
          text="Intégrez facilement notre chatbot intelligent sur votre site web pour générer des prospects"
          className="md:max-w-md text-black lg:max-w-3xl  text-center lg:text-xl text-md"
        />

        <div className="relative">
          <div className="relative z-10 flex flex-col lg:flex-row  lg:h-[32rem] px-6 lg:p-6 border border-n-1/10 rounded-3xl overflow-hidden gap-8">
            {/* Image on the left */}
            <div className="w-full lg:w-1/2">
              <img
                src={ben}
                className="h-[200px] sm:h-[300px] w-full object-contain rounded-md"
                width={630}
                height={750}
                alt="Chatbot intégré"
              />
              <ul className="body-2 mt-4">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      className="w-12 h-12 object-contain"
                      src={check}
                      alt="Check"
                    />
                    <p className="ml-2 mt-3 text-black font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explanation about how the chatbot works on the right */}
            <div className="relative z-10 mt-2  lg:w-1/2 ">
              <h1 className="md:max-w-md text-black mt-2 lg:max-w-2xl text-start mb-8 lg:text-2xl text-sm">
                Comment fonctionne notre Chatbot
              </h1>

              <div className=" text-n-3">
                <p className="text-pretty consistent-spacing leading-relaxed lg:text-md text-sm mb-6">
                  <span className="text-lg">❖</span>
                  <span className="ml-2">
                    Notre chatbot utilise des scénarios préconfigurés pour
                    interagir avec vos visiteurs en temps réel. Il est conçu
                    pour répondre rapidement à leurs questions et les guider
                    dans leurs recherches d'informations.
                  </span>
                </p>

                <p className="text-pretty consistent-spacing leading-relaxed lg:text-md text-sm mb-6">
                  <span className="text-lg">❖</span>
                  <span className="ml-2 text-balance lg:px-0 px-2">
                    Notre chatbot peut aussi prendre en charge la génération de
                    prospects, en recueillant les informations clés et en les
                    envoyant directement dans votre tableau de bord.
                  </span>
                </p>
                <p className="text-pretty  text-start consistent-spacing leading-relaxed lg:text-md text-sm mb-6">
                  <span className="text-lg">❖</span>
                  <span className="ml-2 text-balance lg:px-0 px-2">
                    Il peut orienter les utilisateurs vers les informations
                    pertinentes en fonction des scénarios définis, assurant
                    ainsi une expérience fluide et efficace pour chaque
                    visiteur.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
