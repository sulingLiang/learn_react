import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux';

class Header extends Component{
	static contextTypes = {
		store:PropTypes.string
	}
	render(){
		return(
			<div>
				<h1 style={{color:this.props.themeColor}}>《react.js》</h1>
			</div>
		)
	}
}
const mapStateProps = (state) =>{
	return {
		themeColor:state.themeColor
	}
}
Header = connect(mapStateProps)(Header)

export default Header