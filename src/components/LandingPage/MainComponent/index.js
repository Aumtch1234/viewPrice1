import React from 'react'
import "./styles.css"
import Button from '../../Common/Button'
import Iphone from '../../../assets/Phone.png'
import Gradient from '../../../assets/gradient.png'

function MainComponent() {
    return (
        <div className='flex-info'>
            <div className='left-component'>
                <h1 className='crypto-price-heading'>Crypto Price</h1>
                <h1 className='real-time-heading'>Reaal Time.</h1>
                <p className='info-text'>
                    Track crypto through a public api in real time. Vitsit the dashboard to do so !
                </p>
                <div className='btn-flex'>
                    <Button text={"Dashboard"}/>
                    <Button text={"Share"} outlined={true}/>
                </div>
            </div>
            <div className='phone-container'>
                <img src={Iphone} className='iphone'/>
                <img src={Gradient} className='gradient'/>
            </div>
        </div>
    )
}

export default MainComponent