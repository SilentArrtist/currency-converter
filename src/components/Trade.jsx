import React, { useEffect, useState } from 'react';
import "./styles/Trade.scss"
const Trade = ({array}) => {
    
    const valuteArray = array;

    const [selectActiveInput,setSelectActiveInput] = useState("RUB");

    const [selectActiveOutput,setselectActiveOutput] = useState("USD");

    const [inputValue,setInputValue] = useState("");

    const [outputValue,setOutputValue] = useState("");

    function updInputValue(event){
        setInputValue(event.target.value);
    }
    function updOutputValue(event){
        setOutputValue(event.target.value);
    }

    function updActiveInput(event){
        setSelectActiveInput(event.target.value);
    }
    function updActiveOutput(event){
        setselectActiveOutput(event.target.value);
    }

    const titles = [];
    valuteArray.forEach(element => {;
        titles.push(element.CharCode);
    });


    function calculate(){
        if(inputValue!==""){
            const currentOutputValute = valuteArray.filter(valute => valute.CharCode === selectActiveOutput)
            const num = inputValue;
            const denum = (currentOutputValute[0].Value/currentOutputValute[0].Nominal)
            const finValue = Math.floor((num/denum) * 10000) / 10000;
            setOutputValue(""+ finValue)
        }
    }



    useEffect(calculate)

    return (
        <div className="trade">
            <div className="trade_block">
                <p className="trade_title">Give</p>
                <select 
                value={selectActiveInput}
                onChange = {updActiveInput}
                name=""
                id=""
                >
                <option value="RUB">RUB</option>
                </select>
                
                <input
                value = {inputValue}
                onChange = {updInputValue}
                type="text"
                />
            </div>

            <div className="trade_block">
            <p className="trade_title">Get</p>
                <select 
                value={selectActiveOutput}
                onChange = {updActiveOutput}
                name=""
                id="">
                    {
                        titles.map(title=>
                            <option key ={Math.random()} value={title}>{title}</option>
                        )
                    }
                </select>
                <input
                 value = {outputValue}
                 onChange = {updOutputValue}
                 type="text"
                 />
            </div>
        </div>
    );
};

export default Trade;