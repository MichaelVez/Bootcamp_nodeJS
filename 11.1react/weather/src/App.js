import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const { data } = await axios.get(
        "https://first-heroku-deploy-mvz.herokuapp.com/"
      );
      console.log(data);
      setMyData(data);
    };
    fetchingData();
  }, []);
  const logData = () => {
    return myData.temperature + " " + myData.description;
  };
  return <div>{logData()}</div>;
}

export default App;
