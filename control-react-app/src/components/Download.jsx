const Download = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/growni/control-app-JavaFX/releases/latest/download/ControlApp.zip'; // Replace with your file URL
    link.download = 'downloaded-file.pdf';      // Optional: rename file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return(
    <section id="download" className="section hideAfter600">
      <h2>Download</h2>
      <p>Get the latest version of my app</p>
        <div className="download-btns">
          <button onClick={handleDownload} id="download-windows" class="btn-download">Download for Windows</button>
          <button id="download-linux"  class="btn-download" disabled="true">Download for Linux</button>
        </div>
    </section>
  );
}
  export default Download;
  