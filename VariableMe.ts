let greetings : string = "Hello bro"

// to be honest here you can avoid typescript because 
// you wlil write only number so ts will detect itself
let number : number = 45
// number = "Hello"
let loggedIn: boolean = false 

console.log(greetings);
console.log(number);
console.log(loggedIn);




// any keyword: use it when you don't know which dataType will use here
// mostly avoid using because you are using ts for type safety so you should know 
// which type you are gonna use for example below you are using string later you can change 
//  to string then what's the point of using ts


let hero: any

function getHero() {
    return "hero"
}

hero = getHero()

// instead of this use types

let sero: string = "sero"
function getsero() {
    return "hero"
}

sero = getsero()






// function





// this for avoiding redeclare blockscope
export {}
