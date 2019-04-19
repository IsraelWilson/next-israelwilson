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
        h3 {
          font-size: 4rem;
        }

        h2 {

        }

        p {
          font-size: 2rem;
        }
      `}</style>
    </>
  )
}
