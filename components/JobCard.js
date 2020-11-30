import Column from '../components/Column.js'

export default function JobCard(props) {

  function getBullets() {
    return props.bullets.map(bullet =>
      <>
        <p className="bullet">{bullet}</p>
        <style jsx>{`
          p {
            margin-bottom: 12px;
          }`}
        </style>
      </>);
  }

  return (
    <Column width="512px" bgColor="hsla(199, 98%, 48%, .12)" shadow="0 10px 20px hsla(0, 0%, .15), 0 3px 6px hsla(0, 0%, .10)" padding="24px" bRadius="30px" boxSizing="border-box">
      <h1>{props.company}</h1>
      <h2>{props.date}</h2>
      {getBullets()}
      <p className="stack">{props.stack}</p>
      <style jsx>{`
        h1 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        h2 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .stack {
          align-self: flex-end;
          color: hsla(0, 0%, .6);
        }
      `}</style>
    </Column>
  )
}
