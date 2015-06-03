/**
 * Created by liubo on 15/3/9.
 */
var router = require("./scripts/router.jsx"); //加载路由

//启动程序
ReactRouter.run(router.routes, function (Handler, state) {
   //var params = state.params;
   React.render(
       <Handler params={state} />, document.getElementById('bs-main')
   );
});
