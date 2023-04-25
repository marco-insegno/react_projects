import React, { useState, useEffect } from "react";
import data from "../fakeData";
import Gelato from "./Gelato";
// import axios from "axios";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {

  // Loading for data fetching
  const [isLoading, setIsLoading] = useState(true)

  // Error State
  const [isError, setIsError] = useState(false)

  // Gelati
  const [gelati, setGelati] = useState([])

  // Active BTN Selector
  const [selected, setSelected] = useState(0)

  // Gelati filtrati
  const [filterGelati, setFilterGelati] = useState([])

  // Genera Categorie 
  const [categorie, setCategorie] = useState([])



  useEffect(() => {

    setIsLoading(false)
    setIsError(true)

    fetch(url).then((response) => response.json()).then((data) => {
      setGelati(data.data)
      setFilterGelati(data.data)

      const nuoveCategorie = Array.from(new Set(data.data.map((gelato => gelato.categoria))))
      nuoveCategorie.unshift('All')
      setCategorie(nuoveCategorie);


    })

  }, [])



  // Function per filtrare e che scatta su Btn Categoria
  const filterIceCream = (index, categoria) => {

    setSelected(index)

    if (categoria === 'All') {
      setFilterGelati(gelati)
    } else {
      setFilterGelati(gelati.filter(gelato => gelato.categoria === categoria ? gelato : ''))
    }

  }


  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  } else {

    return (

      <div className="container">
        <h4 className="text-center text-uppercase">Le nostre Scelte</h4>

        <div className="lista-categorie">

          {
            categorie && categorie.map((categoria, index) => {

              return (
                <button
                  key={index}
                  className={`btn btn-selector ${index === selected && 'active'}`} onClick={() => filterIceCream(index, categoria)}>
                  {categoria}
                </button>
              )
            })
          }

        </div>

        <div className="vetrina">
          {
            filterGelati && filterGelati.map((gelato) => {
              return (
                <Gelato key={gelato.id} {...gelato} />
              )
            })
          }
        </div>

      </div>

    )
  }


};

export default Menu;
