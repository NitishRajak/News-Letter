import "./App.css";
import iconList from "./images/icon-list.svg";
import illustration from "./images/illustration-sign-up-desktop.svg";
import data from "./data";
import { useState } from "react";
import Success from "./Success";
function App() {
  const [email, setEmail] = useState("");
  const [enteredEmail, setEnteredEmail] = useState();
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError(<p style={{ color: "red" }}>Valid email required</p>);
      return;
    }

    if (!email.includes("@")) {
      setError("Valid email required");
    }
    console(email);
  };
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="left">
            <h1>Stay updated!</h1>
            <p>join 60,000+ product managers receiving monthly updates on:</p>
            {data?.map((item, index) => {
              return (
                <div className="List" key={index}>
                  <img src={iconList} alt="iconlist" className="ImageIcon" />
                  {item?.title}
                </div>
              );
            })}

            <form className="form" onSubmit={handleSubmit}>
              {error}
              <label>Email address</label>
              <br />
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn" type="submit">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="right">
            <img src={illustration} alt="desktop" className="image" />
          </div>
        </div>
      </div>
      <Success email={email} />
    </>
  );
}

export default App;
