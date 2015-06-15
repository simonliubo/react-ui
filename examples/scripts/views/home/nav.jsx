/**
 * Created by liubo on 15/3/12.
 */
var Navigation = ReactRouter.Navigation;
var State = ReactRouter.State;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

var App = React.createClass({
    mixins: [ Navigation, State ]
    ,render: function() {

        var Routes = this.getRoutes();
        var activeKey = Routes[Routes.length -1].name;

        return(
            <Nav bsStyle='pills' stacked activeKey={activeKey} onSelect={this.handleSelect}>
                <NavItem eventKey={"glyphicons"} title='glyphicons'>字体图标</NavItem>
                <NavItem eventKey={"buttons"} title="buttons">按钮</NavItem>
                <NavItem eventKey={"input"} title='input'>表单域</NavItem>
                <NavItem eventKey={"progressbar"} title='progressbar'>进度条</NavItem>
                <NavItem eventKey={"nav"} title='nav'>导航</NavItem>
                <NavItem eventKey={"navbars"} title='navbars'>导航栏</NavItem>
                <NavItem eventKey={"pager"} title='pager'>翻页</NavItem>
                <NavItem eventKey={"alert"} title='alert'>警告</NavItem>
                <NavItem eventKey={"list"} title='list'>列表</NavItem>
                <NavItem eventKey={"badges"} title='badges'>徽章</NavItem>
            </Nav>
        );
    }
    ,handleSelect: function(selectedKey){
        this.transitionTo(selectedKey);
    }
});

module.exports = App;