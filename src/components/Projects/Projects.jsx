import Project from "../Project/Project";
import projects from "../../../public/projects";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [title, setTitle] = useState(projects[0].title);
  const [description, setDescription] = useState(projects[0].description);
  const [demo, setDemo] = useState(projects[0].demo);
  const [repo, setRepo] = useState(projects[0].repo);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);

  const [first, setFirst] = useState(
    "bg-gradient-to-r from-primary via-secondary"
  );
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const elementRef = useRef();
  const projectsRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.accessKey) {
            setIsVisible(true);
          } else {
            setIsVisibleProjects(true);
          }
          setIsAnimating(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(elementRef.current);
    observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  const clear = () => {
    setFirst("");
    setSecond("");
    setThird("");
    setFourth("");
  };
  const setProject = (index) => {
    setTitle(projects[index].title);
    setDescription(projects[index].description);
    setDemo(projects[index].demo);
    setRepo(projects[index].repo);
    if (title != projects[index].title) setIsAnimating(!isAnimating);
    switch (index) {
      case 1:
        clear();
        setSecond("bg-gradient-to-r from-primary via-secondary");
        break;
      case 2:
        clear();
        setThird("bg-gradient-to-r from-primary via-secondary");
        break;
      case 3:
        clear();
        setFourth("bg-gradient-to-r from-primary via-secondary");
        break;
      default:
        clear();
        setFirst("bg-gradient-to-r from-primary via-secondary");
        break;
    }
  };

  return (
    <div
      ref={elementRef}
      accessKey="1"
      id="projects"
      className="pt-20 h-[600px] md:h-full "
    >
      <div className="flex justify-center items-center">
        <div
          className={`w-1/2 bg-secondary ${
            isVisible ? "animate-slideInNoDelay" : "opacity-0 translate-y-10"
          }  h-1 rounded-xl`}
        />
        <h2
          className={`xl:text-6xl md:text-4xl  text-2xl text-center font-bold text-secondary ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }  px-5 `}
        >
          Some Things I’ve Built
        </h2>
        <div
          className={`w-1/2  bg-secondary ${
            isVisible ? "animate-slideInRight" : "opacity-0 translate-y-10"
          }  h-1 rounded-xl`}
        />
      </div>
      <div className="flex md:py-20 flex-col h-1/2 md:h-full   flex-wrap  md:flex-nowrap justify-center w-full  items-center 2xl:justify-between md:justify-between md:flex-row 2xl:flex-row  md:px-20    2xl:px-0  2xl:pt-36">
        <div
          ref={projectsRef}
          className={`justify-center h-1/6 md:h-full pb-12  gap-5  flex-wrap md:flex-col md:text-xl items-center flex 2xl:pl-[400px] md:pl-[100px] md:items-start   2xl:gap-2 md:gap-2  md:w-1/2 w-full  overflow-hidden font-semibold  xl:text-3xl  text-base  text-thirdary ${
            isVisibleProjects
              ? "animate-slideInNoDelay"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            onClick={() => setProject(0)}
            className={`cursor-pointer ${
              first ? "text-secondary " : "hover:text-secondary"
            }   transition-all ease-in-out duration-200`}
          >
            .workNet
            <div className={` ${first} mt-1 rounded w-full h-[3px]`} />
          </h3>
          <h3
            onClick={() => setProject(1)}
            className={`cursor-pointer ${
              second ? "text-secondary " : "hover:text-secondary"
            }   transition-all ease-in-out duration-200`}
          >
            .gymBuddy
            <div className={` ${second} mt-1 rounded w-full h-[3px]`} />
          </h3>
          <h3
            onClick={() => setProject(2)}
            className={`cursor-pointer ${
              third ? "text-secondary" : "hover:text-secondary"
            }   transition-all ease-in-out duration-200`}
          >
            .gymBuddyApi
            <div className={` ${third} mt-1 rounded w-full h-[3px]`} />
          </h3>
          <h3
            onClick={() => setProject(3)}
            className={`cursor-pointer ${
              fourth ? "text-secondary" : "hover:text-secondary"
            }   transition-all ease-in-out duration-200`}
          >
            .artistRoadmap
            <div className={` ${fourth} mt-1 rounded w-full h-[3px]`} />
          </h3>
        </div>
        <div
          ref={projectsRef}
          className="flex w-2/3 h-2/3  md:h-[350px] 2xl:pr-20 xl:pt-10 2xl:pt-5 "
        >
          <Project
            key={isAnimating && isVisibleProjects ? "animate" : "no-animate"}
            title={title}
            description={description}
            demo={demo}
            repo={repo}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
