export class Player {
  constructor(name,level) {
  this.name = name
  this.level = level
  this.info = function(){
    console.log(this.name + " has reached Level "+ this.level +"!" )
}
}

}
const taraPlayer = new Player(`Tara`, 6)
console.log(taraPlayer.info())