import React, {useState} from "react";

export default function CardSetInstructions(props){
    const [name, setName] = useState("");
    if (props){
    let data = props.data;
 
        const myArrCreatedFromMap = data.map(x => x.name )
    let length = myArrCreatedFromMap.length;
    let lastType = myArrCreatedFromMap[--(length)];
    return(<div className="setInstructions">
     ({myArrCreatedFromMap.slice(0, length).map(function(subtype){
    return(<span className="instructions" key={subtype.toString()}> {subtype} &nbsp;• </span>)})}
     {lastType} )
    </div>)  
;}}
