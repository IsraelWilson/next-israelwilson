import fetch from 'isomorphic-unfetch'

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
    if(this.state.name == "" || this.state.email == "" || this.state.message == ""){
      return;
    }
    if(this.state.name.toLowerCase() == "name" || this.state.email.toLowerCase() == "email" || this.state.message.toLowerCase() == "your message"){
      return;
    }
    console.log("Preparing to POST");

    fetch("http://www.israelwilson.com/cgi-sys/formmail.pl", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: {
        recipient: "israelsjwilson@gmail.com",
        subject: "New Message From " + this.state.name,
        email: this.state.email,
        comment: this.state.message
      }
    }).then(function(response){
      console.log(response);
    }).catch((err) => console.log(err));

    console.log("End of handleSubmit()");
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
      <form onClick={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        <textarea type="text" name="message" value={this.state.message} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur}>
        </textarea>
        <button type="button">SUBMIT</button>

        <style jsx>{`
          form {
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

          button {
            display: inline-block;
            border: none;
            padding: 1rem 2rem;
            margin: 0;
            text-decoration: none;
            background: #feda6a;
            color: #232323;
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition: background 250ms ease-in-out,
                        transform 150ms ease;
            -webkit-appearance: none;
            -moz-appearance: none;
          }

          button:hover,
          button:focus {
            background: #d6a206;
          }

          button:focus {
            outline: 1px solid #fff;
            outline-offset: -4px;
          }

          button:active {
            transform: scale(0.99);
          }
        `}</style>
      </form>
    );
  }
}
