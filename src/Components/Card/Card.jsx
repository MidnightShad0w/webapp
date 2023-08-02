import React, {useState} from "react";
import "./Card.css";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";

function Card({food, onAdd, onRemove}) {
    const [count, setCount] = useState(0);
    const [uniqueCount, setUniqueCount] = useState(0);
    const {title, Image, price} = food;
    // const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState(0);
    const [selectedType, setSelectedType] = useState(food.type[0]);

    const handleIncrement = () => {
        setCount(count);
        onAdd(food, selectedType, count);
        console.log('selectedType in card == '+selectedType);
        setUniqueCount(uniqueCount + Number(count));
    };
    const handleDecrement = () => {
        setCount(0);
        onRemove(food);
        setUniqueCount(0);
    };

    return (
        <div className="card">
      <span
          className={`${uniqueCount !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {uniqueCount}
      </span>
            <div className="image__container">
                <img src={Image} alt={title}/>
            </div>
            <h4 className="card__title">
                {title} <span className="card__price">${price}</span>
            </h4>
            <div className="btn-container">
                {food.type.map((type, index) => {
                    return (
                        <Button key={index} title={type} active={selectedButton === index ? "active" : ""}
                                type={"foodType"} onClick={() => {
                            setSelectedButton(index)
                            setSelectedType(type)
                        }}></Button>
                    )
                })}
            </div>
            <input
                className=""
                id="count"
                type="number"
                // placeholder={'Login'}
                value={count}
                onChange={e => {
                    setCount(e.target.value);
                    // dispatch(updateCount(e.target.value))
                }}
                required
            />
            <div className="btn-container">
                <Button title={"+"} type={"add"} disable={count === 0} onClick={handleIncrement}/>
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement}/>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Card;
