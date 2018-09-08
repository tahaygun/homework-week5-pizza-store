import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChosenBase from '../actions/pizza'
import { bases } from '../db'

class PizzaBase extends Component{
    constructor(){
        super()
        this.handleChange 

        this.state = {}
    }

    handleChange = (event)  => {
        this.setState({ 
            id: event.target.key, 
            name: event.target.title, 
            price: event.target.value 
        })
        this.props.ChosenBase(event.target.title, event.target.value)
    }

    render(){
        return(
            <div>
                <h3 className="label_base">What's the best crust?</h3>
                <div>
                    <ul>
                        {bases.map(base => <li key={ base.id }>
                        <input  name={ 'base' } type={ 'radio' } onChange={this.handleChange} />
                       <div className="label-item-base"> <label>{ base.name }</label> </div>
                       <br/>
                        <div className="label-item-base-price"><label> &euro; { base.price }</label></div>
                        </li> )}
                    </ul>
                </div>

            </div>
        )
    }
}


export default connect(null, {ChosenBase})(PizzaBase)