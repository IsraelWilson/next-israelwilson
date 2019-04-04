import React from 'react'

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navPos: 0};
    this.scrollPos = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({navPos: window.innerHeight});
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    console.log('the scroll things', event);
    this.scrollPos = window.scrollY;
    if(this.scrollPos > this.state.navPos){
      this.setState({navPos: this.scrollPos});
    }
  };

  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
