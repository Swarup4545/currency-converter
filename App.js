import { useState } from 'react'
import InputBox from './InpoutBox'
import useCurrencyInfo from './useCurrencyinfo'
import marvin from './marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import './App.css';

function App() {

    
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="mt-5"
        
    >
        <div className=" b">
            <div  className=" max-w-md mx-auto w-100  p-5 ">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="c mb-1">
                       
                        <InputBox
                            
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div style={{display: 'grid'  }} className="relative w-full h-0.5">
                        <button

                            style={{borderRadius:'5px'}}
                            type="button"
                            className=" bg-primary text-white m-auto"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="c mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <div style={{display: 'grid'  }} className=''>
                    <button type="submit" className="m-auto  px-4 py-3 ">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
);
}

export default App
