import React, { useState } from 'react'
import Button from './Button'
import { Heading } from './heading'

interface Props {
    
}

export const Counter = () => {
    const [state,setState]=useState(0)
    return (
        <div>
            <Heading text="Counter"/>
            <Heading text={state} />
            <div style={{display:'flex',gap:"1rem",justifyContent:"center"}}>
            <Button text="Increment" onClick={()=>setState(state+1)}/>
            <Button text="Decrement" onClick={()=>setState(state-1)}/>
            </div>
        </div>
    )
}
