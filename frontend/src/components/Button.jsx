// import ButtonSvg from "../assets/svg/ButtonSvg";

// const Button = ({ className, href, onClick, children, px, white }) => {
//   const classes = `button relative inline-flex items-center justify-center text-md hover:bg-black h-11 transition-colors hover:text-white ${
//     px || "px-7"
//   } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
//   const spanClasses = "relative z-10";

//   const renderButton = () => (
//     <button className={classes} onClick={onClick}>
//       <span className={spanClasses}>{children}</span>
//       {ButtonSvg(white)}
//     </button>
//   );

//   const renderLink = () => (
//     <a href={href} className={classes}>
//       <span className={spanClasses}>{children}</span>
//       {ButtonSvg(white)}
//     </a>
//   );

//   return href ? renderLink() : renderButton();
// };

// export default Button;
import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center text-md hover:bg-black h-11 transition-colors hover:text-white ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <Link to={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
