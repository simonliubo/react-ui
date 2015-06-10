/**
 * Created by liubo on 15/3/12.
 */
var Waves = require('../../mixins/waves');
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var DropdownButton = ReactBootstrap.DropdownButton;
var SplitButton = ReactBootstrap.SplitButton;
var MenuItem = ReactBootstrap.MenuItem;

var App = React.createClass({
    mixins: [ Waves ]
    ,getInitialState() {
        return {
            isLoading: false
        };
    }
    ,render: function() {
        //加载状态
        let isLoading = this.state.isLoading;

        //按钮式下拉菜单
        const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];
        function renderDropdownButton (title, i) {
            return (
                <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i}>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3' active={true}>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                </DropdownButton>
            );
        }
        function renderDropdownSplitButton (title, i) {
            return (
                <SplitButton bsStyle={title.toLowerCase()} title={title} key={i}>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3'>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                </SplitButton>
            );
        }


        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <Panel collapsible defaultExpanded header='按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过修改bsStyle属性可以设置按钮类型。
                            </ListGroupItem>
                            <ListGroupItem>
                                如果你想在一行输出多个内联按钮，它们应该放在<code>&lt;ButtonToolbar&gt;</code>组件之中
                            </ListGroupItem>
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
                                通过添加bsSize属性设置按钮尺寸;预定义的尺寸有：<code>bsSize="large", bsSize="small", or bsSize="xsmall"</code>
                            </ListGroupItem>
                            <ListGroupItem>
                                如果你想在一行输出多个内联按钮，它们应该放在<code>&lt;ButtonToolbar&gt;</code>组件之中
                            </ListGroupItem>
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

                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='块级按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个<code>block</code>属性来设置当前按钮为块级元素，按钮宽度自适应父级元素宽度
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large' block>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large' block>Large Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='激活状态' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个<code>active</code>属性来设置当前按钮的激活状态
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large' active>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large' active>Large Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='禁用状态' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个<code>disabled</code>属性来设置当前按钮的禁用状态，注意这个属性只在按钮展示时产生效果，并不对事件产生影响，如onclick事件等
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large' disabled>Large Button</Button>
                                    <Button bsStyle='primary' bsSize='large' disabled>Large Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮标签' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                组件会根据你设置的属性自动生成标签元素，如果你设置了<code>href</code>属性，将会生成<code>&lt;a&gt;</code>标签，否则生成<code>&lt;button&gt;</code>标签
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button href='#'>Link</Button>
                                    <Button>Button</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='加载按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                你可以通过更新state中的值，来更改loading button的状态
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button
                                        bsStyle='primary'
                                        disabled={isLoading}
                                        onClick={!isLoading ? this.handleClick : null}>
                                        {isLoading ? 'Loading...' : 'Loading state'}
                                    </Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮组' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置一组按钮
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonGroup>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </ListGroupItem>

                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮toolbar' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置一按钮式工具栏
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <Button>5</Button>
                                        <Button>6</Button>
                                        <Button>7</Button>
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <Button>8</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='工具栏尺寸' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加<code>bsSize</code>属性，为工具栏中的按钮设置大小
                            </ListGroupItem>
                            <ListGroupItem>

                                <ButtonToolbar>
                                    <ButtonGroup bsSize='large'>
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <ButtonGroup bsSize='small'>
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <ButtonGroup bsSize='xsmall'>
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>

                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='嵌套' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加一个下拉菜单组件<code>&lt;DropdownButton/&gt;</code>到按钮组
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <DropdownButton title='Dropdown'>
                                        <MenuItem eventKey='1'>Dropdown link1</MenuItem>
                                        <MenuItem eventKey='2'>Dropdown link2</MenuItem>
                                    </DropdownButton>
                                </ButtonGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='垂直排列' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                只要给<code>&lt;ButtonGroup&gt;</code>添加<code>vertical</code>属性，就可以让一组按钮垂直堆叠排列显示，分列式按钮下拉菜单不支持这种方式。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonGroup vertical>
                                    <Button>Button</Button>
                                    <Button>Button</Button>
                                    <DropdownButton title='Dropdown'>
                                        <MenuItem eventKey='1'>Dropdown link</MenuItem>
                                        <MenuItem eventKey='2'>Dropdown link</MenuItem>
                                    </DropdownButton>
                                    <Button>Button</Button>
                                    <Button>Button</Button>
                                    <DropdownButton title='Dropdown'>
                                        <MenuItem eventKey='1'>Dropdown link</MenuItem>
                                        <MenuItem eventKey='2'>Dropdown link</MenuItem>
                                    </DropdownButton>
                                    <DropdownButton title='Dropdown'>
                                        <MenuItem eventKey='1'>Dropdown link</MenuItem>
                                        <MenuItem eventKey='2'>Dropdown link</MenuItem>
                                    </DropdownButton>
                                </ButtonGroup>
                            </ListGroupItem>
                            <ListGroupItem>
                                如果是块级按钮，将撑满整个容器
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonGroup vertical block>
                                    <Button>Full width button</Button>
                                    <Button>Full width button</Button>
                                </ButtonGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='两端对齐排列的按钮组' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                只需要为<code>&lt;ButtonGroup/&gt;</code>添加<code>justified</code>属性，就可以让一组按钮拉长为相同的尺寸，填满父元素的宽度。对于按钮组中的按钮式下拉菜单也同样适用。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonGroup justified>
                                    <Button href='#'>Left</Button>
                                    <Button href='#'>Middle</Button>
                                    <DropdownButton title='Dropdown'>
                                        <MenuItem eventKey='1'>Dropdown link</MenuItem>
                                        <MenuItem eventKey='2'>Dropdown link</MenuItem>
                                    </DropdownButton>
                                </ButtonGroup>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>关于边框的处理</h4>
                                由于对两端对齐的按钮组使用了特定的 HTML 和 CSS （即 display: table-cell），两个按钮之间的边框叠加在了一起。在普通的按钮组中，margin-left: -1px 用于将边框重叠，而没有删除任何一个按钮的边框。然而，margin 属性不支持 display: table-cell。因此，根据你对 Bootstrap 的定制，你可以删除或重新为按钮的边框设置颜色。
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>IE8 和边框</h4>
                                Internet Explorer 8 不支持在两端对齐的按钮组中绘制边框，无论是<code>&lt;a&gt;</code> 或 <code>&lt;button&gt;</code> 元素。为了照顾 IE8，把每个按钮放入另一个 .btn-group 中即可。
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='按钮式下拉菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                使用<code>&lt;DropdownButton /&gt;</code>创建单按钮式下拉菜单。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                使用<code>&lt;SplitButton /&gt;</code>创建分裂式按钮下拉菜单。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>{BUTTONS.map(renderDropdownSplitButton)}</ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮式下拉菜单尺寸' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置按钮式下拉菜单尺寸。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <DropdownButton bsSize='large' title='Large button'>
                                        <MenuItem eventKey='1'>Action</MenuItem>
                                        <MenuItem eventKey='2'>Another action</MenuItem>
                                        <MenuItem eventKey='3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4'>Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonToolbar>
                                <ButtonToolbar>
                                    <DropdownButton bsSize='small' title='Small button'>
                                        <MenuItem eventKey='1'>Action</MenuItem>
                                        <MenuItem eventKey='2'>Another action</MenuItem>
                                        <MenuItem eventKey='3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4'>Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <DropdownButton bsSize='xsmall' title='Extra small button'>
                                        <MenuItem eventKey='1'>Action</MenuItem>
                                        <MenuItem eventKey='2'>Another action</MenuItem>
                                        <MenuItem eventKey='3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4'>Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='无符号式按钮下拉菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过设置<code>noCaret</code>属性来去掉符号。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <DropdownButton bsStyle='default' title='No caret' noCaret>
                                        <MenuItem eventKey='1'>Action</MenuItem>
                                        <MenuItem eventKey='2'>Another action</MenuItem>
                                        <MenuItem eventKey='3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4'>Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='向上弹出式按钮式菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过设置<code>dropup</code>属性可以使菜单向上弹出。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <SplitButton title='Dropup' dropup>
                                        <MenuItem eventKey='1'>Action</MenuItem>
                                        <MenuItem eventKey='2'>Another action</MenuItem>
                                        <MenuItem eventKey='3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4'>Separated link</MenuItem>
                                    </SplitButton>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <SplitButton bsStyle='primary' title='Right dropup' dropup pullRight>
                                        <MenuItem eventKey='1'>Action</MenuItem>
                                        <MenuItem eventKey='2'>Another action</MenuItem>
                                        <MenuItem eventKey='3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4'>Separated link</MenuItem>
                                    </SplitButton>
                                </ButtonToolbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='右对齐按钮式菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过设置<code>dropup</code>属性可以使菜单向上弹出。
                            </ListGroupItem>
                            <ListGroupItem>
                                <SplitButton title='Dropdown right' pullRight>
                                    <MenuItem eventKey='1'>Action</MenuItem>
                                    <MenuItem eventKey='2'>Another action</MenuItem>
                                    <MenuItem eventKey='3'>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey='4'>Separated link</MenuItem>
                                </SplitButton>
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
    ,handleClick() {
        this.setState({isLoading: true});

        // This probably where you would have an `ajax` call
        setTimeout(() => {

            // Completed of async action, set loading state back
            this.setState({isLoading: false});
        }, 2000);
    }

});

module.exports = App;