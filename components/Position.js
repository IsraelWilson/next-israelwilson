import Column from '../components/Column.js'

export default function Position(props) {
  return (
    <Column>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <span>
      <h3>{props.date}</h3>
      <h3>{props.company}</h3>
      </span>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          margin-bottom: 2.5rem;
        }

        p {
          margin-bottom: 2.5rem;
          line-height: 30px;
        }

        span {
          display: flex;
          flex-direction: row;
          flex-grow: 1;
          justify-content: space-between;
        }

        h3 {
          font-size: 1rem;
        }
      `}</style>
    </Column>
  )
}
