/**
 * Created by liubo on 15/3/9.
 */
var RouteHandler = ReactRouter.RouteHandler,
    Navigation = ReactRouter.Navigation;
//程序入口
var App = React.createClass({
    mixins: [ Navigation, ReactRouter.State ]
    ,render: function() {
        var name = this.getRoutes().slice(0).reverse()[0].name;
        return(
            <div>
                <RouteHandler key={name} {...this.props} />
            </div>
        );
    }
});
module.exports = App;