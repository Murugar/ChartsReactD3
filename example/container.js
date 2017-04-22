import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class ContainerExample extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const route = this.props.routes[1].path || 'area'

    return (
      <div>
      <div className="container-fluid">
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="/example">
			        React-D3 Charts
			      </a>
			    </div>
			    <div id="navbar" className="navbar-collapse collapse">
		          <ul className="nav navbar-nav navbar-right">
		            <li><a href="#">Dashboard</a></li>
		            <li><a href="#">Settings</a></li>
		            <li><a href="#">Profile</a></li>
		            <li><a href="#">Help</a></li>
		          </ul>
		       
		        </div>
			  </div>
			</nav>
			 </div>
			
			
			<div className="row">
	        <div className="col-sm-3 col-md-2 sidebar">
	          <ul className="nav nav-sidebar">
	            <li className="active"><a href="#">Charts <span className="sr-only">(current)</span></a></li>
	            <li><a href="/example/area">Area Chart</a></li>
	            <li><a href="/example/area_negative">Area Chart Negative</a></li>
	            <li><a href="/example/area_stack">Area Stack Chart</a></li>
	            <li><a href="/example/area_stack_negative">Area Stack Chart Negative</a></li>
	          </ul>
	          <ul className="nav nav-sidebar">
	            <li><a href="/example/bar">Bar</a></li>
	            <li><a href="/example/bar_negative">Bar With Negative</a></li>
	            <li><a href="/example/bar_group">Bar Group</a></li>
	            <li><a href="/example/bar_group_negative">Bar Group Negative</a></li>
	            <li><a href="/example/bar_stack">Bar Stack</a></li>
	            
	          </ul>
	          <ul className="nav nav-sidebar">
	            <li><a href="/example/line">Line</a></li>
	            <li><a href="/example/line_multi">Line Multi</a></li>
	            <li><a href="/example/line_multi_negative">Line Multi Negative</a></li>
	            <li><a href="/example/line_animate">Line Animate </a></li>
	            <li><a href="/example/line_animate_multi">Line Animate Multi </a></li>
	          </ul>
	          
	          <ul className="nav nav-sidebar">
	            <li><a href="/example/pie_one">Pie</a></li>
	            <li><a href="/example/pie_two">Another Pie </a></li>
	            <li><a href="/example/scatter">Scatter</a></li>
	          </ul>
	        </div>
	        
	       
	        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
	         <div className="panel panel-success">
	           <div className="panel-heading">React Chart Details</div>
	           <div className="panel-body">
	         
	          {this.props.children}
	           </div> 
	          </div>  
		    </div>
	  </div>
	  </div>

    )
  }
}