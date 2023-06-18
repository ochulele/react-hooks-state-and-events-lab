import React, { useState } from "react";


//console.log(items)

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  function handleAddCart() {
      setCart((inCart) => !inCart)
  }

  const isInCart = inCart ? document.getElementsByTagName("li").className="in-cart" : document.getElementsByTagName("li").className=""
  const cartStatus = inCart ? "Remove from Cart" : "Add to Cart"
  const color = inCart ? "magenta" : ""

  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style= {{ background: color }} onClick={handleAddCart} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;