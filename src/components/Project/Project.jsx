const Project = ({ title, description, demo, repo }) => {
  return (
    <>
      <div className="flex flex-col  pt-1 w-full animate-slideInRight opacity-0 ">
        <h2 className="xl:text-4xl lg:text-3xl  text-xl md:text-start px-10 text-center font-medium text-secondary">
          {title}
        </h2>
        <div className="border-l-2 border-r-2 md:border-l-0 mt-3  border-secondary">
          <p className="md:text-xl xl:text-2xl  text-base  px-10 leading-relaxed md:text-start text-center">
            {description}
          </p>
          <div className="flex md:justify-end justify-center text-secondary text-xl gap-5 pt-5 md:pr-10  transition-all ease-in-out duration-150">
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="border-2 border-secondary p-3  md:text-xl text-base  hover:bg-secondary hover:text-primary transition-all ease-in-out duration-150 rounded"
              >
                View Demo
              </a>
            )}
            <a
              href={repo}
              target="_blank"
              className="border-2 border-secondary p-3 md:text-xl text-base  hover:bg-secondary hover:text-primary transition-all ease-in-out duration-150 rounded"
            >
              View Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
