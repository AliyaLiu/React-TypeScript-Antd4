var container = document.getElementById('container');
var count = 1;
function getUserAction(e) {
    container.innerHTML = count++;
};

// 第二版
function throttle(func, wait) {
    var timeout;
    var previous = 0;

    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}
container.onmousemove = throttle(getUserAction, 1000);