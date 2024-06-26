import { link } from "fs";
import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { RiProfileFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { Tab } from "@/types/tab";
import { useRouter } from "next/router";
import Link from "next/link";

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

  return (
    <main>
      <div className="fixed top-1/3 xl:right-5 lg:right-5 right-3 grid grid-cols-1 gap-10 ">
        {tabs.map((tab) => {
          return (
            <Link
              href={`#${tab.id}`}
              key={tab.id}
              className="flex justify-end items-center gap-3 md:p-4  md:text-2xl sm:text-xl p-3 text-lg bg-[#e5e7eb] rounded-full text-[#04C2C9] cursor-pointer"
            >
              {tab.icon}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default SideBar;
