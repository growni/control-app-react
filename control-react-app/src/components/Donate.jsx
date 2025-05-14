import { useState } from 'react';
import payPalLogo from '../assets/Paypal_2014_logo.png';
import revolutLogo from '../assets/Revolut-Symbol.png';
import PopUpMenu from './UI/popUp';
import QR_paypal from '../assets/QR_paypal.png';
import QR_revolut from '../assets/QR_revolut.png';


export default function Donate(){


    const [isOpenPop, setIsOpen] = useState('');

    const handleClose = ()=>{
        setIsOpen('')
    }

    const handleClick = (url, name) => {

        if(window.innerWidth > 600){
            setIsOpen(name)
        }else{
            window.open(url, '_blank');
        }
    };


    const paymentMapper = {
        'revolut': <div className='donateImg-container'><img  src={QR_revolut} alt="QR Code revolut" /></div>,
        'payPal': <div className='donateImg-container'><img  src={QR_paypal} alt="QR Code paypal"  /></div>,
    }
    


    return (
        <section id="donate" className="donateMobile">
            <div className="donateM-header">
                <h2> <span style={{ color: '#ffca2b' }}>Support</span> My Work</h2>
                <p>If you like what I'm building and want to support future development, feel free to donate.</p>          
            </div>
            <div className="donateM-links showBelow600">
                <div className='logo-box' onClick={()=> handleClick("https://www.paypal.com/donate/?hosted_button_id=WV649AX6PXNSJ&source=qr", 'payPal')}>
                    <img src={payPalLogo} alt="Paypal Logo" />
                </div>

                {/* Add Revolut link in handleClick! */}
                <div className='logo-box' onClick={()=> handleClick("revolut.me/aaaleksandrov", 'revolut')}>
                    <img src={revolutLogo} alt="revolut Logo" />
                </div>
            </div>

            {
                isOpenPop && <PopUpMenu component={paymentMapper[isOpenPop]} handleClose={handleClose}/>
            }
        </section>
    )
}