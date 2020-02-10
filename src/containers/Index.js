import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchColors } from '../actions'
import ColorSwatch from '../components/ColorSwatch'
import IndicateActivity from '../components/IndicateActivity'
import Nothing from '../components/Nothing'
import either from '../components/hoc/either'


const ColorSwatches = ({items = []}) => items.map( color => (
    <div key={ color.name } className="col m6 s12"><ColorSwatch color={color}/></div>
))

const isEmpty = ({items = []}) => items.length === 0

const ColorSwatchesOrNothing = either(isEmpty, Nothing)(ColorSwatches)


class Index extends Component {
    componentDidMount(){
        const { dispatch, page } = this.props
        dispatch(fetchColors(page))
    }
    render() { 
        return(
            <div className="container">
                <div className="row">
                    <h1>A list of colors</h1>
                </div>
                <div className="row">
                    <IndicateActivity isActive={this.props.isFetching} />
                    <ColorSwatchesOrNothing items={this.props.colors} />
                </div>
            </div>  
        )
    }
}

const mapState = ({colors}) => ({ 
    isFetching: colors.isFetching, 
    colors    : colors.colors, 
    page      : colors.page,
    error     : colors.error 
})

export default connect(mapState)(Index)