import React from 'react';
import { IoBookOutline } from "react-icons/io5";
import { MdInterests } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosMusicalNotes } from "react-icons/io";
import NavigationCard from '../Cards/NavigationCard';
const navComp = [
    {
        icon : <IoBookOutline />,
        text : "Overview",
        to :"/"
    },
    {
        icon : <MdInterests />,
        text : "Interests",
        to : "/interests"
    },
    {
        icon : <GoProjectSymlink />,
        text : "Projects",
        to : "/projects"
    },
    {
        icon : <IoIosMusicalNotes />,
        text : "Music",
        to : "/music"
    }
]

export default function Navigation({setActivePage}) {
  return (
    <>
    <div className='flex flex-wrap pl-2 md:pl-4 gap-2 md:gap-0'>
        {navComp.map((comp, index)=>(
                <NavigationCard 
                to = {comp.to}
                key={index} icon={comp.icon} text={comp.text} onClick={() => setActivePage(comp.text.toLowerCase())}/>
        ))}
    </div>
    </>
  )
}
