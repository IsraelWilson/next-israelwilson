export default function Container(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          
        }
      `}</style>
    </div>
  )
}
