import React, { useMemo, useState } from 'react';

const ValuteSearch = ({props}) => {
    const valutes = []
    props.forEach(element => {
        valutes.push({name:element.CharCode,value:element.Value,nominal:element.Nominal});
    });
    
    const [searchValute,setSearchValute] = useState("");

    const searchedValutes = useMemo(() =>{
        if(searchValute==="")return[]
        return [...valutes].filter(valuteName => valuteName.name.includes(swapLanguage(searchValute.toUpperCase())));
        
    },[valutes,searchValute])

      function swapLanguage( str ) {
        const replacer = {
            "й":"q", "ц":"w", "у":"e", "к":"r", "е":"t", "н":"y", "г":"u", 
            "ш":"i", "щ":"o", "з":"p", "х":"[", "ъ":"]", "ф":"a", "ы":"s", 
            "в":"d", "а":"f", "п":"g", "р":"h", "о":"j", "л":"k", "д":"l", 
            "ж":";", "э":"'", "я":"z", "ч":"x", "с":"c", "м":"v", "и":"b", 
            "т":"n", "ь":"m", "б":",", "ю":".", ".":"/"
        };       
        return str.replace(/[А-яЁё]/g, function ( x ){
            return x === x.toLowerCase() ? replacer[ x ] : replacer[ x.toLowerCase() ].toUpperCase();
        });
    }

    return (
        <div>
            <h3>Поиск валюты:</h3>
            <input className='valuteSearch' onChange={(e)=>setSearchValute((e.target.value))} type="text" value = {searchValute} />
            <div className='valutes'>
                {
                    searchedValutes.length
                    ? searchedValutes.map( valute=><p key = {Math.random()} >{valute.name} : {valute.value} RUB за {valute.nominal}</p>)
                    : <h2 style={{marginTop:"10px"}}>Ничего <br/> не найдено!</h2>
                }
            </div>
        </div>
    );
};

export default ValuteSearch;