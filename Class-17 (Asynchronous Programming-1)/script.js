console.log('Start')

function test(){
    console.log('i am the test function')
}
function sayHello(){
    for(let i=0 ; i<10000000000 ; i++){

    }
    console.log('Hello')
} // 7-8 
function sayBye(){
    console.log('Bye')
}




test()
// sayHello() synschronously
setTimeout(sayHello ,0) // asynchronously
sayBye()

console.log('End')


