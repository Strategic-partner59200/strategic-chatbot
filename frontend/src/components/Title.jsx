import TagLine from "./Tagline";

const Title = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto lg:mb-12 md:text-center`}
    >
      {tag && <TagLine className="mb-2 h1 font-bold text-center text-lg text-[#b1e2be] md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h1 text-center">{title}</h2>}
      {text && <p className="body-2 text-center  mr-0 px-4 lg:p-0 lg:px-4 mt-2">{text}</p>}
    </div>
  );
};

export default Title;
