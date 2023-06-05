

export default function Programers (props) {
  return (

    <div className='Pra'>

    <img src={props.img} className="image"></img>
    <p>{props.name}</p>
    <p>{props.Programming_Language}</p>
    <p>{props.experience}</p>
    <p>{props.company}</p>
  
 </div>
  )
}
