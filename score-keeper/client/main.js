import React from 'react'
import REACTDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'


const players=[{
  _id:'1',
  name:'Rohan',
  score:99
},{
  _id:'2',
  name:'Corrie',
  score:100
},{
  _id:'3',
  name:'Esha',
  score:98
}];
const renderPlayers= function(playersList){
// return  [<p key="1">1</p>, <p key="2">2</p>,<p key="3">3</p>]
let playerMap=players.map((player)=>{
  return <p key={player._id}>{player.name} has {player.score} point(s)</p>
})
return playerMap;

}
Meteor.startup(function(){
  let title="Score Keep"
  let name='Rohan'
  let jsx=(
        <div>
            <h1>{title}</h1>
            <p>Hello,{name}</p>
            <p>This is 2nd p</p>
            {renderPlayers(players)}
        </div>
      );



  REACTDOM.render(jsx,document.getElementById('app'))
});
