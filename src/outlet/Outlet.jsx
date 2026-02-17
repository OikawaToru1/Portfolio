import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Layout({}) {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const sideBar = [
    {
      field: "About",
      link: "/about",
    },
    {
      field: "Projects",
      link: "/projects",
    },
    {
      field: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <Header />
      <div className={`flex  h-screen w-full overflow-hidden ${darkTheme ? "text-slate-50 bg-gray-900" : "bg-slate-50 text-black"} transition-colors duration-500 `}>
        <aside
          className={` hidden md:flex flex-col shrink-0 w-64 lg:w-72 h-full   `}>
          <div className= " h-1/4 flex flex-col gap-1.5 px-2">
            {sideBar.map((opt) => (
              <p key={opt.field} className="text-base font-semibold">
                <Link to={opt.link}>{opt.field}</Link>
              </p>
            ))}
          </div>
        </aside>
        <div>
            <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
