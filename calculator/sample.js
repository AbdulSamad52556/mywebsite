function buttonclick(val){
    document.getElementById('screen').value+=val                    
}
function screenclear(){
    document.getElementById('screen').value=document.getElementById('screen').value.slice(0,-1)
}
function screendelete(){
    document.getElementById('screen').value=""
}
function equalclick(){
    var text=document.getElementById('screen').value
    var result=eval(text)
    document.getElementById('screen').value=result
}
