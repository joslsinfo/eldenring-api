import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EldenService from "../service/EldenService";
import EldenList from "./EldenList";

const eldenService = new EldenService();

const Eldens = () =>  {
  const [data, setData] = useState([]);

  const getEldens = async () => {
    const data = await eldenService.getEldens();
  
// console.log(data);
    setData(data);
            
  };

  useEffect(()   => {
    getEldens();
  },[]);

  return <EldenList eldens={data} />;
};




export default Eldens;
