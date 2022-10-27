import { Component , useState } from 'react';

class About extends Component {
    constructor(props){
        super()
        this.state = {
            counter:0
        }
        this.handleClick.bind(this)
    }
    handleClick = () => this.setState({counter:this.state.counter += 1})
    render(){
        return(
            <div className="app">
                <h1>Counter</h1>
                <p>{this.state.counter}</p>
                <br />
                <button onClick={this.handleClick} >Saluda</button>
            </div>
        )
    }
}
export default About;

export const Divider = () => {
    return <hr />
}

//HOOKS

// const About = () => {
//     let [counter,setCounter] = useState(0);

//     const handleClick = () => setCounter(counter += 1);

//     return (
//         <div>
//             <p>{counter}</p>
//             <button onClick={handleClick} >contador</button>
//         </div>
//     )
// }

// export default About;
