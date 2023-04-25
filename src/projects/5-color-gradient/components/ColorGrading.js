import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";
import '../index.css'

const ColorGrading = () => {

  const [selectedColor, setSelectedColor] = useState([])

  const[isError,setIsError] = useState(false)

  const [colorInput, setColorInput] = useState({
    color: '', qty: 5
  })




  const handleChange = (e) => {

    setIsError(false)

    const { name, value } = e.target

    setColorInput(
      {
        ...colorInput,
        [name]: value
      }
    )

  }



  const handleSubmit = (e) => {

    e.preventDefault()

    if (colorInput.color && colorInput.qty) {

      const { color, qty } = colorInput;

      try {
        setSelectedColor(new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2));

        setColorInput({
          color:'',
          qty:10,
        });
        
      } catch (error) {
        setIsError(true)
      }

    }

  }




  useEffect(() => {
    setColorInput({ qty: 10, color: '#1194ec' })
    setSelectedColor(
      new Values('#1194ec').all(Math.round(100 / 10) * 2)
    )

  }, [])



  return (
    <>

      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            className="input"
            type='text'
            name='color'
            id='color'
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
          />
          <input
            className="input"
            type='numer'
            name='qty'
            id='color'
            value={colorInput.qty}
            max={200}
            min={5}
            step={5}
            maxLength={7}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-selector">Create</button>


      </form>

      <section className="color-section">

        {isError ? (
        <h4 className="section-center">Nessun Colore Trovato</h4>
        ) : selectedColor
            ? (
              selectedColor.map(el => <SingleColor key={uuidv4()} {...el} />)
            )
            : (
              <h4>Loading.....</h4>
            )
        }

        
          

      </section>




    </>
  )
};

export default ColorGrading;
