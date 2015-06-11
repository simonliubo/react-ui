/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var ProgressBar = ReactBootstrap.ProgressBar;

var App = React.createClass({
    render: function() {
        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='进度条' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过这些简单、灵活的进度条，为当前工作流程或动作提供实时反馈。
                            </ListGroupItem>
                            <ListGroupItem>
                                进度条组件使用了 CSS3 的 transition 和 animation 属性来完成一些特效。这些特性在 Internet Explorer 9 或以下版本中、Firefox 的老版本中没有被支持。Opera 12 不支持 animation 属性。
                            </ListGroupItem>
                            <ListGroupItem>
                                进度条默认样式。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar now={60} />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='带标签的进度条' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个<code>label</code>属性显示百分比。可以设置一个<code>min-width</code>来保证百试比较低时标签仍然是可见的。
                            </ListGroupItem>
                            <ListGroupItem>
                                这些<code>%(min)s, %(max)s, %(now)s, %(percent)s, %(bsStyle)s</code>是可以被支持的。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar now={60} label='%(percent)s%' />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='隐藏标签' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个<code>srOnly</code>隐藏标签。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar now={60} label='%(percent)s%' srOnly />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='根据情景变化效果' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                进度条可以使用和按钮，警告栏相似的样式。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar bsStyle='success' now={40} />
                                <ProgressBar bsStyle='info' now={20} />
                                <ProgressBar bsStyle='warning' now={60} />
                                <ProgressBar bsStyle='danger' now={80} />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='有条纹的进度条' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过gradient实现条纹效果，IE8不被支持。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar striped bsStyle='success' now={40} />
                                <ProgressBar striped bsStyle='info' now={20} />
                                <ProgressBar striped bsStyle='warning' now={60} />
                                <ProgressBar striped bsStyle='danger' now={80} />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='进度条的动画效果' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个<code>active</code>实现动画效果，IE9以下不被支持。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar active now={45} />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='进度条的堆叠效果' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                嵌套<code>&lt;ProgressBar /&gt;</code>实现堆叠效果。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ProgressBar>
                                    <ProgressBar bsStyle='success' now={35} key={1} />
                                    <ProgressBar bsStyle='warning' now={20} key={2} />
                                    <ProgressBar bsStyle='danger' now={10} key={3} />
                                </ProgressBar>
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