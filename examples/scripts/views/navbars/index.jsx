/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var CollapsibleNav = ReactBootstrap.CollapsibleNav;


var App = React.createClass({
    render: function() {
        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='导航栏' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                务必为导航条设置<code> role="navigation" </code>属性；可选属性<code>fixedTop, fixedBottom, staticTop, inverse, fluid</code>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Navbar>
                                    <Nav>
                                        <NavItem eventKey={1} href='#'>Link</NavItem>
                                        <NavItem eventKey={2} href='#'>Link</NavItem>
                                        <DropdownButton eventKey={3} title='Dropdown'>
                                            <MenuItem eventKey='1'>Action</MenuItem>
                                            <MenuItem eventKey='2'>Another action</MenuItem>
                                            <MenuItem eventKey='3'>Something else here</MenuItem>
                                            <MenuItem divider />
                                            <MenuItem eventKey='4'>Separated link</MenuItem>
                                        </DropdownButton>
                                    </Nav>
                                </Navbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='品牌图标' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置<code> brand </code>属性来生成一个品牌图标，可以是字符串或是可渲染的组件
                            </ListGroupItem>
                            <ListGroupItem>
                                <Navbar brand='React-Bootstrap'>
                                    <Nav>
                                        <NavItem eventKey={1} href='#'>Link</NavItem>
                                        <NavItem eventKey={2} href='#'>Link</NavItem>
                                        <DropdownButton eventKey={3} title='Dropdown'>
                                            <MenuItem eventKey='1'>Action</MenuItem>
                                            <MenuItem eventKey='2'>Another action</MenuItem>
                                            <MenuItem eventKey='3'>Something else here</MenuItem>
                                            <MenuItem divider />
                                            <MenuItem eventKey='4'>Separated link</MenuItem>
                                        </DropdownButton>
                                    </Nav>
                                </Navbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='更友好的导航栏' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置父级元素的<code>toggleNavKey</code>属性指定移动端友好方式下折叠的导航元素，与子级元素的<code>eventKey</code>相匹配；通过设置<code>defaultNavExpanded={true}</code>默认展开菜单项
                            </ListGroupItem>
                            <ListGroupItem>
                                <Navbar brand='React-Bootstrap' inverse toggleNavKey={0}>
                                    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                                        <NavItem eventKey={1} href='#'>Link</NavItem>
                                        <NavItem eventKey={2} href='#'>Link</NavItem>
                                        <DropdownButton eventKey={3} title='Dropdown'>
                                            <MenuItem eventKey='1'>Action</MenuItem>
                                            <MenuItem eventKey='2'>Another action</MenuItem>
                                            <MenuItem eventKey='3'>Something else here</MenuItem>
                                            <MenuItem divider />
                                            <MenuItem eventKey='4'>Separated link</MenuItem>
                                        </DropdownButton>
                                    </Nav>
                                </Navbar>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='组合菜单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                可以使用<code>CollapsibleNav</code>组件创建多个菜单组，必须设置<code>toggleNavKey</code>它与<code>eventKey</code>相匹配；
                            </ListGroupItem>
                            <ListGroupItem>
                                <Navbar brand='React-Bootstrap' toggleNavKey={0}>
                                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                                        <Nav navbar>
                                            <NavItem eventKey={1} href='#'>Link</NavItem>
                                            <NavItem eventKey={2} href='#'>Link</NavItem>
                                            <DropdownButton eventKey={3} title='Dropdown'>
                                                <MenuItem eventKey='1'>Action</MenuItem>
                                                <MenuItem eventKey='2'>Another action</MenuItem>
                                                <MenuItem eventKey='3'>Something else here</MenuItem>
                                                <MenuItem divider />
                                                <MenuItem eventKey='4'>Separated link</MenuItem>
                                            </DropdownButton>
                                        </Nav>
                                        <Nav navbar right>
                                            <NavItem eventKey={1} href='#'>Link Right</NavItem>
                                            <NavItem eventKey={2} href='#'>Link Right</NavItem>
                                        </Nav>
                                    </CollapsibleNav>
                                </Navbar>
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