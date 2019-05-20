import React from 'react'
import Row from '../components/Row.js'
import Column from '../components/Column.js'
import NavBar from '../components/NavBar.js'
import Progress from '../components/Progress.js'
import ImageLink from '../components/ImageLink.js'
import Contact from '../components/Contact.js'
import Position from '../components/Position.js'
import Education from '../components/Education.js'
import Bio from '../components/Bio.js'

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
        <Row name="landing" height="80vh" bg="url(/static/img/wall.jpg)">
        </Row>
        <NavBar ref={this.navbarRef} class={this.state.navbar}/>
        <Row name="about" justify="center">
          <Bio title="About Me" sub="I'm a software engineer located in the DFW area" desc="I enjoy using different frameworks, developer tools
             and creating products that increase user productivity. My freetime consist of gaming, reading comic books,
             and eating pasteries at the nearest bakery. Welcome to my corner of the internet! I hope you survive the experience." src="/static/img/bio.png" />
        </Row>
        <Row name="skills" height="80vh">
          <Column>
            <h1>Languages</h1>
            <span className="row">
              <Column>
                <Progress value="25" name="C++"></Progress>
                <Progress value="25" name="Java"></Progress>
                <Progress value="25" name="PHP"></Progress>
                <Progress value="25" name="Python"></Progress>
              </Column>
              <Column>
                <Progress value="25" name="HTML"></Progress>
                <Progress value="25" name="CSS"></Progress>
                <Progress value="25" name="MySQL"></Progress>
                <Progress value="25" name="Javascript"></Progress>
              </Column>
            </span>
          </Column>
          <Column>
            <h1>Software</h1>
            <Column>
              <Progress value="25" name="React"></Progress>
              <Progress value="25" name="Android Studio"></Progress>
              <Progress value="25" name="Unreal Engine"></Progress>
              <Progress value="25" name="Illustrator"></Progress>
            </Column>

          </Column>
          <Column>
            <h1>Operating Systems</h1>
            <Column>
              <Progress value="25" name="Linux"></Progress>
              <Progress value="25" name="Microsoft Windows"></Progress>
            </Column>

          </Column>
        </Row>
        <Row name="experience">
          <Position title="Software Engineer" desc="This was my breakthrough job where I not only grew as a developer, but as a person as well. At Oceus I was responsible
             for designing, implementing, customizing, and unit testing mobile solutions for potential customers. Everyday is a
             learning experience and a lot of fun. During the work week I'm using anywhere from 1 - 3 languages, pushing in new features
             or bug fixes for various products, and improving my ability to work on a team." date="September 2018 - Current" company="Oceus Networks" />

          <Position title="Application Designer" desc="As an application designer, my primary duties included taking customer design specifications and implementing it
             using dynamic and resource conscious solutions, using the Agile Development Cycle. Solutions included writing shell
             scripts to automate server deployment and network administration task, setting up reverse proxy and guacamole servers,
             and creating specialized user groups for application server access. Creating customer specific documentation and working
             on Unix based systems remotely were also daily responsibilities." date="May 2016 - May 2018" company="DXE Technology" />

          <Position title="Urban Prep Fellow" desc="My initial responsibility as a Fellow was to assist with planning events for students, maintaining communications with supporters,
             and creating a stringer support system for Urban Prep alumnus. I took on the additional responsibility of managing content for the
             academy website and successfully finding new, cost effective technical solutions for fund-raising." date="August 2015 - May 2016" company="Urban Prep Academies" />

          <Position title="Technical Support" desc="While working as technical support at Fulton County, I was responsible for learning the standards they had in place
             for maintaining and servicing workstations. I managed software applications, network devices, and cleaned viruses on
             Windows computers." date="May 2012 - May 2013" company="Fulton County Information Technology" />
        </Row>
        <Row name="education">
          <Education date="2010" school="Morehouse College" degree="B.S. in Computer Science"/>

          <Education date="2015" school="Urban Prep Academy" degree="High School Diploma"/>
        </Row>
        <Row name="socialize"justify="space-evenly">
            <ImageLink href="#" src="/static/img/github.png"/>
            <ImageLink href="#" src="/static/img/instagrams.png"/>
            <ImageLink href="#" src="/static/img/plays.png"/>
            <ImageLink href="#" src="/static/img/twitters.png"/>
        </Row>
        <Row name="contact">
          <Column align="center">
            <Contact/>
          </Column>
        </Row>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          span {
            display: flex;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
