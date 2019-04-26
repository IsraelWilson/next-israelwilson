import Row from '../components/Row.js'
import Column from '../components/Column.js'

export default function Bio(props) {
  return (
    <div className="column">
      <div className="row">
        <span>
          <h4>{props.title}</h4>
          <h1>{props.sub}</h1>
          <p>{props.desc}</p>
        </span>
        <span className="bottom">
          <img src={props.src} />
        </span>
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

        span {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .row {
          display: flex;
          flex-direction: row;
        }

        .bottom {
          justify-content: flex-end;
        }

        /* Landscape phones and down */
        @media (max-width: 600px) {
          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
          }
        }

        /* Landscape phone to portrait tablet */
        @media (max-width: 900px) {
          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
          }
        }

        /* Portrait tablet to landscape and desktop */
        @media (min-width: 1200px) {
          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
          }
        }

        /* Large desktop */
        @media (min-width: 1900px) {
          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
          }
        }
      `}</style>
    </div>
  )
}
