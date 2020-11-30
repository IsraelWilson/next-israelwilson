export default function Column({
                                flexShrink = "0",
                                flexGrow = "0",
                                margin = "1rem",
                                padding = "0",
                                width = "auto",
                                height = "auto",
                                minHeight = "auto",
                                bgColor = "transparent",
                                shadow = "none",
                                bRadius = "0",
                                boxSizing = "content-box",
                                overflow = "visible",
                                ...props}) {
  return (
    <div>
      {props.children}
      <style jsx>{`

        /* Desktop styles */
        div {
          display: flex;
          flex-direction: column;
          flex-shrink: ${flexShrink};
          flex-grow: ${flexGrow};
          margin: ${margin};
          padding: ${padding};
          width: ${width};
          height: ${height};
          min-height: ${minHeight};
          background-color: ${bgColor};
          box-shadow: ${shadow};
          border-radius: ${bRadius};
          box-sizing: ${boxSizing};
          overflow: ${overflow};
        }

        /* Tablet styles */
        @media (max-width: 900px) {
          div {
            display: flex;
            flex-direction: column;
            flex-shrink: ${flexShrink};
            flex-grow: ${flexGrow};
            margin: ${margin};
            padding: ${padding};
            width: ${width};
            height: ${height};
            min-height: ${minHeight};
            background-color: ${bgColor};
            box-shadow: ${shadow};
            border-radius: ${bRadius};
            box-sizing: ${boxSizing};
            overflow: ${overflow};
          }
        }

        /* Mobile styles */
        @media (max-width: 600px) {
          div {
            display: flex;
            flex-direction: column;
            flex-shrink: ${flexShrink};
            flex-grow: ${flexGrow};
            margin: ${margin};
            padding: ${padding};
            width: ${width};
            height: ${height};
            min-height: ${minHeight};
            background-color: ${bgColor};
            box-shadow: ${shadow};
            border-radius: ${bRadius};
            box-sizing: ${boxSizing};
            overflow: ${overflow};
          }
        }

      `}</style>
    </div>
  )

}
