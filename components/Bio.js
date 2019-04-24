import Row from '../components/Row.js'
import Column from '../components/Column.js'

export default function Bio(props) {
  return (
    <>
      <Column>
        <h4>{props.title}</h4>
        <h1>{props.sub}</h1>
        <p>{props.desc}</p>
      </Column>
      <Column>
        <img src={props.src} />
      </Column>
      <style jsx>{`
        h4 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        h1 {
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 2rem;
        }

        img {
          max-width: 50%;
          height: auto;
        }

        span {
          text-align: center;
        }
      `}</style>
    </>
  )
}
