/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var App = React.createClass({
    render: function() {


        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='默认样式' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                默认样式
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroup>
                                    <ListGroupItem>Item 1</ListGroupItem>
                                    <ListGroupItem>Item 2</ListGroupItem>
                                    <ListGroupItem>...</ListGroupItem>
                                </ListGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='链接列表' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                为<code>ListGroupItem</code>设置<code>href or onClick</code>属性创建可点击的链接
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroup>
                                    <ListGroupItem href='#link1'>Link 1</ListGroupItem>
                                    <ListGroupItem href='#link2'>Link 2</ListGroupItem>
                                    <ListGroupItem href='#linkN'>...</ListGroupItem>
                                </ListGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='激活和禁用' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                激活或禁用只须设置<code>active or disabled</code>属性为<code>true</code>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroup>
                                    <ListGroupItem href='#' active>Link 1</ListGroupItem>
                                    <ListGroupItem href='#'>Link 2</ListGroupItem>
                                    <ListGroupItem href='#' disabled>Link 3</ListGroupItem>
                                </ListGroup>
                            </ListGroupItem>
                            <ListGroupItem>
                               设置<code>bsStyle</code>属性
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroup>
                                    <ListGroupItem bsStyle='success'>Success</ListGroupItem>
                                    <ListGroupItem bsStyle='info'>Info</ListGroupItem>
                                    <ListGroupItem bsStyle='warning'>Warning</ListGroupItem>
                                    <ListGroupItem bsStyle='danger'>Danger</ListGroupItem>
                                </ListGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='带标题的列表' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置<code>header</code>属性，为列表项添加标题
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroup>
                                    <ListGroupItem header='Heading 1'>Some body text</ListGroupItem>
                                    <ListGroupItem header='Heading 2' href='#'>Linked item</ListGroupItem>
                                    <ListGroupItem header='Heading 3' bsStyle='danger'>Danger styling</ListGroupItem>
                                </ListGroup>
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