import Section from "./Section";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Title from "./Title";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <Section
    className="pt-8 md:pt-20"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
     >
      <div className="container relative lg:mt-32 mt-0 mb-12 z-2">
        <Title
          tag="Commencez avec LeadsGenerationAI"
          title="Payez une fois, utilisez pour toujours"
        />

        <div className="relative mt-4">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
     
      <Footer />
    </Section>
  );
};

export default Pricing;
