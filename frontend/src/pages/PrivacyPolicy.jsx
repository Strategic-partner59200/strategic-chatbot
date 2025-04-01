import React from 'react';
import Section from '../components/Section';

const PrivacyPolicy = () => {
  return (
    <Section className="lg:mt-24 px-6 lg:px-20 py-10 bg-gray-50 text-gray-800">
      <h1 className="text-2xl underline font-bold text-center mb-6 text-black">
        Politique de Confidentialité de Strategic partner
      </h1>
      <p className="text-center text-gray-600 mb-8">
        <strong>Dernière mise à jour :</strong> 09-12-2024
      </p>

      <div className="space-y-6 leading-relaxed">
        <p>
          Chez <span className="font-semibold text-black">Strategic partner</span>, la protection de vos données personnelles est une priorité. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez nos services de création de chatbots personnalisés en scénarios et en intelligence artificielle.
        </p>
        <p>
          En accédant ou en utilisant notre site, vous acceptez la collecte et l’utilisation de vos données personnelles conformément à cette politique. Si vous n'êtes pas d'accord avec cette politique, vous devez cesser d’utiliser nos services.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Quelles données collectons-nous ?</h2>
        <p className="text-gray-700 mb-4">
        Nous collectons plusieurs types de données personnelles pour fournir et améliorer nos services :
        </p>
        <h3 className="text-xl font-medium text-gray-700 mb-2">1.1 Données que vous nous fournissez directement</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
        <li><span className='text-black font-semibold'>Informations d'inscription : </span> 
        Lorsque vous créez un compte sur notre site, nous collectons votre nom, votre adresse e-mail, et toute autre information nécessaire à la gestion de votre compte.
        </li>
        <li><span className='text-black font-semibold'>Contenu personnalisé :  </span> 
        Si vous créez un chatbot ou un scénario, nous collectons les informations et données que vous y saisissez (par exemple, le contenu des dialogues, les réponses automatisées, etc.).
        </li>
        <li><span className='text-black font-semibold'>Données de paiement : </span> 
        Si vous utilisez des services payants, nous collectons des informations de paiement, telles que des informations de carte bancaire ou des détails de facturation via nos prestataires de paiement externes.
        </li>
        </ul>
        <h3 className="text-xl font-medium text-gray-700 mt-6 mb-2">1.2 Données collectées automatiquement</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
        <li><span className='text-black font-semibold'>Données de navigation :  </span> 
        Nous collectons des données techniques liées à votre utilisation du site, telles que votre adresse IP, les pages que vous consultez, les informations sur votre appareil (type de navigateur, système d’exploitation), et des cookies (voir section 5 pour plus de détails).
        </li>
        <li><span className='text-black font-semibold'>Données d’utilisation : </span> 
        Nous recueillons des informations sur la manière dont vous interagissez avec nos services, par exemple, les fonctionnalités que vous utilisez, la durée de vos sessions, etc.
        </li>
        </ul>
        <h3 className="text-xl font-medium text-gray-700 mt-6 mb-2">1.3 Données sensibles</h3>
        <p className="text-gray-700">
        Nous ne collectons pas de données sensibles (par exemple, des données relatives à votre santé, votre origine ethnique, vos opinions politiques ou religieuses, etc.) à moins que cela ne soit expressément nécessaire pour la prestation de nos services et que vous nous en donniez votre consentement explicite.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Comment utilisons-nous vos données ?</h2>
        <p className="text-gray-700 mb-4">
        Nous utilisons les données que nous collectons pour les finalités suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
        <li><span className='text-black font-semibold'>Fournir nos services  : </span> 
        Gestion de votre compte, création et gestion de chatbots personnalisés, traitement des paiements, etc.
        </li>
        <li><span className='text-black font-semibold'>Améliorer nos services  : </span> 
        Analyse de l'utilisation de notre site et de nos fonctionnalités pour améliorer l'expérience utilisateur.
        </li>
        <li><span className='text-black font-semibold'>Communication : </span> 
        Nous pouvons utiliser vos coordonnées pour vous envoyer des informations relatives à votre compte, des mises à jour de service, des newsletters ou d'autres informations promotionnelles, si vous avez consenti à les recevoir.
        </li>
        <li><span className='text-black font-semibold'>Sécurité : </span> 
        Pour assurer la sécurité de notre site et de vos données, prévenir la fraude et répondre à toute violation de la sécurité.
        </li>
        <li><span className='text-black font-semibold'>Conformité légale : </span> 
        Nous pouvons être amenés à utiliser vos données pour répondre à des obligations légales ou réglementaires.
        </li>
        </ul>
      </section>

      {/* Repeat for other sections */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Partage de vos données personnelles</h2>
        <p className="text-gray-700 mb-4">
        Nous nous engageons à ne pas vendre ou louer vos données personnelles à des tiers. Toutefois, nous pouvons être amenés à partager vos données dans les situations suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
        <li><span className='text-black font-semibold'>Avec nos prestataires de services  : </span> 
        Nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident à fournir nos services (par exemple, les services de paiement, l'hébergement web, etc.). Ces prestataires n’utilisent vos données que pour exécuter des prestations spécifiques pour notre compte et sont tenus de protéger vos données.
        </li>
        <li><span className='text-black font-semibold'>Avec les autorités légales : </span> 
        Si la loi l'exige ou pour se conformer à une procédure judiciaire, nous pouvons partager vos données avec les autorités compétentes.
        </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Conservation de vos données</h2>
        <p className="text-gray-700">
        Nous conservons vos données personnelles pendant la durée nécessaire pour remplir les finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales applicables. En général, vos données seront conservées aussi longtemps que votre compte est actif, ou aussi longtemps que nécessaire pour fournir les services que vous demandez.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies et technologies similaires</h2>
        <p className="text-gray-700">
        Notre site utilise des <span className="text-blue-600">cookies</span> et d’autres technologies similaires pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre appareil qui permettent de mémoriser certaines informations. Vous pouvez refuser l’utilisation de cookies en ajustant les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités de notre site.
        <p className='mt-4'>
        Pour plus d’informations sur les cookies que nous utilisons, veuillez consulter notre {' '}
        <span className="text-blue-600">Politique en matière de cookies</span>.    
        </p> 
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Sécurité de vos données</h2>
        <p className="text-gray-700">
        Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, utilisation abusive, divulgation non autorisée, modification ou destruction. Cependant, aucun système de transmission de données ou de stockage électronique n'est entièrement sécurisé, et nous ne pouvons garantir une sécurité absolue.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Vos droits</h2>
        <p className="text-gray-700">
        Conformément à la législation applicable en matière de protection des données (notamment le RGPD), vous disposez de certains droits concernant vos données personnelles :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mt-2">
          <li><span className='text-black font-semibold'>Droit d'accès : </span> Vous avez le droit de demander l'accès aux données personnelles que nous détenons à votre sujet.</li>
          <li><span className='text-black font-semibold'>Droit de rectification :</span> Vous pouvez demander la correction de toute donnée personnelle incorrecte ou incomplète.</li>
          <li><span className='text-black font-semibold'>Droit à l'effacement :</span> Vous pouvez demander la suppression de vos données personnelles sous certaines conditions.</li>
          <li><span className='text-black font-semibold'>Droit à la limitation du traitement : </span> Vous pouvez demander la limitation du traitement de vos données dans certains cas.</li>
          <li><span className='text-black font-semibold'>Droit à la portabilité des données : </span> Vous avez le droit de demander la transmission de vos données personnelles dans un format structuré et couramment utilisé.</li>
          <li><span className='text-black font-semibold'>Droit d'opposition : </span> Vous pouvez vous opposer au traitement de vos données personnelles pour des raisons légitimes, notamment en ce qui concerne la prospection commerciale.</li>
        </ul>
        <p className="text-gray-700 mt-2">
        Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <a href="mailto:Botgeneration.ia@gmail.com" className="text-blue-600 hover:underline">
            Botgeneration.ia@gmail.com
          </a>. Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une plainte auprès de la <span className='text-black font-semibold'>CNIL</span> (Commission Nationale de l'Informatique et des Libertés).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Modifications de la politique</h2>
        <p className="text-gray-700">
        Nous pouvons mettre à jour cette politique de confidentialité à tout moment pour refléter les changements apportés à nos pratiques ou pour répondre à des exigences légales ou réglementaires. Nous vous informerons de toute modification substantielle par le biais de notre site ou par e-mail.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact</h2>
        <p className="text-gray-700">
        Si vous avez des questions concernant cette politique de confidentialité ou la manière dont nous traitons vos données personnelles, n'hésitez pas à nous contacter à l'adresse suivante :
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mt-2">
          <li><span className='text-black font-semibold'>Adresse : </span> 99c boulevard Constantin Descat, 59200 Tourcoing, France</li>
          <li><span className='text-black font-semibold'>E-mail : </span> 
          <a href="mailto:strategic.partnerfrance@gmail.com" className="text-gray-700  hover:underline hover:text-gray-900">
          strategic.partnerfrance@gmail.com
          </a>
            </li>
        </ul>
        </p>
      </section>
    </Section>
  );
};

export default PrivacyPolicy;
