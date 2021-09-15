import React from 'react'

export default function Item({name, summary, drawingDateArray}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{summary}</p>
            <small>{drawingDateArray[0]}</small>
            <br />
            <small>{drawingDateArray[1]}</small>
        </div>
    )
}
