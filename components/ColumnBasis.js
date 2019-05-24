export default function ColumnBasis(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
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
            flex-basis: 75%;
          }
        }

        /* Large desktop */
        @media (min-width: 1900px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 75%;
          }
        }
      `}</style>
    </div>
  )
}
