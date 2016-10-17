<?php

class sb_et_cpt_li_loop_archive extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'ET CPT Loop Archive', 'et_builder' );
		$this->slug = 'et_pb_cpt_loop_archive';

		$this->whitelisted_fields = array(
			'loop_layout',
			'fullwidth',
			'show_pagination',
			'columns',
			'new_query',
			'post_type',
			'posts_number',
			'offset_number',
			'include_tax',
			'include_tax_terms',
			'admin_label',
			'module_id',
			'module_class',
		);

		$this->fields_defaults = array(
			'loop_layout'         => array( 'on' ),
			'fullwidth'         => array( 'on' ),
			'columns'         => array( '3' ),
			'posts_number'      => array( 10, 'add_default_setting' ),
			'show_pagination'   => array( 'on' ),
			'offset_number'     => array( 0, 'only_default_setting' ),
		);

		$this->main_css_element = '%%order_class%% .et_pb_post .et_pb_post_type';
	}

	function get_fields() {
		$options = array();
		
		$layouts = get_posts(array('post_type'=>'et_pb_layout', 'posts_per_page'=>-1));
		foreach ($layouts as $layout) {
			$options[$layout->ID] = $layout->post_title;
		}
		
		$args = array(
			'public'   => true
			, '_builtin' => false
		);
		$output = 'objects'; // names or objects
		$pt_options = array();
		
		$post_types = get_post_types( $args, $output );
		
		foreach ( $post_types as $post_type=>$post_type_obj ) {
			$pt_options[$post_type] = $post_type_obj->labels->name;
		}
		
			    
		$fields = array(
			'loop_layout' => array(
				'label'             => esc_html__( 'Loop Layout', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'layout',
				'options'           => $options,
				'description'        => esc_html__( 'Choose a layout to use for each post in this archive loop', 'et_builder' ),
			),
			'fullwidth' => array(
				'label'             => esc_html__( 'Layout', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'layout',
				'options'           => array(
					'list'  => esc_html__( 'List', 'et_builder' ),
					'off' => esc_html__( 'Grid', 'et_builder' ),
				),
				'description'        => esc_html__( 'Toggle between the various blog layout types.', 'et_builder' ),
			),
			'columns' => array(
				'label'             => esc_html__( 'Grid Columns', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'layout',
				'options'           => array(
					2  => esc_html__( 'Two', 'et_builder' ),
					3 => esc_html__( 'Three', 'et_builder' ),
					4 => esc_html__( 'Four', 'et_builder' ),
				),
				'description'        => esc_html__( 'When in grid mode please select the number of columns you\'d like to see.', 'et_builder' ),
			),
			'show_pagination' => array(
				'label'             => esc_html__( 'Show Pagination', 'et_builder' ),
				'type'              => 'yes_no_button',
				'option_category'   => 'configuration',
				'options'           => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'description'        => esc_html__( 'Turn pagination on and off.', 'et_builder' ),
			),
			'new_query' => array(
				'label'             => esc_html__( 'Custom Query', 'et_builder' ),
				'type'              => 'yes_no_button',
				'options'           => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'=>array(
					'#et_pb_post_type'
					, '#et_pb_posts_number'
					, '#et_pb_offset_number'
					, '#et_pb_include_tax'
					, '#et_pb_include_tax_terms'
				),
				'description'        => esc_html__( 'When used on an archive page turn this off. If you want to use on a normal WP page then select "ON" here and complete the settings below.', 'et_builder' ),
			),
			'post_type' => array(
				'label'             => esc_html__( 'Post Type', 'et_builder' ),
				'type'              => 'select',
				'options'           => $pt_options,
				'depends_show_if'   => 'on',
				'description'        => esc_html__( 'Choose a post type to show', 'et_builder' ),
			),
			'posts_number' => array(
				'label'             => esc_html__( 'Posts Number', 'et_builder' ),
				'type'              => 'text',
				'depends_show_if'   => 'on',
				'description'       => esc_html__( 'Choose how many posts you would like to display per page.', 'et_builder' ),
			),
			'offset_number' => array(
				'label'           => esc_html__( 'Offset Number', 'et_builder' ),
				'type'            => 'text',
				'depends_show_if'   => 'on',
				'description'     => esc_html__( 'Choose how many posts you would like to offset by', 'et_builder' ),
			),
			'include_tax' => array(
				'label'           => esc_html__( 'Include Taxonomy Only', 'et_builder' ),
				'type'            => 'text',
				'depends_show_if'   => 'on',
				'description'     => esc_html__( 'This will filter the query by this taxonomy slug (advanced users only).', 'et_builder' ),
			),
			'include_tax_terms' => array(
				'label'           => esc_html__( 'Include Taxonomy Terms', 'et_builder' ),
				'type'            => 'text',
				'depends_show_if'   => 'on',
				'description'     => esc_html__( 'This will filter the query by the above taxonomy and these comma separated term slugs (advanced users only).', 'et_builder' ),
			),
			'admin_label' => array(
				'label'       => esc_html__( 'Admin Label', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
			),
			'module_id' => array(
				'label'           => esc_html__( 'CSS ID', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
				'label'           => esc_html__( 'CSS Class', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'option_class'    => 'et_pb_custom_css_regular',
			),
		);
		return $fields;
	}

	function shortcode_callback( $atts, $content = null, $function_name ) {
		
		$loop_layout           = $this->shortcode_atts['loop_layout'];
		$cols           = $this->shortcode_atts['columns'];
		$module_id           = $this->shortcode_atts['module_id'];
		$module_class        = $this->shortcode_atts['module_class'];
		$fullwidth           = $this->shortcode_atts['fullwidth'];
		$posts_number        = $this->shortcode_atts['posts_number'];
		$post_type        = $this->shortcode_atts['post_type'];
		$custom_query        = $this->shortcode_atts['new_query'];
		$show_pagination     = $this->shortcode_atts['show_pagination'];
		$offset_number       = $this->shortcode_atts['offset_number'];
		$include_tax         = $this->shortcode_atts['include_tax'];
		$include_tax_terms      = $this->shortcode_atts['include_tax_terms'];

		global $paged;

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$container_is_closed = false;

		// remove all filters from WP audio shortcode to make sure current theme doesn't add any elements into audio module
		remove_all_filters( 'wp_audio_shortcode_library' );
		remove_all_filters( 'wp_audio_shortcode' );
		remove_all_filters( 'wp_audio_shortcode_class');

		if ($fullwidth == 'list') {
			$module_class .= ' et_pb_cpt_archive_list';
		} else {
			$module_class .= ' et_pb_cpt_archive_grid';
		}
		
		if ($custom_query == 'on') {
			$args = array( 'posts_per_page' => (int) $posts_number );

			$et_paged = is_front_page() ? get_query_var( 'page' ) : get_query_var( 'paged' );
	
			if ( is_front_page() ) {
				$paged = $et_paged;
			}
	
			$args['post_type'] = $post_type;
	
			if ( ! is_search() ) {
				$args['paged'] = $et_paged;
			}
	
			if ( '' !== $offset_number && ! empty( $offset_number ) ) {
				/**
				 * Offset + pagination don't play well. Manual offset calculation required
				 * @see: https://codex.wordpress.org/Making_Custom_Queries_using_Offset_and_Pagination
				 */
				if ( $paged > 1 ) {
					$args['offset'] = ( ( $et_paged - 1 ) * intval( $posts_number ) ) + intval( $offset_number );
				} else {
					$args['offset'] = intval( $offset_number );
				}
			}
			
			if ($include_tax && $include_tax_terms) {
				$args['tax_query'] = array(
					array(
					    'taxonomy' => $include_tax,
					    'field'    => 'slug',
					    'terms'    => explode(',', $include_tax_terms),
					)
				);
			}
	
			if ( is_single() && ! isset( $args['post__not_in'] ) ) {
				$args['post__not_in'] = array( get_the_ID() );
			}
	
			$args = apply_filters('sb_et_divi_pt_loop_archive_module_args', $args);
	
			query_posts( $args );
		
		}

		ob_start();

		if ( have_posts() ) {
			$shortcodes = '';
			
			$i = 0;
			
			if ($fullwidth == 'off') { //grid
				echo '<div class="et_pb_row et_pb_row_cpt">';
			}
			
			while ( have_posts() ) {
				the_post();
				
				if ($fullwidth == 'off') { //grid
					echo '<div class="et_cpt_container_column et_pb_column et_pb_column_1_' . $cols . '  et_pb_column_' . $i . '">';
				}
				
				echo do_action('sb_et_ept_li_loop_archive_start', get_the_ID());
				
				echo do_shortcode('[et_pb_section global_module="' . $loop_layout . '"][/et_pb_section]');
				
				echo do_action('sb_et_ept_li_loop_archive_end', get_the_ID());
				
				if ($fullwidth == 'off') { //grid
					echo '</div>';
				}
				
				$i++;
				
				if ($i == $cols && ($fullwidth == 'off')) {
					$i = 0;
			
					echo '</div>';		
					echo '<div class="et_pb_row et_pb_row_cpt">';
				}
			} // endwhile
			
			if ($fullwidth == 'off') { //grid
				echo '</div>';
			}

			if ( 'on' === $show_pagination && ! is_search() ) {
				echo '</div> <!-- .et_pb_posts -->';

				$container_is_closed = true;

				if ( function_exists( 'wp_pagenavi' ) ) {
					wp_pagenavi();
				} else {
					if ( et_is_builder_plugin_active() ) {
						include( ET_BUILDER_PLUGIN_DIR . 'includes/navigation.php' );
					} else {
						get_template_part( 'includes/navigation', 'index' );
					}
				}
			}

			wp_reset_query();
		} else {
			if ( et_is_builder_plugin_active() ) {
				include( ET_BUILDER_PLUGIN_DIR . 'includes/no-results.php' );
			} else {
				get_template_part( 'includes/no-results', 'index' );
			}
		}

		$posts = ob_get_contents();

		ob_end_clean();

		$class = " et_pb_module et_pb_bg_layout_{$background_layout}";

		$output = sprintf(
			'<div%5$s class="%1$s%3$s%6$s"%7$s>
				%2$s
			%4$s',
			( $fullwidth == 'list' ? 'et_pb_posts' : 'et_pb_blog_grid clearfix' ),
			$posts,
			esc_attr( $class ),
			( ! $container_is_closed ? '</div> <!-- .et_pb_posts -->' : '' ),
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			( 'on' !== $fullwidth ? ' data-columns' : '' )
		);
		
		wp_reset_query();

		if ( 'off' == $fullwidth ) {
			$output = sprintf( '<div class="et_pb_blog_grid_wrapper">%1$s</div>', $output );
		} else if ( 'list' == $fullwidth ) {
			$output = sprintf( '<div class="et_pb_cpt_list_wrapper">%1$s</div>', $output );
		}

		return $output;
	}
}
new sb_et_cpt_li_loop_archive;

?>