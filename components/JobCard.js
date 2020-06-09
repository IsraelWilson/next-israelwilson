import FlexColumn from '../components/FlexColumn.js'

export default function JobCard(props) {
  return (
    <FlexColumn width="512px" bgColor="hsla(199, 98%, 48%, .12)", shadow="0 10px 20px hsla(0, 0%, .15), 0 3px 6px hsla(0, 0%, .10)">
      <h1><span>{props.company}</span><span>{props.date}</span></h1>
      <p>{props.desc}</p>
      <p className="right fade">{props.stack}</p>
      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          font-weight: 700;
        }

        .right {
          align-self: flex-end;
        }

        .fade {
          color: hsl(0, 0%, 14%);
        }
      `}</style>
    </FlexColumn>
  )
}
