import React from 'react'
import REACTDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players'

// setTimeout(function(){
//   console.log('Players list',Players.find().fetch())
// },1000)
const renderPlayers= function(playersList){
// return  [<p key="1">1</p>, <p key="2">2</p>,<p key="3">3</p>]
let playerMap=playersList.map((player)=>{
  return <p key={player._id}>{player.name} has {player.score} point(s)</p>
})
return playerMap;
}
const handleSubmit=function(e){
  let playerName=e.target.playerName.value
e.preventDefault();
if(playerName){
  e.target.playerName.value=""
  //call insert
  Players.insert({
    name:playerName,
    score:0
  })
}


}
Meteor.startup(function(){
  //call tracker.autorun
  Tracker.autorun(function(){
    let players=Players.find().fetch();
    let title="Score Keep"
    let name='Rohan'
    let jsx=(
          <div>
              <h1>{title}</h1>
              <p>Hello,{name}</p>
              <p>This is 2nd p</p>
              {renderPlayers(players)}
              <form onSubmit={handleSubmit}>
                <input type="text" name="playerName" placeholder="Player Name"/>
                <button>Add Player</button>
              </form>
          </div>
        );
    REACTDOM.render(jsx,document.getElementById('app'))
  })
  // Players.insert({
  //   name:'Esha',
  //   score:10
  // });
  // console.log(Players.find().fetch())
});
