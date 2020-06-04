import Home from '../components/Home.js'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: <Home/>};
  }

  render() {
    return (
      <>
        {this.state.page}
      </>
    )
  }
}
