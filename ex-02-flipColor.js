/**
 * flipColor()
 *
 * Write a function called flipColor. This function may be
 * used to change the color of a tile in a game. It should
 * take as input an object. If that object's color property
 * has the value blue, it should change it to red, and
 * vice-versa.
*/
function flipColor(tileObj) {

    if (tileObj.color === "blue") {
      tileObj.color = "red"
    }
    else {
      tileObj.color = "blue"
    }
}
// crear una funcion que guarde un objeto
// iterar sobre el length del objeto
// crear una condicionante para conmutar el color






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tileObj = {
    width: "200px",
    height: "200px",
    color: "blue"
}

var tileObj2 = flipColor(tileObj)

console.assert(tileObj2.color === "red")

var tileObj3 = flipColor(tileObj2)
console.assert(tileObj3.color === "blue")
