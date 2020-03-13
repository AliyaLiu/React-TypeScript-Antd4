# 2020/03/13 拖拽排序

containers/dragDemo：
    original：使用原始的onmouse实现的拖拽，拖拽的功能已经实现，但是鼠标在拖动的过程中，state更改，页面没有渲染，需要等到鼠标onmouseUp的时候才会重新渲染--暂时未找到原因
    reactDnd：使用react-dnd实现，官网的例子搬运过来，为了兼容IE9，去掉了原本例子中使用的requestAnimationFrame()和cancelAnimationFrame()方式；

# 2020/03/04 仿微信网页端

containers/wechat/login
