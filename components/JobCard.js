import FlexColumn from '../components/FlexColumn.js'

export default function JobCard(props) {
  return (
    <FlexColumn >
      <h1><span>{props.company}</span><span>{props.date}</span></h1>
      <p>{props.desc}</p>
      <p className="right">{props.stack}</p>
      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
        }

        .right {
          justify-content: flex-end;
        }
      `}</style>
    </FlexColumn>
  )
}
