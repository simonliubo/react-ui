/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;


var App = React.createClass({
    render: function() {
        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='导航' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                导航组件提供二种风格: <code>pills and tabs</code>，禁用一个菜单栏请添加<code>disabled</code>属性
                            </ListGroupItem>
                            <ListGroupItem>
                                <Nav bsStyle='pills' activeKey={1} onSelect={this.handleSelect}>
                                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                                    <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
                                </Nav>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='下拉菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                添加下拉菜单组件<code>DropdownButton</code>，<code>navItem</code>属性值必须为true
                            </ListGroupItem>
                            <ListGroupItem>
                                <Nav bsStyle='tabs' activeKey={1} onSelect={this.handleSelect}>
                                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                                    <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
                                    <DropdownButton eventKey={4} title='Dropdown' navItem={true}>
                                        <MenuItem eventKey='4.1'>Action</MenuItem>
                                        <MenuItem eventKey='4.2'>Another action</MenuItem>
                                        <MenuItem eventKey='4.3'>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='4.4'>Separated link</MenuItem>
                                    </DropdownButton>
                                </Nav>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='堆叠排列' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                导航组件提供二种风格: <code>pills and tabs</code>，禁用一个菜单栏请添加<code>disabled</code>属性
                            </ListGroupItem>
                            <ListGroupItem>
                                <Nav bsStyle='pills' stacked activeKey={1} onSelect={this.handleSelect}>
                                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                                    <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
                                </Nav>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='两端对齐的菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                创建一个两端对齐的导航菜单只需添加<code>justified</code>属性
                            </ListGroupItem>
                            <ListGroupItem>
                                <Nav bsStyle='tabs' justified activeKey={1} onSelect={this.handleSelect}>
                                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                                    <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
                                </Nav>
                                <br />
                                <Nav bsStyle='pills' justified activeKey={1} onSelect={this.handleSelect}>
                                    <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
                                    <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
                                    <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
                                </Nav>
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
    ,handleSelect: function(selectedKey){
        alert('selected ' + selectedKey);
    }
});

module.exports = App;