import React from 'react'
import Row from '../components/Row.js'
import NavBar from '../components/NavBar.js'

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbar: "clean"};
    this.navbarRef = React.createRef();
    this.divOffsetTop = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.divOffsetTop = this.navbarRef.current.getContainer().current.offsetTop;
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    //console.log(this.navbarRef.current.getContainer().current.offsetTop);
    if(window.scrollY >= this.divOffsetTop) {
      this.setState({navbar: "sticky"});
    } else {
      this.setState({navbar: "clean"});
    }
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        scroll: this.state.scroll
      });
    });

    return (
      <div>
        <Row name="about" height="80vh">
          <p>Row 1</p>
        </Row>
        <NavBar ref={this.navbarRef} class={this.state.navbar}/>
        <Row name="skills" height="80vh">
          <p>Row 2</p>
        </Row>
        <Row name="experience" height="80vh">
          <p>Row 3</p>
        </Row>
        <Row name="education" height="80vh">
          <p>Row 4</p>
        </Row>
        <Row name="socialize" height="80vh">
          <p>Row 5</p>
        </Row>
        <Row name="contact" height="80vh">
          <p>Row 6</p>
        </Row>
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
