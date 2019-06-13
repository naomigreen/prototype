import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Main from "./components/main/Main";

function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/data");
      setData(result.data);
    };
    try {
      fetchData();
    } catch (e) {
      setErrorMsg(e.message);
    }
  }, []);
  if (errorMsg) {
    console.log(errorMsg);
  }

  return (
    <div className="App">
      <Main data={data} />
    </div>
  );
}

export default App;
