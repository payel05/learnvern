import './subscriptiondate.css'

const SubscriptionDate = (props) => {
    const month=props.passedDate.toLocaleString('default',{month:'long'})
    const day=props.passedDate.toLocaleString('default',{day:'2-digit'})
    const year=props.passedDate.getFullYear()
    return(
        <div className="date">
        <div className="month">{month}</div>
        <div className="day">{day}</div>
        <div className="year">{year}</div>
        </div>
    )

}
export default SubscriptionDate