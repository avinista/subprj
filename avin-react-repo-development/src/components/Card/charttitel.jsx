import React from "react";

const Charttitel = () => {

    const  titleInline = ()=>{
        return (
            <div className="charttitel__incom">
               <span className="chartlist__incom--lable"></span>
               <span className="chartlist__incom--color"></span>
            </div>
            )
    }
    <div className="charttitel">
      {titleInline()}
   </div>
}