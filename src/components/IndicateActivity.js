import React from 'react'
import maybe from './hoc/maybe'
const isActive = ({isActive = false}) => isActive

const IndicateActivity = () => (
    <div className="progress">
        <div className="indeterminate"></div>
    </div>
)
    


export default maybe(isActive, IndicateActivity)
