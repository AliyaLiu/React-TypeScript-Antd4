# demo内容

    记录了所有本仓库实现的例子；

## 2020/03/13 拖拽排序

    containers/dragDemo

### 原生方法实现

    original：使用原始的onmouse实现的拖拽，拖拽的功能已经实现，但是鼠标在拖动的过程中，state更改，页面没有渲染，需要
    等到鼠标onmouseUp的时候才会重新渲染--暂时未找到原因

### reactDnd 插件实现

    reactDnd：使用react-dnd实现，官网的例子搬运过来，为了兼容IE9，
    去掉了原本例子中使用的requestAnimationFrame()和cancelAnimationFrame()方式；
    2020/03/31更新
    在IE下，在最外层的拖动元素，内有子元素，如果点击到子元素的位置进行拖动，跟随鼠标的preview drag只有子元素本身，
    为了解决这个问题，把内部的所有子元素的z-index设为负数，使父级覆盖在子元素之上，此时不论内部有添加了背景图的div
    和p标签中添加文字，preview drag显示正常，但是在IE9下，父元素所属子元素中有问题，拖动含有文字的子元素时，preview drag
    依旧会只显示文字本身；但是很奇怪的是，如果父元素添加了背景色，拖拽显示的就是整个拖拽的整体，所以最后的解决方法就是
    设置z-index以及给父元素添加了背景色，透明度设置为0

    ```
    background-color: rgba($color: #000000, $alpha: 0);
    ```

## 2020/03/04 仿微信网页端

    containers/wechat/login
