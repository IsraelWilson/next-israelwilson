import Row from '../components/Row.js'
import Column from '../components/Column.js'

export default function Bio(props) {
  return (
    <>
      <div>
        <h4>{props.title}</h4>
        <h1>{props.sub}</h1>
        <p>{props.desc}</p>
      </div>
      <div className="pic">
        <img src={props.src} />
      </div>
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
          max-width: 100%;
          max-height: 100%;
        }

        .pic {
          justify-content: center;
          margin-left: 2rem;
        }

        /* Landscape phones and down */
        @media (max-width: 600px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
          }
        }

        /* Landscape phone to portrait tablet */
        @media (max-width: 900px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
          }
        }

        /* Portrait tablet to landscape and desktop */
        @media (min-width: 1200px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 25%;
          }
        }

        /* Large desktop */
        @media (min-width: 1900px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 25%;
          }
        }
      `}</style>
    </>
  )
}
