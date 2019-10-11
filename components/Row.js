export default class Row extends React.Component {
  constructor(props) {
      super(props);
      this.rowRef = React.createRef();
  }

  getContainer() {
    return this.rowRef;
  };

  render() {
    return (
      <div ref={this.rowRef} name={this.props.name} className={this.props.class}>
        {this.props.children}
        <style jsx>{`
          div {
            display: ${this.props.display};
            flex-direction: ${this.props.flexDirection};
            flex-wrap: ${this.props.flexWrap};
            flex-grow: ${this.props.flexGrow};
            background: ${this.props.background};
            background-size: ${this.props.backgroundSize};
            background-color: ${this.props.backgroundColor};
            background-blend-mode: ${this.props.backgroundBlendMode};
            padding-top: ${this.props.paddingTop};
            padding-bottom: ${this.props.paddingBottom};
            margin: ${this.props.margin};
            height: ${this.props.height};
            justify-content: ${this.props.justify};
            align-items: ${this.props.align};
          }
        `}</style>
      </div>
    );
  }

  static defaultProps = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: "1",
    background: "initial",
    backgroundSize: "cover",
    backgroundColor: "initial",
    backgroundBlendMode: "initial",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    margin: "1rem",
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
}
