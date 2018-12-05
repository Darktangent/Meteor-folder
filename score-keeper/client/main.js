import React from 'react'
import REACTDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players,calculatePlayerPosition} from './../imports/api/players'

import App from './../imports/ui/App'





Meteor.startup(()=>{
  //call tracker.autorun
  Tracker.autorun(()=>{
    let players=Players.find({},{sort:{score:-1}}).fetch();
    let title="Score Keep";
    let positionPlayer=calculatePlayerPosition(players)
    let subTitle="Created By Rohan Ganguly"
    let jsx=(
          <div>
              
          </div>
        );
    REACTDOM.render(<App title={title} players={positionPlayer} subTitle={subTitle} />,document.getElementById('app'))
  })

});
