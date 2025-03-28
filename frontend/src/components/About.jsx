// import React from "react";
// import Section from "./Section";
// // import aibotgen from "../../src/assets/aibotgen.png";
// import aimobile from "../../src/assets/aimobile.png";

// const About = () => {
//   return (
//     <Section className="flex flex-col mb-16 lg:flex-row items-center justify-center lg:justify-between px-4 md:px-10 lg:px-32 py-10 space-y-8 lg:space-y-0">
//       {/* Image Section */}
//       <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px]">
//         <img
//           src={aimobile}
//           alt="Botgeneration Assistant - Enhance Your Sales"
//           className="w-full h-[400px] object-contain mx-auto"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="w-full text-center lg:text-left lg:w-1/2 text-black space-y-4">
//         <h1 className="text-2xl mb-4 md:text-3xl lg:text-4xl font-bold">
//           Pourquoi Nous ?
//         </h1>
//         <p className="text-lg mt-6 md:text-xl font-semibold">
//           Décuplez vos taux de transformation de leads.
//         </p>
//         <p className="text-base md:text-lg leading-relaxed">
//           Accélérez le processus de vente grâce à l'assistant personnel{" "}
//           <strong className="text-[#77be89]">Leadsgeneration.AI</strong>{" "}
//           exclusivement conçu pour les conseillers qui contactent les leads, les
//           conseille en temps réel en leur indiquant les bonnes pratiques à
//           suivre face à un prospect en ligne. Transformez vos conversations en
//           ventes potentielles.
//         </p>

//         {/* Boxes Section */}
//         <div className="w-full mt-10 space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Box 1 */}
//             <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-lg font-bold mb-4">
//                 <a href="#feature1" className="text-[#77be89] hover:underline">
//                   Analyse en Temps Réel
//                 </a>
//               </h3>
//               <p className="text-sm text-gray-700">
//                 Recevez des conseils instantanés sur la meilleure approche à
//                 adopter pour convertir vos leads en clients.
//               </p>
//             </div>

//             {/* Box 2 */}
//             <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-lg font-bold mb-4">
//                 <a href="#feature2" className="text-[#77be89] hover:underline">
//                   Automatisation Intelligente
//                 </a>
//               </h3>
//               <p className="text-sm text-gray-700">
//                 Simplifiez vos tâches quotidiennes grâce à l’automatisation des
//                 processus de suivi et d’engagement des prospects.
//               </p>
//             </div>

//             {/* Box 3 */}
//             <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-lg font-bold mb-4">
//                 <a href="#feature3" className="text-[#77be89] hover:underline">
//                   Support Personnalisé
//                 </a>
//               </h3>
//               <p className="text-sm text-gray-700">
//                 Bénéficiez d’un support dédié pour vous guider et optimiser vos
//                 interactions avec les clients potentiels.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default About;
import React from "react";
import Section from "./Section";
import Title from "./Title";

const About = () => {
  return (
    <Section className="flex flex-col mb-16 lg:flex-row items-center justify-center lg:justify-between px-4 md:px-10 lg:px-32 py-10 space-y-8 lg:space-y-0">
      {/* Content Section */}
      <div className="w-full text-center  text-black space-y-4">
      <Title
          title=" Pourquoi Nous ?"
          className="md:max-w-md text-black lg:max-w-2xl w-full text-center lg:text-xl text-md"
          text="Décuplez vos taux de transformation de leads."
        />

<p className="px-4 sm:px-6 text-start text-[14px] sm:text-[16px] font-normal leading-[1.6] sm:leading-relaxed text-gray-700">
  Accélérez le processus de vente grâce à l'assistant personnel{" "}
  <strong className="text-[#77be89] font-medium">Leadsgeneration.AI</strong>, 
  exclusivement conçu pour les conseillers qui contactent les leads et les 
  conseillent en temps réel. Il leur indique les bonnes pratiques à suivre face 
  à un prospect en ligne, transformant vos conversations en ventes potentielles.
</p>



        {/* Boxes Section */}
        <div className="w-full mt-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
            {/* Box 1 */}
            <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-4">
                <a href="#feature1" className="text-[#77be89] hover:underline">
                  Analyse en Temps Réel
                </a>
              </h3>
              <p className="lg:text-sm text-xs lg:text-justify text-center text-gray-700">
                Recevez des conseils instantanés sur la meilleure approche à
                adopter pour convertir vos leads en clients.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-4">
                <a href="#feature2" className="text-[#77be89] hover:underline">
                  Automatisation Intelligente
                </a>
              </h3>
              <p className="lg:text-sm text-xs lg:text-justify text-center text-gray-700">
                Simplifiez vos tâches quotidiennes grâce à l’automatisation des
                processus de suivi et d’engagement des prospects.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-4">
                <a href="#feature3" className="text-[#77be89] hover:underline">
                  Support Personnalisé
                </a>
              </h3>
              <p className="lg:text-sm text-xs lg:text-justify text-center text-gray-700">
                Bénéficiez d’un support dédié pour vous guider et optimiser vos
                interactions avec les clients potentiels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
