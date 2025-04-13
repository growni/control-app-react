import avatar from '../assets/avatar.png';

const AboutMe = () => (
    <section id="about-me" className="section">
      <h2>About <span style={{ color: '#ffca2b' }}>Me</span></h2>
      <img class="about-me-img" src={avatar} alt="Avatar image" />
      <p class="about-me-p">My name is Aleks, and I am a self-taught developer. I am curious about technologies and my goal is to build useful tools that help people save time and get organized.</p>
      <p class="about-me-p">I love playing video games and explore wild places far away from civilzation. If you are interested to learn more about me or my app you can connect with me on <a href="https://www.linkedin.com/in/aleks310/">Linkedin</a></p>
    </section>
  );
  
  export default AboutMe;
  