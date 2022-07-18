
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const App = () => {

  const [eldensData, setEldenData] = useState([]);
  console.log(eldensData);

useEffect(() => {
axios.get("https://eldenring.fanapis.com/api/creatures")
.then((res) => setEldenData(res.data.data));
}, []);

  return (
    <div className="app-container">
      <h1>Elden ring API</h1>
      <div className="elden-container">
        {eldensData.map((elden) => (
        <Card key={elden.id} elden={elden} />
        ))}
    
      </div>
      
    </div>
  );
};

export default App;