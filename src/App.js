import React, { useEffect, useState } from 'react'
import './App.css';
import Converter from './Converter';
import USD from './assets/usd.png'
import EUR from './assets/euro.png'
import JPY from './assets/jpy.png'
import DKK from './assets/dkk.png'
import NOK from './assets/nok.png'
import GBP from './assets/gbp.png'
import CurrencyComponent from './CurrencyComponent'
import { SortDatas } from './utils/SortData';

const App = () => {

  const [currencyList, setCurrencyList] = useState([])


  useEffect(() => {

    var requestURL = 'https://api.exchangerate.host/latest?base=TRY&symbols=USD,EUR,JPY,GBP,DKK,NOK';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    // request.setRequestHeader("Connection", "keep-alive");
    // request.setRequestHeader("Keep-Alive", "timeout=5, max=100");  
    request.responseType = 'json';

    request.send();
    request.onload = function () {
      var response = request.response;
      let keys = Object.keys(response.rates)
      let values = Object.values(response.rates)

      // const converted = Object.values(response.rates)
      // setCurrencyList(newObj)
      let newArr = []
      let image = ""
      let name = ""
      let priority = ""
      let className = ""
      let classNameSymbol = ""
      keys.forEach((k, index) => {
        const fixedPrice = (1 / values[index]).toFixed(5)
        if (k === "USD") {
          image = USD
          name = "Amerikan Doları"
          priority = 1
          className = "Amerikan-Dolar"
          
          classNameSymbol= k
        }
        if (k === "EUR") {
          image = EUR
          name = "Avrupa Para Birimi"
          priority = 4
          className = name.replaceAll(" ", "-")
          classNameSymbol= k
        }
        if (k === "JPY") {
          image = JPY
          name = "Japon Yeni"
          priority = 2
          className = name.replaceAll(" ", "-")
          classNameSymbol= k
        }
        if (k === "NOK") {
          image = NOK
          name = "Norveç Kronu"
          priority = 5
          className = "Norve-Kronu"
          classNameSymbol= k
        }
        if (k === "GBP") {
          image = GBP
          name = "İngiliz Sterlini"
          priority = 4
          className = "ngiliz-Sterlini"
          classNameSymbol= k
        }
        if (k === "DKK") {
          image = DKK
          name = "Danimarka Kronu"
          priority = 3
          className = name.replaceAll(" ", "-")
          classNameSymbol= k
        }
        newArr = [...newArr, { symbol: k, price: fixedPrice, image, name, priority, className, classNameSymbol }]
      })
      const sorted = SortDatas(newArr)
      setCurrencyList(sorted)
      console.log(sorted)
    }

  }, [])

  return (
    // <CurrencyListTable />
    <>
      <div className='container'>
        <span className="Piyasalar">
          Piyasalar
        </span>
        <div style={{ display: "flex", marginTop: 38 }}>
          <div>
            {currencyList.map((c, index) => (
              index < 3 &&
              <CurrencyComponent symbol={c.symbol} price={c.price} image={c.image} name={c.name} className={c.className}  classNameSymbol={c.classNameSymbol} />
            ))}
          </div>
          <div >
            {currencyList.map((c, index) => (
              index > 2 &&
              <CurrencyComponent symbol={c.symbol} price={c.price} image={c.image} name={c.name} className={c.className}  classNameSymbol={c.classNameSymbol}/>
            ))}
          </div>
          <Converter currencyList={currencyList} />

        </div>
      </div>

    </>
  );
}

export default App;
