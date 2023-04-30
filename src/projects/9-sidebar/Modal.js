import React from "react";
import Button from 'react-bootstrap/Button';
import './index.css'
import { useGlobalContext } from "./context";

const Modal = () => {

  const {isModalOpen,closeModal} = useGlobalContext();

  return <>

  <div className={`vh-100 ${isModalOpen ? "modal-custom" : "modal-custom-hidden" } `}>


    <h1 className="text-white">eccomi... sono una Modale!</h1>

    <Button variant="success" className="mt-4" onClick={closeModal}>Close</Button>

  </div>
  
  
  </>
};


export default Modal;
