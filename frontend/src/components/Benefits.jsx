import { benefits } from "../constants";
import Section from "./Section";
import ClipPath from "../assets/svg/ClipPath";
import Title from "./Title";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Title
          title="Optimisez votre service client"
          className="md:max-w-md text-black lg:max-w-2xl text-center lg:text-sm text-md"
          text="Améliorez l'efficacité de votre service client grâce à notre solution intelligente. Offrez un support 24/7 et optimisez l'interaction avec vos clients pour mieux répondre à leurs besoins."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 lg:grid-cols-3  gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group relative block border border-gray-600 p-0.5 bg-no-repeat bg-cover bg-center transition-all duration-300 hover:scale-105"
              style={{
                height: "22rem", // Adjust height as per your design
                width: "100%", // Ensure the width is consistent
                borderRadius: "8px", // Optional: Rounded corners
                padding: "1rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Initially Display Image */}
              <div className="realtive h-[70%] inset-0 transition-opacity duration-300 group-hover:opacity-0">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    // width={380}
                    // height={362}
                    alt={item.title}
                    className="w-full h-full object-contain opacity-70 border border-md rounded-md"
                  />
                )}
                <div className="absolute inset-0 mb-2  flex items-end justify-center">
                  <h5 className="lg:text-xl text-md text-center bg-opacity-40 bg-white px-3 py-1 rounded">
                    {item.title}
                  </h5>
                </div>
              </div>

              {/* Content that becomes visible on hover */}

              <div className="absolute inset-0 border border-md rounded-md flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-non  pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white bg-opacity-50 z-10">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
              </div>

              {/*         
              {item.light && <GradientLight />} */}

              {/* Optional Clip Path */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
