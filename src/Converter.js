import React, { useRef, useState } from 'react'
import btnChange from './assets/buttons-change.png'
const Converter = (props) => {
    const { currencyList } = props
    console.log(props)
    // const baseCurrencyRef = useRef("")
    const [baseCurrency, setBaseCurrency] = useState("")
    const [selectedCurrency, setSelectedCurrency] = useState("USD")
    const [convertedValue, setConvertedValue] = useState("")

    const onChangeInput = (e, c) => {
        if (c === "base") {
            const parsed = parseFloat(e.target.value) || 0
            setBaseCurrency(e.target.value)
            const found = currencyList.find(c => c.symbol === selectedCurrency)
            if (found)
                setConvertedValue((parsed * found.price).toFixed(5))
        }
        else if (c === "converted") {
            const parsed = parseFloat(e.target.value) || 0
            setConvertedValue(e.target.value)
            const found = currencyList.find(c => c.symbol === selectedCurrency)
            if (found)
                setBaseCurrency((parsed / found.price).toFixed(5))
        }
    }

    const onChangeSelectMenu = (e) => {
        setSelectedCurrency(e.target.value)
        const found = currencyList.find(c => c.symbol === e.target.value)
        setConvertedValue((baseCurrency * found.price).toFixed(5))


    }



    return (
        <div className='Rectangle-6-Copy-5'>

            <div className='Rectangle'>
                <span class="Dviz-evir">
                    Döviz Çevir
                </span>                <div style={{ marginTop: 12 }}>
                    <input placeholder={selectedCurrency} value={baseCurrency} onChange={(e) => onChangeInput(e, "base")} ></input>
                    <select name="currencies" id="currencies" onChange={e => onChangeSelectMenu(e)} >
                        {currencyList?.map(c => (
                            <option key={c.symbol} value={c.symbol} >{c.symbol}</option>
                        ))}
                    </select>
                </div>
                <img src={btnChange}
                    class="ButtonsChange" />
                <input placeholder='TL' style={{ width: 195 }} value={convertedValue} onChange={(e) => onChangeInput(e, "converted")} >

                    
                </input>
            </div>

        </div>
    )

}
export default Converter