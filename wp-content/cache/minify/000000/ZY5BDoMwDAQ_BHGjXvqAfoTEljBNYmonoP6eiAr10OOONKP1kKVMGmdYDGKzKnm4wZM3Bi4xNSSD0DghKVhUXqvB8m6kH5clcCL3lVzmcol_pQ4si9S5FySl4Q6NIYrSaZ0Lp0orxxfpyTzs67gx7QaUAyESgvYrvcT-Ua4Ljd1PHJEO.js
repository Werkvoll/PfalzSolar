(function($){
	$(document).ready(function() {
		var all_networks_opened = 0;

		$( 'body' ).on( 'click', '.et_social_share', function() {
			var $this_el = $(this),
				social_type = $this_el.data( 'social_type' ),
				social_network = $this_el.data( 'social_name' ),
				share_link = 'media' == social_type ? $this_el.data( 'social_link' ) : $this_el.prop( 'href' );

			update_stats_table( social_network, $this_el );

			if ( 'like' === social_network ) {
				return false;
			}

			var left = ( $( window ).width()/2 ) - ( 550/2 );
			var top = ( $( window ).height()/2 ) - ( 450/2 );
			var new_window = window.open( share_link, '', 'scrollbars=1, height=450, width=550, left=' + left + ', top=' + top );

			if ( window.focus ) {
				new_window.focus();
			}

			return false;
		});

		$( '.et_social_follow' ).click( function() {
			var $this_el = $(this),
				social_network = $this_el.data( 'social_name' );

			update_stats_table( social_network, $this_el );

			if ( 'like' === social_network ) {
				return false;
			}
		});

		$( 'body' ).on( 'click', '.et_social_share_pinterest', function() {
			if ( $( this ).hasClass( 'et_social_pin_all' ) ) {
				var left = ( $( window ).width()/2 ) - ( 550/2 ),
					top = ( $( window ).height()/2 ) - ( 450/2 ),
					share_link = $( this ).attr( 'href' ),
					new_window = window.open( share_link, '', 'scrollbars=1, height=450, width=550, left=' + left + ', top=' + top );

				if ( window.focus ) {
					new_window.focus();
				}
			} else {
				$( '.et_social_pin_images_outer' ).fadeToggle( 400 );
			}

			return false;
		});

		function get_url_parameter( param_name ) {
			var page_url = window.location.search.substring(1);
			var url_variables = page_url.split('&');
			for ( var i = 0; i < url_variables.length; i++ ) {
					var curr_param_name = url_variables[i].split( '=' );
				if ( curr_param_name[0] == param_name ) {
					return curr_param_name[1];
				}
			}
		}

		function update_stats_table( $social_network, $this_el ) {
			var action     = $this_el.data( 'social_type' ),
				media_url  = 'media' == action ? $this_el.closest( '.et_social_media_wrapper' ).find( 'img' ).attr( 'src' ) : '',
				post_id    = $this_el.data( 'post_id' ),
				location   = $this_el.data( 'location' ),
				stats_data = '';

			stats_data = JSON.stringify({
				'action' : action,
				'network' : $social_network,
				'media_url' : media_url,
				'post_id' : post_id,
				'location' : location
			});

			$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
					action : 'add_stats_record_db',
					stats_data_array : stats_data,
					add_stats_nonce : monarchSettings.stats_nonce
				},
				success: function( data ) {
					if ( true == data ){
						if ( 'like' === action ){
							update_single_shares( $this_el, '', post_id, $social_network, 'like' );
						}
						if ( 'media' === action ){
							update_total_media_shares( $this_el.closest( '.et_social_media_wrapper' ) );
							update_single_shares( $this_el, media_url, post_id, $social_network, 'media' );
						}
					}
				}
			});
		}

		function append_share_counts( $current_network ) {
			var network = $current_network.data( 'social_name' ),
				min_count = $current_network.data( 'min_count' ),
				post_id = $current_network.data( 'post_id' ),
				url = monarchSettings.pageurl !== '' ? monarchSettings.pageurl : window.location.href,
				label_div = $current_network.find( '.et_social_network_label' ),
				append_to = ( 0 != ( label_div.length ) ) ? label_div : $current_network;

			$share_count_data = JSON.stringify({ 'network' : network, 'min_count' : min_count, 'post_id' : post_id, 'url' : url });

			$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
						action : 'get_shares_count',
						share_count_array : $share_count_data,
						get_share_counts_nonce : monarchSettings.share_counts
					},
					beforeSend: function( data ){
						append_to.append( '<span class="et_social_placeholder"></span>' );
					},
					success: function( data ){
						$current_network.find( 'span.et_social_placeholder' ).remove();
						append_to.append( data );
					}
			});
		}

		function append_total_shares( $current_area ) {
			var post_id = $current_area.data( 'post_id' ),
				url = monarchSettings.pageurl !== '' ? monarchSettings.pageurl : window.location.href,
				append_to = $current_area;

			$share_total_count_data = JSON.stringify({ 'post_id' : post_id, 'url' : url });

			$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
						action : 'get_total_shares',
						share_total_count_array : $share_total_count_data,
						get_total_counts_nonce : monarchSettings.total_counts
					},
					beforeSend: function( data ){
						append_to.append( '<span class="et_social_placeholder"></span>' );
					},
					success: function( data ){
						append_to.find( 'span.et_social_placeholder' ).remove();
						append_to.append( data );
					}
			});
		}

		function append_follow_counts( $current_area ) {
			var network = $current_area.data( 'network' ),
				min_count = $current_area.data( 'min_count' ),
				index = $current_area.data( 'index' ),
				append_to = $current_area;

			$follow_count_data = JSON.stringify({ 'network' : network, 'min_count' : min_count, 'index' : index });
			$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
						action : 'get_follow_counts',
						follow_count_array : $follow_count_data,
						get_follow_counts_nonce : monarchSettings.follow_counts
					},
					beforeSend: function( data ){
						append_to.append( '<span class="et_social_placeholder"></span>' );
					},
					success: function( data ){
						$current_area.find( 'span.et_social_placeholder' ).remove();
						append_to.append( data );
					}
			});
		}

		function append_total_follows( $current_area ) {
			var append_to = $current_area;
			$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
						action : 'get_follow_total',
						get_total_counts_nonce : monarchSettings.total_counts
					},
					beforeSend: function( data ){
						append_to.append( '<span class="et_social_placeholder"></span>' );
					},
					success: function( data ){
						append_to.find( 'span.et_social_placeholder' ).remove();
						append_to.append( data );
					}
			});
		}

		if ( $( '.et_social_display_follow_counts' ).length ) {
			$( '.et_social_display_follow_counts' ).each( function(){
				append_follow_counts( $( this) );
			});
		}

		if ( $( '.et_social_follow_total' ).length ) {
			$( '.et_social_follow_total' ).each( function(){
				append_total_follows( $( this) );
			});
		}


		if ( $( '.et_social_total_share' ).length ) {
			$( '.et_social_total_share' ).each( function(){
				append_total_shares( $( this) );
			});
		}

		if ( $( '.et_social_display_count' ).length ) {
			$( '.et_social_display_count' ).each( function(){
				append_share_counts( $( this) );
			});
		}

		if ( $( '.et_social_media_wrapper' ).length && $( '.et_social_media_wrapper .et_social_totalcount' ).length ) {

			$( '.et_social_media_wrapper' ).each( function() {
				 update_total_media_shares( $( this ) );
			});
		}

		if ( $( '.et_social_media_wrapper' ).length && $( '.et_social_media_wrapper .et_social_withcounts' ).length ) {

				$( '.et_social_media_wrapper .et_social_share' ).each( function() {
					var this_el = $( this ),
						media_url = this_el.closest( '.et_social_media_wrapper' ).find('img').attr('src'),
						post_id = this_el.data( 'post_id' ),
						social_network = this_el.data( 'social_name' );

					update_single_shares( this_el, media_url, post_id, social_network, 'media' );

				});
		}

		function update_total_media_shares( $element ) {
			if ( $( '.et_social_totalcount' ).length ) {
				var this_el = $element,
					media_url = this_el.find( 'img' ).attr( 'src' ),
					post_id = this_el.find( '.et_social_share' ).first().data( 'post_id' ),
					media_data = JSON.stringify({ 'media_url' : media_url, 'post_id' : post_id });

				$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
						action : 'get_media_shares_total',
						media_total : media_data,
						get_media_shares_total_nonce : monarchSettings.media_total
					},
					success: function( data ){
						this_el.find( '.et_social_totalcount_count' ).empty().append( data );
					}
				});
			}
		}

		function update_single_shares( $this_el, $media_url, $post_id, $network, $action ) {
			if( $( '.et_social_withcounts' ).length ) {
				var media_data = JSON.stringify({ 'media_url' : $media_url, 'post_id' : $post_id, 'network' : $network, 'action' : $action });
				$.ajax({
				type: 'POST',
				url: monarchSettings.ajaxurl,
				data: {
						action : 'get_shares_single',
						media_single : media_data,
						get_media_shares_nonce : monarchSettings.media_single
					},
					success: function( data ){
						$this_el.find( '.et_social_count span' ).not('.et_social_count_label').empty().append( data );
					}
				});
			}
		}

		function setCookieExpire(days) {

			var ms = days*24*60*60*1000;

			var date = new Date();
			date.setTime(date.getTime() + ms);

			return "; expires=" + date.toUTCString();
		}

		function checkCookieValue(cookieName, value) {
			return parseCookies()[cookieName] === value;
		}

		function parseCookies() {
			var cookies = document.cookie.split('; ');

			var ret = {};
			for (var i = cookies.length - 1; i >= 0; i--) {
			  var el = cookies[i].split('=');
			  ret[el[0]] = el[1];
			}
			return ret;
		}

		function set_cookie( $expire ) {
			cookieExpire = setCookieExpire( $expire );
			document.cookie = 'etSocialCookie=true' + cookieExpire;
		}

		//separate function for the setTimeout to make it work properly within the loop.
		function make_popup_visible( $popup, $delay ){
			setTimeout( function() {
				$popup.addClass( 'et_social_visible et_social_animated' );
				if ( $( '.et_social_resize' ).length ) {
					$( '.et_social_resize' ).each( function() {
						define_popup_position( $( this ) );
					});
				}
			}, $delay );
		}

		function auto_popup( this_el, delay ) {
			var $current_popup_auto = this_el;
			if ( ! $current_popup_auto.hasClass( 'et_social_animated' ) ) {
				var $cookies_expire_auto = $current_popup_auto.data( 'cookie_duration' ) ? $current_popup_auto.data( 'cookie_duration' ) : false,
					$delay = delay;

				if ( ( false !== $cookies_expire_auto && ! checkCookieValue( 'etSocialCookie', 'true' ) ) || false == $cookies_expire_auto ) {

					make_popup_visible ( $current_popup_auto, $delay );

					if ( false !== $cookies_expire_auto ) {
						set_cookie( $cookies_expire_auto );
					}
				}
			}
		}

		if ( 'true' == get_url_parameter( 'et_monarch_popup' ) ) {
			$( '.et_social_after_comment' ).each( function() {
				var $current_popup = $( this );
				auto_popup( $current_popup, 0 );
			});
		}

		 if( $( '.et_social_auto_popup' ).length ) {
			$( '.et_social_auto_popup' ).each( function() {
				var $current_popup_auto = $( this );
				auto_popup( $current_popup_auto, '' !== $current_popup_auto.data( 'delay' ) ? $current_popup_auto.data( 'delay' ) * 1000 : 0 );
			});
		 }

		$( '.et_social_pinterest_window .et_social_close' ).on( 'click', function(){
			$( '.et_social_pin_images_outer' ).fadeToggle( 400 );
		});

		$ ( 'body' ).on( 'click', '.et_social_icon_cancel', function(){
			var this_el = $( this );
			if ( this_el.parent().hasClass( 'et_social_flyin' ) ) {
				$popup = this_el.parent();
			} else {
				$popup = this_el.parent().parent();

				if ( $popup.hasClass( 'et_social_all_networks_popup' ) ) {
					all_networks_opened = 0;
				}
			}

			$popup.addClass( 'et_social_fadeout' );

			setTimeout( function() {
				$popup.remove();
			}, 800 );
			return false;
		});

		if ( $( '.et_monarch_after_order' ).length ) {
			$( '.et_social_after_purchase' ).each( function() {
				var $current_popup = $( this );
				if ( ! $current_popup.hasClass( 'et_social_animated' ) ) {
					var $cookies_expire = $current_popup.data( 'cookie_duration' ) ? $current_popup.data( 'cookie_duration' ) : false,
						$delay = 0;

					if ( ( false !== $cookies_expire && ! checkCookieValue( 'etSocialCookie', 'true' ) ) || false == $cookies_expire ) {

						make_popup_visible ( $current_popup, $delay );

						if ( false !== $cookies_expire ) {
							set_cookie( $cookies_expire );
						}
					}
				}
			} );
		}

		if( $( '.et_social_trigger_bottom' ).length ) {

			$( '.et_social_trigger_bottom' ).each(function(){
				scroll_trigger( $( this ), true );
			});

		}

		if( $( '.et_social_scroll' ).length ) {

			$( '.et_social_scroll' ).each(function(){
				scroll_trigger( $( this ), false );
			});

		}

		function scroll_trigger( this_el, is_bottom_trigger ) {
			var current_popup_bottom = this_el;
				if ( ! current_popup_bottom.hasClass( 'et_social_animated' ) ) {
					var	cookies_expire_bottom = current_popup_bottom.data( 'cookie_duration' ) ? current_popup_bottom.data( 'cookie_duration' ) : false;

					if ( true == is_bottom_trigger ) {
						var scroll_trigger = $( '.et_social_bottom_trigger' ).length ? $( '.et_social_bottom_trigger' ).offset().top : $( document ).height() - 500;
					} else {
						var scroll_pos = this_el.data( 'scroll_pos' ) > 100 ? 100 : this_el.data( 'scroll_pos' ),
							scroll_trigger = 100 == scroll_pos ? $( document ).height() - 10 : $( document ).height() * scroll_pos / 100;
					}

					$( window ).scroll( function(){
						if ( ( false !== cookies_expire_bottom && ! checkCookieValue( 'etSocialCookie', 'true' ) ) || false == cookies_expire_bottom ) {
							if( $( window ).scrollTop() + $( window ).height() > scroll_trigger ) {
								current_popup_bottom.addClass( 'et_social_visible et_social_animated' );
								if ( $( '.et_social_resize' ).length ) {
									$( '.et_social_resize' ).each( function() {
										define_popup_position( $( this ) );
									});
								}
								if ( false !== cookies_expire_bottom ) {
									set_cookie( cookies_expire_bottom );
								}
							}
						}
					});
				}
		}

		if( $( '.et_social_trigger_idle' ).length ) {
			$( '.et_social_trigger_idle' ).each( function() {
				var this_el = $( this );

					if ( ! this_el.hasClass( 'et_social_animated' ) ) {
						var $cookies_expire_idle = this_el.data( 'cookie_duration' ) ? this_el.data( 'cookie_duration' ) : false,
							$idle_timeout = '' !== this_el.data( 'idle_timeout' ) ? this_el.data( 'idle_timeout' ) * 1000 : 30000;

						if ( ( false !== $cookies_expire_idle && ! checkCookieValue( 'etSocialCookie', 'true' ) ) || false == $cookies_expire_idle ) {
							$( document ).idleTimer( $idle_timeout );

							$( document ).on( "idle.idleTimer", function(){
								make_popup_visible ( this_el, 0 );
							});

							if ( false !== $cookies_expire_idle ) {
								set_cookie( $cookies_expire_idle );
							}
						}
					}
			});
		}

		// open close the mobile sideabr on header click
		$( '.et_social_heading, .et_social_mobile_button' ).click( function(){
			$this_mobile_div = $( '.et_social_mobile' );

			$this_mobile_div.css( {'display' : 'block' } );
			$( '.et_social_mobile_button').removeClass( 'et_social_active_button' );

			if ( $this_mobile_div.hasClass( 'et_social_opened' ) ) {
				$this_mobile_div.find( '.et_social_networks' ).slideToggle( 600 );
				$this_mobile_div.removeClass( 'et_social_opened' ).addClass( 'et_social_closed' );
				$( '.et_social_mobile_overlay' ).removeClass( 'et_social_visible_overlay' );
				$( '.et_social_mobile_overlay' ).fadeToggle( 600 );
			} else {
				$this_mobile_div.removeClass( 'et_social_closed' ).addClass( 'et_social_opened' );
				$this_mobile_div.find( '.et_social_networks' ).slideToggle( 600 );
				$( '.et_social_mobile_overlay' ).addClass( 'et_social_visible_overlay' ).css({ 'display' : 'block' });
			}
		});

		//if close button clicked - hide the mobile sidebar from screen
		$( '.et_social_mobile .et_social_close' ).click( function(){
			$mobile_div = $( '.et_social_mobile' );
			$mobile_div.fadeToggle( 600 );
			$( '.et_social_mobile_button' ).addClass( 'et_social_active_button' );

			if ( $mobile_div.hasClass( 'et_social_opened' ) ) {
				$( '.et_social_mobile_overlay' ).fadeToggle( 600 );
				$mobile_div.removeClass( 'et_social_opened' );
				$mobile_div.find( '.et_social_networks' ).fadeToggle( 600 );
			}

		});

		// Move inline icons into appropriate sections in Divi theme
		if( $( '.et_social_inline' ).length ) {
			if ( $( 'body' ).hasClass( 'et_pb_pagebuilder_layout' ) ) {
				var top_inline = $( '.et_social_inline_top' ),
					bottom_inline = $( '.et_social_inline_bottom' ),
					divi_container = '<div class="et_pb_row"><div class="et_pb_column et_pb_column_4_4"></div></div>';

				if ( top_inline.length ) {
					$( '.et_pb_section' ).not( '.et_pb_fullwidth_section' ).first().prepend( divi_container ).find( '.et_pb_row' ).first().find( '.et_pb_column' ).append( top_inline );
				}

				if ( bottom_inline.length ) {
					$( '.et_pb_section' ).not( '.et_pb_fullwidth_section' ).last().append( divi_container ).find( '.et_pb_row' ).last().find( '.et_pb_column' ).append( bottom_inline );
				}
			}
		}

		function define_popup_position( $this_popup ) {
			setTimeout( function() { // make sure all css transitions are finished to calculate the heights correctly
				var this_popup = $this_popup,
					networks_div = this_popup.find( '.et_social_networks' ),
					header_height = this_popup.find( '.et_social_header' ).outerHeight(),
					total_count_height = this_popup.find( '.et_social_totalcount' ).height(),
					extra_height = 0 < total_count_height ? 20 : 0;

				this_popup.height( this_popup.find( '.et_social_icons_container' ).innerHeight() + header_height + total_count_height + 20 + extra_height );

				var	popup_max_height = this_popup.hasClass( 'et_social_popup_content' ) ? $( window ).height() : $( window ).height() - 60;

				if ( this_popup.hasClass( 'et_social_popup_content' ) && 768 < $( window ).width() ) {
					popup_max_height = popup_max_height - 50;
				}

				this_popup.css( { 'max-height' : popup_max_height } );

				if( this_popup.hasClass( 'et_social_popup_content' ) ) {
					var top_position = $( window ).height() / 2 - this_popup.innerHeight() / 2;
					this_popup.css( { 'top' : top_position + 'px' } );
				}

				var networks_div_height = this_popup.height() - header_height + total_count_height - extra_height;
				networks_div.height( networks_div_height );
			}, 400 );
		}

		function set_mobile_sidebar_height() {
			setTimeout( function() { // make sure all css transitions are finished to calculate the heights correctly
				var	mobile_div = $( '.et_social_mobile' );

				if ( !mobile_div.hasClass( 'et_social_opened' ) ){
					$('.et_social_mobile .et_social_networks').css({'display' : 'block'});
				}
				if( $('.et_social_active_button').length ) {
					mobile_div.css({'display' : 'block'});
				}

				var inner_contatiner_height = mobile_div.find( '.et_social_icons_container' ).innerHeight() + 45;

				if ( !mobile_div.hasClass( 'et_social_opened' ) ){
					$('.et_social_mobile .et_social_networks').css({'display' : 'none'});
				}
				if( $('.et_social_active_button').length ) {
					mobile_div.css({'display' : 'none'});
				}

				mobile_div.find( '.et_social_networks' ).css( { 'max-height' : inner_contatiner_height, 'height' : inner_contatiner_height } );
				if ( $( window ).height() < inner_contatiner_height ) {
					var inner_height = $( window ).height() - mobile_div.find( '.et_social_heading' ).innerHeight() + 10;
					mobile_div.find( '.et_social_networks' ).css({ 'height' : inner_height });
				}
			}, 400 );
		}

		function set_sidebar_position(){
			if( $( '.et_social_sidebar_networks' ).length ){
				var this_sidebar = $( '.et_social_sidebar_networks' ),
					top_position = $( window ).height() / 2 - this_sidebar.innerHeight() / 2;
					top_position = 0 > top_position ? 0 : top_position;
				this_sidebar.css( { 'top' : top_position + 'px' } );
			}
		}

		function set_media_wrapper_size() {
			if ( $( '.et_social_media_wrapper' ).length ) {
				$( '.et_social_media_wrapper' ).each( function(){
					var this_wrapper = $( this ),
						this_wrapper_media = this_wrapper.find( '.et_social_media' ),
						this_image = this_wrapper.find( 'img' ),
						this_image_height = this_image.height(),
						this_image_width = this_image.width(),
						this_wrapper_networks_height = this_wrapper.find( '.et_social_networks' ).innerHeight();

					this_wrapper.addClass( this_image.attr( 'class' ) );
					this_wrapper_media.css( { 'max-height' : this_image_height } );
					this_wrapper_media.css( { 'height' : this_wrapper_networks_height + 50 } );
					this_wrapper_media.width( this_image_width - 80 );
				});
			}
		}

		$ ( 'body' ).on( 'click', '.et_social_open_all', function() {
			all_networks_opened++;
			if ( 1 == all_networks_opened ) {
				var this_button = $( this ),
					page_id = this_button.data( 'page_id' ),
					permalink = this_button.data( 'permalink' ),
					title = this_button.data( 'title' ),
					media = typeof this_button.data( 'media' ) !== 'undefined' ? this_button.data( 'media' ) : '',
					is_popup = 'popup' == this_button.data( 'location' ) ? 'true' : 'false';

				$.ajax({
					type: 'POST',
					url: monarchSettings.ajaxurl,
					data: {
							action : 'generate_all_networks_popup',
							all_networks_page_id : page_id,
							all_networks_link : permalink,
							all_networks_title : title,
							all_networks_media : media,
							is_popup : is_popup,
							generate_all_window_nonce : monarchSettings.generate_all_window_nonce
						},
						success: function( data ) {
							if ( 'false' == is_popup ) {
								$( 'body' ).append( data );
								make_popup_visible( $( '.et_social_all_networks_popup' ), 1 );
							} else {
								var popup_container = this_button.parent().closest( '.et_social_popup_content' );

								this_button.parent().replaceWith( data );
								define_popup_position( popup_container );
								all_networks_opened = 0;
							}
						}
				});
			}

			return false;
		});

		set_mobile_sidebar_height();

		set_sidebar_position();

		$( window ).resize( function(){
			if ( $( '.et_social_resize' ).length ) {
				$( '.et_social_resize' ).each( function() {
					define_popup_position( $( this ) );
				});
			}
			if ( $('.et_social_mobile') ) {
				set_mobile_sidebar_height();
			}
			if( $( '.et_social_sidebar_networks' ).length ){
				set_sidebar_position();
			}

			set_media_wrapper_size();
		});

		$( '.et_social_hide_sidebar' ).click( function(){
			$( '.et_social_hide_sidebar' ).toggleClass( 'et_social_hidden_sidebar' );
			$( '.et_social_sidebar_networks' ).toggleClass( 'et_social_hidden_sidebar et_social_visible_sidebar' );
		});

		$( window ).load( function(){
			set_media_wrapper_size();

			if ( $( '.et_social_pin_images' ).length && ( $( '.et_social_all_button' ).length || $( '.et_social_pinterest' ).length ) ) {
				var pin_container = $( '.et_social_pin_images' ),
					permalink = pin_container.data( 'permalink' ),
					title = pin_container.data( 'title' ),
					post_id = pin_container.data( 'post_id' ),
					$i = 0;

				$( 'img' ).each( function(){
					//do not include comment avatars into the Modal
					if ( ! $( this ).hasClass( 'avatar' ) ) {
						var this_img = $( this ).attr( 'src' ),
							this_alt = $( this ).attr( 'alt' );

						if ( '' != this_img ) {
							var	pin_link = 'http://www.pinterest.com/pin/create/button/?url=' + permalink + '&media=' + this_img + '&description=' + title,
								this_img_container = '<div class="et_social_pin_image"><a href="' + pin_link + '" rel="nofollow" class="et_social_icon et_social_share" data-social_name="pinterest" data-post_id="' + post_id + '" data-social_type="share"><img src="' + this_img + '" alt="' + this_alt + '"/><span class="et_social_pin_overlay et_social_icon"></span></a></div>';
							$( '.et_social_pin_images' ).append( this_img_container );
							$i++;
						}
					}
				});

				//Append error message if no images found on page
				if ( 0 == $i ) {
					$( '.et_social_pin_images' ).append( monarchSettings.no_img_message );
				}
			}
		});
	});
})(jQuery)
;/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
;(function($){
	var $et_pb_post_fullwidth = $( '.single.et_pb_pagebuilder_layout.et_full_width_page' ),
		et_is_mobile_device = navigator.userAgent.match( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/ ),
		et_is_ipad = navigator.userAgent.match( /iPad/ ),
		$et_container = $( '.container' ),
		et_container_width = $et_container.width(),
		et_is_fixed_nav = $( 'body' ).hasClass( 'et_fixed_nav' ),
		et_is_vertical_fixed_nav = $( 'body' ).hasClass( 'et_vertical_fixed' ),
		et_is_rtl = $( 'body' ).hasClass( 'rtl' ),
		et_hide_nav = $( 'body' ).hasClass( 'et_hide_nav' ),
		et_header_style_left = $( 'body' ).hasClass( 'et_header_style_left' ),
		et_vertical_navigation = $( 'body' ).hasClass( 'et_vertical_nav' ),
		$top_header = $('#top-header'),
		$main_header = $('#main-header'),
		$main_container_wrapper = $( '#page-container' ),
		$et_transparent_nav = $( '.et_transparent_nav' ),
		$et_main_content_first_row = $( '#main-content .container:first-child' ),
		$et_main_content_first_row_meta_wrapper = $et_main_content_first_row.find('.et_post_meta_wrapper:first'),
		$et_main_content_first_row_meta_wrapper_title = $et_main_content_first_row_meta_wrapper.find( 'h1.entry-title' ),
		$et_main_content_first_row_content = $et_main_content_first_row.find('.entry-content:first'),
		$et_single_post = $( 'body.single-post' ),
		$et_window = $(window),
		etRecalculateOffset = false,
		et_header_height,
		et_header_modifier,
		et_header_offset,
		et_primary_header_top,
		$et_vertical_nav = $('.et_vertical_nav'),
		$et_header_style_split = $('.et_header_style_split'),
		$et_top_navigation = $('#et-top-navigation'),
		$logo = $('#logo'),
		$et_pb_first_row = $( 'body.et_pb_pagebuilder_layout .et_pb_section:first-child' );

	$(document).ready( function(){
		var $et_top_menu = $( 'ul.nav' ),
			$et_search_icon = $( '#et_search_icon' ),
			et_parent_menu_longpress_limit = 300,
			et_parent_menu_longpress_start,
			et_parent_menu_click = true;

		$et_top_menu.find( 'li' ).hover( function() {
			if ( ! $(this).closest( 'li.mega-menu' ).length || $(this).hasClass( 'mega-menu' ) ) {
				$(this).addClass( 'et-show-dropdown' );
				$(this).removeClass( 'et-hover' ).addClass( 'et-hover' );
			}
		}, function() {
			var $this_el = $(this);

			$this_el.removeClass( 'et-show-dropdown' );

			setTimeout( function() {
				if ( ! $this_el.hasClass( 'et-show-dropdown' ) ) {
					$this_el.removeClass( 'et-hover' );
				}
			}, 200 );
		} );

		// Dropdown menu adjustment for touch screen
		$et_top_menu.find('.menu-item-has-children > a').on( 'touchstart', function(){
			et_parent_menu_longpress_start = new Date().getTime();
		} ).on( 'touchend', function(){
			var et_parent_menu_longpress_end = new Date().getTime()
			if ( et_parent_menu_longpress_end  >= et_parent_menu_longpress_start + et_parent_menu_longpress_limit ) {
				et_parent_menu_click = true;
			} else {
				et_parent_menu_click = false;

				// Close sub-menu if toggled
				var $et_parent_menu = $(this).parent('li');
				if ( $et_parent_menu.hasClass( 'et-hover') ) {
					$et_parent_menu.trigger( 'mouseleave' );
				} else {
					$et_parent_menu.trigger( 'mouseenter' );
				}
			}
			et_parent_menu_longpress_start = 0;
		} ).click(function() {
			if ( et_parent_menu_click ) {
				return true;
			}

			return false;
		} );

		$et_top_menu.find( 'li.mega-menu' ).each(function(){
			var $li_mega_menu           = $(this),
				$li_mega_menu_item      = $li_mega_menu.children( 'ul' ).children( 'li' ),
				li_mega_menu_item_count = $li_mega_menu_item.length;

			if ( li_mega_menu_item_count < 4 ) {
				$li_mega_menu.addClass( 'mega-menu-parent mega-menu-parent-' + li_mega_menu_item_count );
			}
		});

		if ( $et_header_style_split.length && $et_vertical_nav.length < 1 ) {
			function et_header_menu_split(){
				var $logo_container = $( '#main-header > .container > .logo_container' ),
					$logo_container_splitted = $('.centered-inline-logo-wrap > .logo_container'),
					et_top_navigation_li_size = $et_top_navigation.children('nav').children('ul').children('li').size(),
					et_top_navigation_li_break_index = Math.round( et_top_navigation_li_size / 2 ) - 1;

				if ( $et_window.width() > 980 && $logo_container.length ) {
					$('<li class="centered-inline-logo-wrap"></li>').insertAfter($et_top_navigation.find('nav > ul >li:nth('+et_top_navigation_li_break_index+')') );
					$logo_container.appendTo( $et_top_navigation.find('.centered-inline-logo-wrap') );
				}

				if ( $et_window.width() <= 980 && $logo_container_splitted.length ) {
					$logo_container_splitted.prependTo('#main-header > .container');
					$('#main-header .centered-inline-logo-wrap').remove();
				}
			}
			et_header_menu_split();

			$(window).resize(function(){
				et_header_menu_split();
			});
		}

		if ( $('ul.et_disable_top_tier').length ) {
			$("ul.et_disable_top_tier > li > ul").prev('a').attr('href','#');
		}

		if ( $( '.et_vertical_nav' ).length ) {
			if ( $( '#main-header' ).height() < $( '#et-top-navigation' ).height() ) {
				$( '#main-header' ).height( $( '#et-top-navigation' ).height() + $( '#logo' ).height() + 100 );
			}
		}

		window.et_calculate_header_values = function() {
			var $top_header = $( '#top-header' ),
				secondary_nav_height = $top_header.length && $top_header.is( ':visible' ) ? $top_header.innerHeight() : 0,
				admin_bar_height     = $( '#wpadminbar' ).length ? $( '#wpadminbar' ).innerHeight() : 0,
				$slide_menu_container = $( '.et_header_style_slide .et_slide_in_menu_container' );

			et_header_height      = $( '#main-header' ).innerHeight() + secondary_nav_height,
			et_header_modifier    = et_header_height <= 90 ? et_header_height - 29 : et_header_height - 56,
			et_header_offset      = et_header_modifier + admin_bar_height;

			et_primary_header_top = secondary_nav_height + admin_bar_height;

			if ( $slide_menu_container.length && ! $( 'body' ).hasClass( 'et_pb_slide_menu_active' ) ) {
				$slide_menu_container.css( { right: '-' + $slide_menu_container.innerWidth() + 'px', 'display' : 'none' } );

				if ( $( 'body' ).hasClass( 'et_boxed_layout' ) ) {
					var page_container_margin = $main_container_wrapper.css( 'margin-left' );
					$main_header.css( { left : page_container_margin } );
				}
			}
		}

		var $comment_form = $('#commentform');

		et_pb_form_placeholders_init( $comment_form );

		$comment_form.submit(function(){
			et_pb_remove_placeholder_text( $comment_form );
		});

		et_duplicate_menu( $('#et-top-navigation ul.nav'), $('#et-top-navigation .mobile_nav'), 'mobile_menu', 'et_mobile_menu' );
		et_duplicate_menu( '', $('.et_pb_fullscreen_nav_container'), 'mobile_menu_slide', 'et_mobile_menu', 'no_click_event' );

		if ( $( '#et-secondary-nav' ).length ) {
			$('#et-top-navigation #mobile_menu').append( $( '#et-secondary-nav' ).clone().html() );
		}

		// adding arrows for the slide/fullscreen menus
		if ( $( '.et_slide_in_menu_container' ).length ) {
			var $item_with_sub = $( '.et_slide_in_menu_container' ).find( '.menu-item-has-children > a' );
			// add arrows for each menu item which has submenu
			if ( $item_with_sub.length ) {
				$item_with_sub.append( '<span class="et_mobile_menu_arrow"></span>' );
			}
		}

		function et_change_primary_nav_position( delay ) {
			setTimeout( function() {
				var $body = $('body'),
					$wpadminbar = $( '#wpadminbar' ),
					$top_header = $( '#top-header' ),
					et_primary_header_top = 0;

				if ( $wpadminbar.length ) {
					et_primary_header_top += $wpadminbar.innerHeight();
				}

				if ( $top_header.length && $top_header.is(':visible') ) {
					et_primary_header_top += $top_header.innerHeight();
				}

				if ( ! $body.hasClass( 'et_vertical_nav' ) && ( $body.hasClass( 'et_fixed_nav' ) ) ) {
					$('#main-header').css( 'top', et_primary_header_top );
				}
			}, delay );
		}

		function et_hide_nav_transofrm( ) {
			var $body = $( 'body' ),
				$body_height = $( document ).height(),
				$viewport_height = $( window ).height() + et_header_height + 200;

			if ( $body.hasClass( 'et_hide_nav' ) ||  $body.hasClass( 'et_hide_nav_disabled' ) && ( $body.hasClass( 'et_fixed_nav' ) ) ) {
				if ( $body_height > $viewport_height ) {
					if ( $body.hasClass( 'et_hide_nav_disabled' ) ) {
						$body.addClass( 'et_hide_nav' );
						$body.removeClass( 'et_hide_nav_disabled' );
					}
					$('#main-header').css( 'transform', 'translateY(-' + et_header_height +'px)' );
					$('#top-header').css( 'transform', 'translateY(-' + et_header_height +'px)' );
				} else {
					$('#main-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
					$('#top-header').css( { 'transform': 'translateY(0)', 'opacity': '1' } );
					$body.removeClass( 'et_hide_nav' );
					$body.addClass( 'et_hide_nav_disabled' );
				}
			}
		}

		function et_fix_page_container_position(){
			var et_window_width     = $et_window.width(),
				$top_header          = $( '#top-header' ),
				secondary_nav_height = $top_header.length && $top_header.is( ':visible' ) ? $top_header.innerHeight() : 0;

			// Set data-height-onload for header if the page is loaded on large screen
			// If the page is loaded from small screen, rely on data-height-onload printed on the markup,
			// prevent window resizing issue from small to large
			if ( et_window_width > 980 && ! $main_header.attr( 'data-height-loaded' ) ){
				$main_header.attr({ 'data-height-onload' : $main_header.height(), 'data-height-loaded' : true });
			}

			// Use on page load calculation for large screen. Use on the fly calculation for small screen (980px below)
			if ( et_window_width <= 980 ) {
				var header_height = $main_header.innerHeight() + secondary_nav_height - 1;

				// If transparent is detected, #main-content .container's padding-top needs to be added to header_height
				// And NOT a pagebuilder page
				if ( $et_transparent_nav.length && ! $et_pb_first_row.length ) {
					header_height += 58;
				}
			} else {

				// Get header height from header attribute
				var header_height = parseInt( $main_header.attr( 'data-height-onload' ) ) + secondary_nav_height;

				// Non page builder page needs to be added by #main-content .container's fixed height
				if ( $et_transparent_nav.length && ! $et_vertical_nav.length && $et_main_content_first_row.length ) {
					header_height += 58;
				}
			}

			// Specific adjustment required for transparent nav + not vertical nav
			if ( $et_transparent_nav.length && ! $et_vertical_nav.length ){

				// Add class for first row for custom section padding purpose
				$et_pb_first_row.addClass( 'et_pb_section_first' );

				// List of conditionals
				var is_pb                            = $et_pb_first_row.length,
					is_post_pb                       = is_pb && $et_single_post.length,
					is_post_pb_full_layout_has_title = $et_pb_post_fullwidth.length && $et_main_content_first_row_meta_wrapper_title.length,
					is_post_pb_full_layout_no_title  = $et_pb_post_fullwidth.length && 0 === $et_main_content_first_row_meta_wrapper_title.length,
					is_pb_fullwidth_section_first    = $et_pb_first_row.is( '.et_pb_fullwidth_section' ),
					is_no_pb_mobile                  = et_window_width <= 980 && $et_main_content_first_row.length;

				if ( is_post_pb && ! ( is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first ) ) {

					/* Desktop / Mobile + Single Post */

					/*
					 * EXCEPT for fullwidth layout + fullwidth section ( at the first row ).
					 * It is basically the same as page + fullwidth section with few quirk.
					 * Instead of duplicating the conditional for each module, it'll be simpler to negate
					 * fullwidth layout + fullwidth section in is_post_pb and rely it to is_pb_fullwidth_section_first
					 */

					// Remove main content's inline padding to styling to prevent looping padding-top calculation
					$et_main_content_first_row.css({ 'paddingTop' : '' });

					if ( et_window_width < 980 ) {
						header_height += 40;
					}

					if ( is_pb_fullwidth_section_first ) {
						// If the first section is fullwidth, restore the padding-top modified area at first section
						$et_pb_first_row.css({
							'paddingTop' : '0',
						});
					}

					if ( is_post_pb_full_layout_has_title ) {

						// Add header height to post meta wrapper as padding top
						$et_main_content_first_row_meta_wrapper.css({
							'paddingTop' : header_height
						});

					} else if ( is_post_pb_full_layout_no_title ) {

						$et_pb_first_row.css({
							'paddingTop' : header_height
						});

					} else {

						// Add header height to first row content as padding top
						$et_main_content_first_row.css({
							'paddingTop' : header_height
						});

					}

				} else if ( is_pb_fullwidth_section_first ){

					/* Desktop / Mobile + Pagebuilder + Fullwidth Section */

					var $et_pb_first_row_first_module = $et_pb_first_row.children( '.et_pb_module:first' );

					// Quirks: If this is post with fullwidth layout + no title + fullwidth section at first row,
					// Remove the added height at line 2656
					if ( is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first && et_window_width > 980 ) {
						header_height = header_height - 58;
					}

					if ( $et_pb_first_row_first_module.is( '.et_pb_slider' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth slider */

						var $et_pb_first_row_first_module_slide_image 		= $et_pb_first_row_first_module.find( '.et_pb_slide_image' ),
							$et_pb_first_row_first_module_slide 				= $et_pb_first_row_first_module.find( '.et_pb_slide' ),
							$et_pb_first_row_first_module_slide_container 	= $et_pb_first_row_first_module.find( '.et_pb_slide .et_pb_container' ),
							et_pb_slide_image_margin_top 		= 0 - ( parseInt( $et_pb_first_row_first_module_slide_image.height() ) / 2 ),
							et_pb_slide_container_height 		= 0,
							$et_pb_first_row_first_module_slider_arrow 		= $et_pb_first_row_first_module.find( '.et-pb-slider-arrows a'),
							et_pb_first_row_slider_arrow_height = $et_pb_first_row_first_module_slider_arrow.height();

						// Adding padding top to each slide so the transparency become useful
						$et_pb_first_row_first_module_slide.css({
							'paddingTop' : header_height,
						});

						// delete container's min-height
						$et_pb_first_row_first_module_slide_container.css({
							'min-height' : ''
						});

						// Adjusting slider's image, considering additional top padding of slideshow
						$et_pb_first_row_first_module_slide_image.css({
							'marginTop' : et_pb_slide_image_margin_top
						});

						// Adjusting slider's arrow, considering additional top padding of slideshow
						$et_pb_first_row_first_module_slider_arrow.css({
							'marginTop' : ( ( header_height / 2 ) - ( et_pb_first_row_slider_arrow_height / 2 ) )
						});

						// Looping the slide and get the highest height of slide
						et_pb_first_row_slide_container_height_new = 0

						$et_pb_first_row_first_module.find( '.et_pb_slide' ).each( function(){
							var $et_pb_first_row_first_module_slide_item = $(this),
								$et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module_slide_item.find( '.et_pb_container' );

							// Make sure that the slide is visible to calculate correct height
							$et_pb_first_row_first_module_slide_item.show();

							// Remove existing inline css to make sure that it calculates the height
							$et_pb_first_row_first_module_slide_container.css({ 'min-height' : '' });

							var et_pb_first_row_slide_container_height = $et_pb_first_row_first_module_slide_container.innerHeight();

							if ( et_pb_first_row_slide_container_height_new < et_pb_first_row_slide_container_height ){
								et_pb_first_row_slide_container_height_new = et_pb_first_row_slide_container_height;
							}

							// Hide the slide back if it isn't active slide
							if ( $et_pb_first_row_first_module_slide_item.is( ':not(".et-pb-active-slide")' ) ){
								$et_pb_first_row_first_module_slide_item.hide();
							}
						});

						// Setting appropriate min-height, considering additional top padding of slideshow
						$et_pb_first_row_first_module_slide_container.css({
							'min-height' : et_pb_first_row_slide_container_height_new
						});

					} else if ( $et_pb_first_row_first_module.is( '.et_pb_fullwidth_header' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth header */

						// Remove existing inline stylesheet to prevent looping padding
						$et_pb_first_row_first_module.removeAttr( 'style' );

						// Get paddingTop from stylesheet
						var et_pb_first_row_first_module_fullwidth_header_padding_top = parseInt( $et_pb_first_row_first_module.css( 'paddingTop' ) );

						// Implement stylesheet's padding-top + header_height
						$et_pb_first_row_first_module.css({
							'paddingTop' : ( header_height + et_pb_first_row_first_module_fullwidth_header_padding_top )
						} );

					} else if ( $et_pb_first_row_first_module.is( '.et_pb_fullwidth_portfolio' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth Portfolio */

						$et_pb_first_row_first_module.css({ 'paddingTop' : header_height });

					} else if ( $et_pb_first_row_first_module.is( '.et_pb_map_container' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth Map */

						var $et_pb_first_row_map = $et_pb_first_row_first_module.find( '.et_pb_map' );

						// Remove existing inline height to prevent looping height calculation
						$et_pb_first_row_map.css({ 'height' : '' });

						// Implement map height + header height
						$et_pb_first_row_first_module.find('.et_pb_map').css({
							'height' : header_height + parseInt( $et_pb_first_row_map.css( 'height' ) )
						});

						// Adding specific class to mark the map as first row section element
						$et_pb_first_row_first_module.addClass( 'et_beneath_transparent_nav' );

					} else if ( $et_pb_first_row_first_module.is( '.et_pb_fullwidth_menu' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth Menu */
						$et_pb_first_row_first_module.css({ 'marginTop' : header_height });

					} else if ( $et_pb_first_row_first_module.is( '.et_pb_fullwidth_code' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth code */

						var $et_pb_first_row_first_module_code = $et_pb_first_row_first_module;

						$et_pb_first_row_first_module_code.css({ 'paddingTop' : '' });

						var et_pb_first_row_first_module_code_padding_top = parseInt( $et_pb_first_row_first_module_code.css( 'paddingTop' ) );

						$et_pb_first_row_first_module_code.css({
							'paddingTop' : header_height + et_pb_first_row_first_module_code_padding_top
						});

					} else if ( $et_pb_first_row_first_module.is( '.et_pb_post_title' ) ) {

						/* Desktop / Mobile + Pagebuilder + Fullwidth Post Title */

						var $et_pb_first_row_first_module_title = $et_pb_first_row_first_module;

						$et_pb_first_row_first_module_title.css({
							'paddingTop' : header_height + 50
						});
					}

				} else if ( is_pb ) {

					/* Desktop / Mobile + Pagebuilder + Regular section */

					// Remove first row's inline padding top styling to prevent looping padding-top calculation
					$et_pb_first_row.css({ 'paddingTop' : '' });

					// Pagebuilder ignores #main-content .container's fixed height and uses its row's padding
					// Anticipate the use of custom section padding.
					et_pb_first_row_padding_top = header_height + parseInt( $et_pb_first_row.css( 'paddingBottom' ) );

					// Implementing padding-top + header_height
					$et_pb_first_row.css({
						'paddingTop' : et_pb_first_row_padding_top
					});

				} else if ( is_no_pb_mobile ) {

					// Mobile + not pagebuilder
					$et_main_content_first_row.css({
						'paddingTop' : header_height
					});

				} else {

					$('#main-content .container:first-child').css({
						'paddingTop' : header_height
					});

				}

				// Set #page-container's padding-top to zero after inline styling first row's content has been added
				if ( ! $('#et_fix_page_container_position').length ){
					$( '<style />', {
						'id' : 'et_fix_page_container_position',
						'text' : '#page-container{ padding-top: 0 !important;}'
					}).appendTo('head');
				}

			} else if( et_is_fixed_nav ) {

				$main_container_wrapper.css( 'paddingTop', header_height );

			}

			et_change_primary_nav_position( 0 );
		}

		// Save container width on page load for reference
		$et_container.data( 'previous-width', $et_container.width() );

		$( window ).resize( function(){
			var window_width                = $et_window.width(),
				et_container_previous_width = $et_container.data('previous-width'),
				et_container_css_width      = $et_container.css( 'width' ),
				et_container_width_in_pixel = ( typeof et_container_css_width !== 'undefined' ) ? et_container_css_width.substr( -1, 1 ) !== '%' : '',
				et_container_actual_width   = ( et_container_width_in_pixel ) ? $et_container.width() : ( ( $et_container.width() / 100 ) * window_width ), // $et_container.width() doesn't recognize pixel or percentage unit. It's our duty to understand what it returns and convert it properly
				containerWidthChanged       = et_container_previous_width !== et_container_actual_width,
				$slide_menu_container       = $( '.et_slide_in_menu_container' );

			if ( et_is_fixed_nav && containerWidthChanged ) {
				if ( typeof update_page_container_position != 'undefined' ){
					clearTimeout( update_page_container_position );
				}

				var update_page_container_position = setTimeout( function() {
					et_fix_page_container_position();
					if ( typeof et_fix_fullscreen_section === 'function' ) {
						et_fix_fullscreen_section();
					}
				}, 200 );

				// Update container width data for future resizing reference
				$et_container.data('previous-width', et_container_actual_width );
			}

			if ( et_hide_nav ) {
				et_hide_nav_transofrm();
			}

			if ( $( '#wpadminbar' ).length && et_is_fixed_nav && window_width >= 740 && window_width <= 782 ) {
				et_calculate_header_values();

				et_change_primary_nav_position( 0 );
			}

			et_set_search_form_css();

			if ( $slide_menu_container.length && ! $( 'body' ).hasClass( 'et_pb_slide_menu_active' ) ) {
				$slide_menu_container.css( { right: '-' + $slide_menu_container.innerWidth() + 'px' } );

				if ( $( 'body' ).hasClass( 'et_boxed_layout' ) && et_is_fixed_nav ) {
					var page_container_margin = $main_container_wrapper.css( 'margin-left' );
					$main_header.css( { left : page_container_margin } );
				}
			}

			if ( $slide_menu_container.length && $( 'body' ).hasClass( 'et_pb_slide_menu_active' ) ) {
				if ( $( 'body' ).hasClass( 'et_boxed_layout' ) ) {
					var page_container_margin = parseFloat( $main_container_wrapper.css( 'margin-left' ) ),
						left_position;

					$main_container_wrapper.css( { left: '-' + ( $slide_menu_container.innerWidth() - page_container_margin ) + 'px' } );

					if ( et_is_fixed_nav ) {
						left_position = 0 > $slide_menu_container.innerWidth() - ( page_container_margin * 2 ) ? Math.abs( $slide_menu_container.innerWidth() - ( page_container_margin * 2 ) ) : '-' + ( $slide_menu_container.innerWidth() - ( page_container_margin * 2 ) );

						if ( left_position < $slide_menu_container.innerWidth() ) {
							$main_header.css( { left: left_position + 'px' } );
						}
					}
				} else {
					$( '#page-container, .et_fixed_nav #main-header' ).css( { left: '-' + $slide_menu_container.innerWidth() + 'px' } );
				}
			}

			// adjust the padding in fullscreen menu
			if ( $slide_menu_container.length && $( 'body' ).hasClass( 'et_header_style_fullscreen' ) ) {
				var top_bar_height = $slide_menu_container.find( '.et_slide_menu_top' ).innerHeight();

				$slide_menu_container.css( { 'padding-top': top_bar_height + 20 } );
			}
		} );

		$( window ).ready( function(){
			if ( $.fn.fitVids ) {
				$( '#main-content' ).fitVids( { customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"} );
			}
		} );

		$( window ).load( function(){
			if ( et_is_fixed_nav ) {
				et_calculate_header_values();
			}

			et_fix_page_container_position();

			if ( et_header_style_left && !et_vertical_navigation) {
				$logo_width = $( '#logo' ).width();
				if ( et_is_rtl ) {
					$et_top_navigation.css( 'padding-right', $logo_width + 30 );
				} else {
					$et_top_navigation.css( 'padding-left', $logo_width + 30 );
				}
			}

			if ( $('p.demo_store').length ) {
				$('#footer-bottom').css('margin-bottom' , $('p.demo_store').innerHeight());
			}

			if ( $.fn.waypoint ) {
				if ( et_is_vertical_fixed_nav ) {
					var $waypoint_selector = $('#main-content');

					$waypoint_selector.waypoint( {
						handler : function( direction ) {
							et_fix_logo_transition();

							if ( direction === 'down' ) {
								$('#main-header').addClass( 'et-fixed-header' );
							} else {
								$('#main-header').removeClass( 'et-fixed-header' );
							}
						}
					} );
				}

				if ( et_is_fixed_nav ) {

					if ( $et_transparent_nav.length && ! $et_vertical_nav.length && $et_pb_first_row.length ){

						// Fullscreen section at the first row requires specific adjustment
						if ( $et_pb_first_row.is( '.et_pb_fullwidth_section' ) ){
							var $waypoint_selector = $et_pb_first_row.children('.et_pb_module');
						} else {
							var $waypoint_selector = $et_pb_first_row.find('.et_pb_row');
						}
					} else if ( $et_transparent_nav.length && ! $et_vertical_nav.length && $et_main_content_first_row.length ) {
						var $waypoint_selector = $('#content-area');
					} else {
						var $waypoint_selector = $('#main-content');
					}

					$waypoint_selector.waypoint( {
						offset: function() {
							if ( etRecalculateOffset ) {
								setTimeout( function() {
									et_calculate_header_values();
								}, 200 );

								etRecalculateOffset = false;
							}
							if ( et_hide_nav ) {
								return et_header_offset - et_header_height - 200;
							} else {

								// Transparent nav modification: #page-container's offset is set to 0. Modify et_header_offset's according to header height
								var waypoint_selector_offset = $waypoint_selector.offset();

								if ( waypoint_selector_offset.top < et_header_offset ) {
									et_header_offset = 0 - ( et_header_offset - waypoint_selector_offset.top );
								}

								return et_header_offset;
							}
						},
						handler : function( direction ) {
							et_fix_logo_transition();

							if ( direction === 'down' ) {
								$main_header.addClass( 'et-fixed-header' );
								$main_container_wrapper.addClass ( 'et-animated-content' );
								$top_header.addClass( 'et-fixed-header' );

								if ( ! et_hide_nav && ! $et_transparent_nav.length && ! $( '.mobile_menu_bar_toggle' ).is(':visible') ) {
									var secondary_nav_height = $top_header.height(),
										et_is_vertical_nav = $( 'body' ).hasClass( 'et_vertical_nav' ),
										$clone_header,
										clone_header_height,
										fix_padding;

									$clone_header = $main_header.clone().addClass( 'et-fixed-header, et_header_clone' ).css( { 'transition': 'none', 'display' : 'none' } );

									clone_header_height = $clone_header.prependTo( 'body' ).height();

									// Vertical nav doesn't need #page-container margin-top adjustment
									if ( ! et_is_vertical_nav ) {
										fix_padding = parseInt( $main_container_wrapper.css( 'padding-top' ) ) - clone_header_height - secondary_nav_height + 1 ;

										$main_container_wrapper.css( 'margin-top', -fix_padding );
									}

									$( '.et_header_clone' ).remove();
								}

							} else {
								$main_header.removeClass( 'et-fixed-header' );
								$top_header.removeClass( 'et-fixed-header' );
								$main_container_wrapper.css( 'margin-top', '-1px' );
							}
							setTimeout( function() {
								et_set_search_form_css();
							}, 400 );
						}
					} );
				}

				if ( et_hide_nav ) {
					et_hide_nav_transofrm();
				}
			}
		} );

		$( 'a[href*="#"]:not([href="#"])' ).click( function() {
			var $this_link = $( this ),
				has_closest_smooth_scroll_disabled = $this_link.closest( '.et_smooth_scroll_disabled' ).length,
				has_closest_woocommerce_tabs = ( $this_link.closest( '.woocommerce-tabs' ).length && $this_link.closest( '.tabs' ).length ),
				has_closest_eab_cal_link = $this_link.closest( '.eab-shortcode_calendar-navigation-link' ).length,
				has_acomment_reply = $this_link.hasClass( 'acomment-reply' ),
				disable_scroll = has_closest_smooth_scroll_disabled || has_closest_woocommerce_tabs || has_closest_eab_cal_link || has_acomment_reply;

			if ( ( location.pathname.replace( /^\//,'' ) == this.pathname.replace( /^\//,'' ) && location.hostname == this.hostname ) && ! disable_scroll ) {
				var target = $( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice(1) +']' );
				if ( target.length ) {

					et_pb_smooth_scroll( target, false, 800 );

					if ( ! $( '#main-header' ).hasClass( 'et-fixed-header' ) && $( 'body' ).hasClass( 'et_fixed_nav' ) && $( window ).width() > 980 ) {
						setTimeout(function(){
							et_pb_smooth_scroll( target, false, 40, 'linear' );
						}, 780 );
					}

					return false;
				}
			}
		});

		if ( $( '.et_pb_section' ).length > 1 && $( '.et_pb_side_nav_page' ).length ) {
			var $i=0;

			$( '#main-content' ).append( '<ul class="et_pb_side_nav"></ul>' );

			$( '.et_pb_section' ).each( function(){
				if ( $( this ).height() > 0 ) {
					$active_class = $i == 0 ? 'active' : '';
					$( '.et_pb_side_nav' ).append( '<li class="side_nav_item"><a href="#" id="side_nav_item_id_' + $i + '" class= "' + $active_class + '">' + $i + '</a></li>' );
					$( this ).addClass( 'et_pb_scroll_' + $i );
					$i++;
				}
			});

			$side_nav_offset = ( $i * 20 + 40 ) / 2;
			$( 'ul.et_pb_side_nav' ).css( 'marginTop', '-' + parseInt( $side_nav_offset) + 'px' );
			$( '.et_pb_side_nav' ).addClass( 'et-visible' );


			$( '.et_pb_side_nav a' ).click( function(){
				$top_section =  ( $( this ).text() == "0" ) ? true : false;
				$target = $( '.et_pb_scroll_' + $( this ).text() );

				et_pb_smooth_scroll( $target, $top_section, 800);

				if ( ! $( '#main-header' ).hasClass( 'et-fixed-header' ) && $( 'body' ).hasClass( 'et_fixed_nav' ) && $( window ).width() > 980 ) {
					setTimeout(function(){
						 et_pb_smooth_scroll( $target, $top_section, 200);
					},500);
				}

				return false;
			});

			$( window ).scroll( function(){

				$add_offset = ( $( 'body' ).hasClass( 'et_fixed_nav' ) ) ? 20 : -90;

				if ( $ ( '#wpadminbar' ).length && $( window ).width() > 600 ) {
					$add_offset += $( '#wpadminbar' ).outerHeight();
				}

				$side_offset = ( $( 'body' ).hasClass( 'et_vertical_nav' ) ) ? $( '#top-header' ).height() + $add_offset + 60 : $( '#top-header' ).height() + $( '#main-header' ).height() + $add_offset;

				for ( var $i = 0; $i <= $( '.side_nav_item a' ).length - 1; $i++ ) {
					 if ( $( window ).scrollTop() + $( window ).height() == $( document ).height() ) {
						$last = $( '.side_nav_item a' ).length - 1;
						$( '.side_nav_item a' ).removeClass( 'active' );
						$( 'a#side_nav_item_id_' + $last ).addClass( 'active' );
					 } else {
						if ( $( this ).scrollTop() >= $( '.et_pb_scroll_' + $i ).offset().top - $side_offset ) {
							$( '.side_nav_item a' ).removeClass( 'active' );
							$( 'a#side_nav_item_id_' + $i ).addClass( 'active' );
						}
					}
				}
			});
		}

		if ( $('.et_pb_scroll_top').length ) {
			$(window).scroll(function(){
				if ($(this).scrollTop() > 800) {
					$('.et_pb_scroll_top').show().removeClass( 'et-hidden' ).addClass( 'et-visible' );
				} else {
					$('.et_pb_scroll_top').removeClass( 'et-visible' ).addClass( 'et-hidden' );
				}
			});

			//Click event to scroll to top
			$('.et_pb_scroll_top').click(function(){
				$('html, body').animate({scrollTop : 0},800);
			});
		}

		if ( $( '.comment-reply-link' ).length ) {
			$( '.comment-reply-link' ).addClass( 'et_pb_button' );
		}

		$( '#et_top_search' ).click( function() {
			var $search_container = $( '.et_search_form_container' );

			if ( $search_container.hasClass('et_pb_is_animating') ) {
				return;
			}

			$( '.et_menu_container' ).removeClass( 'et_pb_menu_visible et_pb_no_animation' ).addClass('et_pb_menu_hidden');
			$search_container.removeClass( 'et_pb_search_form_hidden et_pb_no_animation' ).addClass('et_pb_search_visible et_pb_is_animating');
			setTimeout( function() {
				$( '.et_menu_container' ).addClass( 'et_pb_no_animation' );
				$search_container.addClass( 'et_pb_no_animation' ).removeClass('et_pb_is_animating');
			}, 1000);
			$search_container.find( 'input' ).focus();

			et_set_search_form_css();
		});

		function et_hide_search() {
			if ( $( '.et_search_form_container' ).hasClass('et_pb_is_animating') ) {
				return;
			}

			$( '.et_menu_container' ).removeClass( 'et_pb_menu_hidden et_pb_no_animation' ).addClass( 'et_pb_menu_visible' );
			$( '.et_search_form_container' ).removeClass('et_pb_search_visible et_pb_no_animation' ).addClass( 'et_pb_search_form_hidden et_pb_is_animating' );
			setTimeout( function() {
				$( '.et_menu_container' ).addClass( 'et_pb_no_animation' );
				$( '.et_search_form_container' ).addClass( 'et_pb_no_animation' ).removeClass('et_pb_is_animating');
			}, 1000);
		}

		function et_set_search_form_css() {
			var $search_container = $( '.et_search_form_container' );
			var $body = $( 'body' );
			if ( $search_container.hasClass( 'et_pb_search_visible' ) ) {
				var header_height = $( '#main-header' ).innerHeight(),
					menu_width = $( '#top-menu' ).width(),
					font_size = $( '#top-menu li a' ).css( 'font-size' );
				$search_container.css( { 'height' : header_height + 'px' } );
				$search_container.find( 'input' ).css( 'font-size', font_size );
				if ( ! $body.hasClass( 'et_header_style_left' ) ) {
					$search_container.css( 'max-width', menu_width + 60 );
				} else {
					$search_container.find( 'form' ).css( 'max-width', menu_width + 60 );
				}
			}
		}

		$( '.et_close_search_field' ).click( function() {
			et_hide_search();
		});

		$( document ).mouseup( function(e) {
			var $header = $( '#main-header' );
			if ( $( '.et_menu_container' ).hasClass('et_pb_menu_hidden') ) {
				if ( ! $header.is( e.target ) && $header.has( e.target ).length === 0 )	{
					et_hide_search();
				}
			}
		});

		// Detect actual logo dimension, used for tricky fixed navigation transition
		function et_define_logo_dimension() {
			var $logo = $('#logo'),
				logo_src = $logo.attr( 'src' ),
				is_svg = logo_src.substr( -3, 3 ) === 'svg' ? true : false,
				$logo_wrap,
				logo_width,
				logo_height;

			// Append invisible wrapper at the bottom of the page
			$('body').append( $('<div />', {
				'id' : 'et-define-logo-wrap',
				'style' : 'position: fixed; bottom: 0; opacity: 0;'
			}));

			// Define logo wrap
			$logo_wrap = $('#et-define-logo-wrap');

			if( is_svg ) {
				$logo_wrap.addClass( 'svg-logo' );
			}

			// Clone logo to invisible wrapper
			$logo_wrap.html( $logo.clone().css({ 'display' : 'block' }).removeAttr( 'id' ) );

			// Get dimension
			logo_width = $logo_wrap.find('img').width();
			logo_height = $logo_wrap.find('img').height();

			// Add data attribute to $logo
			$logo.attr({
				'data-actual-width' : logo_width,
				'data-actual-height' : logo_height
			});

			// Destroy invisible wrapper
			$logo_wrap.remove();

			// Init logo transition onload
			et_fix_logo_transition( true );
		}

		if ( $('#logo').length ) {
			// Wait until logo is loaded before performing logo dimension fix
			// This comes handy when the page is heavy due to the use of images or other assets
			$('#logo').attr( 'src', $('#logo').attr('src') ).load( function(){
				et_define_logo_dimension();
			} );
		}

		// Set width for adsense in footer widget
		$('.footer-widget').each(function(){
			var $footer_widget = $(this),
				footer_widget_width = $footer_widget.width(),
				$adsense_ins = $footer_widget.find( '.widget_adsensewidget ins' );

			if ( $adsense_ins.length ) {
				$adsense_ins.width( footer_widget_width );
			}
		});
	} );

	// Fixing logo size transition in tricky header style
	function et_fix_logo_transition( is_onload ) {
		var $body                = $( 'body' ),
			$logo                = $( '#logo' ),
			logo_actual_width    = parseInt( $logo.attr( 'data-actual-width' ) ),
			logo_actual_height   = parseInt( $logo.attr( 'data-actual-height' ) ),
			logo_height_percentage = parseInt( $logo.attr( 'data-height-percentage' ) ),
			$top_nav             = $( '#et-top-navigation' ),
			top_nav_height       = parseInt( $top_nav.attr( 'data-height' ) ),
			top_nav_fixed_height = parseInt( $top_nav.attr( 'data-fixed-height' ) ),
			$main_header          = $('#main-header'),
			is_header_split      = $body.hasClass( 'et_header_style_split' ),
			is_fixed_nav         = $main_header.hasClass( 'et-fixed-header' ),
			is_vertical_nav      = $body.hasClass( 'et_vertical_nav' ),
			is_hide_primary_logo = $body.hasClass( 'et_hide_primary_logo' ),
			is_hide_fixed_logo   = $body.hasClass( 'et_hide_fixed_logo' ),
			is_onload            = typeof is_onload === 'undefined' ? false : is_onload,
			logo_height_base     = is_fixed_nav ? top_nav_height : top_nav_fixed_height,
			logo_wrapper_width,
			logo_wrapper_height;

		// Fix for inline centered logo in horizontal nav
		if ( is_header_split && ! is_vertical_nav ) {
			// On page load, logo_height_base should be top_nav_height
			if ( is_onload ) {
				logo_height_base = top_nav_height;
			}

			// Calculate logo wrapper height
			logo_wrapper_height = ( logo_height_base * ( logo_height_percentage / 100 ) + 22 );

			// Calculate logo wrapper width
			logo_wrapper_width = logo_actual_width * (  logo_wrapper_height / logo_actual_height  );

			// Override logo wrapper width to 0 if it is hidden
			if ( is_hide_primary_logo && ( is_fixed_nav || is_onload ) ) {
				logo_wrapper_width = 0;
			}

			if ( is_hide_fixed_logo && ! is_fixed_nav && ! is_onload ) {
				logo_wrapper_width = 0;
			}

 			// Set fixed width for logo wrapper to force correct dimension
			$( '.et_header_style_split .centered-inline-logo-wrap' ).css( { 'width' : logo_wrapper_width } );
		}
	}

	function et_toggle_slide_menu( force_state ) {
		var $slide_menu_container = $( '.et_header_style_slide .et_slide_in_menu_container' ),
			$page_container = $( '.et_header_style_slide #page-container, .et_header_style_slide.et_fixed_nav #main-header' ),
			$header_container = $( '.et_header_style_slide #main-header' ),
			is_menu_opened = $slide_menu_container.hasClass( 'et_pb_slide_menu_opened' ),
			set_to = typeof force_state !== 'undefined' ? force_state : 'auto',
			is_boxed_layout = $( 'body' ).hasClass( 'et_boxed_layout' ),
			page_container_margin = is_boxed_layout ? parseFloat( $( '#page-container' ).css( 'margin-left' ) ) : 0,
			slide_container_width = $slide_menu_container.innerWidth();

		if ( 'auto' !== set_to && ( ( is_menu_opened && 'open' === set_to ) || ( ! is_menu_opened && 'close' === set_to ) ) ) {
			return;
		}

		if ( is_menu_opened ) {
			$slide_menu_container.css( { right: '-' + slide_container_width + 'px' } );
			$page_container.css( { left: '0' } );

			if ( is_boxed_layout && et_is_fixed_nav ) {
				$header_container.css( { left : page_container_margin + 'px' } );
			}

			// hide the menu after animation completed
			setTimeout( function() {
				$slide_menu_container.css( { 'display' : 'none' } );
			}, 700 );
		} else {
			$slide_menu_container.css( { 'display' : 'block' } );
			// add some delay to make sure css animation applied correctly
			setTimeout( function() {
				$slide_menu_container.css( { right: '0' } );
				$page_container.css( { left: '-' + ( slide_container_width - page_container_margin ) + 'px' } );

				if ( is_boxed_layout && et_is_fixed_nav ) {
					var left_position = 0 > slide_container_width - ( page_container_margin * 2 ) ? Math.abs( slide_container_width - ( page_container_margin * 2 ) ) : '-' + ( slide_container_width - ( page_container_margin * 2 ) );

					if ( left_position < slide_container_width ) {
						$header_container.css( { left: left_position + 'px' } );
					}
				}
			}, 50 );
		}

		$( 'body' ).toggleClass( 'et_pb_slide_menu_active' );
		$slide_menu_container.toggleClass( 'et_pb_slide_menu_opened' );
	}

	$( '#main-header' ).on( 'click', '.et_toggle_slide_menu', function() {
		et_toggle_slide_menu();
	});

	// open slide menu on swipe left
	$et_window.on( 'swipeleft', function( event ) {
		var window_width = parseInt( $et_window.width() ),
			swipe_start = parseInt( event.swipestart.coords[0] ); // horizontal coordinates of the swipe start

		// if swipe started from the right edge of screen then open slide menu
		if ( 30 >= window_width - swipe_start ) {
			et_toggle_slide_menu( 'open' );
		}
	} );

	// close slide menu on swipe right
	$et_window.on( 'swiperight', function( event ){
		if ( $( 'body' ).hasClass( 'et_pb_slide_menu_active' ) ) {
			et_toggle_slide_menu( 'close' );
		}
	});

	$( '#page-container' ).on( 'click', '.et_toggle_fullscreen_menu', function() {
		var $menu_container = $( '.et_header_style_fullscreen .et_slide_in_menu_container' ),
			top_bar_height = $menu_container.find( '.et_slide_menu_top' ).innerHeight();

		$menu_container.toggleClass( 'et_pb_fullscreen_menu_opened' );
		$( 'body' ).toggleClass( 'et_pb_fullscreen_menu_active' );

		if ( $menu_container.hasClass( 'et_pb_fullscreen_menu_opened' ) ) {
			$menu_container.addClass( 'et_pb_fullscreen_menu_animated' );

			// adjust the padding in fullscreen menu
			$menu_container.css( { 'padding-top': top_bar_height + 20 } );
		} else {
			setTimeout( function() {
				$menu_container.removeClass( 'et_pb_fullscreen_menu_animated' );
			}, 1000 );
		}
	});

	$( '.et_pb_fullscreen_nav_container' ).on( 'click', 'li.menu-item-has-children > a', function() {
		var $this_parent = $( this ).closest( 'li' ),
			$this_arrow = $this_parent.find( '>a .et_mobile_menu_arrow' ),
			$closest_submenu =  $this_parent.find( '>ul' ),
			is_opened_submenu = $this_arrow.hasClass( 'et_pb_submenu_opened' ),
			sub_menu_max_height;

		$this_arrow.toggleClass( 'et_pb_submenu_opened' );

		if ( is_opened_submenu ) {
			$closest_submenu.removeClass( 'et_pb_slide_dropdown_opened' );
			$closest_submenu.slideToggle( 700, 'easeInOutCubic' );
		} else {
			$closest_submenu.slideToggle( 700, 'easeInOutCubic' );
			$closest_submenu.addClass( 'et_pb_slide_dropdown_opened' );
		}

		return false;
	} );

	// define initial padding-top for fullscreen menu container
	if ( $( 'body' ).hasClass( 'et_header_style_fullscreen' ) ) {
		var $menu_container = $( '.et_header_style_fullscreen .et_slide_in_menu_container' );

		if ( $menu_container.length ) {
			var top_bar_height = $menu_container.find( '.et_slide_menu_top' ).innerHeight();
			$menu_container.css( { 'padding-top': top_bar_height + 20 } );
		}
	}

})(jQuery)

;// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)
//  - Michael Herf     (Pulse Algorithm)

(function(){

// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [px]
    stepSize         : 80, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 8,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 20,  // 20
    accelerationMax   : 1,   // 1

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,     // [px]

    // Other
    touchpadSupport   : true,
    fixedBackground   : true,
    excluded          : ""
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var deltaBuffer = [ 120, 120, 120 ];

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
            pageup: 33, pagedown: 34, end: 35, home: 36 };


/***********************************************
 * SETTINGS
 ***********************************************/

var options = defaultOptions;


/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {

    var disableKeyboard = false;

    // disable keyboard support if anything above requested it
    if (disableKeyboard) {
        removeEvent("keydown", keydown);
    }

    if (options.keyboardSupport && !disableKeyboard) {
        addEvent("keydown", keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {

    if (!document.body) return;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight;

    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;

    initTest();
    initDone = true;

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * This fixes a bug where the areas left and right to
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
             html.offsetHeight <= windowHeight)) {

        // DOMChange (throttle): fix height
        var pending = false;
        var refresh = function () {
            if (!pending && html.scrollHeight != document.height) {
                pending = true; // add a new pending action
                setTimeout(function () {
                    html.style.height = document.height + 'px';
                    pending = false;
                }, 500); // act rarely to stay fast
            }
        };
        html.style.height = 'auto';
        setTimeout(refresh, 10);

        // clearfix
        if (root.offsetHeight <= windowHeight) {
            var underlay = document.createElement("div");
            underlay.style.clear = "both";
            body.appendChild(underlay);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = "scroll";
        html.style.backgroundAttachment = "scroll";
    }
}


/************************************************
 * SCROLLING
 ************************************************/

var que = [];
var pending = false;
var lastScroll = +new Date;

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top, delay) {

    delay || (delay = 1000);
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = +new Date;
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (30 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = +new Date;
    }

    // push a scroll command
    que.push({
        x: left,
        y: top,
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99,
        start: +new Date
    });

    // don't act if there's a pending queue
    if (pending) {
        return;
    }

    var scrollWindow = (elem === document.body);

    var step = function (time) {

        var now = +new Date;
        var scrollX = 0;
        var scrollY = 0;

        for (var i = 0; i < que.length; i++) {

            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);

            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;

            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }

            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;

            // add this to the total scrolling
            scrollX += x;
            scrollY += y;

            // update last values
            item.lastX += x;
            item.lastY += y;

            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        }
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;
        }

        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }

        if (que.length) {
            requestFrame(step, elem, (delay / options.frameRate + 1));
        } else {
            pending = false;
        }
    };

    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }

    var target = event.target;
    var overflowing = overflowingAncestor(target);

    // use default if there's no overflowing
    // element or default action is prevented
    if (!overflowing || event.defaultPrevented ||
        isNodeName(activeElement, "embed") ||
       (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
        return true;
    }

    var deltaX = event.wheelDeltaX || 0;
    var deltaY = event.wheelDeltaY || 0;

    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = event.wheelDelta || 0;
    }

    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }

    scrollArray(overflowing, -deltaX, -deltaY);
    event.preventDefault();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey ||
                  (event.shiftKey && event.keyCode !== key.spacebar);

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    if ( /input|textarea|select|embed/i.test(target.nodeName) ||
         target.isContentEditable ||
         event.defaultPrevented   ||
         modifier ) {
      return true;
    }
    // spacebar should trigger button press
    if (isNodeName(target, "button") &&
        event.keyCode === key.spacebar) {
      return true;
    }

    var shift, x = 0, y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt+10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;
        default:
            return true; // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var cache = {}; // cleared out every once in while
setInterval(function () { cache = {}; }, 10 * 1000);

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function overflowingAncestor(el) {
    var elems = [];
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                return setCache(elems, document.body); // scrolling root in WebKit
            }
        } else if (el.clientHeight + 10 < el.scrollHeight) {
            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
                return setCache(elems, el);
            }
        }
    } while (el = el.parentNode);
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, bubble) {
    window.addEventListener(type, fn, (bubble||false));
}

function removeEvent(type, fn, bubble) {
    window.removeEventListener(type, fn, (bubble||false));
}

function isNodeName(el, tag) {
    return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

var deltaBufferTimer;

function isTouchpad(deltaY) {
    if (!deltaY) return;
    deltaY = Math.abs(deltaY)
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                        isDivisible(deltaBuffer[1], 120) &&
                        isDivisible(deltaBuffer[2], 120));
    return !allDivisable;
}

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

var requestFrame = (function () {
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              function (callback, element, delay) {
                  window.setTimeout(callback, delay || (1000/60));
              };
})();


/***********************************************
 * PULSE
 ***********************************************/

/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}

var isChrome = /chrome/i.test(window.navigator.userAgent);
var wheelEvent = null;
if ("onwheel" in document.createElement("div"))
	wheelEvent = "wheel";
else if ("onmousewheel" in document.createElement("div"))
	wheelEvent = "mousewheel";

if (wheelEvent && isChrome) {
	addEvent(wheelEvent, wheel);
	addEvent("mousedown", mousedown);
	addEvent("load", init);
}

})();
;/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g)):!1):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return d&&"static"===b.css("position")?!1:e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
;/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery)}(function(a){function b(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",e)}function e(){a.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).addClass("ui-datepicker-next-hover"))}function f(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.11.4"}});var g;return a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return f(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),("focus"===d||"both"===d)&&b.focus(this._showDatepicker),("button"===d||"both"===d)&&(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,g){var h,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),f(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===c||"span"===c)&&d.removeClass(this.markerClassName).empty(),g===e&&(g=null))},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===c||"span"===c)&&(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===c||"span"===c)&&(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,g,h,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),g=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),f(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,g),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);return a.datepicker._get(e,"constrainInput")?(c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||" ">d||!c||c.indexOf(d)>-1):void 0},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(c){if(c=c.target||c,"input"!==c.nodeName.toLowerCase()&&(c=a("input",c.parentNode)[0]),!a.datepicker._isDisabledDatepicker(c)&&a.datepicker._lastInput!==c){var d,e,g,h,i,j,k;d=a.datepicker._getInst(c),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),g=e?e.apply(c,[c,d]):{},g!==!1&&(f(d.settings,g),d.lastVal=null,a.datepicker._lastInput=c,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(c.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(c),a.datepicker._pos[1]+=c.offsetHeight),h=!1,a(c).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,d.dpDiv.empty(),d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",b(a(c))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.focus(),a.datepicker._curInst=d))}},_updateDatepicker:function(b){this.maxRows=4,g=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),f=d[1],h=17,i=b.dpDiv.find("."+this._dayOverClass+" a");i.length>0&&e.apply(i.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",h*f+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id!==a.datepicker._mainDivId&&0===c.parents("#"+a.datepicker._mainDivId).length&&!c.hasClass(a.datepicker.markerClassName)&&!c.closest("."+a.datepicker._triggerClass).length&&a.datepicker._datepickerShowing&&(!a.datepicker._inDialog||!a.blockUI)||c.hasClass(a.datepicker.markerClassName)&&a.datepicker._curInst!==d)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&6>b,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];return c.substr(i,d.length).toLowerCase()===d.toLowerCase()?(f=b[0],i+=d.length,!1):void 0}),-1!==f)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(-1===p?p=(new Date).getFullYear():100>p&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(k>=p?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),f>=r)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(0>_&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&Z>b?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,0>_&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;7>v;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;H>J;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;7>v;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&Z>I||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{
for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;12>k;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";p>=o;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),("M"===c||"Y"===c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&c>b?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(0>b?b:e[0]*e[1]),1));return 0>b&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.11.4",a.datepicker});
;/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
jQuery(function($){
	$.datepicker.regional['de'] = {
		closeText: 'schließen',
		prevText: '&#x3C;zurück',
		nextText: 'Vor&#x3E;',
		currentText: 'heute',
		monthNames: ['Januar','Februar','März','April','Mai','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dez'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		weekHeader: 'KW',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['de']);
});
