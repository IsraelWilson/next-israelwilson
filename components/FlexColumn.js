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
                                padding = "0",
                                width = "auto",
                                bgColor = "transparent",
                                shadow = "none",
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
          padding: ${padding};
          width: ${width};
          background-color: ${bgColor};
          box-shadow: ${shadow};
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
            padding: ${padding};
            width: ${width};
            background-color: ${bgColor};
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
            padding: ${padding};
            width: ${width};
            background-color: ${bgColor};
          }
        }

      `}</style>
    </div>
  )

}
