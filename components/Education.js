import Column from '../components/Column.js'

export default function Education(props) {
  return (
    <Column>
      <h4>{props.date}</h4>
      <h1>{props.school}</h1>
      <h3>{props.degree}</h3>
      <style jsx>{`
        h4 {
          font-size: 4rem;
        }

        h1 {

        }

        h3 {
          font-size: 2rem;
        }
      `}</style>
    </Column>
  )
}
