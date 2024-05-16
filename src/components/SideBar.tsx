import { link } from "fs";
import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { RiProfileFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { Tab } from "@/types/tab";
import { useRouter } from "next/router";

const SideBar = () => {
  const initialTabs = [
    {
      id: 1,
      name: "HOME",
      status: false,
      icon: <HiHome />,
      link: "/home",
      num: 0,
    },
    {
      id: 2,
      name: "ABOUT",
      status: false,
      icon: <RiProfileFill />,
      link: "/about",
      num: 1,
    },
    {
      id: 3,
      name: "PROJECTS",
      status: false,
      icon: <AiFillProject />,
      link: "/projects",
      num: 2,
    },
    {
      id: 4,
      name: "CONTACT",
      status: false,
      icon: <MdContacts />,
      link: "/contact",
      num: 3,
    },
  ];

  let [tabs, setTabs] = useState(initialTabs);

  const router = useRouter();
  const pathname = router.pathname;

  const changeStatus = (id: number) => {
    let currentTab = tabs.filter((tab) => tab.id === id);

    currentTab[0].status = !currentTab[0].status;
    const allTabs = tabs.map((tab) => {
      return tab.id === currentTab[0].id ? currentTab[0] : tab;
    });

    setTabs(allTabs);
  };

  const move = (num: number) => {
    window.scrollTo({
      top: 957 * num,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div className="fixed top-1/3  right-5 grid grid-cols-1 gap-10 ">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => move(tab.num)}
              key={tab.id}
              className="flex justify-end items-center gap-3 p-4 text-2xl bg-[#e5e7eb] rounded-full text-[#04C2C9] cursor-pointer"
            >
              {tab.icon}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SideBar;
