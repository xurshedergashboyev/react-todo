import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-pretend">
                            <div className="input-group-text bg-primary text-white ">
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                        </div>
                        <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add todo item"
                        valu={item}
                        onChange={handleChange}
                        />
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-block btn-primary mt-3">
                        Add Items
                    </button>
                </form>
            </div>
        )
    }
}
