export default function Progress(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <progress value={props.value} max="100"></progress>
      <style jsx>{`

        h4 {
          margin-bottom: 1.5rem;
        }

        progress[value] {
          -webkit-appearance: none;
          appearance: none;
          margin-bottom: 2rem;
        }

        progress[value]::-webkit-progress-bar {
          background-color: #eee;
          border-radius: 2px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
        }

        progress[value]::-webkit-progress-value {
          background-color: #feda6a;
        }
      `}</style>
    </div>
  )
}
