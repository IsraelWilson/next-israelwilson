export default function FlexContainer(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </div>
  )

}
