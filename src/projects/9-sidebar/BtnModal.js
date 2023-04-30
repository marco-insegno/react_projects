import React from 'react'
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from './context';

function BtnModal() {

    const { openModal } = useGlobalContext()
    return (
        <Button variant="warning" className="position-fixed top-50 start-50" onClick={openModal} >Modal</Button>
    )
}

export default BtnModal