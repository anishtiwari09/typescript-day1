import React, { ReactElement } from 'react'

interface Props {
    text:string,
    onClick:()=>void;
}

export default function Button({text,onClick}: Props): ReactElement {
    return (
        <div style={{border:"1px solid black", padding:"2rem"}} onClick={onClick}>
          {text}
        </div>
    )
}
export {Button}