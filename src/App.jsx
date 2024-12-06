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

  const [activeId, setActiveId] = useState(1);

  return (
    <div className="bg-[#24272c] px-[56px] py-[50px]">
      <div className="max-w-[1305px] m-auto rounded-[24px] bg-[#232732] shadow-custom-inset-black ">
        <div className="max-w-[1024px] flex gap-[71px] m-auto pt-[95px] pb-[95px]">
          {BUTTONLINK.map((item) => (
            <button
              onClick={() => navigate(item.link)}
              className="px-[27px] py-[17px] bg-[#24272C] text-white font-medium rounded-[24px] shadow-custom-inset-black font-poppins text-[22px] leading-[24px] tracking-[0.38px] text-center"
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="max-w-[988px] m-auto pb-[55px]">
          <Avatar
            className="shadow-custom-inset-white rotate-[-180deg]"
            src={Logos}
            sx={{ width: "474px", height: "474px", margin: "0 auto" }}
          />
          <h3 className="text-[38px] text-white mt-[55px] leading-6 tracking-[3px] font-normal  text-center">
            Hey
          </h3>
          <h1 className=" text-[62px] font-bold leading-6 tracking-[0.2px] text-white mt-[64px] mb-[20px] text-center">
            <Wave
              text="I'm Tokhtoshov Sardor"
              effect="fadeOut"
              effectChange={1.0}
            />
          </h1>
          <h1 className=" text-[62px] font-bold leading-6 tracking-[0.2px] text-white mt-[64px] mb-[20px] text-center">
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
          <p className="text-[22px] font-normal leading-6 tracking-[0.38px] text-white mt-[64px] mb-[20px] text-center">
            A highly motivated student studying Artificial Intelligence and
            Machine Learning. Actively seeking opportunities to apply my skills
            and knowledge to real-world projects and contribute to the
            advancement of the industry.
          </p>
          <div className="mt-[50px] mb-[50px]">
            {activeId ? (
              <p>
                <div className="w-[915px] m-auto mb-[50px] bg-[#F7A21E] rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className={`w-[${
                      Skills.find((item) => item.id === activeId)?.status
                    }] bg-[#7733FF] h-full rounded-full`}
                  ></div>
                </div>
              </p>
            ) : (
              <div className="w-[915px] m-auto mb-[50px] bg-[#F7A21E] rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className={`w-[${
                    Skills.find((item) => item.id === 1)?.status
                  }] bg-[#7733FF] h-full rounded-full`}
                ></div>
              </div>
            )}
          </div>
          <div className="flex justify-between">
            {Skills.map((item) => (
              <button
                onClick={() => setActiveId(item.id)}
                className={`px-[27px] py-[17px] bg-[#24272C] text-white font-medium rounded-[24px] shadow-custom-inset-black font-poppins text-[22px] leading-[24px] tracking-[0.38px] text-center ${
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
