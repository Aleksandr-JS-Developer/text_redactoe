import {get_id, add_notifier} from '../supp_functions';
import {add_event_to_data} from '../data.js';
export const set_listener_change_text = () => {
	let enter_text = get_id( 'enter_text' );
	let values = {
		past_value: ''
	}
	enter_text.addEventListener( 'input', ()=>{
		values.future_value = enter_text.innerHTML;
		add_event_to_data( 'change_text', values );
		values.past_value = enter_text.innerHTML;
	});
}