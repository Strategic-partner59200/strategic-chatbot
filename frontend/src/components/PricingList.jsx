import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { check } from "../assets";
import { pricing } from "../constants";
// import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-14  [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          style={{ minHeight: "24rem" }}
        >
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-3xl text-color-1 mr-2"
            />
            <h4 className="h1 text-black">{item.title}</h4>
          </div>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/90">
            {item.description}
          </p>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                {/* <img src={check} width={24} height={24} alt="Check" />
                 */}
                 <img className="w-12 h-12 object-contain" src={check} alt="Check" />
                <p className="body-2 ml-2  mt-3">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
