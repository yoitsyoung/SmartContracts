
function myWordModule(i){
    var text = i;

    function doCapitalize(){
        console.log(text)
        //return text.charAt(0).toUppercase() + text.slice(1).toLowerCase();
    }

    function shoutText(){
        return text.toUpperCase() + '!';
    }

    return {
        doCapitalize:doCapitalize,
        shoutText:shoutText
    }


}
var x = myWordModule('heyyyy');
console.log(x.doCapitalize())
console.log(x.shoutText())

for(var i=1; i<=5; i++){
    setTimeout(function foo(){
        console.log(i)
    }, i*1000);
}