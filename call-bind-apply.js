
// call
function greet(){
    console.log(`hello, ${this.name}!`);
}

const person = {name:'sathees'}

greet.call(person);


// apply

function greets(greeting){
console.log(`${greeting}, ${this.name}!`)
}

    const per ={name:'sathees'}
    greet.apply(per,['good morning']);



 // bind 
 function greetings(){
    console.log(`hello, ${this.name}!`)
 } 

 const pers = {name : 'sathees'};

 const greetperson = greetings.bind(person);

 greetperson();

