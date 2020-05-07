var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    
    container.innerHTML = count++;
    console.log('this',this);  //
    console.log('e',e);  //
    return 1;
};

function fangDou(func,wait,isNow) {
    var timeout,result ;
    var debounced = function () {
        var context = this;
        var args = arguments;
        if( timeout ) clearTimeout(timeout);
        if( isNow ){
            //如果已经执行过，不再执行
            var callNow = !timeout;
            console.log('callNow',callNow);
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
            if (callNow) {
                func.apply(context,args);
            }
        }else{
            timeout = setTimeout(() => {
                func.apply(context,args); 
             }, wait);
        }
        return result;
    }

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null; 
    };

    return debounced;
    // timeout = setTimeout(func, wait)
}
// container.onmousemove = fangDou(getUserAction,1000,true);

var setUseAction = fangDou(getUserAction, 10000, true);

container.onmousemove = setUseAction;

document.getElementById("button").addEventListener('click', function(){
    setUseAction.cancel();
})