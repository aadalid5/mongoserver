import React from "react";
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";
import Register from "../components/Register"
import Card from "../components/Card";
import Voted from "../components/Voted";
import RoomResults from "../components/RoomResults";


const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    _id: '',
    name: '',
    email: '',
    session: 0,
    vote: ''
  }
}


class App extends React.Component{
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      _id: data._id,
      name: data.name,
      email: data.email,
      session: data.session,
      vote: data.vote
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    //---------------------------
    this.setState({route: route});
  }

  onCardClick = (cardname) =>{
    //console.log("card clicked")
    //console.log(cardname)
    //console.log(this.state.user)
    var id = this.state.user._id
    var url = "http://localhost:3001/api/teamates/"+id;
    
    fetch(url, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        vote:cardname
      })
    })
    .then(response=>response.json())
    .then(user => {
      if (user._id){
        console.log(user)
        this.loadUser(user);
        this.onRouteChange('voted'); 
      }
    })
    .catch(err =>console.log(err));    
  };

  viewTeamResults = () => {
    //console.log("view team results")    
    this.estimations = undefined;
    fetch("http://localhost:3001/api/teamates/", {
      method: 'get',            
    })
    .then(response=>response.json())
    .then(data=>{
      if(data){
        this.estimations = data;        
        this.onRouteChange('roomresults')
      }
    })
    .catch(err =>console.log(err));
  };


  render(){
    const {isSignedIn, route} = this.state;
    
    return(
      <div>
        {/* <Title/> */}
        <NavBar/>
        {/* <StoryTitle> */}
        { 
          route ==='home' 
          ? <div>
              <Card onCardClick={this.onCardClick}/>
            </div>
          : (route === 'signin'
              ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : (route ==='voted'
                  ? <Voted vote={this.state.user.vote} user={this.state.user.name} viewTeamResults={this.viewTeamResults}/>
                  : (<RoomResults estimations={this.estimations} onRouteChange={this.onRouteChange}/>)
                )
            )          
        }        
      </div>      
    );
  }
}

export default App;