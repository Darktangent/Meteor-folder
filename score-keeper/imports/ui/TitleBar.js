import React from 'react'
import PropTypes from 'prop-types'

class TitleBar extends React.Component{

  renderSubtitle(){
    if(this.props.subTitle){
      return <h2>{this.props.subTitle}</h2>
    }
  }
    render(){
      return(
        <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
        </div>
      )
    }
  }
  TitleBar.propTypes={
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
  }
  TitleBar.defaultProps={
    title:'Score Keep',
    subTitle:"Rohan Ganguly"
  }
  export default TitleBar;
  