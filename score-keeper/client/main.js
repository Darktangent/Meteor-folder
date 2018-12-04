import React from 'react'
import REACTDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players'

import App from './../imports/ui/App'





Meteor.startup(()=>{
  //call tracker.autorun
  Tracker.autorun(()=>{
    let players=Players.find({},{sort:{score:-1}}).fetch();
    let title="Score Keep";
    let subTitle="Created By Rohan Ganguly"
   
    let jsx=(
          <div>
              
          </div>
        );
    REACTDOM.render(<App title={title} players={players} subTitle={subTitle} />,document.getElementById('app'))
  })

});
