import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(function(){
  // Players.insert({
  //   name:'Corrie',
  //   score:5
  // })
  // console.log(Players.find().fetch())
  let square= (x)=>{
    return x*x
  }
  console.log(square(9))
  let user={
    name:'rohan',
    sayHi (){
      console.log(this.name)
    }
  }
  user.sayHi()

  let numbers=[9,99,4,56]
  let newNum=numbers.map(number=> number+1
  )
  console.log(newNum)
})
