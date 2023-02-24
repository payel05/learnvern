import './subscription.css'
import SubscriptionDate from './SubscriptionDate'
import Container from '../templates/Container'
import {useState} from 'react'
 const Subscription = (props) =>{
    const [title,setTitle] = useState(props.passedTitle)
    const onclickHandler = () =>{
        setTitle("Changed Title")
    }
    return (
        <Container className="subscription">
        <SubscriptionDate passedDate={props.passedDate}/>
        <h2 className="subscription_title">{title}</h2>
        <div className="subscription_price">{props.passedAmount}</div>
        <button type="button" onClick={onclickHandler}>Change Title</button>
        </Container>
    )
}
export default Subscription