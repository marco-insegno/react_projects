import React from 'react'
import { useEffect } from 'react';

function Cart() {

  const titlePage = "Cart";

  useEffect(() => {
    document.title = titlePage;
  }, [])

  return (
    <div>Cart</div>
  )
}

export default Cart