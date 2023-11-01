import React from "react";
import { Banquet } from "../constants/index";
import BanquetList from "./BanquetList";


function Main() {

  return (
    <div className="">
      
      <BanquetList banquetData={Banquet} />
    </div>
  );
}

export default Main;
