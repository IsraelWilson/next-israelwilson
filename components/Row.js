export default function Row(props) {
  return (
    <div name={props.name} className={props.class}>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-grow: 1;
          height: ${props.height};
          justify-content: ${props.justify};
        }
      `}</style>
    </div>
  )
}
