import payPalLogo from '../assets/Paypal_2014_logo.png';
import revolutLogo from '../assets/Revolut-Symbol.png';


export default function DonateMobile(){

    const handleClick = (url) => {
        window.open(url, '_blank');
    };


    return (
        <section id="donate" className="donateMobile">
            <div className="donateM-header">
                <h2> <span style={{ color: '#ffca2b' }}>Support</span> My Work</h2>
                <p>If you like what I'm building and want to support future development, feel free to donate.</p>          
            </div>
            <div className="donateM-links showBelow600">
                <div className='logo-box' onClick={()=> handleClick("https://www.paypal.com/donate/?hosted_button_id=WV649AX6PXNSJ&source=qr")}>
                    <img src={payPalLogo} alt="Paypal Logo" />
                </div>

                {/* Add Revolut link in handleClick! */}
                <div className='logo-box' onClick={()=> handleClick("https://www.paypal.com/donate/?hosted_button_id=WV649AX6PXNSJ&source=qr")}>
                    <img src={revolutLogo} alt="revolut Logo" />
                </div>
            </div>
        </section>
    )
}