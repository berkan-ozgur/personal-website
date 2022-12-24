import './App.scss';
import wavingHand from './images/waving-hand_1f44b.gif'
function App() {
  return (
    <><div id="stars-group-1"></div><div id="stars-group-2"></div><div id="stars-group-3"></div><div id="stars-group-4"></div><div id="stars-group-5"></div><div id="stars-group-6"></div><div className="container">
      <div className="row">
        <title>Berkan Özgür</title>
        <div className="navbar">
          <a href="">Home</a>
          <a href="#more-details">About Me</a>
          <a href="/">Portfolio</a>
        </div>
        <div className="about">
          <ul>
            <li>
              Hello, welcome to my personal website! <img src={wavingHand} style={{ width: 40 }} alt="waving hand"></img>
            </li>
            <li>
              For more details, click the arrow below
            </li>
            <div className="down-arrow">
              <a href="#more-details">↓</a>
            </div>
          </ul>
        </div>
        <div id="stars-group-1"></div>
        <div id="stars-group-2"></div>
        <div id="stars-group-3"></div>
        <div id="stars-group-4"></div>
        <div id="stars-group-5"></div>
        <div id="stars-group-6"></div>
        <div className="more-details" id="more-details">
          <ul>
            <li>
              Berkan ÖZGÜR
            </li>
            <li>
              Front-end Developer
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </div></>
  );
}

export default App;
