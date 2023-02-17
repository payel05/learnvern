import './subscription.css'
import SubscriptionDate from './SubscriptionDate'
function Subscription(props){
    
    return (
        <div className="subscription">
        <SubscriptionDate passedDate={props.passedDate}/>
        <h2 className="subscription_title">{props.passedTitle}</h2>
        <div className="subscription_price">{props.passedAmount}</div>
        </div>
    )
}
export default Subscription