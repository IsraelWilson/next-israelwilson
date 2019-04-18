export default function Column(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        /* Landscape phones and down */
        @media (max-width: 600px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex-grow: 1;
            flex-shrink: 0;
            align-items: ${props.align};
            margin: 0.5rem;
          }
        }

        /* Landscape phone to portrait tablet */
        @media (max-width: 900px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
            flex-grow: 1;
            flex-shrink: 0;
            align-items: ${props.align};
            margin: 0.5rem;
          }
        }

        /* Portrait tablet to landscape and desktop */
        @media (min-width: 1200px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 25%;
            flex-grow: 1;
            flex-shrink: 0;
            align-items: ${props.align};
            margin: 0.5rem;
          }
        }

        /* Large desktop */
        @media (min-width: 1900px) {
          div {
            display: flex;
            flex-direction: column;
            flex-basis: 25%;
            flex-grow: 1;
            flex-shrink: 0;
            align-items: ${props.align};
            margin: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
