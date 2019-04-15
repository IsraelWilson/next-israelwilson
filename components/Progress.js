export default function Progress(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <progress value={props.value} max="100"></progress>
      <style jsx>{`
        div {

        }
      `}</style>
    </div>
  )
}
