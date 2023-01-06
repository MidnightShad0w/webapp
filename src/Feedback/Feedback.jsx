import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import './Feedback.css';


const tele = window.Telegram.WebApp;

function Feedback(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();


    // const onSendData = useCallback(() => {
    //     const data = {
    //         name,
    //         phone,
    //         address
    //     }
    // }, [name, phone, address])

    useEffect(() => {
        tele.BackButton.show()
        tele.BackButton.onClick(() => {navigate('/'); tele.BackButton.hide()})
    },[navigate])//?

    useEffect(() => {
        if(!name || !phone || !address) {
            tele.MainButton.hide();
        } else {
            tele.MainButton.show();
        }
    }, [name, phone, address])

    useEffect(() => {
        tele.MainButton.text = "Отправить заказ";
        // tele.MainButton.show();
        tele.MainButton.onClick(() => tele.close());
    },[])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    return(
        <>
            <div className="form">
                <h3 className="form__title">Введите данные для заказа</h3>
                <div className='input'>
                    <input
                        className="input__field"
                        id="name"
                        type="text"
                        // placeholder={'ФИО'}
                        value={name}
                        onChange={onChangeName}
                    />
                    <label htmlFor="name">ФИО</label>
                </div>
                <div className='input'>
                    <input
                        className="input__field"
                        id="phone"
                        type="text"
                        // placeholder={'Телефон'}
                        value={phone}
                        onChange={onChangePhone}
                    />
                    <label htmlFor="phone">Телефон</label>
                </div>
                <div className='input'>
                    <input
                        className="input__field"
                        id="address"
                        type="text"
                        // placeholder={'Адрес'}
                        value={address}
                        onChange={onChangeAddress}
                    />
                    <label htmlFor="address">Адрес</label>
                </div>
            </div>
        </>
    )
};

export default Feedback;