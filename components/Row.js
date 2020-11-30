export default function Row({
                             flexWrap = "nowrap",
                             margin = "1rem",
                             padding = "0",
                             width = "auto",
                             ...props}) {
  return (
    <div>
      {props.children}
      <style jsx>{`

        /* Desktop styles */
        div {
          display: flex;
          flex-wrap: ${flexWrap};
          margin: ${margin};
          padding: ${padding};
          width: ${width};
        }

        /* Tablet styles */
        @media (max-width: 900px) {
          div {
            display: flex;
            flex-wrap: ${flexWrap};
            margin: ${margin};
            padding: ${padding};
            width: ${width};
          }
        }

        /* Mobile styles */
        @media (max-width: 600px) {
          div {
            display: flex;
            flex-wrap: ${flexWrap};
            margin: ${margin};
            padding: ${padding};
            width: ${width};
          }
        }

      `}</style>
    </div>
  )

}
