import { useState } from "react";

const Card = ({
  content,
  frontContent,
  flipped,
  email,
  github,
  age,
  animate,
}) => {
  const [isFlipped, setIsFlipped] = useState(flipped);
  return (
    <>
      <div className="2xl:w-[400px] 2xl:h-[300px] w-[350px] h-[250px]">
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          className={`animate-${animate}  opacity-0 card ${
            isFlipped ? "flipped" : ""
          }`}
        >
          <div className="card-inner border-background">
            <div className="card-front">
              <p className="text-4xl font-bold text-secondary">
                {frontContent}
              </p>
            </div>
            <div className="card-back pr-1">
              <div className="md:text-lg text-base p-3 text-thirdary text-center font-medium sm:leading-loose leading-normal  ">
                {content}
              </div>
              {email && (
                <div className="flex flex-col gap-4 justify-end sm:text-xl text-base md:text-lg text-secondary items-start ">
                  <p className=" font-semibold">
                    Email:{" "}
                    <span className="font-medium text-thirdary">{email}</span>
                  </p>
                  <p className="  font-semibold">
                    Age:{" "}
                    <span className="font-medium text-thirdary">{age}</span>
                  </p>
                  <p className=" text-secondary  font-semibold">
                    My github:{" "}
                    <a
                      href="https://github.com/RakimKai"
                      className="font-medium underline text-thirdary "
                      target="_blank"
                    >
                      {github}
                    </a>
                  </p>
                  <a
                    href={"/public/CV - Ahmed Elshiekh.pdf"}
                    download={"CV - Ahmed Elshiekh.pdf"}
                    className="bg-secondary border-secondary hover:bg-secondary/80 text-primary p-3 text-xl  transition-all ease-in-out duration-150 rounded"
                  >
                    Download my resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-[200px] w-1 bg-primary" />
      </div>
    </>
  );
};

export default Card;
