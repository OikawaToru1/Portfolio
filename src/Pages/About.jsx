import React from "react";
import { useSelector } from "react-redux";


function About() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className={`flex   h-screen w-full overflow-hidden ${darkTheme ? "text-slate-50 bg-gray-900" : "bg-slate-50 text-black"} transition-colors duration-500 `}
    >
      <main className="flex-1 flex flex-col items-center   w-full h-full transition-all duration-500">
        <div className="flex-1  overflow-y-auto   ">
          <div className="w-full  max-w-2xl px-12 lg:px-24 h-1/3 flex flex-col gap-8 ">
            <div>
              <h1 className="md:text-2xl text-xl font-semibold md:font-bold">
                About.
              </h1>

              <p className="text-lg my-10">
                Hi, I’m Aniket — a final-year computer engineering student
                passionate about building modern web applications. I specialize
                in full-stack development using React on the frontend and
                Node.js, Express, and PostgreSQL on the backend.
              </p>

              <p className="text-lg my-10">
                  I enjoy designing clean user interfaces, building secure authentication
                systems with Passport and OAuth, and deploying production-ready
                applications. 
              </p>
              <p className="text-lg my-10">

                I’m driven by curiosity, problem-solving, and
                continuous learning, and I’m always looking for opportunities to
                build meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
