import Column from '../components/Column.js'
import Row from '../components/Row.js'
import Carousel from '../components/Carousel.js'
import JobCard from '../components/JobCard.js'

export default function Home() {
  const att = {
    company: "AT&T",
    date: "08/2020 - 09/2020",
    bullets: ["Led the development of a React web application that allows users to search and filter records of people that have spoken at the company. Internal users have access to additional features that make adding and maintaining records easier.",
    "Created the REST API that handles database request and utilized TypeScript on the back end to simplify debugging.",
    "Simplified the component structure on the application front end, added additional components as the project grew, and mentored a younger developer."],
    stack: "C++ Python Go React Linux"
  };
  const oceus = {
    company: "Oceus Networks",
    date: "09/2018 - 04/2020",
    bullets: ["Managed a Python REST API using the Flask web framework. This included creating and testing new endpoints that deliver JSON data in real time.",
    "Lead full stack developer for our React web application. Go and Node were used on the back end as well as Postgres for the database.",
    "Created a command line application, written in C++, that parsed data read through telnet and saved the captured data as a .csv or text file.",
    "Created automated build processes for company applications in Jenkins using pipeline scripts.",
    "Regularly performed unit tests during the development of software and quality assurance test for each application release."],
    stack: "C++ Python Go React Linux"
  };
  const dxc = {
    company: "DXC Technology",
    date: "05/2016 - 05/2018",
    bullets: ["Improved on Agility, a cloud deployment application built on top of docker containers, by creating new application features written in Java.",
    "Continued use of Git as a means to achieve continuous delivery.",
    "Wrote installation guides and user manuals tailored for every unique application deployment."],
    stack: "Java Documentation Linux"
  };

  return (
    <Carousel>
      <JobCard company={att.company} date={att.date} bullets={att.bullets} stack={att.stack}/>
      <JobCard company={oceus.company} date={oceus.date} bullets={oceus.bullets} stack={oceus.stack}/>
      <JobCard company={dxc.company} date={dxc.date} bullets={dxc.bullets} stack={dxc.stack}/>
    </Carousel>
  )
}
