export default function Row(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-grow: 1;
          height: ${props.height}
        }
      `}</style>
    </div>
  )
}
