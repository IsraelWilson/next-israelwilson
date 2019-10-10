export default function Column(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`

        /* Desktop styles */
        div {
          display: ${props.display};
          flex-direction: ${props.flexDirection};
          flex-basis: ${props.flexBasisDt};
          flex-grow: ${props.flexGrow};
          flex-shrink: ${props.flexShrink};
          justify-content: ${props.justifyContent};
          align-items: ${props.alignItems};
          margin: ${props.margin};
        }

        /* Tablet styles */
        @media (max-width: 900px) {
          div {
            display: ${props.display};
            flex-direction: ${props.flexDirection};
            flex-basis: ${props.flexBasisTl};
            flex-grow: ${props.flexGrow};
            flex-shrink: ${props.flexShrink};
            justify-content: ${props.justifyContent};
            align-items: ${props.alignItems};
            margin: ${props.margin};
          }
        }

        /* Mobile styles */
        @media (max-width: 600px) {
          div {
            display: ${props.display};
            flex-direction: ${props.flexDirection};
            flex-basis: ${props.flexBasisMb};
            flex-grow: ${props.flexGrow};
            flex-shrink: ${props.flexShrink};
            justify-content: ${props.justifyContent};
            align-items: ${props.alignItems};
            margin: ${props.margin};
          }
        }

      `}</style>
    </div>
  )

  Column.defaultProps = {
    display: "flex",
    flexDirection: "column",
    flexBasisMb: "100%",
    flexBasisTl: "47%",
    flexBasisDt: "22%",
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "normal",
    alignItems: "center",
    margin: "1rem"
  }
}
