准备把这个项目做成学习vue webpack等等的一个过程项目，类型是商城。  

README会记录每一次更新内容和相应知识点，有需要的话下载相应版本自行学习之后和后面的版本比对也不错。

<br/><br/><br/>
#7.28
---
<br>
为了愉快的实现页面的跳转，vue-router该出场了。  
首先还是最基础的安装   
`npm install vue-router`  
在src/router/index.js里new 了相应的 Router,配好了相应组件的相应path  ，main.js里配好了相应的router  
在App.vue里配上了相应的router-view

对于购物车数据处理，虽然像这种小项目使用event bus就可以了，但是因为是做练习，还是使用了vuex  
具体可以查询相应文档https://vuex.vuejs.org/zh-cn/  
vuex对于刷新数据丢失，可以还是使用之前就在用的localstorage

还更改了其他一些小问题
<br/><br/><br/>

## 7.27 update
--------------------  
正在将分开的三个index和js文件组合成多个 .vue 组件，这一块就涉及到了相应的组件问题，可以仔细阅读vue官方文档的组件部分。

步骤如下：  

把相应HTML代码贴入.vue组件中  
把之前写过的每个界面相应的vue js 代码贴入.vue组件里
``` Javascript
<script>
export default { 
// 贴在这里
}
</script>
```
export default 是 es6的语法，可以看这篇教程  
http://es6.ruanyifeng.com/?search=import&x=0&y=0#docs/module#export-default-%E5%91%BD%E4%BB%A4  
不过书写方式要做出相应的改变，在原本的js里是这样书写的  
``` Javascript
el: '#app',
data: {
    productList: [],
}，
methods: {
    cartView: function() {
	//some action
    }
}
```  
书写在 export default 会变成   
``` Javascript
export default {
name: 'app',
data () {
 return {
    productList : []
  }
},
methods: {
    cartView() {
	//some action
    }
}
}
``` 
后者作为es6 module导出的模块，最终还是会经过vue-loader 处理在某个地方变成前者的new vue()形式的。  
然后通过import导入相应的css文件的时候
这里还有个坑 就是引入的css会报错  
`Unexpected character '@' (1:0)
You may need an appropriate loader to handle this file type.`  
因为我当时搭的脚手架是simple，相应的webpack的loader配置并不是很全
所以要
```
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install file-loader --save-dev
npm install url-loader --save-dev
```
之后在webpack.config里配上相应格式的loaders  

具体loaders可以参考我7.27 update的那一版代码的webpack.config
***
#### 部分错误选择性观看即可 

/~/css-loader!./~/style-loader!./~/css-loader!./xxx.css Module build failed: Unknown word (5:1)  
因为我的loader是从网上贴下来的，和我之前写的 有部分重复，结果对css文件调用了不止一次css loader的缘故。解决了好久，泪奔。

<br/><br/><br/>

## 7.21 update  
--------------------  

增加在首页商品添加到购物车的功能，更改了购物车界面的计算总价方法。这种类型的使用computed会更好一些。

<br/><br/><br/>

## 7.11 update  
--------------------  

这个是commit的第一次，学习vue的过程一。虽然也搭载webpack-simple脚手架进行init， 
但还没有使用专门的vue模块书写方式，只是在练习一些vue语句的用法，比如v-on v-for v-bind 等等。  
使用一个关于商城的HTML模板，暂时分三个界面。通过每一个html界面引入vue和
其它对应的js文件来实现商品展示，购物车增删改和相应的计算总价，还有最后的地址页面选择地址等等功能。
因为暂时没有添加数据库，所以对应商品数据储存在`data/productData.json`下面    
```
index.html:
//show all the products
cart.html:
//cart function
address.html:
//select address for final pay  
```
这里的 cart 和 address 是看了幕课网的一个视频跟着写的。虽然vue官方网站的文档真的是我见过的最易懂的文档了，但是看看视频帮助理解也不错。  
视频地址如下：http://www.imooc.com/learn/796。  
视频相应代码这里都有，而且更改了原视频代码的一些问题。

