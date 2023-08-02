import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";

const {getData} = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isHidden, setHidden] = useState(true);
    const navigate = useNavigate();
    // const [token, setToken] = useState();

    useEffect(() => {
        tele.ready();
    });

    const onAdd = (food, type, count) => {
        console.log('selectedType in onAdd == ' + type)
        const count2 = Number(count)
        const exist = cartItems.find((x) => x.id === food.id && x.type === type);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    // x.id === food.id ? {...exist, quantity: exist.quantity + 1} : x
                    // x.id === food.id && x.type === type ? {...exist, type: type, quantity: exist.quantity + count2} : x
                        x.id === food.id && x.type === type ? {...exist, quantity: exist.quantity + count2} : x
                    //todo: нужно чтобы при выборе 1-pizza pack => добавлялся pizza pack, 2-pizza kg => добавился pizza kg --- т е как две позиции
                )
            );
        } else {
            // setCartItems([...cartItems, {...food, quantity: 1}]);
            setCartItems([...cartItems, {...food, type: type, quantity: count2}]);
        }
    };

    console.log(cartItems)

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? {...exist, quantity: 0} : x
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
}

export default App;
