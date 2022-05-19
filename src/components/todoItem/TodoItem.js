import { Component } from "react";

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.elem = props.elem
    }

    render() {
        return(
            <div className="item">
                {this.elem.title}
            </div>
        )
    }
}