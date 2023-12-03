function displayData(e){
    result.value+=e
}
function out(){
    result.value=eval(result.value)
}
function AllClear(){
    result.value=""
}
function back(){
   result.value=result.value.slice(0,-1)
}