import React, { Component } from 'react'

export default class Dropdown extends Component {

   

    render() {
        return (
            <div className='dropdown'>
                <select onChange={this.props.handleChange} >
                    <option value='asc'>
                        ascending
                    </option>
                    <option value='desc'>
                        descending
                    </option>
                </select>
            </div>
        )
    }
}
