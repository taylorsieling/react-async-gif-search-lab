import React from 'react'

export default function GifList(props) {
    return (
        <div>
            <ul>
                {props.gifs.map((gif, i) => (
                    <li style={{ listStyle: "none", padding: "20px", margin: "20px" }} key={i}><img alt="kitten" src={gif}/></li>
                ))}
            </ul>
        </div>
    )
}

