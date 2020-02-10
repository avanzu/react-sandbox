import React from 'react'
const invertHex = hex => '#'.concat((Number(`0x1${hex.replace(/#/, '')}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase())

const ColorSwatch = ({ color: {name = 'meh', year = '2020', color = '#000', pantone_value = 'meh' }}) =>  (
    <div key={name} className="card blue-grey darken-3">
        <div className="card-image">
            <svg xmlns='http://www.w3.org/2000/svg' width="100%" height="100%" viewPort="0 0 50 100" style={{'backgroundColor': color}}>
                <text x="25" y="100" fill="white" stroke={invertHex(color)} fontWeight="lighter" fontFamily="impact" fontSize="50">{name}</text>
            </svg>
            
        </div>
        <div className="card-content white-text">
            <span className="card-title">{ name }</span>
            <p>The color {name} has the pantone value of "{pantone_value}" was invented in the year {year}.</p>
        </div>
    </div>
)


export default ColorSwatch
