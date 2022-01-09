let inputNumber=document.getElementById('inputNumber')
let btn=document.getElementById('btn')
let showResult=document.getElementById('showresult')
let clearAll=document.getElementById('clearall')
let arr=[]
const fizzBuzz=()=>{
    let inputValue=inputNumber.value
    console.log(`input value = ${inputValue}`)
    for(let i=0;i<=inputValue;i++){
        arr.push(i)
        if(i%15==0){
            arr[i]='FizzBuzz'
            
        }
        else if(i%3==0){
            arr[i]='Fizz'
           
        }
        else if(i%5==0){
            arr[i]='Buzz'
            
        }
       
        else{
            console.log(i)
        }
    }
    // console.log(inputValue)
    showResult.innerHTML=arr
    location.reload()
}
