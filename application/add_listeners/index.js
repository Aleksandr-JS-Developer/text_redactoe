import {set_lisener_copy} from './copy.js';
import {set_lisener_output_lorem} from './lorem.js';
import {take_url as video} from './video.js';
import {set_do_undo} from './do_undo.js';
import {set_listener_text_bold} from './bold.js';
import {set_listener_change_text} from './change_text.js';
import {settings} from './settings.js';
import {set_listener_text_italic} from './italic.js';
import {set_listener_text_tint} from './tint.js';
import {set_listener_text_feel} from './feel.js';
import {get_data_from_local_st} from '../data.js';

const get_data = () => {
	get_data_from_local_st();
}
const active_buttns = () => {
	set_lisener_output_lorem();
	set_lisener_copy();
	video();
	set_do_undo();
	set_listener_text_bold();
	set_listener_change_text();
	settings();
	set_listener_text_italic();
	set_listener_text_tint();
	set_listener_text_feel();
}
const active_text_redactor = () => {
	get_data();
	active_buttns();
}
export default active_text_redactor;