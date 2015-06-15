/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Pager = ReactBootstrap.Pager;
var PageItem = ReactBootstrap.PageItem;


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
                                <Pager>
                                    <PageItem href='javascript:void(0)'>前一页</PageItem>
                                    <PageItem href='javascript:void(0)'>后一页</PageItem>
                                </Pager>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='对齐' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置<code> previous or next </code>属性为<code> true </code>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Pager>
                                    <PageItem previous href='javascript:void(0)'>前一页</PageItem>
                                    <PageItem next href='javascript:void(0)'>后一页</PageItem>
                                </Pager>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='禁用' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置<code> disabled </code>属性为<code> true </code>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Pager>
                                    <PageItem previous href='javascript:void(0)'>前一页</PageItem>
                                    <PageItem next disabled href='javascript:void(0)'>后一页</PageItem>
                                </Pager>
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