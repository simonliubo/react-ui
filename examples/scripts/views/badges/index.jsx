/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Badge = ReactBootstrap.Badge;
var Button = ReactBootstrap.Button;

var App = React.createClass({
    render: function() {

        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='徽章' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                               可以给链接、导航等元素嵌套 <code>&lt;Badge/&gt;</code> 组件
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>Badges <Badge>42</Badge></p>
                            </ListGroupItem>
                            <ListGroupItem>
                                徽章组件在 Internet Explorer 8 浏览器中不会自动消失，因为 IE8 不支持 :empty 选择符。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroup>
                                    <ListGroupItem href='#link1'>Link 1<Badge>12</Badge></ListGroupItem>
                                    <ListGroupItem href='#link2'>Link 2<Badge>2</Badge></ListGroupItem>
                                    <ListGroupItem href='#linkN'>...<Badge>2332</Badge></ListGroupItem>
                                </ListGroup>
                                <ListGroupItem>
                                    <Button href="#this" bsStyle='primary'>Default <Badge>12</Badge></Button>
                                </ListGroupItem>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                </div>
                <div className="col-xs-6 col-md-4">
                    <Navigator />
                </div>

            </div>

        );
    }

});

module.exports = App;