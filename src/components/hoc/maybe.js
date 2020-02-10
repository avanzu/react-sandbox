import React from 'react'

const maybe = (predicate, Component) => props => 
    predicate(props) ? <Component {...props} /> : null

export default maybe    