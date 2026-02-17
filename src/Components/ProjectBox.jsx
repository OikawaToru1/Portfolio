import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function ProjectBox({ url, name, description, tools }) {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
      <div className= {`group relative flex flex-col w-full overflow-hidden rounded-2xl border ${darkTheme ? 'border-gray-700 bg-slate-50' : 'border-gray-200 bg-white'} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
        <Link to={url}>
        <div className="aspect-video w-full overflow-hidden">
          <div
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${darkTheme ? 'bg-gray-800 text-slate-50' : 'bg-black text-white'} text-2xl flex justify-center items-center transition-colors duration-500`}
            alt="project image"
          >
            <h1>{name}</h1>
          </div>
        </div>

        <div className= {`flex flex-col p-5 `}>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            {name}
          </h1>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        </Link>
      </div>

  );
}

export default ProjectBox;
