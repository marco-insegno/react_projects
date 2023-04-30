import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { AppProvider } from "./context";

import Modal from './Modal'

import BtnModal from "./BtnModal";

function SideBarApp() {

  return (
  <>
  <AppProvider>
    <Navigation/>
    <Sidebar/>
    
    <BtnModal/>

    <Modal/>

  </AppProvider>
  </>
  
  )
}

export default SideBarApp;
