// Iteration 1: Names and Input
let hacker1 = "Dria"
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = "Thomas"
console.log(`The navigator name is ${hacker2}.`)

console.log("----------------------------------")
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has. ${hacker2} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names,${hacker1} characters!`)

}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

console.log("----------------------------------")
// Iteration 3: Loops
let count = " "
for (let i = 0; i < hacker1.length; i++) {
    count += hacker1.toUpperCase().charAt(i) + " "
    console.log(count)
}

for (let i = 0; i < 1; i++) {
    let reverse1 = hacker2.charAt(5)
    let reverse2 = hacker2.charAt(4)
    let reverse3 = hacker2.charAt(3)
    let reverse4 = hacker2.charAt(2)
    let reverse5 = hacker2.charAt(1)
    let reverse6 = hacker2.charAt(0)
    console.log(reverse1 + reverse2 + reverse3 + reverse4 + reverse5 + reverse6)
}


for (i = 0; i < hacker2.length; i++) {
    if (hacker1.charAt(i) < hacker2.charAt(i)) {

        console.log("The driver's name goes first.")
    }
    else if (hacker1.charAt(i) > hacker2.charAt(i)) {
        console.log("Yo, the navigator goes first definitely.")
    }
    else {
        console.log("What?! You both have the same name?")
    }
}