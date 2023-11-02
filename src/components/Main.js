import React from "react";
import { Banquet } from "../constants/index";
import BanquetList from "./BanquetList";


function Main({openModel}) {
  return (
    <div className="">      
      <BanquetList banquetData={Banquet} setopen={openModel} />
    </div>
  );
}

export default Main;
