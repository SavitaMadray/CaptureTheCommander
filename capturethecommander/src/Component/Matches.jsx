import React, { Component } from 'react'
import axios from 'axios'

class matches extends Component {
    constructor() {
        super()
        this.state = {
            history:[]
        }
    }

    componentDidMount() {
        let {history} = this.state
        axios.get("/matches").then((res) => {
            console.log(res)
            let matches = res.data.payload
            console.log(matches)
            matches.map((el) =>{
                history.push(el)

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
                {history.map(el =>{
                    return <p>{el.id}</p>
                })}

                </ul>


            </div>
        )
    }





}

export default matches