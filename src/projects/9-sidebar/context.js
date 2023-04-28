import React, {createContext, useContext, useState} from "react";

// creo Context
const AppSidebarContext = createContext()


// Creiamo un componente (AppProvider),che ritorna il Context
// Con il {children.props} riusciamo a passare a tutti i componenti wrappati dal Context ciò che è contenuto nel suo attributo value
const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openSidebar = () => {
        console.log('open');
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <AppSidebarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar  }}>
            {children}
        </AppSidebarContext.Provider>
    )
}

// custom Hook che ci permette di ritornare valori di utilizzo frequente
// anziché richiamare nei componenti lo useContext(...) ci consente di utilizzare in maniera diretta il Context richiamando direttamente lo useGlobalContext()
const useGlobalContext = () => {
    return useContext(AppSidebarContext)
}

export {AppProvider, useGlobalContext}