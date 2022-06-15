import { useState } from "react";
// import axios from "axios";
import { API } from "../src/weatherAPI";
// const { default: axios } = require("axios");

function App() {
  const [myData, setMyData] = useState([]);
  const [city, setCity] = useState("");
  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const { data } = await axios.get("/");
  //     console.log(data);
  //     setMyData(data);
  //   };
  //   fetchingData();
  // }, []);
  const handleChange = ({ target }) => {
    setCity(target.value);
  };
  const handleClick = async () => {
    try {
      const { data } = await API.get(city);
      console.log(data);
      setMyData(data.temperature);
    } catch (err) {
      console.log(err);
    }
  };
  // const logData = () => {
  //   return myData.temperature + " " + myData.description;
  // };
  return (
    <div>
      <input value={city} onChange={handleChange} />
      <button onClick={handleClick}>get weather</button>
      {console.log(myData)}
      {myData}
    </div>
  );
}

export default App;
