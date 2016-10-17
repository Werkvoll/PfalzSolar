<?php
/**
* Plugin Name: DP Portfolio Posts Pro
* Plugin URI: http://www.diviplugins.com/divi/portfolio-posts-pro-plugin/
* Description: Creates three new portfolio modules that load posts in place of projects. It also adds the option to open images in a lightbox for each module.
* Version: 1.3
* Author: DiviPlugins
* Author URI: http://www.diviplugins.com
**/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'ET_BUILDER_AJAX_TEMPLATES_AMOUNT', apply_filters( 'et_pb_templates_loading_amount', 45 ) );

$is_admin = is_admin();

$action_hook = $is_admin ? 'wp_loaded' : 'wp';

function dp_inc_mods() {

	global $pagenow, $is_admin;

	if(!class_exists('ET_Builder_Module')) return;

	// list of admin pages where we need to load builder files
	$required_admin_pages = array( 'edit.php', 'post.php', 'post-new.php', 'admin.php', 'customize.php', 'edit-tags.php', 'admin-ajax.php', 'export.php' ); // list of admin pages where we need to load builder files
	$specific_filter_pages = array( 'edit.php', 'admin.php', 'edit-tags.php' ); // list of admin pages where we need more specific filtering

	$is_edit_library_page = 'edit.php' === $pagenow && isset( $_GET['post_type'] ) && 'et_pb_layout' === $_GET['post_type'];
	$is_role_editor_page = 'admin.php' === $pagenow && isset( $_GET['page'] ) && apply_filters( 'et_divi_role_editor_page', 'et_divi_role_editor' ) === $_GET['page'];
	$is_import_page = 'admin.php' === $pagenow && isset( $_GET['import'] ) && 'wordpress' === $_GET['import']; // Page Builder files should be loaded on import page as well to register the et_pb_layout post type properly
	$is_edit_layout_category_page = 'edit-tags.php' === $pagenow && isset( $_GET['taxonomy'] ) && 'layout_category' === $_GET['taxonomy'];

	if ( ! $is_admin || ( $is_admin && in_array( $pagenow, $required_admin_pages ) && ( ! in_array( $pagenow, $specific_filter_pages ) || $is_edit_library_page || $is_role_editor_page || $is_edit_layout_category_page || $is_import_page ) ) ) {

		require 'includes/dp_blog_portfolio.php';
		require 'includes/dp_filterable_blog.php';
		require 'includes/dp_fullwidth_blog.php';

	}

}

add_action($action_hook,'dp_inc_mods', 11);
	
// REGISTER ADMIN STYLES
function register_dp_plugin_admin_styles() {
wp_register_style('db-portfolio-posts-pro-css', plugin_dir_url( __FILE__ ) . '/admin/css/style.css', false, '1.0.0' );
wp_enqueue_style( 'db-portfolio-posts-pro-css' );
wp_enqueue_script( 'db-portfolio-posts-pro-js', plugin_dir_url( __FILE__ ) . 'admin/js/functions.js' );
}

add_action( 'admin_enqueue_scripts', 'register_dp_plugin_admin_styles' );

// REGISTER STYLES
function register_dp_plugin_module_styles() {
wp_register_style('db-portfolio-posts-pro-css', plugin_dir_url( __FILE__ ) . '/css/style.css', false, '1.0.0' );
wp_enqueue_style( 'db-portfolio-posts-pro-css' );
}

add_action( 'wp_enqueue_scripts', 'register_dp_plugin_module_styles' );

// HELPER FUNCTIONS

if ( ! function_exists( 'dp_divi_get_projects' ) ) :
	function dp_divi_get_projects( $args = array() ) {
	$default_args = array(
		'post_type' => 'post',
	);
	$args = wp_parse_args( $args, $default_args );
	return new WP_Query( $args );
	}
endif;

if ( ! function_exists( 'dp_the_excerpt_max_charlength' ) ) :
	function dp_the_excerpt_max_charlength($excerpt_limit, $lightbox, $show_more, $custom_url, $post_url, $carousel) {
		$excerpt = get_the_excerpt();
		$charlength = $excerpt_limit;
		$charlength++;

		if ( mb_strlen( $excerpt ) > $charlength ) {
			$subex = mb_substr( $excerpt, 0, $charlength - 5 );
			$exwords = explode( ' ', $subex );
			$excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
			if ( $excut < 0 ) {
				echo mb_substr( $subex, 0, $excut ).'...';
			} else {
				echo $subex;
			}
			if (( ($show_more == 'on') && ($lightbox == 'off') && ($carousel == 'off')) || (($custom_url == 'on') && ($carousel == 'off'))) {
				$more_link = sprintf( ' <a href="%1$s" class="more-link" >%2$s</a>' , $post_url, __( 'Read More', 'et_builder' ) );
				echo $more_link;
			}
		}
		else {
			echo $excerpt;
		}
	}
endif;

