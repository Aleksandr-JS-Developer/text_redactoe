import { get_id, add_notifier, random, local_get, local_add } from './supp_functions';
let _Data = {
	history: [],
	future: [],
	busked: [],
	settings: {
		max_size_history: 105,
		bold: 'strong',
		italic: 'em',
		tint_color: '#04c981',
		feel_color: '#04c981'
	},
	text_value : '',
	clean: true,
	errors: []
}
const full_data = _Data;
export const add_error_to_data = err => {
	_Data.errors.push( err );
}
export const delete_saved_data = () => {
	if( _Data.clean ){
		local_add( '_Data', null );
		alert( 'Данные удалены!' );
		window.location.reload();
		_Data = full_data;
		get_id( 'enter_text' ).innerHTML = null;
		check_history();
	} else {
		console.error( 'ОТКАЗАНО В ДОСТУПЕ!\nОбратитесь к администратору' );
	}
}
export const save_data_in_local_st = () => {
	setTimeout(function() {
		_Data.text_value = get_id( 'enter_text' ).innerHTML;
		local_add( '_Data', _Data );
	}, random( 1000 ) );
}
export const get_data_from_local_st = () => {
	let temp_data = local_get( `_Data` );
	if( temp_data !== null && temp_data !== undefined ){
		_Data = temp_data;
		save_data_in_local_st();
		get_id( 'enter_text' ).innerHTML = _Data.text_value;
		check_history();
	}
}
export const set_user_settings = ({bold, italic, max_size_history, tint_color, feel_color}) => {
	if( max_size_history > 450 ){
		_Data.settings.max_size_history = 450;
		alert( `Слишком большое значение для сохранения шагов истории: ${max_size_history}\nПодставлено значение ${_Data.settings.max_size_history}` );
	} else {
		_Data.settings.max_size_history = 150;
		if( max_size_history < 15 ){
			alert( `Неправельные данные: значение минимального количества сохраняемых шагов истории должно быть больше 15!\nПодставлено значение ${_Data.settings.max_size_history}` );
		}
		if( typeof +max_size_history === 'number' && +max_size_history > 15 && +max_size_history < 450 ){
			_Data.settings.max_size_history = max_size_history;
		} else {
			alert( `Неправельные данные: значение максимального количества сохраняемых шагов истории должно быть числом!\nПодставлено значение ${_Data.settings.max_size_history}` );
		}
	}
	_Data.settings.bold = bold;
	_Data.settings.italic = italic;
	_Data.settings.tint_color = tint_color;
	_Data.settings.feel_color = feel_color;
	save_data_in_local_st();
}
class Event {
	constructor( enent_name, future_value, past_value ){
		this.name = enent_name;
		this.future_value = future_value;
		this.past_value = past_value;
	}
}
const delete_future = () => {
	_Data.busked.push( _Data.future );
	_Data.future = [];
}
export const add_event_to_data = ( enent_name, {future_value, past_value} ) => {
	delete_future();
	if( _Data.history.length >= _Data.settings.max_size_history ){
		_Data.busked.push( _Data.history.splice( 1, 0 ) );
		console.log( 'max history lenght' );
	}
	let register_event = new Event( enent_name, future_value, past_value );
	_Data.history.push( register_event );
	check_history();
	save_data_in_local_st();
}
export const get_settings_values = () => _Data.settings
const check_history = () => {
	let top__bar = get_id( 'top__bar' );
	let do_bttn = top__bar.querySelector( '.do_container' );
	let undo_bttn = top__bar.querySelector( '.undo_container' );
	if( _Data.history.length > 0 ){
		undo_bttn.classList.remove( 'no_active' );
		get_id( 'undo_bttn' ).removeAttribute( 'disabled' );
	} else {
		undo_bttn.classList.add( 'no_active' );
		get_id( 'undo_bttn' ).setAttribute( 'disabled', '' );
	}
	if( _Data.future.length > 0 ){
		do_bttn.classList.remove( 'no_active' );
		get_id( 'do_bttn' ).removeAttribute( 'disabled' );
	} else {
		do_bttn.classList.add( 'no_active' );
		get_id( 'do_bttn' ).setAttribute( 'disabled', '' );
	}
}
export const undo = () => {
	let event = _Data.history.pop();
	if( event === undefined || event === null ){
		console.warn( 'event ===', event );
	} else {
		_Data.future.push( event );
		get_id( 'enter_text' ).innerHTML = event.past_value;
		check_history();
	}
	save_data_in_local_st();
}
export const _do = () => {
	let event = _Data.future.pop();
	if( event === undefined || event === null ){
		console.warn( 'event ===', event );
	} else {
		_Data.history.push( event );
		get_id( 'enter_text' ).innerHTML = event.future_value;
		check_history();
	}
	save_data_in_local_st();
}