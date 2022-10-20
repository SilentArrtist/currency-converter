import './App.scss';
import ValuteBlock from './components/ValuteBlock';
import Trade from './components/Trade';

import axios from 'axios';
import toItter from './components/itterator.js'
import { useEffect, useState } from 'react';
import ValuteSearch from './components/ValuteSearch';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  useEffect(()=>{
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(info=>{
      const valuteArray = ([...toItter(info.data.Valute)]);
      if(valuteArray.length!==0){
        setValute(valuteArray);
      }
    })
    .catch(error=>{
      console.log(error);
    })
},[])


  const dispatch = useDispatch();

  const valute = useSelector(state => state.valuteArray)

  const setValute =(valute) =>{
    dispatch({type:"SET_VALUTE",data:valute})
  }

  return (
    <div className="container">
      <div className="converter">
        <h1 className="converter_title">Конвертер валют</h1>
        <div className="converter_currencyBlock">
          <ValuteBlock props = {valute} />
          <ValuteSearch props = {valute} />
        </div>
        <Trade array = {valute} />
      </div>
    </div>
  );
}

export default App;
