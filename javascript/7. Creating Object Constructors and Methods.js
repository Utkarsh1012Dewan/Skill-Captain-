function Rectangle(length,breadth){
    this.length = length,
    this.breadth = breadth,
    this.calculateArea = () => length*breadth
}

let rect1 = new Rectangle(5,7)

let area = rect1.calculateArea()
console.log(area)