import QR_paypal from '../assets/QR_paypal.png';
import QR_revolut from '../assets/QR_revolut.png';

const DonateDesktop = () => (
  <section id="donate" className="section hideAfter600">
    <h2> <span style={{ color: '#ffca2b' }}>Support</span> My Work</h2>
    <p>If you like what I'm building and want to support future development, feel free to donate</p>
    <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <img className="donate_img" src={QR_paypal} alt="QR Code paypal"  />
        <p>PayPal</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img className="donate_img" src={QR_revolut} alt="QR Code revolut" />
        <p>Revolut</p>
      </div>
    </div>
  </section>
);

export default DonateDesktop;
