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
    const value = target.value;

    if(name == "name" && value == "Name") {
      this.setState({[name]: ""});
    }else if(name == "email" && value == "Email") {
      this.setState({[name]: ""});
    }else if(name == "message" && value == "Your Message") {
      this.setState({[name]: ""});
    }else {
      // Handle Error
    }
  }

  handleBlur(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(name == "name" && value == "") {
      this.setState({[name]: "Name"});
    }else if(name == "email" && value == "") {
      this.setState({[name]: "Email"});
    }else if(name == "message" && value == "") {
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
          form {
            vertical-align: top;
            width: 50%;
            padding: 2rem;
          }

          input {
            display: block;
            width: 100%;
            padding: 1rem;
            margin-bottom: 1.5rem;
          }

          textarea {
            display: block;
            width: 100%;
            padding: 1rem;
            margin-bottom: 1.5rem;
            height: 10rem;
          }
        `}</style>
      </form>
    );
  }
}
