import {get_id, open_modal_window, close_modal_window, create_node} from '../supp_functions';
import {set_user_settings, get_settings_values, delete_saved_data, add_error_to_data} from '../data.js';
export const settings = () => {
	get_id( 'settings_bttn' ).addEventListener( 'click', e =>{
		let modal_content_block = get_id( 'insert_modal' );
		let node = create_node( 'span' );
		let { bold, italic, max_size_history } = get_settings_values();
		let italic_else = '';
		let bold_else = '';
		if( italic === 'em' ){
			italic_else = 'i';
		} else {
			italic_else = 'em';
		}
		if( bold === 'strong' ){
			bold_else = 'b';
		} else {
			bold_else = 'strong';
		}
		if( max_size_history === undefined || max_size_history === null ){
			let err = {
				name: 'max_size_history error',
				old_value: max_size_history,
				seted_value: 105
			}
			add_error_to_data( err );
			max_size_history = 105;
		}
		node.innerHTML = `
			<span>Шагов истории сохранять:</span><br />
			<input type="number" class="max_size_history" title="Выберите сколько шагов истории сохранять.\nМаксимальное значение - 450" value="${max_size_history}" step="15" max="450" min="15" /><br /><br />
			<span title="Выберите тэг для курсива">Курсив</span><select class="settings_select italic">
				<option title="Тэг em предназначен для смыслового выделения текста и более симантически подходит под стандарт HTML5">${italic}</option>
				<option title="Тэг i подходит для простого визуального выделения, не нагружая выделенное смысловой нагрузкой. Но всё-же мы рекомендуем использовать тэг em">${italic_else}</option>
			</select><br />
			<span title="Выберите тэг для жирности">Жирность</span><select class="settings_select bold">
				<option title="Тэг strong предназначен для смыслового выделения текста и более симантически подходит под стандарт HTML5" selected>${bold}</option>
				<option title="Тэг b подходит для простого визуального выделения, не нагружая выделенное смысловой нагрузкой. Но всё-же мы рекомендуем использовать тэг strong">${bold_else}</option>
			</select>
			<button class="delete_data">Удалить сохранённые данные</button>
		`;
		get_id( 'content_in_modal' ).appendChild( node );
		let insert_modal = get_id( 'insert_modal' );
		insert_modal.innerHTML = 'Сохранить';
		insert_modal.addEventListener( 'click', e =>{
			let selecttions = {
				max_size_history: document.querySelector( '.max_size_history' ),
				bold: document.querySelector( '.bold' ),
				italic: document.querySelector( '.italic' ),
				tint_color: document.querySelector( '.tint_value' ),
				feel_color: document.querySelector( '.feel_value' )
			}
			let user_settings = {};
			for ( let key in selecttions ) {
				if ( selecttions[ key ] !== null ) {
					user_settings[ key ] = selecttions[ key ].value;
				} else {
					console.warn( `selecttions.${key} === `, selecttions[ key ] );
				}
			}
			set_user_settings( user_settings );
			close_modal_window(e);
		},{once:true});
		let delete_data = node.querySelector( '.delete_data' );
		delete_data.addEventListener( 'click', e =>{
			delete_saved_data();
			close_modal_window(e);
		});
		open_modal_window(e);
	});
}