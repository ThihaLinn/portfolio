import { Content } from "next/font/google";
import React from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { IoRocketSharp } from "react-icons/io5";

const About = () => {
  const abouts = [
    {
      title: "Fast",
      content: "Fast load times and lag free interaction, my highest priority.",
      icon: <MdOutlineSpeed />,
    },
    {
      title: "Responsive",
      content: "My layouts will work on any device, big or small.",
      icon: <MdOutlineDevices />,
    },
    {
      title: "Intuitive",
      content: "Strong preference for easy to use, intuitive UX/UI.",
      icon: <AiOutlineBulb />,
    },
    {
      title: "Dynamic",
      content:
        "Websites don't have to be static, I love making pages come to life.",
      icon: <IoRocketSharp />,
    },
  ];

  const skills = [
    {
      name: "HTML",
      percentage: 90,
    },
    {
      name: "CSS",
      percentage: 90,
    },
    {
      name: "Java",
      percentage: 85,
    },
    {
      name: "JavaScript",
      percentage: 80,
    },
    {
      name: "TypeScript",
      percentage: 80,
    },

    {
      name: "React",
      percentage: 80,
    },
    {
      name: "NextTS",
      percentage: 75,
    },
    {
      name: "Spring",
      percentage: 75,
    },
    {
      name:"Angular",
      percentage:65
    },
    {
      name: "Mysql",
      percentage: 60,
    },
    {
      name: "Postgresql",
      percentage: 60,
    },
  ];

  return (
    <div
      className="xl:h-[100vh]  bg-[#FFFFFF]  lg:w-[70%] xl:w-[70%] md:w-[70%] sm:w-[80%] w-[90%] mx-auto py-7"
      id="2"
    >
      <div className="text-4xl font-bold text-gray-500 text-center ">
        <h3>ABOUT</h3>
        <div className="xl:mt-20 lg:mt-20 md:mt-10 sm:mt-10 mt-5 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          {abouts.map((about) => {
            return (
              <div className=" w-[300px] p-5 flex flex-col justify-center items-center mx-auto">
                <div className=" w-40 h-36 bg-[#04C2C9] polygon  ">
                  <div className="flex items-center justify-center h-full text-white text-6xl">
                    {about.icon}
                  </div>
                </div>
                <div className="text-2xl">{about.title}</div>
                <div className="text-sm  text-center mt-2 font-normal px-5">
                  {about.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid xl:grid-cols-2  mt-12 ">
        <div className="grid grid-cols-1 text-center">
          <div className="w-64 h-56 bg-[#04C2C9] polygon bg-[url('/cat.jpg')] bg-cover mx-auto  "></div>
          <div className="font-bold text-gray-600 text-xl py-4">
            Who's this guy?
          </div>
          <div className="w-[350px] mx-auto">
            I am a backend-developer in Yangon.I have serious passion for
            data-structure and createing intuitive, dynamic user experiences
          </div>
          <div className="text-[#57BCE7] py-3 font-semibold">
            Let's make something special.
          </div>
        </div>
        <div className="">
          {skills.map((skill) => {
            console.log(skill.percentage);
            return (
              <div className=" text-white flex bg-[#EEEEEE] font-medium mb-3">
                <div className=" w-[25%] sm:w-[20%] bg-[#04C2C9] text-center py-1">
                  {skill.name}
                </div>
                <div className="w-[80%]   ">
                  <div
                    className=" bg-[#00A1A7] text-center py-1 "
                    style={{ width: `${skill.percentage}%` }}
                  >
                    {skill.percentage}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
