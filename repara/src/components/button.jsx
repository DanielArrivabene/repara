import '../index.scss'

function button({destiny, text}) {
  return (
    <button className="button">
        <a href={destiny}>{text}</a>
    </button>
  )
}

export default button