import React, { Component } from 'react'
import axios from 'axios'

class matches extends Component {
    constructor() {
        super()
        this.state = {
            history: []
        }
    }

    componentDidMount() {
        let { history } = this.state
        axios.get("/matches").then((res) => {
            console.log(res)
            let matches = res.data.payload
            console.log(matches)
            this.setState({
                history: res.data.payload
            })
        })

    }

    componentDidUpdate() {
        let { history } = this.state;
        console.log("update", history);
    }

    render() {
        let { history } = this.state
        console.log("render function", history)
        return (
            <div>
                <p>function</p>
                <ul>
                    {
                        history.map((el, index) =>{
                            return(
                                <li key = {index}>
                                   Match:{el.id} Player 1: {el.player1} Player2: {el.player2} Winner: {el.whowon}

                                </li>
                            )
                        })
                    }

                </ul>


            </div>
        )
    }





}

export default matches