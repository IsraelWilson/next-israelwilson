export default function FlexRow({display = "flex",
                                flexDirection = "row",
                                flexBasisMb = "100%",
                                flexBasisTl = "47%",
                                flexBasisDt = "22%",
                                flexGrow = 1,
                                flexShrink = 0,
                                justifyContent = "flex-start",
                                alignItems = "center",
                                margin = "1rem",
                                ...props}) {
  return (
    <div>
      {props.children}
      <style jsx>{`

        /* Desktop styles */
        div {
          display: ${display};
          flex-direction: ${flexDirection};
          flex-basis: ${flexBasisDt};
          flex-grow: ${flexGrow};
          flex-shrink: ${flexShrink};
          justify-content: ${justifyContent};
          align-items: ${alignItems};
          margin: ${margin};
        }

        /* Tablet styles */
        @media (max-width: 900px) {
          div {
            display: ${display};
            flex-direction: ${flexDirection};
            flex-basis: ${flexBasisTl};
            flex-grow: ${flexGrow};
            flex-shrink: ${flexShrink};
            justify-content: ${justifyContent};
            align-items: ${alignItems};
            margin: ${margin};
          }
        }

        /* Mobile styles */
        @media (max-width: 600px) {
          div {
            display: ${display};
            flex-direction: ${flexDirection};
            flex-basis: ${flexBasisMb};
            flex-grow: ${flexGrow};
            flex-shrink: ${flexShrink};
            justify-content: ${justifyContent};
            align-items: ${alignItems};
            margin: ${margin};
          }
        }

      `}</style>
    </div>
  )

}
