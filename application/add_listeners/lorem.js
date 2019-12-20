import {get_id} from '../supp_functions';
import {insert_lorem} from '../add_styles/insert_lorem.js';

export const set_lisener_output_lorem = () => {
	get_id( 'lorem_bttn' ).addEventListener( 'click', () => {
		insert_lorem();
	});
}