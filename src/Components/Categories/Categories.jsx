// import { useState, useEffect } from "react";
import './Categories.css'
import Button from "../Button/Button";
import salad from './Category_images/salad.png'

function Categories({ setHidden, showBackBtn }){

    return(
        <>
            <div className="category__cards__container">
                <div className="category__card">
                    <div className="category__image__container">
                        <img src={salad} alt={'category'} />
                    </div>
                    <h4 className="category__card__title">
                        Зелень
                    </h4>

                    <div className="btn-container">
                        <Button title={"К товарам"} type={"checkout"} onClick={() => {setHidden(false); showBackBtn()}} />
                    </div>
                </div>

                <div className="category__card">
                    <div className="category__image__container">
                        <img src={salad} alt={'category'} />
                    </div>
                    <h4 className="category__card__title">
                        Салаты
                    </h4>

                    <div className="btn-container">
                        <Button title={"К товарам"} type={"checkout"} onClick={() => setHidden(false)} />
                    </div>
                </div>

                <div className="category__card">
                    <div className="category__image__container">
                        <img src={salad} alt={'category'} />
                    </div>
                    <h4 className="category__card__title">
                        Микрозелень
                    </h4>

                    <div className="btn-container">
                        <Button title={"К товарам"} type={"checkout"} onClick={() => setHidden(false)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;