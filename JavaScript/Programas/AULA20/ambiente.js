let num = [4,3,2]
num.sort()

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

console.log("---------")

for(let i in num){
    console.log(num[i])
}

console.log("---------")
console.log(num.indexOf(2))