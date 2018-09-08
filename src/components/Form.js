import React, { Component } from 'react';
import PizzaBase from './PizzaBase'



export default class Form extends Component {
    render(){
        return(
            <form className="container_form">
                <h1>New Age Pizza</h1>
                {/* call the components here */}
                <PizzaBase />

            </form>
        )
    }
}