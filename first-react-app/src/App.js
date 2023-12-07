import me from "./me.jfif";
import "./App.css";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  console.log(showPopup);

  function openPopup() {
 
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <div>
      {showPopup === false ? (
        <div className="flex-container">
          <div className="flex-items">
            <h1>Kejsi Blushi</h1>
            <p>Company : TeamSystem</p>
            <p>Birthday : 05 August 2001</p>
            <p>City : Tirana</p>
          </div>
          <div className="flex-items">
            <img src={me} alt="image" />
          </div>
          <div className="flex-items">
            <p>
              Hi, I'm a Junior DevOps Engineer & currently on Junior React
              training. Graduated in Bachelor of Business Informatics from Epoka
              University.
            </p>
          </div>
          <button id="open-button" onClick={openPopup}>
            More Details ...
          </button>
        </div>
      ) : (
        <div className="popup">
          <img src={me} alt="Profile Photo" />
          <h2>Kejsi Blushi</h2>
          <p>Birthday: 05 August 2001</p>
          <p>City: Tirana</p>
          <p>
            Hi, I'm a Junior DevOps Engineer & currently on Junior React
            training. Graduated in Bachelor of Business Informatics from Epoka
            University. I'm constantly learning and exploring additionally, my
            background includes comprehensive training in QA methodologies, with
            a focus on Selenium for automation testing, ensuring robust and
            effective quality assurance practices.
          </p>
          <button id="close-button" onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
