# reduxdemo
单纯redux实现数据传递
```js
1、单独redux开发数据传递
2、引入外部定义的reducer，通过createStore（store）来生成一个store
3、每次view触发dispatch（store）,传入action
4、触发store的state发生改变后，触发了store的subscribe订阅方法，在方法里面可以更新state值，重新渲染页面
```

##因为是在class App外部触发subscribe方法，在订阅函数里面虽然可以捕获store更新后的数据但是暂时还没找到外部获取App内部更新state的方法
