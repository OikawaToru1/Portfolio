import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const projectsInfo = [
        {
            name : "FuzzyChat | 2025",
            description : "A real-time chat application built with React, Node.js, and Socket.io. It features user authentication, private messaging, and group chats.",
            link : "https://github.com/OikawaToru1/fuzzy-chat"
        },

        {
            name : "StudyHive- work in progress |2026",
            description : "A platform that promotes and provides focused study sessions ",
            link : "https://github.com/OikawaToru1/StudyHive/tree/main"
        },
        {
            name : "Eventora | 2025",
            description : "A web application that allows users to create and manage events. It helps events to reach a wider audience. ",
            link : 'https://github.com/OikawaToru1/Eventora'
        },
    ]
  return (
    <div
      className={`flex  h-screen w-full  ${darkTheme ? "text-slate-50 bg-gray-900" : "bg-slate-50 text-black"} transition-colors duration-500 `}
    >
      <main className="flex-1 flex flex-col items-center  w-full h-full transition-all duration-500">
        <div className="flex-1     ">
          <div className="w-full  max-w-2xl px-12 lg:px-24 h-1/3 flex flex-col gap-8 ">
            <div className='border-b pb-2 border-gray-300'>
              <h1 className="md:text-2xl text-xl font-semibold md:font-bold">
                My Projects.
              </h1>
             
            </div>
            {projectsInfo.map((project) => (
              <div key={project.name} className='mb-3 flex flex-col gap-2'>
                <h1 className='text-lg font-semibold '>
                  {project.name}
                </h1>
                <p className='text-base'>
                    {project.description}
                    </p>
                <Link to = {project.link}>
                  <FaGithub className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer ' />
                 </Link>
              </div>
            ))}
            
          </div>
        </div>
        <div>
         
        </div>
      </main>
    </div>
  )
}

export default Projects
