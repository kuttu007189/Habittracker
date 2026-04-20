import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL + "/api";

function App() {
  useEffect(() => {
    axios.get(API).then(res => console.log(res.data));
  }, []);

  return <h1 style={{textAlign: "center"}}>App Running 🚀</h1>;
}

export default App;
