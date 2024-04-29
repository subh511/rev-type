



function finalOutput(delayedOutput: ()=>void){
    setTimeout(delayedOutput,3000)
}

finalOutput(function(){
    console.log("hello world")
})