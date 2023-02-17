import './subscription.css'
function Subscription(props){
    const month=props.passedDate.toLocaleString('default',{month:'long'})
    const day=props.passedDate.toLocaleString('default',{day:'2-digit'})
    const year=props.passedDate.getFullYear()
    return (
        <div className="subscription">
        <div>{day}</div>
        <div>{year}</div>
        <div>{month}</div>
        <h2 className="subscription_title">{props.passedTitle}</h2>
        <div className="subscription_price">{props.passedAmount}</div>
        </div>
    )
}
export default Subscription