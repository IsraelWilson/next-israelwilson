import Column from '../components/Column.js'

export default function Position(props) {
  return (
    <Column>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <h3>{props.date}</h3>
      <h3>{props.company}</h3>
      <style jsx>{`
        h1 {
          font-size: 4rem;
        }

        p {

        }

        h3 {
          font-size: 2rem;
        }
      `}</style>
    </Column>
  )
}
