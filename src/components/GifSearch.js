import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        query: ""
    }

    setSearchQuery = (e) => {
        console.log(e.target.value)
        this.setState({query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitHandler(this.state.query);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Gif Search" onChange={this.setSearchQuery}/>
                    </div>
                </form> 
            </div>
        )
    }
}
