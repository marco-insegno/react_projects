import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { AppProvider } from "./context";

function SideBarApp() {
  
  return (
  <>
  <AppProvider>
    <Navigation/>
    <Sidebar/>
  </AppProvider>
  </>
  
  )
}

export default SideBarApp;
