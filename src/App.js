import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories"
const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isHidden, setHidden] = useState(true)

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Отправить заказ";
    tele.MainButton.show();
    tele.MainButton.onClick(() => tele.close());
  };

  const showBackBtn = () => { // 6.0???????????
    tele.BackButton.show()
    tele.BackButton.onClick(() => setHidden(true))
  }

  return (
    <>
      <h1 className="heading">ECO - FUTURE</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>

      <div className="cards__container">
        {isHidden ? 
        <Categories setHidden={setHidden} showBackBtn={showBackBtn}/> 
        : 
        foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })
        }
      </div>
    </>
  );
}

export default App;
