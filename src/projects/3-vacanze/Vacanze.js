import React from 'react'
import './Vacanze.css'
import { useState, useEffect } from 'react';
import SpinnerDefault from './UI/SpinnerDefault/SpinnerDefault';
import Title from './UI/Title';
import Holiday from './UI/Holiday.js/Holiday';

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function Vacanze() {

  const [holidays, setHolidays] = useState([])

  const [selected, setSelected] = useState(1);




  const nextHoliday = () => {

    setSelected((prevSelected) => {

      if (prevSelected + 1 === holidays.data.length) {

        return 0;

      } else {

        return prevSelected + 1

      }
    })

  }


  const prevHoliday = () => {

    setSelected((prevSelected) => {

      if (prevSelected - 1 < 0) {

        return holidays.data.length - 1

      } else {

        return prevSelected - 1

      }
    })
  }


  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(data => setHolidays(data))

  }, [])



  if (holidays.success) {

    return (
      <>
        {

          holidays.data.length > 0
            ? (
              <section className="container mt-5">
                <Title />

                <Holiday {...holidays.data[selected]} next={nextHoliday} prev={prevHoliday} />
              </section>
            )
            : (
              <h4>Nessuna vacanza</h4>
            )

        }
      </>
    )

  } else {

    return (

      <SpinnerDefault/>
    )

  }



}

export default Vacanze