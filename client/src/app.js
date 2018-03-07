import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import CategoryHeader from './components/CategoryHeader';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SideBar from './components/SideBar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import Calendar from 'react-calendar';



// _____________________________________test data for populating page_________________________________
const events = [{
  title: "Rock Concert at Red Cliffs",
  date: "Mar 21",
  info: "Come enjoy the awesome rock Concert at Red Cliffs",
  category: "Tech",
  image: "http://projectrevolver.org/wp-content/uploads/2013/04/80sconcert1.jpg"
},
{
  title: "Rock Concert at The Depot",
  date: "Mar 29",
  info: "Come enjoy the awesome rock Concert at The Depot",
  category: "Music",
  image: "http://projectrevolver.org/wp-content/uploads/2013/04/80sconcert1.jpg"
},
{
  title: "Rock Concert at Salt Palace",
  date: "Apr 14",
  info: "Come enjoy the awesome rock Concert at Salt Palace",
  category: "Food",
  image: "http://projectrevolver.org/wp-content/uploads/2013/04/80sconcert1.jpg"
}]
// _____________________________________end test data for populating page_________________________________
class App extends Component {

constructor(props){

  super(props)
this.state = {
  showModal:false
}
this.showModal=this.showModal.bind(this);
}
showModal(){
  this.setState({showModal:!this.state.showModal})
  }

render(){

  const cards = events.map(event =>{
    return(
      <div>
      <CategoryHeader
      category={event.category}/>

        <EventCard
        date={event.date}
        title={event.title}
        onOpenModal={this.showModal}
        title={event.title}
        info={event.info}/>
        <Carousel/>
        </div>
        )

  })
  
return(
    <div>
      <div className="App">
        <header className="App-header"></header>

        
        {this.state.showModal?<EventModal/>:null}

        
        {cards}
        <Calendar/>
        <Footer/>
        


       
        

      </div>
    </div>
)
}
    }

export default App;

