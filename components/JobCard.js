import Column from '../components/FlexColumn.js'

export default function JobCard(props) {
  return (
    <div>
      <h1>{props.company}<span>{props.date}</span></h1>
      <p>{props.desc}</p>
      <p>{props.stack}</p>
      <style jsx>{`

      `}</style>
    </div>
  )
}
