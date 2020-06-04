import FlexContainer from '../components/FlexContainer.js'
import FlexColumn from '../components/FlexColumn.js'
import FlexRow from '../components/FlexRow.js'
import JobCard from '../components/JobCard.js'
import NavBar from '../components/NavBar.js'

export default function Home() {
  return (
    <div>
      <JobCard company="Oceus Networks" date="September 2018 - April 2020" desc="Oceus is a telecommunication company that provides custom broaband solutions for government and enterprise customers across the globe. I worked
                                                                                 as a software engineer for their Xiphos and Device teams. I contributed to the development of the REST API, React application, automated Jenkins
                                                                                 builds, and wrote a small system process to manage an LTE modem. I continued the development of their React application, did development for the
                                                                                 REST API, and developed background proceses to manage a network connection on a raspberry pi via modem." stack="C++ Python Go React Linux"/>
      <JobCard company="DXC Technology" date="May 2016 - May 2018" desc="DXC is an end-to-end IT service company. It was here that I finally transitioned from Windows to Linux. I finally " stack="Java Documentation Linux"/>
      <JobCard company="Urban Prep" date="August 2015 - May 2016" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt, purus eget convallis fermentum, massa nisl finibus augue, vel vulputate lectus
                                                                        lectus vel massa. In suscipit a tortor id gravida. Proin maximus tempor convallis. Proin sagittis ipsum in dolor gravida consectetur nec faucibus tellus.
                                                                        Morbi ac mauris ex. Donec sapien urna, malesuada vitae est nec, tincidunt semper nulla. Aliquam suscipit orci nibh, mattis dapibus ligula ultrices non.
                                                                        Mauris faucibus sodales tellus in congue. Ut molestie nibh luctus leo eleifend, quis congue quam iaculis." stack="Communication Research Windows"/>
      <JobCard company="Fulton County" date="May 2012 - May 2013" desc="Sed velit risus, imperdiet sodales ultricies sed, luctus sit amet nisl. Quisque molestie tincidunt risus a condimentum. Phasellus a fermentum est, id
                                                                        pharetra dolor. Vestibulum dolor erat, sagittis hendrerit egestas id, hendrerit vel augue. In venenatis congue massa a blandit. Maecenas tempor eget
                                                                        nulla eleifend viverra. Suspendisse potenti. Suspendisse faucibus luctus nisl eu scelerisque. Mauris efficitur molestie feugiat. Quisque quis sem quam."
                                                                        stack="Administration Hardware Windows"/>
    </div>
  )
}
