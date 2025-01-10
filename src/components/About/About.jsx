import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Card from "../Card/Card";
import Arrow from "../Icons/Arrow";

const About = () => {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section id="about" className="pt-[100px]" ref={elementRef}>
        <div className="flex justify-center 2xl:w-2/3 w-full flex-wrap  m-auto 2xl:gap-12 gap-2  items-center">
          <Card
            animate={isVisible && "slideInNoDelay"}
            frontContent={"tech stack"}
            content={
              <div>
                <span className="text-secondary  ">Backend:</span>Java, C#, .NET,
                Laravel
                <br />
                <span className="text-secondary ">Frontend:</span> HTML, CSS,
                JavaScript, TypeScript, React, Angular
              </div>
            }
          />
          <Card
            animate={isVisible && "slideInRight"}
            frontContent={"about me"}
            content={
              <div>
                Hi, my name is <span className="text-secondary  ">Ahmed</span>{" "}
                <span className="text-secondary  ">Elshiekh</span>. I'm a
                third-year software engineering student from Travnik, Bosnia and
                Herzegovina. I love coding, boxing, the gym, music and cats.
                Crafting things from scratch is where I find immense joy, which
                is why I resonate with being a full-stack web developer.
              </div>
            }
          />
          <Card
            animate={isVisible && "slideInBottom"}
            frontContent={"additional info"}
            email={"ahmedelshiekh1@gmail.com"}
            github={"https://github.com/RakimKai"}
            age={22}
          />
        </div>
      </section>
      <div className="flex justify-center items-center h-[200px] xl:h-[400px]">
        <Arrow />
      </div>
    </>
  );
};

export default About;
