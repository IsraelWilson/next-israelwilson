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
          padding-top: 2rem;
          padding-bottom: 2rem;
          height: ${props.height};
          justify-content: ${props.justify};
        }
      `}</style>
    </div>
  )
}
