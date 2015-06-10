/**
 * Created by liubo on 15/3/9.
 */


//初始化路由
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var App = require("./app.jsx"); //加载程序
//视图
var Home = require("./views/home/index.jsx"); //首页
var Buttons = require("./views/buttons/index.jsx"); //按钮

//路由配置
module.exports = {
	routes: (
		<Route path="/" name="app" handler={App}>
			<DefaultRoute handler={Buttons}/>
			<Route path="home" name="home" handler={Home}/>
		</Route>
	)
}