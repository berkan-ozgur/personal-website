import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="App">
          <title>Berkan Özgür</title>
          <div className="about">
            <ul>
              <li>
                Berkan ÖZGÜR
              </li>
              <li>
                Front-end Developer
              </li>
            </ul>
          </div>
          <a href="https://www.linkedin.com/in/berkan-ozgur/">
            <div className="social">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/berkan.ozgr/">
            <div className="social">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="https://github.com/berkan-ozgur/">
            <div className="social">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
