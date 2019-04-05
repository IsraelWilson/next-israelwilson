/*export default function Row(props) {
  return (
    <div name={props.name} className={props.class}>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-grow: 1;
          height: ${props.height};
          justify-content: ${props.justify};
        }
      `}</style>
    </div>
  )
}*/
import React from 'react'
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sticky: false};
    this.scrollPos = 0;
    this.divRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    //this.setState({navPos: window.innerHeight});
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    this.scrollPos = window.scrollY;
    console.log(this.divRef.current.getBoundingClientRect().top);

    if(this.divRef.current.getBoundingClientRect().top < this.scrollPos && this.props.navbar) {
        //this.setState({sticky: true});
        console.log(this.divRef.current.getBoundingClientRect().top);
    }
    else {
      //this.setState({sticky: false});
      //console.log("We Go Agane");
    }
  };

  render() {
    return (
      <div name={this.props.name} className={this.state.sticky ? "sticky" : ""} ref={this.divRef}>
        {this.props.children}
        <style jsx>{`
          div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-grow: 1;
            height: ${this.props.height};
            justify-content: ${this.props.justify};
          }
        `}</style>
      </div>
    );
  }
}
