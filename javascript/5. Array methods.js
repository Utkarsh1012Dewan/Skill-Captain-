let array = [1,2,3,4,5,6,7,8,9,10]

let mapArray = array.map(num => num*num)

let filterArray = mapArray.filter(num=> num%2 == 0)

filterArray.forEach(num =>{
    console.log(num)
})