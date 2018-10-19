import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let appState = {
	title:{
		text:'React.js小书!!!',
		color:'red'
	},
	content:{
		text:'learn react!!!',
		color:'green'
	}
}
function dispatch(action){
	switch (action.type){
		case 'updata_title_text':
			appState.title.text = action.text;
			break;
		case 'updata_title_color':
			appState.title.color = action.color;
			break;
		default:
			break;
	}

}
function renderApp(appState){
	renderTitle(appState.title);
	renderContent(appState.content);
}
function renderTitle(title){
	const titleDom = document.getElementById('title');
	titleDom.innerHTML = title.text;
	titleDom.style.color = title.color;
}
function renderContent(content){
	const contentDom = document.getElementById('content');
	contentDom.innerHTML = content.text;
	contentDom.style.color = content.color;
}
renderApp(appState);
dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
renderApp(appState) // 把新的数据渲染到页面上

serviceWorker.unregister();
