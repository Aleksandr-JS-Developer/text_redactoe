import {get_id, create_node, get_selection_text} from '../supp_functions';
import {add_event_to_data} from '../data.js';
export const insert_lorem = () => {
	let str = get_id( 'enter_text' );
	let old_value = str.innerHTML;
	let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequatur commodi unde ut, corporis voluptatum assumenda, tenetur fugiat officia aliquam id voluptatibus error quaerat, optio iure culpa alias, vel doloremque!`;
	str.innerHTML += text;
	let values = {future_value: str.innerHTML, past_value: old_value }
	add_event_to_data( 'insert_lorem', values );
}