export default function FlexColumn({display = "flex",
                                flexDirection = "column",
                                flexBasisMb = "100%",
                                flexBasisTl = "47%",
                                flexBasisDt = "22%",
                                flexGrow = 1,
                                flexShrink = 0,
                                justifyContent = "flex-start",
                                alignItems = "stretch",
                                margin = "1rem",
                                width = "auto",
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
          width: ${width};
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
            width: ${width};
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
            width: ${width};
          }
        }

      `}</style>
    </div>
  )

}
