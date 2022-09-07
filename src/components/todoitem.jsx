import React from "react";

export default function Todo(props){
return (
<div>
    <li style={{textDecoration: 'line-through'}}>{props.text}</li>
</div>
)
}