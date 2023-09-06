import React, { Component } from "react";


class ClassState extends Component {

    // constructor initialize an object's state in class
    constructor(){
        super()
        this.state = {
            sampleContent: "Hello, world",
            bgcol: "red"
       };

        //Bind Method
       this.changeElement = this.changeElement.bind(this);
    }
 
    changeElement(){
        // document.getElementById("sampleElement").innerHTML = "Wow WOW";
        // this.setState({sampleContent: "Wow,Wow"});
        // this.setState({bgcol: "yellow"})
        this.setState({sampleContent: "Wow,Wow" , bgcol: "yellow"});

        // Sample Conditional statement using ternary operator.
        this.state.bgcol == "red" ? this.setState({sampleContent: "Wow,Wow" , bgcol: "yellow"}) : this.setState({bgcol: "red"});
    }

  render() {
    // let element = "meow";

    // For Destructuring State
    const {bgcol, sampleContent} = this.state;
    return (
      <>
        <h1 id="sampleElement" style={{ background: bgcol}}>
             {sampleContent}
        </h1>
        <button onClick={this.changeElement}>Change Sample Element</button>
        {/* <button onClick={() => this.changeElement()}>Change Sample Element</button> */}
      </>
    );
  }
}

export default ClassState;