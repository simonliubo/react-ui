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
var NavBars = require("./views/navbars/index.jsx"); 		//导航栏
var Pager = require("./views/pager/index.jsx"); 			//翻页
var Alert = require("./views/alert/index.jsx"); 			//警告
var List = require("./views/list/index.jsx"); 			    //列表
var Badges = require("./views/badges/index.jsx"); 			//徽章

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
			<Route path="pager" name="pager" handler={Pager}/>
			<Route path="alert" name="alert" handler={Alert}/>
			<Route path="list" name="list" handler={List}/>
			<Route path="badges" name="badges" handler={Badges}/>
		</Route>
	)
}