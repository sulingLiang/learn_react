import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import {connect} from './react-redux';

class Content extends Component{
	static contextTypes = {
		store:PropTypes.string
	}
	render(){
		return(
			<div>
				<p style={{color:this.props.themeColor}}>react小书内容</p>
				<ThemeSwitch />
			</div>
		)
	}
}
const mapStateProps = (state) => {
	return {
		themeColor:state.themeColor
	}
}
Content = connect(mapStateProps)(Content)

export default Content;