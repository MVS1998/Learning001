function clickMe(val) {
    document.getElementById("screen").value += val

}
function clearMe() {
    document.getElementById("screen").value = ""
}

function equalClick() {
    try {
        var text = document.getElementById("screen").value
        var result = eval(text)
        document.getElementById("screen").value= result
    }
    catch{
        document.getElementById("screen").value="Error"
    }
    
}
 function remove(){
    var text = document.getElementById("screen").value
    if(text!=""){
        document.getElementById("screen").value = text.slice(0,-1)

    }

 }