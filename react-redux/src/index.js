import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function stateChanger(state,action){
	if(!state){
		return {
			title:{
				text:'React.js小书!!!',
				color:'red'
			},
			content:{
				text:'learn react!!!',
				color:'green'
			}
		}
	}
	switch (action.type){
		case 'UPDATE_TITLE_TEXT':
			return{
				...state,
				title:{
					...state.title,
					text:action.text
				}
			}
		case 'UPDATE_TITLE_COLOR':
			return{
				...state,
				title:{
					...state.title,
					color:action.color
				}
			}
		default:
			return state
	}
}
function themeReducer(state,action){
	if(!state)return{
		themeName:'red themeName',
		themeColor:'red'
	}
	switch(action.type){
		case 'UPDATE_TITLE_TEXT':
			return{...state,themeName:action.themeName}
		case 'UPDATE_TITLE_COLOR':
			return{...state,themeColor:action.themeColor}
		default:
			return state
	}
}
function createStore(reducer){
	let state = null;
	const listeners = [];
	const subscribe = (listener) =>listeners.push(listener)
	const getState=()=>state;
	const dispatch=(action)=>{
		state = stateChanger(state,action);
		listeners.forEach((listener) => listener())
	}
	dispatch({})
	return {getState,dispatch,subscribe}
}

function renderApp(newAppState,oldAppState={}){
	if(newAppState === oldAppState)return
	console.log('render App');
	renderTitle(newAppState.title,oldAppState.title);
	renderContent(newAppState.content,oldAppState.content);
}

function renderTitle(newTitle,oldTitle={}){
	if(newTitle === oldTitle) return
	console.log('rener title');
	const titleDom = document.getElementById('title');
	titleDom.innerHTML = newTitle.text;
	titleDom.style.color = newTitle.color;
}

function renderContent(newContent,oldContent={}){
	if(newContent === oldContent) return
	console.log('render content');
	const contentDom = document.getElementById('content');
	contentDom.innerHTML = newContent.text;
	contentDom.style.color = newContent.color;
}

const store = createStore(themeReducer);
let oldState = store.getState();
store.subscribe(()=>{
	const newState = store.getState(); 
	renderApp(newState, oldState);
	oldState = newState
})

renderApp(store.getState()) // 把新的数据渲染到页面上
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色


serviceWorker.unregister();
