import React, {Component} from 'react';

class ClassComponent extends Component{
    constructor(props){
        super(props);
        console.log(this.props.someProp);

    }
    state = {
        count:0,
        count1:0
    }
    handleClick = ()=>{
        this.setState({count: this.state.count + 1, count1: this.state.count1 + 1})
    }

    render(){
        return(
          <div>
            <h1>Class Component Example</h1>
            <p>Count: {this.state.count}</p>
            <p>Count: {this.state.count1}</p>
            <p>{this.props.someProp}</p>
            <button onClick={this.handleClick}>Increment</button>
          </div>
        );
    }

}
export default ClassComponent;
