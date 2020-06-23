import FlexColumn from '../components/FlexColumn.js'

export default function JobCard(props) {
  return (
    <FlexColumn width="512px" bgColor="hsla(199, 98%, 48%, .12)" shadow="0 10px 20px hsla(0, 0%, .15), 0 3px 6px hsla(0, 0%, .10)" padding="24px" bRadius="30px">
      <h1><span>{props.company}</span><span>{props.date}</span></h1>
      <p className="desc">{props.desc}</p>
      <p className="stack">{props.stack}</p>
      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        span {
          font-size: 48px;
          font-weight: 700;
        }

        .desc {
          margin-bottom: 12px;
        }

        .stack {
          align-self: flex-end;
          color: hsla(0, 0%, .6);
        }
      `}</style>
    </FlexColumn>
  )
}
