export default function Column(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`

        /* Desktop styles */
        div {
          display: ${props.display};
          flex-direction: ${props.flex-direction};
          flex-basis: ${props.flex-basis-dt};
          flex-grow: ${props.flex-grow};
          flex-shrink: ${props.flex-shrink};
          justify-content: ${props.justify-content};
          align-items: ${props.align-items};
          margin: ${props.margin};
        }

        /* Tablet styles */
        @media (max-width: 900px) {
          div {
            display: ${props.display};
            flex-direction: ${props.flex-direction};
            flex-basis: ${props.flex-basis-tl};
            flex-grow: ${props.flex-grow};
            flex-shrink: ${props.flex-shrink};
            justify-content: ${props.justify-content};
            align-items: ${props.align-items};
            margin: ${props.margin};
          }
        }

        /* Mobile styles */
        @media (max-width: 600px) {
          div {
            display: ${props.display};
            flex-direction: ${props.flex-direction};
            flex-basis: ${props.flex-basis-mb};
            flex-grow: ${props.flex-grow};
            flex-shrink: ${props.flex-shrink};
            justify-content: ${props.justify-content};
            align-items: ${props.align-items};
            margin: ${props.margin};
          }
        }

      `}</style>
    </div>
  )

  Column.defaultProps = {
    display: "flex",
    flex-direction: "column",
    flex-basis-mb: "100%",
    flex-basis-tl: "47%",
    flex-basis-dt: "22%",
    flex-grow: 1,
    flex-shrink: 0,
    justify-content: "normal",
    align-items: "center",
    margin: "1rem"
  }
}
