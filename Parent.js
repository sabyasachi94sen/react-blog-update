import React from "react";
import mountainSmall from "./mountainSmall.jpg";
import Mountain from "./Mountain";
import './style.css';


const Parent=()=>{

    var obj={
        desc: "This is a mountain",
        image: mountainSmall,
    }
   var tempArr=[];
   for(var i=0;i<2;i++)
   tempArr.push(obj);
    return (
        <div className="wrapper">
          {
              tempArr.map((val)=>{
                  return <Mountain details={val} />
              })
          }

        </div>
    )
}

export default Parent;