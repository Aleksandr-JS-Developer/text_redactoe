import { get_id, cut_url, render_on_text_place, close_modal_window, open_modal_window } from '../supp_functions';
import {add_event_to_data} from '../data.js';
const undo_paste_video = id => {
	let video_block = get_id( `iframe${id}` );
	if( video_block !== null ){
		video_block.remove();
	} else {
		console.warn( 'delete block has beed deleted' );
	}
}
export const take_url = () => {
	get_id( 'video_bttn' ).addEventListener( 'click', e =>{
		e.stopPropagation();
		let content_in_modal = get_id( 'content_in_modal' );
		let node = document.createElement( 'span' );
		node.innerHTML = `<p>Введите ссылку на видео, которое хотите вставить</p>
			<input class='temp_input' placeholder="url" type="text" />`;
		let temp_input = node.querySelector( '.temp_input' );
		let insert_modal = get_id( 'insert_modal' );
		insert_modal.innerHTML = 'Вставить видео';
    const insert_video = ( url ) => {
    	render_on_text_place( `<iframe src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><span class="rem">&nbsp;</span><br />`, {type:'video'} );
    }
		insert_modal.addEventListener( 'click', e =>{
			e.stopPropagation();
			let user_url = cut_url( temp_input.value );
				if( user_url === null ){
					alert( 'Проверьте правильность написания ссылки!' );
					close_modal_window( e );
				} else {
					let values = {
						past_value: get_id( 'enter_text' ).innerHTML
					}
					insert_video( user_url );
					close_modal_window( e );
					values.future_value = get_id( 'enter_text' ).innerHTML;
					add_event_to_data( 'insert_video', values )
				}
		},{once:true});
		content_in_modal.appendChild( node );
		open_modal_window( e );
	});
}