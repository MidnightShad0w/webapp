import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Feedback.css';


const tele = window.Telegram.WebApp;

function Feedback(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const address = useSelector(state => state.addressValue.value);

    // const onSendData = useCallback(() => {
    //     const data = {
    //         name,
    //         phone,
    //         address
    //     }
    // }, [name, phone, address])

    useEffect(() => {
        tele.BackButton.show()
        tele.BackButton.onClick(() => {navigate('/app'); tele.BackButton.hide()})
    },[navigate])//?

    useEffect(() => {
        if(!name || !phone) {
            tele.MainButton.hide();
        } else {
            tele.MainButton.show();
        }
    }, [name, phone])

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

    return(
        <>
            <div className="form">
                <h3 className="form__title">Введите данные для заказа</h3>
                <div>Current address: {address}</div>
                <div className='input'>
                    <input
                        className="input__field"
                        id="name"
                        type="text"
                        // placeholder={''}
                        value={name}
                        onChange={onChangeName}
                        required
                    />
                    <label htmlFor="name">ФИО</label>
                </div>
                <div className='input'>
                    <input
                        className="input__field"
                        id="phone"
                        type="text"
                        // placeholder={''}
                        value={phone}
                        onChange={onChangePhone}
                        required
                    />
                    <label htmlFor="phone">Телефон</label>
                </div>
                {/*<div className='input'>*/}
                {/*    <input*/}
                {/*        className="input__field"*/}
                {/*        id="address"*/}
                {/*        type="text"*/}
                {/*        // placeholder={''}*/}
                {/*        value={address}*/}
                {/*        onChange={onChangeAddress}*/}
                {/*        required*/}
                {/*    />*/}
                {/*    <label htmlFor="address">Адрес</label>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Feedback;