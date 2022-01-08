interface Props{
    text:string|number
}

export function Heading(prop:Props)
{
    return <div>
        <h2>{prop.text}</h2>
    </div>
}