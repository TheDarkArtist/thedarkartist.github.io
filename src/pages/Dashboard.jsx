import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";

const Profile = () => <div>profile component</div>
const Projects = () => <div>Projects component</div>
const Blog = () => <div>Blog component</div>
const Resume = () => <div>Resume Component</div>
const Contact = () => <div>Contacts component</div>

const Sidebar = ({ onItemClick }) => {
  const sidebarItems = ['Profile', 'Projects', 'Blog', 'Resume', 'Contact']

  return (
    <ul className='border bg-zinc-900 w-60'>

      {sidebarItems.map((item, index) => (
        <li className='px-2 hover:bg-zinc-950 cursor-pointer py-1 w-full' key={index} onClick={() => onItemClick(item)}>{item}</li>
      ))}
    </ul>
  )
}

const RightPannel = ({ selectedComponent }) => {
  const componentMap = {
    Profile,
    Projects,
    Blog,
    Resume,
    Contact,
  }
  const SelectedComponent = componentMap[selectedComponent]
  return <div className='border w-full flex items-center justify-center'>
    {SelectedComponent && <SelectedComponent />}
  </div>
}

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)

  const handleItemClick = (item) => {
    setSelectedComponent(item);
  }

  return (
    <div className='border flex w-full min-h-[85vh]'>
      <Sidebar onItemClick={handleItemClick} />
      <RightPannel selectedComponent={selectedComponent} />
    </div>
  )
}

export default Dashboard
