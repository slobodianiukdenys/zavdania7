let request = 0
function factorial(x) {
	if (x < 0) return
	if (x === 0) return 1
	return x * factorial(x - 1)
}

function fibonachi(y){
    if (y < 0) return
	if (y === 0) return 1
    return y <= 1 ? y : fibonachi(y - 1) + fibonachi(y - 2)
}

function FillVar(){
    const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
    })    
        readline.question(`\x1b[32mВведіть число для вираховування факторіалу та числа Фібоначчі:\x1b[0m `, rl1 => {
        request = rl1
            let fac = factorial(request)
            let fib = fibonachi(request - 1)
            console.log(`Факторіал --> ${fac}`)
			console.log(`Число Фібоначчі --> ${fib}`)
            readline.close()
        })        
}
FillVar()