import FlexContainer from '../components/FlexContainer.js'
import FlexColumn from '../components/FlexColumn.js'
import FlexRow from '../components/FlexRow.js'
import JobCard from '../components/JobCard.js'
import NavBar from '../components/NavBar.js'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: <Home/>};
  }

  render() {
    return (
      <>
        <NavBar/>
        {this.state.page}
      </>
    )
  }
}
