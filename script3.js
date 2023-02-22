let message = 'Welcome to Ukraine!'
let element = []
for (let index = 0; index < message.length; index++) {
    element[index] = message.slice(index,index+1);
    
}


console.log(element)

console.log(message.indexOf("l"))

console.log(element.join(""))