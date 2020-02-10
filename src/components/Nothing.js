import React from 'react'
import {ReactComponent as Logo } from '../resources/paperplane.svg'

const Nothing = ({ title='Emptiness', caption = 'There is nothing to show here' }) =>  (
    <div className="card blue-grey darken-3">
        <div className="card-image center-align">
            <Logo/>
        </div>
        <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{caption}</p>
        </div>
    </div>
)

export default Nothing
