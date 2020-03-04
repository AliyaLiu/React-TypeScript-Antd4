/* 生命一些全局变量 */
// 定义一个全局变量 window 类型为Window
declare var window: Window;
// 截取Window接口
interface Window {
  // 也可以添加
  // 字符串签名 可以允许添加未知名称属性
  [p: string]: any
}
