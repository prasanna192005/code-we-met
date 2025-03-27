"use client"

import { FaLocationArrow, FaYoutube } from "react-icons/fa6"
import { projects } from "@/data"
import { PinContainer } from "./ui/Pin"

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
      Featured Videos: <span className="text-purple"> A Small Selection</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]" key={item.id}>
            <PinContainer title="Striver" href="https://twitter.com/mannupaaji">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=M3_pLsDdeuU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                  >
                    <img
                    src={`https://img.youtube.com/vi/M3_pLsDdeuU/0.jpg`}
                    alt="YouTube Thumbnail"
                    className="w-full h-full object-cover"/>

                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaYoutube className="text-white text-6xl" />
                    </div>
                  </a>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item.title}</h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon || "/placeholder.svg"} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects

