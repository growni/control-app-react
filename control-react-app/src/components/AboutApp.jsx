import app_image_main from '../assets/control_main_image.png';

const AboutApp = () => (
    <section id="about-app" className="section">
      <h2>About the <span style={{ color: '#ffca2b' }}>App</span></h2>
      <p class="about-app-p">Control is a desktop application built with JavaFX and Spring Boot that helps you easily install/uninstall different apps, as well as remove bloater apps and processes.</p>
      <p class="about-app-p">The app is free to use and registration is not required. However, registered users have access to additional panel and are elligible to subscribe, donate and provide feedback</p>
      <img class="about-app-img" src={app_image_main} alt="Control main scene" />
    </section>
  );
  
  export default AboutApp;
  