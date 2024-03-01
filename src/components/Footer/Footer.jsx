import GitHub from "../Icons/GitHub";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="text-primary w-full py-10 bg-secondary flex flex-col justify-center items-center gap-5"
    >
      <h2 className="font-bold text-2xl">let's talk!</h2>
      <a
        href={"mailto:ahmedelshiekh1@gmail.com"}
        className="border-primary bg-secondary hover:bg-primary border-2 hover:text-secondary p-2 text-xl w-24 text-center transition-all ease-in-out duration-150 rounded"
      >
        say hi
      </a>
      <a
        href="https://github.com/RakimKai"
        target="_blank"
        className="flex justify-center items-center "
      >
        <GitHub />
      </a>
    </footer>
  );
};

export default Footer;