if ( ! function_exists( 'et_builder_custom_post_types_option' ) ) :
	function et_builder_custom_post_types_option( $args = array() ) {
		$defaults = apply_filters( 'et_builder_custom_post_types_defaults', array (
			'post_type' => 'post',
		) );

		$args = wp_parse_args( $args, $defaults );
		$post_types = get_post_types(array('_builtin'=>false,'public'=>true));
		$default_post_type = array('post'=>'post');
		$post_types = $default_post_type + $post_types;
		//print'<pre>';print_r($post_types);print'</pre>';

		$output = "\t" . "<% var et_pb_custom_post_types_temp = typeof et_pb_custom_post_types !== 'undefined' ? et_pb_custom_post_types.split( ',' ) : []; %>" . "\n";


		foreach ( $post_types as $post_type ) {
			$contains = sprintf(
				'<%%= _.contains( et_pb_custom_post_types_temp, "%1$s" ) ? checked="checked" : "" %%>',
				esc_html( $post_type )
			);

			$output .= sprintf(
				'%4$s<label><input type="checkbox" class="et_dp_post_type" name="et_pb_custom_post_types" value="%1$s"%3$s> %2$s</label><br/>',
				esc_attr( $post_type ),
				esc_html( ucfirst($post_type) ),
				$contains,
				"\n\t\t\t\t\t"
			);
		}

		return apply_filters( 'et_builder_custom_post_types_option_html', $output );
	}
endif;

if ( ! function_exists( 'et_builder_divi_include_categories_option' ) ) :
	function et_builder_divi_include_categories_option( $args = array() ) {
		$defaults = apply_filters( 'et_builder_include_categories_defaults', array (
			'use_terms' => true,
			'term_name' => 'project_category',
		) );

		$args = wp_parse_args( $args, $defaults );

		$cats_array[0] = get_categories( apply_filters( 'et_builder_get_categories_args', 'hide_empty=0' ) );

		$argsX = array(
			'public'   => true,
			'_builtin' => false

		);
		$output = 'names'; // or objects
		$operator = 'and'; // 'and' or 'or'
		$taxonomies = get_taxonomies( $argsX, $output, $operator );
		if ( $taxonomies ) {
			foreach ( $taxonomies  as $taxonomy ) {
				if (get_terms( $taxonomy )){
					$cats_array[] = get_terms( $taxonomy );
				}
			}
		}

		$output = "\t" . "<% var et_pb_include_categories_temp = typeof et_pb_include_categories !== 'undefined' ? et_pb_include_categories.split( ',' ) : []; %>" . "\n";

		/*if ( $args['use_terms'] ) {
            $cats_array = get_terms( $args['term_name'] );
        } else {
            $cats_array = get_categories( apply_filters( 'et_builder_get_categories_args', 'hide_empty=0' ) );
        }*/

		if ( empty( $cats_array ) ) {
			$output = '<p>' . esc_html__( "You currently don't have any projects assigned to a category.", 'et_builder' ) . '</p>';
		}

		global $wpdb;
		for($i=0;$i<count($cats_array);$i++){
			foreach ( $cats_array[$i] as $category ) {
				$post_type = '';
				$object_id = $wpdb->get_var("Select object_id from ".$wpdb->prefix."term_relationships tr Left Join ".$wpdb->prefix."term_taxonomy tt
											on tt.term_taxonomy_id = tr.term_taxonomy_id where tt.term_id='".$category->term_id."' AND tt.taxonomy NOT IN ('layout_type', 'scope', 'module_width', 'product_type', 'product_tag', 'nav_menu')");

				$post_type = $wpdb->get_var("Select post_type from ".$wpdb->prefix."posts where ID='$object_id'");

				if($post_type <> ''){//IF category have no post//
					if($post_type == 'post')$this_post_type = '';
					else $this_post_type = ' ('.ucfirst($post_type).')';

					$contains = sprintf(
						'<%%= _.contains( et_pb_include_categories_temp, "%1$s" ) ? checked="checked" : "" %%>',
						esc_html( $category->term_id )
					);

					$output .= sprintf(
						'%4$s<label><input type="checkbox" class="et_dp_'.$post_type.'" name="et_pb_include_categories" value="%1$s"%3$s> %2$s '.$this_post_type.'</label><br/>',
						esc_attr( $category->term_id ),
						esc_html( $category->name ),
						$contains,
						"\n\t\t\t\t\t"
					);
				}//IF category have no post//
			}
		}

		return apply_filters( 'et_builder_include_categories_option_html', $output );
	}
endif;

if( ! function_exists( 'dp_get_custom_fields' )) :
	function dp_get_custom_fields($custom_fields_array, $post_id) {
		foreach($custom_fields_array as $field_display) {
			$custom_field = trim($field_display);
			$field_display = ucfirst(str_replace('_', ' ', ltrim($field_display)));
			$field_display .= ' - ';
			$post_custom_fields[$field_display] = get_post_meta($post_id, $custom_field, true);
		}
		return $post_custom_fields;
	}
endif;

if( ! function_exists( 'dp_get_keyed_custom_fields' )) :
	function dp_get_keyed_custom_fields($custom_fields_array, $post_id) {
		foreach($custom_fields_array as $field_display => $field_value) {
			$custom_field = trim($field_value);
			$post_custom_fields[$field_display] = get_post_meta($post_id, $custom_field, true);
		}
		return $post_custom_fields;
	}
endif;

?>