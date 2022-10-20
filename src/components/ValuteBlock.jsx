import React, { useEffect, useState } from 'react';
import "./styles/Currency.scss"

const Currency = ({props}) => {


    const [CharCode,setCharCode] = useState("")
    const [Value,setValue] = useState("")
    const [Nominal,setNominal] = useState("")
    const [selectValute,setSelectValute] = useState("");
    
    function changeSelect(event){
        setSelectValute(event.target.value);

        props.forEach(valute => {
            if(valute.CharCode === event.target.value){
                setCharCode(valute.CharCode);
                setValue(valute.Value);
                setNominal(valute.Nominal);
            }
        });
    }

    useEffect(()=>{
        if(props[0]){
            setCharCode(props[0].CharCode);
            setValue(props[0].Value);
            setNominal(props[0].Nominal);
        }
    },[props])

    return (
        <div className="currency">
            <select value = {selectValute} onChange = {changeSelect} name="" id="">
                {
                    props.map(valute=>
                        <option key= {Math.random()} value={valute.CharCode} >{valute.CharCode}</option>
                    )
                }  
            </select>


            {
                <div className="currency_block">
                    <div className="currency_title">Курс {CharCode}</div>
                    <div className="currency_value">{Value} RUB</div>
                    <div className="currency_Nominal">За {Nominal}</div>
                </div>

            }
            
        </div>
    );
};

export default Currency;