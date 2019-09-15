VUE实战项目：硅谷外卖

此篇README是针对本人开发情况所写的，包含开发的思路，步骤，所遇到的问题，以及解决的方法。新手上路，若有不足还望指正。

项目下载运行步骤
1、下载安装node.js
  从nodejs官网下载并安装node，安装过程很简单，一路下一步就可以
  ![image](https://github.com/LLP66/gshop/blob/master/nodejs.PNG)
根据自己的电脑选择32位/64位，安装好node,可以先进行下简单的测试安装是否成功了，后面还要进行环境配置。在键盘按下【win+R】键，输入cmd，然后回车，打开cmd窗口

2、安装cnpm
由于npm有些资源被屏蔽或者是国外资源的原因，经常会导致用npm安装依赖包的时候失败，所有我还需要npm的国内镜像---cnpm
在命令行中输入 npm install -g cnpm --registry=http://registry.npm.taobao.org

3、安装webpack
npm install webpack -g

4、安装vue-cli
cnpm install vue-cli -g
这个过程会耗时十几秒，等走完就好

好了，到此整个环境就搭建好了

5、项目运行
cd 项目名称
进入项目之后安装依赖
npm install 
安装成功后你会发现项目里多了个node_modules
然后
npm run dev

项目后端地址【】
注意：运行项目之前需要启动MongoDB,并且进入后端文件夹中npm start 后端项目

一、项目准备

1.1  项目描述

1）此项目为外卖 Web APP(SPA)
2)包括商家、商品、购物车、用户等多个子模块
3）使用Vue全家桶+ES6+webpack等前端最新最热的技术
4）采用模块化、组件化、工程化的模式开发

1.2 项目功能界面

 ![image](https://github.com/LLP66/gshop/blob/master/msite.jpg)  
 ![image](https://github.com/LLP66/gshop/blob/master/search.jpg)
 ![image](https://github.com/LLP66/gshop/blob/master/order.jpg)
 ![image](https://github.com/LLP66/gshop/blob/master/profile.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/login1.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/login2.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/shopgoods.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/shoprating.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/ratinginfo.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/food.jpg) 
 ![image](https://github.com/LLP66/gshop/blob/master/cartlist.jpg) 
 

1.3 技术性选项
![image](https://github.com/LLP66/gshop/blob/master/%E6%8A%80%E6%9C%AF%E5%9E%8B%E9%80%89%E9%A1%B9.PNG)






































































