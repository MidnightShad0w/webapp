import './auth.css'
import Button from "../Button/Button";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Dropdown from 'react-dropdown'

const addresses = ['ул.Братиславская д.5 к.4 с.1', 'b', 'c'];

function Auth() {
    const [token, setToken] = useState('');
    const [address, setAddress] = useState();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/app')
    };

    const handleAddressValue = (option) => {
        const addressValue = option.value
        setAddress(addressValue)
    }


    return (
        <>
            <div className="main-container-auth">
                <h1 className="heading">Authorization</h1>
                <h4 className="heading">Choose your address</h4>
                <Dropdown
                    className="dropdown-container"
                    controlClassName="dropdown-control"
                    menuClassName="dropdown-menu"
                    placeholderClassName="dropdown-placeholder"
                    // arrowClassName="arrow"
                    arrowClosed={<span className="arrow-closed"/>}
                    arrowOpen={<span className="arrow-open"/>}
                    options={addresses}
                    onChange={handleAddressValue}
                    value={address}
                    placeholder="Select an option"
                />
                <div className='input-auth'>
                    <input
                        className="input__field__auth"
                        id="name"
                        type="text"
                        placeholder={'Login'}
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div className='input-auth'>
                    <input
                        className="input__field__auth"
                        id="phone"
                        type="text"
                        placeholder={'Password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="btn-container">
                    <Button
                        title={"Login"}
                        type={"checkout"}
                        // disable={token.length === 0 ? true : false}
                        onClick={onLogin}
                    />
                </div>
            </div>
        </>
    )
}

export default Auth
