import { Avatar } from "@mui/material";
import { BUTTONLINK } from "./mock/ButtonLink";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Wave } from "react-animated-text";
import { Skills } from "./mock/Skills";
import { useState } from "react";
import Logos from "./assets/logo.jpg";

export default function App() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="bg-[#24272c] px-4 py-6 sm:px-[56px] sm:py-[50px]">
      <div className="max-w-[1305px] m-auto rounded-[24px] bg-[#232732] shadow-custom-inset-black">
        {/* Burger Menu */}
        <div className="flex justify-between items-center px-4 py-4 sm:hidden">
          <h1 className="text-white text-lg font-bold">Menu</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-4 px-4 pb-4 sm:hidden">
            {BUTTONLINK.map((item) => (
              <button
                onClick={() => navigate(item.link)}
                className="px-4 py-2 bg-[#24272C] text-white font-medium rounded-lg shadow-custom-inset-black text-center"
                key={item.title}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden sm:flex max-w-[1024px] gap-[71px] m-auto pt-8 sm:pt-[95px] pb-8 sm:pb-[95px]">
          {BUTTONLINK.map((item) => (
            <button
              onClick={() => navigate(item.link)}
              className="px-[27px] py-[17px] bg-[#24272C] text-white font-medium rounded-[24px] shadow-custom-inset-black font-poppins text-[22px] leading-[24px] tracking-[0.38px] text-center"
              key={item.title}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-[988px] m-auto pb-6 sm:pb-[55px]">
          <Avatar
            className="shadow-custom-inset-white rotate-[-180deg]"
            src={Logos}
            sx={{
              width: "200px",
              height: "200px",
              margin: "0 auto",
              "@media (min-width: 768px)": { width: "474px", height: "474px" },
            }}
          />
          <h3 className="text-lg sm:text-[38px] text-white mt-4 sm:mt-[55px] leading-6 tracking-[3px] font-normal text-center">
            Hey
          </h3>
          <h1 className="text-2xl sm:text-[62px] font-bold leading-6 tracking-[0.2px] text-white mt-6 sm:mt-[64px] mb-4 sm:mb-[20px] text-center">
            <Wave
              text="I'm Tokhtoshov Sardor"
              effect="fadeOut"
              effectChange={1.0}
            />
          </h1>
          <h1 className="text-2xl sm:text-[62px] font-bold leading-6 tracking-[0.2px] text-white mt-6 sm:mt-[64px] mb-4 sm:mb-[20px] text-center">
            <TypeAnimation
              sequence={[
                "We build websites for people",
                1000,
                "We develop Apps for people",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-[22px] font-normal leading-6 tracking-[0.38px] text-white mt-6 sm:mt-[64px] mb-4 sm:mb-[20px] text-center">
            A highly motivated student studying Artificial Intelligence and
            Machine Learning. Actively seeking opportunities to apply my skills
            and knowledge to real-world projects and contribute to the
            advancement of the industry.
          </p>
          <div className="mt-4 sm:mt-[50px] mb-4 sm:mb-[50px]">
            <div className="w-[80%] m-auto mb-4 bg-[#F7A21E] rounded-full h-2.5 dark:bg-gray-700">
              <div
                className={`w-${
                  Skills.find((item) => item.id === activeId)?.status
                } bg-[#7733FF] h-full rounded-full`}
              ></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {Skills.map((item) => (
              <button
                onClick={() => setActiveId(item.id)}
                className={`px-6 py-3 sm:px-[27px] sm:py-[17px] bg-[#24272C] text-white font-medium rounded-[24px] shadow-custom-inset-black font-poppins text-base sm:text-[22px] leading-[24px] tracking-[0.38px] text-center ${
                  activeId === item.id ? "bg-[#7733FF]" : ""
                }`}
                key={item.id}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
