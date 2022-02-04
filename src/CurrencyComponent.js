
import React, { useState, useEffect } from 'react'


const CurrencyComponent = (props) => {

    const { price, symbol, image, name, className, classNameSymbol } = props

    return (
        <React.Fragment>

            <div style={{ display: "flex" }}>

                <img src={image}
                    className="Group-7"
                />
                <div>
                    <div>
                        <span className={classNameSymbol}  >
                            {symbol}
                        </span>
                        <span className="ALI">
                            ALIŞ                </span>
                        <span className="SATI">
                            SATIŞ
                        </span>
                    </div>
                    <div>

                        <span className={className}>{name}</span>
                        <span>
                            {price}
                        </span>
                        <span>
                            {price}
                        </span>
                    </div>
                </div>
            </div>
            <div className='Path'></div>
        </React.Fragment>

    )

}
export default CurrencyComponent