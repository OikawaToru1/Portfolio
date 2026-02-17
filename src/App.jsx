import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoArrowRight } from "react-icons/go";
import ProjectBox from "./Components/ProjectBox";
import fuzzychat from "../src/assets/project-images/fuzzychat.png";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <div
      className={`flex  h-screen w-full overflow-hidden ${darkTheme ? "text-white bg-gray-900" : "bg-slate-50 text-black"} transition-colors duration-500 `}
    >
      <main className="flex-1 flex flex-col items-center  w-full h-full transition-all duration-500">
        <div className="flex-1  overflow-y-auto   ">
          <div className="w-full  max-w-2xl px-12 lg:px-24 h-1/3 flex flex-col gap-8 ">
            <div>
              <h1 className="md:text-2xl text-xl font-semibold md:font-bold">
                Hi, I'm Aniket
              </h1>
              <h3
                className={`md:text-xl text-lg ${darkTheme ? "text-blue-400" : "text-blue-500"}`}
              >
                Final-year Computer Engineering student
              </h3>
              <p className="text-lg my-10">
                I enjoy building clean, responsive websites and learning modern
                technologies to create meaningful digital experiences.
              </p>
              <span className="flex items-center gap-1 text-lg hover:bg-blue-400 hover:cursor-pointer w-40 ">
               <Link className="flex items-center gap-2" to={'/about'}>
                Learn more
                <GoArrowRight />
               </Link>
              </span>
            </div>
          </div>

          <div
            className={`w-full max-w-2xl px-12 lg:px-24  flex flex-col gap-8 border-t transition-all duration-500 ${darkTheme ? "border-gray-700" : "border-gray-200"}  `}
          >
            <div className="mt-10">
              <h1 className="md:text-xl text-xl font-semibold md:font-bold">
                Personal Projects
              </h1>

              <p className="text-base my-10">
                Below are some of my personal projects.
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
