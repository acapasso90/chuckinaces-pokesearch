import React from "react";

export default function SubTypeInstructions(props){
console.log(props.data);
let info = props.data
let length = info.length;
let lastType = props.data[--(length)];

return(<div className="SubTypeInstructions">({info.slice(0, length).map(function(subtype){
    return(<span className="instructions" key={subtype.toString()}> {subtype} &nbsp;•</span>)})}
    {lastType} )
</div>
);

}