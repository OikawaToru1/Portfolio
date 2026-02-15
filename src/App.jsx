import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoArrowRight } from "react-icons/go";
import ProjectBox from "./Components/ProjectBox";
import fuzzychat from "../src/assets/project-images/fuzzychat.png";
import { Link } from "react-router";


function App() {
  const theme = false;

  const sideBar = [
    {
      field : "About",
      link : '/about'
    },
    {
      field : "Projects",
      link : '/projects'
    },
    {
      field : "Contact",
      link : '/contact'
    },
  ]

  return (
    <div className={`flex  h-screen w-full overflow-hidden ${theme ? "bg-[#0a0a0a]" : "bg-slate-50"} `}>

      <aside
        className={` hidden md:flex flex-col shrink-0 w-64 lg:w-72 h-full border-r border-gray-100 transition-all duration-300 `}
      >
      {
        sideBar.map(opt=> <p className="font-bold"><Link to={opt.link}>{opt.field}</Link></p>)
      }

      </aside>

      <main className="flex-1 flex flex-col  w-full h-full overflow-hidden relative ">
        <div className="flex-1  overflow-y-auto custom-scrollbar  ">
          <div className="w-full  max-w-2xl px-12 lg:px-24 h-102 flex flex-col gap-8 justify-end bg-red-300">
            <div>
              <h1 className="md:text-2xl text-xl font-semibold md:font-bold">
                Hi, I'm Aniket
              </h1>
              <h3 className="md:text-xl text-lg text-gray-500 ">
                Final-year Computer Engineering student
              </h3>
              <p className="text-lg my-10">
                I enjoy building clean, responsive websites and learning modern
                technologies to create meaningful digital experiences.
              </p>
              <span className="flex items-center gap-1 text-lg hover:bg-blue-400 hover:cursor-pointer w-40 ">
                Learn more
                <GoArrowRight />
              </span>
            </div>
          </div>

          <div className="w-full max-w-2xl px-12 lg:px-24 h-80 flex flex-col gap-8 mt-10 border-t  border-gray-200  ">
            <div className="mt-10">
              <h1 className="md:text-xl text-xl font-semibold md:font-bold">
                Personal Projects
              </h1>

              <p className="text-lg my-10">
                I enjoy building clean, responsive websites and learning modern
                technologies to create meaningful digital experiences.
              </p>
            </div>
          </div>

          <div className="w-4/5 max-h-md overflow-y-auto scroll-auto mb-10  grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
            <ProjectBox
              img={fuzzychat}
              name={"FuzzyChat"}
              description={"A chat-app with basic implementation of socket.io"}
              tools={["React, Express", "Postgresql", "Socket.io", "Prisma"]}
              url="https://github.com/OikawaToru1/fuzzy-chat"
            />

            <ProjectBox
              name={"StudyHive"}
              description={
                "A platform that promotes and provides focused study sessions "
              }
              tools={[
                "React, Express",
                "Postgresql",
                "WebRTC",
                "Socket.io",
                "Prisma",
              ]}
              url="https://github.com/OikawaToru1/StudyHive/tree/main"
            />
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
