import React from 'react'
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
// import Player from './Player'
import PlayerList from './PlayerList'

export default class App extends React.Component{


    render(){
        return(
            <div>
                <TitleBar title={this.props.title} subTitle={this.props.subTitle} />
              <div className="wrapper">
              <PlayerList players={this.props.players}/>
              
              <AddPlayer  />
              </div>
              
            </div>
        )
    }
}
