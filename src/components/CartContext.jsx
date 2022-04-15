import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // uso findIndex porque nos va a permitir acceder a la posición del array del producto que ya existe en nuestro cart
    // para modificar la cantidad del producto
    // en caso de que el producto no esté en nuestro cart, nos devuelve -1 y ahí agregamos nuestro producto al cart
    const indexPlant = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexPlant !== -1) {
      const newCart = [...cart];
      newCart[indexPlant].count = newCart[indexPlant].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };
  const removeFromCart = (id) => {
    // elimino del carrito el elemento que sea igual a mi id
    // filter => te va a devolver un array que cumpla con lo que vos pases en la condición de la función callback
    // [1,2,3,4,5].filter((number)=>number === 5)) => devolver un nuevo array [5]
    setCart(cart.filter((plant) => plant.id !== id));
  };
  // remueve todo del carrito
  const buyAll = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
