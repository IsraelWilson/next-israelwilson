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
          background: ${props.bg};
          background-size: cover;
          background-color: #232323;
          background-blend-mode: ${props.blend};
          padding-top: 2rem;
          padding-bottom: 2rem;
          height: ${props.height};
          justify-content: ${props.justify};
          align-items: ${props.align};
        }
      `}</style>
    </div>
  )
}
