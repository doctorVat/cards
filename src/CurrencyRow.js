import React from 'react'

export default function CurrencyRow( props ) {
    
    const { currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmmount,
     } = props //деструктуризация
    
    return (
        <div>
            <input type='number' className='input' value={amount} onChange={onChangeAmmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map (option => (
                        <option key={option} value={option}>{option}</option>
                ))}
                
              
            </select>
        </div>
    )
}

