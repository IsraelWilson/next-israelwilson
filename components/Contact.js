export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "Name",
                  email: "Email",
                  message: "Your Message"};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value});

  }

  handleSubmit() {

  }

  handleFocus(event) {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: ""});
  }

  handleBlur(event) {
    const target = event.target;
    const name = target.name;

    if(name == "name") {
      this.setState({[name]: "Name"});
    }else if(name == "email") {
      this.setState({[name]: "Email"});
    }else if(name == "message") {
      this.setState({[name]: "Your Message"});
    }else {
      // Handle Error
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        <input name="email" value={this.state.email} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        <textarea name="message" value={this.state.message} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur}>
        </textarea>

        <style jsx>{`
          input {

          }
        `}</style>
      </form>
    );
  }
}
