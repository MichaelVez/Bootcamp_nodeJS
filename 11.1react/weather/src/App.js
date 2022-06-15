import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const { data } = await axios.get("http://localhost:3005");
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
