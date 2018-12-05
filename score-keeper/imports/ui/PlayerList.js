import React from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move';
class PlayerList extends React.Component{
    renderPlayers(){
        if(this.props.players.length===0){
            //when no player in the array
            return (
                <div className="item">
                    <p className="item__message item__message--empty">Add your first player to get started</p>
                </div>
            )
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
                <FlipMove  maintainContainerHeight={true}>
                {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }


}
PlayerList.propTypes={
    players:PropTypes.array.isRequired
}

export default PlayerList;