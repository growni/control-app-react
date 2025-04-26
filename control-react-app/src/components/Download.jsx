const Download = () => (
    <section id="download" className="section hideAfter600">
      <h2>Download</h2>
      <p>Get the latest version of my app</p>
      <a href="https://github.com/growni/control-app-JavaFX/releases/latest/download/ControlApp.zip" download>
        <button id="download-windows" class="btn-download">Download for Windows</button>
        <button id="download-linux"  class="btn-download" disabled="true">Download for Linux</button>
      </a>
    </section>
  );
  
  export default Download;
  