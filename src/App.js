import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription';

function App() {
  let subscriptions=[
    {
      id:1,
      date:new Date('2023','02','15'),
      title:"Monthly Subscription",
      amount:'125.60'
    },
    {
      id:2,
      date:new Date('2020','06','15'),
      title:"Yearly Subscription",
      amount:'525.60'
    },
    {
      id:3,
      date:new Date('2013','02','16'),
      title:"Daily Subscription",
      amount:'425.60'
    },

]

  return (
    <div>
    <Subscription passedDate={subscriptions[0].date} passedTitle={subscriptions[0].title} passedAmount={subscriptions[0].amount}/>
    <Subscription passedDate={subscriptions[1].date} passedTitle={subscriptions[1].title} passedAmount={subscriptions[1].amount}/>
    <Subscription passedDate={subscriptions[2].date} passedTitle={subscriptions[2].title} passedAmount={subscriptions[2].amount}/>
    </div>
       
  );
}

export default App;
