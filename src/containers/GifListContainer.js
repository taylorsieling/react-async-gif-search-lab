import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidCatch() {
        this.handleSubmit()
    }

    submitHandler = (q) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&limit=3&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            console.log(data)
            this.setState({
                gifs: data.map((gif) => gif.images.original.url)
            })
            
        })
    }

    render() {
        return (
            <div>
                < GifSearch onSubmitHandler={this.submitHandler}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

}