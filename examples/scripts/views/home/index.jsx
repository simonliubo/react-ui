/**
 * Created by liubo on 15/3/12.
 */
var Waves = require('../../mixins/waves');
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

var App = React.createClass({
    mixins: [ Waves ]
    ,render: function() {

        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <Panel collapsible defaultExpanded header='按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button>Default</Button>
                                    <Button bsStyle='primary'>Primary</Button>
                                    <Button bsStyle='success'>Success</Button>
                                    <Button bsStyle='info'>Info</Button>
                                    <Button bsStyle='warning'>Warning</Button>
                                    <Button bsStyle='danger'>Danger</Button>
                                    <Button bsStyle='link'>Link</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                通过修改bsStyle属性可以设置按钮类型。
                            </ListGroupItem>
                            <ListGroupItem>
                                如果你想在一行输出多个内联按钮，它们应该放在<code>&lt;ButtonToolbar&gt;</code>组件之中
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='Materialize-按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button href="javascript:void(0)"
                                            onMouseDown={this._onMouseDown}
                                            onMouseUp={this._onMouseUp}
                                            onMouseLeave={this._onMouseLeave}
                                            onClick={this._onClick}
                                            className="waves-effect waves-light"
                                        >Default</Button>
                                    <Button href="javascript:void(0)"
                                            onMouseDown={this._onMouseDown}
                                            onMouseUp={this._onMouseUp}
                                            onMouseLeave={this._onMouseLeave}
                                            onClick={this._onClick}
                                            className="waves-effect waves-green"
                                        >Default</Button>
                                    <Button href="javascript:void(0)"
                                            onMouseDown={this._onMouseDown}
                                            onMouseUp={this._onMouseUp}
                                            onMouseLeave={this._onMouseLeave}
                                            onClick={this._onClick}
                                            className="waves-effect waves-teal"
                                            bsStyle='primary'
                                        >Primary</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>引入Waves,可设置动态水波纹效果。</ListGroupItem>
                            <ListGroupItem>
                                默认的样式：waves-light、waves-teal、waves-red、waves-yellow、waves-orange、waves-purple、waves-green
                            </ListGroupItem>
                            <ListGroupItem>展示效果：this.Effect.show(e, e.target);</ListGroupItem>
                            <ListGroupItem>关闭效果：this.Effect.hide(e, e.target);</ListGroupItem>
                            <ListGroupItem>
                                <code>&lt;Button href="javascript:void(0)"
                                    onMouseDown={this._onMouseDown}
                                    onMouseUp={this._onMouseUp}
                                    onMouseLeave={this._onMouseLeave}
                                    onClick={this._onClick}
                                    className="waves-effect waves-light"
                                    &gt;Default&lt;/Button&gt;
                                </code>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮尺寸' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large'>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large'>large Button</Button>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button>Default Button</Button>
                                    <Button bsStyle='primary'>Default Button</Button>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button bsSize='small'>Small Button</Button>
                                    <Button bsStyle='primary' bsSize='small'>Small Button</Button>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button bsSize='xsmall'>Xsmall Button</Button>
                                    <Button bsStyle='primary' bsSize='xsmall'>Xsmall Button</Button>
                                </ButtonToolbar>

                            </ListGroupItem>
                            <ListGroupItem>
                                通过添加bsSize属性设置按钮尺寸;预定义的尺寸有：<code>bsSize="large", bsSize="small", or bsSize="xsmall"</code>
                            </ListGroupItem>
                            <ListGroupItem>
                                如果你想在一行输出多个内联按钮，它们应该放在<code>&lt;ButtonToolbar&gt;</code>组件之中
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='块级按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large' block>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large' block>Large Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                添加一个<code>block</code>属性来设置当前按钮为块级元素，按钮宽度自适应父级元素宽度
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='激活状态' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large' active>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large' active>Large Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                添加一个<code>active</code>属性来设置当前按钮的激活状态
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='禁用状态' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large' disabled>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large' disabled>Large Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                添加一个<code>disabled</code>属性来设置当前按钮的禁用状态，注意这个属性只在按钮展示时产生效果，并不对事件产生影响，如onclick事件等
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮标签' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button href='#'>Link</Button>
                                    <Button>Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                组件会根据你设置的属性自动生成标签元素，如果你设置了<code>href</code>属性，将会生成<code>&lt;a&gt;</code>标签，否则生成<code>&lt;button&gt;</code>标签
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                </div>
                <div className="col-xs-6 col-md-4">

                </div>

            </div>

        );

    }
    ,_onMouseDown: function(e){
        this.Effect.show(e, e.target);
    }
    ,_onMouseUp: function(e){
        this.Effect.hide(e, e.target);
    }
    ,_onMouseLeave: function(e){
        this.Effect.hide(e, e.target);
    }
    ,_onClick: function(e){
        this.Effect.hide(e, e.target);
    }

});

module.exports = App;