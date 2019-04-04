export default function Row(props) {
  return (
    <div name={props.name}>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-grow: 1;
          height: ${props.height};
          justify-content: ${props.justify};
          align-self: ${props.justify};
        }

        div.scroll {

        }
      `}</style>
    </div>
  )
}
