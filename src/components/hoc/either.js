import React from 'react'

const either = (predicate, LeftComponent) => Component => props =>
    predicate(props) ? <LeftComponent {...props} /> : <Component {...props} />

export default either    