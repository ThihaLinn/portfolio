import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
import clsx from "clsx";

const Contact = () => {
  const socialLinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100077728128062",
      icon: <RiFacebookBoxFill />,
      color: "#1e40af",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/one_three_132",
      icon: <FaSquareInstagram />,
      color: "#991b1b",
    },
    {
      name: "GitHub",
      link: "https://github.com/ThihaLinn",
      icon: <FaGithubSquare />,
      color: "#030712",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/thiha-linn-35a763297/",
      icon: <FaLinkedin />,
      color: "#1d4ed8",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/thiha_lin",
      icon: <FaSquareXTwitter />,
      color: "#334155",
    },
  ];

  return (
    <div className="bg-[#252934] ">
      <div className="h-[100vh]   mx-auto pt-20 relative">
        <div className=" xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[100%]  mx-auto">
          <div className="text-4xl font-bold text-white text-center ">
            CONTACT
          </div>
          <div className=" text-center text-xl text-[#04C2C9] py-10">
            Have a question or want to work together?
          </div>
          <div>
            <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 w-[50%] mx-auto">
              <div className="mt-4">
                <input
                  placeholder="Name"
                  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <input
                  placeholder="Enter Email"
                  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                  type="text"
                />
              </div>

              <div className="mt-4">
                <textarea
                  rows={10}
                  placeholder="Your Message"
                  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                  id="description"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="bg-teal-500 text-white rounded-md px-4 py-1 hover:bg-teal-600 hover:text-white"
                  id="generate-button"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 bg-[#1B242F] h-40 w-screen">
          <div className="text-white flex justify-around items-center h-40 mx-auto sm:w-[60%] md:w-[40%] xl:w-[30%] lg:w-[30%]">
            {socialLinks.map((socialLink) => {
              return (
                <Link
                  href={socialLink.link}
                  className={clsx(
                    `text-4xl hover:text-[${socialLink.color}] shadow-2xl hover:-translate-y-1 transition-all duration-150 `
                  )}
                >
                  <div className="">{socialLink.icon}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
