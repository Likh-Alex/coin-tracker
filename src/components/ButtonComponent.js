import React, {Component} from 'react'
import './styles/ButtonComponent.css'

export default class ButtonComponent extends Component {
    render() {
        return (
            <button disabled={this.props.disabled} onClick={this.props.onClick}
                    className='button'>{this.props.text}</button>
        )
    }
}
