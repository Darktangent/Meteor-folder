import React from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
class PlayerList extends React.Component{
    renderPlayers(){
        if(this.props.players.length===0){
            //when no player in the array
            return <p>Add your first player to get started</p>
        }else{
            let playerMap=this.props.players.map((player)=>{
                return (
                  <Player key={player._id} player={player}/>
                )
               
              })
              return playerMap;
        }
        
    }
    render(){
        return(
            <div>
                {this.renderPlayers()}
            </div>
        )
    }


}
PlayerList.propTypes={
    players:PropTypes.array.isRequired
}

export default PlayerList;