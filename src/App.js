import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Categories from "./Categories/Categories";

const {getData} = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isHidden, setHidden] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        tele.ready();
    });

    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? {...exist, quantity: exist.quantity + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...food, quantity: 1}]);
        }
    };

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? {...exist, quantity: exist.quantity - 1} : x
                )
            );
        }
    };

    const onCheckout = () => {
        navigate('/feedback')
    };

    const showBackBtn = () => {
        tele.BackButton.show()
        tele.BackButton.onClick(() => {
            setHidden(true);
            tele.BackButton.hide()
        })
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
                            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
                        );
                    })
                }
            </div>
        </>
    );
};

export default App;
