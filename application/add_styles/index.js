import {get_id, get_selection_text, group_tags, create_node} from '../supp_functions';
import {get_settings_values, add_event_to_data} from '../data.js';
const add_style = style_name => {
	let data = get_settings_values();
	let node = null;
	let values = {
		name: style_name
	};
	let top__bar = get_id( 'top__bar' );
	data.tint_color = top__bar.querySelector( '.tint_value' ).value;
	data.feel_color = top__bar.querySelector( '.feel_value' ).value;
	if( style_name === 'bold' ){
		node = create_node( data.bold );
	} else if( style_name === 'italic' ){
		node = create_node( data.italic );
	} else if( style_name === 'tint' ){
		node = create_node( 'span' );
		node.setAttribute( 'style', `color: ${data.tint_color}; position: relative; z-index: 1; background: transparent;` );
	} else if( style_name === 'feel' ){
		node = create_node( 'span' );
		node.setAttribute( 'style', `background: ${data.feel_color}; position: relative; z-index: 0;` );
	}
	let past_value = get_id( 'enter_text' ).innerHTML;
	let range = window.getSelection().getRangeAt( 0 );
	let selection = range.extractContents();
	node.appendChild( selection );
	range.insertNode( node );
	let future_value = get_id( 'enter_text' ).innerHTML;
	values.future_value = future_value;
	values.past_value = past_value;
	return values;
}
export const set_style = ( style_name ) => {
	let enter_text = get_id( 'enter_text' ); 
	if( get_selection_text() !== '' ){
		let values = add_style( style_name );
		add_event_to_data( values.name, values );
	}
}