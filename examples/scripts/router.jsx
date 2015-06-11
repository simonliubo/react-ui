/**
 * Created by liubo on 15/3/9.
 */


//初始化路由
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var App = require("./app.jsx"); //加载程序
//视图
var Home = require("./views/home/index.jsx");				//首页
var Buttons = require("./views/buttons/index.jsx"); 		//按钮
var Input = require("./views/input/index.jsx"); 			//表单域
var ProgressBar = require("./views/progressbar/index.jsx");	//进度条
var Nav = require("./views/nav/index.jsx"); 				//导航
var NavBars = require("./views/navbars/index.jsx"); 			//导航栏

//路由配置
module.exports = {
	routes: (
		<Route path="/" name="app" handler={App}>
			<DefaultRoute handler={Buttons}/>
			<Route path="home" name="home" handler={Home}/>
			<Route path="buttons" name="buttons" handler={Buttons}/>
			<Route path="input" name="input" handler={Input}/>
			<Route path="progressbar" name="progressbar" handler={ProgressBar}/>
			<Route path="nav" name="nav" handler={Nav}/>
			<Route path="navbars" name="navbars" handler={NavBars}/>
		</Route>
	)
}