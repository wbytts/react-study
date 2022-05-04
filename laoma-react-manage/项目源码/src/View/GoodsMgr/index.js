import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import AuthRoute from '../../Components/AuthRoute';
class GoodsMgr extends Component {
  render () {
    return (
      <div>
        <Link to={`${this.props.match.path}/p1`}>商品1</Link> |
        <Link to={`${this.props.match.path}/p2`}>商品2</Link>
        <hr/>
        <Switch>
          <AuthRoute per={1570974927539} path={`${this.props.match.path}/p1`} 
            render ={()=>{
              return (<h2>p1线上</h2>);
            }}
          ></AuthRoute>
          <AuthRoute per={1570974937830} path={`${this.props.match.path}/p2`}
            render ={()=>{
              return (<h2>p2线上</h2>);
            }}
          ></AuthRoute>

        </Switch>
      </div>
    )
  }
}

export default GoodsMgr