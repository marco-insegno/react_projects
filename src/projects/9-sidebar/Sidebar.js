import React from "react";
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from "./context";
import './index.css'

const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return (
    <>
          <div className={`bg-warning mt-5 ${isSidebarOpen ? "sidebar-custom" : "sidebar-hidden"} `}>
            <h1>Sidebar</h1>
            <Button variant="danger" className="position-absolute top-0 end-0 me-2 mt-2" onClick={closeSidebar}>X</Button>
          </div>

    </>
  )
};

export default Sidebar;
