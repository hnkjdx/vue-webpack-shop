准备把这个项目做成学习vue webpack等等的一个过程项目，类型是商城。  
README会记录每一次更新内容和相应知识点，有需要的话下载相应版本自行学习之后和后面的版本比对也不错。


7.21 update  
--------------------  

增加在首页商品添加到购物车的功能，更改了购物车界面的计算总价方法。这种类型的使用computed会更好一些。



7.11 update  
--------------------  

这个是commit的第一次，学习vue的过程一。虽然也搭载webpack-simple脚手架进行init，
但还没有使用专门的vue模块书写方式，只是在练习一些vue语句的用法，比如v-on v-for v-bind 等等。使用一个关于商城的HTML模板，暂时分三个界面。通过每一个html界面引入vue和
其它对应的js文件来实现商品展示，购物车增删改和相应的计算总价，还有最后的地址页面选择地址等等功能。
因为暂时没有添加数据库，所以对应商品数据储存在data/productData.json下面    
index.html:
show all the products
cart.html:
cart function
address.html:
select address for final pay  
这里的 cart 和 address 是看了幕课网的一个视频跟着写的。虽然vue官方网站的文档真的是我见过的最易懂的文档了，但是看看视频帮助理解也不错。  
视频地址如下：http://www.imooc.com/learn/796。视频相应代码这里都有，而且更改了原视频代码的一些问题。

