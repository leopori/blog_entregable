const obj =  {
  name: "Leonel",
  age: 24,
  verified: false
}

const myFirstFunc = (obj) => {
  obj.lastName = 'Ponce'
  return obj
}
const log = (obj) => {
  console.log(obj)
}
const middleware = (obj) => {
  if(obj.age > 18){
    obj.verified = true
    log(obj)
  } else {
    return console.log('error')
  }
}



log(myFirstFunc(obj))