import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';

function Contact() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const contactInfo = [
    {
      type: "LinkedIn",
      value: "in/aniket-adhikari01/",
      link: "https://www.linkedin.com/in/aniket-adhikari01/"
    },
    {
      type: "Email",
      value: "aniketadhikari2@gmail.com",
      link: "mailto:aniketadhikari2@gmail.com"
    },
    {
      type: "GitHub",
      value: "OikawaToru1",
      link: "https://github.com/OikawaToru1"
    }
  ];
  return (
     <div
      className={`flex  h-screen w-full  ${darkTheme ? "text-slate-50 bg-gray-900" : "bg-slate-50 text-black"} transition-colors duration-500 `}
    >
      <main className="flex-1 flex flex-col items-center  w-full h-full transition-all duration-500">
        <div className="flex-1     ">
          <div className="w-full  max-w-2xl px-12 lg:px-24 h-1/3 flex flex-col gap-8 ">
            <div>
              <h1 className="md:text-2xl text-xl font-semibold md:font-bold">
                Contact.
              </h1>

              <p className="text-lg my-10">
               I'm always open to discussing new projects or opportunities. Feel free to reach out with any of the following methods.
              </p>
             
            </div>
            {contactInfo.map((contact) => (
              <div key={contact.type}>
                <h1 className='text-lg font-semibold '>
                  {contact.type}
                </h1>
                <Link to = {contact.link}>
                  <p className='text-base hover:bg-blue-400 w-2/3 cursor-pointer'>
                    {contact.value}
                    </p>
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

export default Contact
