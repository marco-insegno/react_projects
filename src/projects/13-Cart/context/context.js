import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import { ADD_QUANTITY, CONTATORE, COSTO_TOTALE, DATA_FETCHING_FAIL, DATA_FETCHING_STARTED, DATA_FETCHING_SUCCESS, DELETE_ITEM, REMOVE_QUANTITY, SVUOTA_CARRELLO } from "./actions";


const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

//  1-> creo Context
const AppContext = createContext();

// --state iniziale
const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    total: 0,
    itemCounter: 0
};


//  2-> creo componente all'interno del quale racchiudiamo tutta l'applicazione
//  Inserisco lo useReducer all'interno del componente per controllare stato iniziale con initialState e parte funzionale con reducer
const AppProvider = ({ children }) => {

    // useReducer con stato iniziale
    const [state, dispatch] = useReducer(reducer, initialState)

    // Cancella singolo prodotto
    const deleteItem = (_id) => {
        dispatch(
            {
                type: DELETE_ITEM,
                payload: _id
            }
        )
    }

    //  Cancella tutti i prodotti
    const deleteAll = () => {
        dispatch(
            {
                type: SVUOTA_CARRELLO
            }
        )
    }

    // Aumenta quantità
    const addQuantity = (_id) => {

        dispatch(
            {
                type: ADD_QUANTITY,
                payload: _id
            }
        )
    } 

    //  Diminuisci quantità
    const remQuantity = (_id) => {

        dispatch(
            {
                type: REMOVE_QUANTITY,
                payload: _id
            }
        )

    }

    //Data Fetching
    useEffect(() => {

        dispatch(
            {
                type: DATA_FETCHING_STARTED
            }
        )


        fetch(url)
            .then((response) => response.json())
            .then(data => {
                dispatch(
                    {
                        type: DATA_FETCHING_SUCCESS,
                        payload: data.data
                    }
                )
            }
            )
            .catch(error => {
                dispatch({
                    type: DATA_FETCHING_FAIL,
                })
            })

    }, [])

    // useEffect richiamato ogni volta che il prodotto viene aggiornato
    // Aggiorna costo totale e n° elementi nel carrello
    useEffect(() => {

        dispatch(
            {
                type: COSTO_TOTALE,
            }
        )

        dispatch(
            {
                type: CONTATORE,
            }
        )

    }, [state.products])


    return (
        <AppContext.Provider value={
            {
                ...state,
                deleteItem,
                deleteAll,
                addQuantity,
                remQuantity
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

//  3-> creo useGlobalContext che ritorna useContext al quale passiamo il nostro Context per poter usare nei componenti figli direttamente useGlobalContext
const useGlobalContext = () => {

    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }

//  4-> alla fine va importato nel file index.js AppProvider e la nostra interna Applicazione va wrappata dentro AppProvider
