<?php

/*
 * Plugin Name: CPT Layout Injector
 * Plugin URI:  http://www.sean-barton.co.uk
 * Description: A plugin to handle the layouts of any Custom Post Type pages using the ET layout builder system. 
 * Author:      Sean Barton - Tortoise IT
 * Version:     2.2
 * Author URI:  http://www.sean-barton.co.uk
 */
 
    add_action('plugins_loaded', 'sb_et_cpt_li_init');
    
    function sb_et_cpt_li_init() {
    
        add_action('admin_menu', 'sb_et_cpt_li_submenu');
        add_action('init', 'sb_et_cpt_li_theme_setup', 9999);
        add_action('admin_head', 'sb_et_cpt_li_admin_head', 9999);
        
        add_filter( 'template_include', 'sb_et_cpt_li_template', 99 );
        
        add_action('wp_enqueue_scripts', 'sb_et_cpt_li_enqueue', 9999);
        
        add_image_size('sb_cpt_li_150_square', 150, 150, true);
        add_image_size('sb_cpt_li_250_square', 250, 250, true);
        add_image_size('sb_cpt_li_350_square', 350, 350, true);
        add_image_size('sb_cpt_li_150_wide', 150, false, true);
        add_image_size('sb_cpt_li_250_wide', 250, false, true);
        add_image_size('sb_cpt_li_350_wide', 350, false, true);
    }
    
    function sb_et_cpt_li_enqueue() {
        wp_enqueue_style('sb_et_cpt_li_css', plugins_url( '/style.css', __FILE__ ));
    }
    
    function sb_et_cpt_li_admin_head() {
        
        $post_types = md5(serialize(get_post_types()));
        $purge_cache = get_option('sb_et_cpt_li_builder_purge_cache', '');
        
        if (@$_GET['post_type'] == 'et_pb_layout' || stripos($_SERVER['PHP_SELF'], 'wp-admin/index.php') !== false || $post_types != $purge_cache || isset($_GET['sb_purge_cache'])) {
            
            update_option('sb_et_cpt_li_builder_purge_cache', $post_types); //update purge cache
            
            $prop_to_remove = array(
                'et_pb_templates_et_pb_cpt_archive'
                , 'et_pb_templates_et_pb_cpt_loop_archive'
                , 'et_pb_templates_et_pb_cpt_text'
                , 'et_pb_templates_et_pb_cpt_featured_image2'
                , 'et_pb_templates_et_pb_cpt_title'
            );
            
            $js_prop_to_remove = 'var sb_ls_remove = ["' . implode('","', $prop_to_remove) . '"];';
    
            echo '<script>
            
            ' . $js_prop_to_remove . '
            
            for (var prop in localStorage) {
                if (sb_ls_remove.indexOf(prop) != -1) {
                    console.log(localStorage.removeItem(prop));
                }
            }
            
            </script>';
        }
    }    
    
    function sb_et_cpt_li_template( $template ) {
        
        if (function_exists('et_pb_is_pagebuilder_used')) {
            $ps = get_post_status(get_the_ID());
            $pt = get_post_type();
            $meta_key = '';
            $is_page_builder_used = false;
            
            if (is_single()) {
                $is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );
                $meta_key = 'sb_et_cpt_li_' . $pt . '_layout';
            } else if (is_archive()) {
                $meta_key = 'sb_et_cpt_li_' . $pt . '_archive_layout';
            }
                
            if ($meta_key && !$is_page_builder_used) {
                if ($ps && $ps != 'trash') {
                    //as in if it's anything it means it's not deleted and not equal to trash is obvious
                    if ($page_layout = get_option($meta_key)) {
                        $template = dirname(__FILE__) . '/empty.php'; //calls our own file which is a wrapper on a simple shortcode call
                    }
                }
            }
        }
    
        return $template;
    }
    
    function sb_et_cpt_li_single_template() {
        get_header();
        
        $pt = get_post_type();
        
        if (is_single()) {
            $meta_key = 'sb_et_cpt_li_' . $pt . '_layout';
        } else if (is_archive()) {
            $meta_key = 'sb_et_cpt_li_' . $pt . '_archive_layout';
        }
        
        $cpt_layout = get_option($meta_key);
        
        if ($cpt_layout) {
            if ($section = do_shortcode('[et_pb_section global_module="' . $cpt_layout . '"][/et_pb_section]')) {
                echo '<div id="main-content">';
                echo $section;
                echo '</div>';
            }
        }
        
        get_footer();
    }
 
    function sb_et_cpt_li_submenu() {
        add_submenu_page(
            'options-general.php',
            'CPT Layout Injector',
            'CPT Layout Injector',
            'manage_options',
            'sb_et_cpt_li',
            'sb_et_cpt_li_submenu_cb' );
    }
    
    function sb_et_cpt_li_box_start($title) {
        return '<div class="postbox">
                    <h2 class="hndle">' . $title . '</h2>
                    <div class="inside">';
    }
    
    function sb_et_cpt_li_box_end() {
        return '    </div>
                </div>';
    }
     
    function sb_et_cpt_li_submenu_cb() {
        
        echo '<div class="wrap"><div id="icon-tools" class="icon32"></div>';
        echo '<h2>CPT Layout Injector</h2>';
        
        echo '<div id="poststuff">';
        
        echo '<div id="post-body" class="metabox-holder columns-2">';
        
        $ignored_types = array('attachment', 'page', 'product', 'download');
        
        $types = get_post_types();
        
        if (isset($_POST['sb_et_cpt_li_edit_submit'])) {
                foreach ($types as $type) {
                    update_option('sb_et_cpt_li_' . $type . '_layout', $_POST['sb_et_cpt_li_' . $type . '_layout']);
                    
                    if (isset($_POST['sb_et_cpt_li_' . $type . '_archive_layout'])) {
                        update_option('sb_et_cpt_li_' . $type . '_archive_layout', $_POST['sb_et_cpt_li_' . $type . '_archive_layout']);
                    }
                }
                
                echo '<div id="message" class="updated fade"><p>Layouts edited successfully</p></div>';
        }
        
        echo '<p>This plugin allows you to edit the layouts of your Divi site without having to edit any core files. See each section below for more information</p>';
        echo '<p>A layout can be built within the Divi/Extra library using the page builder. You can then use these settings to set the appropriate layout to the Custom Post Type page(s). You\'ll need to include a variety of new modules in the page builder to make the page work. This plugin will do the rest!</p>';
        
        echo '<form method="POST">';
        
        if ($layouts = get_posts(array('post_type'=>'et_pb_layout', 'posts_per_page'=>-1))) {
            
            foreach ($types as $type) {
                $type_obj = get_post_type_object($type);
                
                if (!$type_obj->public) {
                    continue;
                }
                if (in_array($type, $ignored_types)) {
                    continue;
                }
                
                $type_name = $type_obj->labels->name;
                
                echo sb_et_cpt_li_box_start($type_name . ' Layout');
            
                echo '<label style="display:inline-block; min-width: 200px;">Single Template: </label><select name="sb_et_cpt_li_' . $type . '_layout">';
                
                $cpt_layout = get_option('sb_et_cpt_li_' . $type . '_layout');
                
                echo '<option value="">-- None --</option>';
                
                foreach ($layouts as $layout) {
                    echo '<option ' . selected($layout->ID, $cpt_layout, false) . ' value="' . $layout->ID . '">' . $layout->post_title . '</option>';
                }
                
                echo '</select>';
                echo '<br />';
                if ($type_obj->has_archive) {
                    $url = get_post_type_archive_link($type);
                    
                    echo '<label style="display:inline-block; min-width: 200px;">Archive Template: </label><select name="sb_et_cpt_li_' . $type . '_archive_layout">';
                    
                    $cpt_archive_layout = get_option('sb_et_cpt_li_' . $type . '_archive_layout');
                    
                    echo '<option value="">-- None --</option>';
                    
                    foreach ($layouts as $layout) {
                        echo '<option ' . selected($layout->ID, $cpt_archive_layout, false) . ' value="' . $layout->ID . '">' . $layout->post_title . '</option>';
                    }
                    
                    echo '</select>';
                    
                    echo '<p>You can see your post type archive at <a target="_blank" href="' . $url . '">' . $url . '</a></p>';
                } else {
                    echo '<p>This post type has has_archive set to false meaning you can see the single post type item pages but there is no concept of an archive or view showing a group of items at once. This is not recommended. Once you have turned on has_archive then you will be able to inject a layout using this page.</p>';
                }
                
                echo sb_et_cpt_li_box_end();
                
            }
        }
        
        echo '<p id="submit"><input type="submit" name="sb_et_cpt_li_edit_submit" class="button-primary" value="Save Settings" /></p>';
        
        echo '</form>';
            
        echo '</div>';
        
        echo '</div>';
        echo '</div>';
    }
    
    function sb_et_cpt_li_theme_setup() {
    
        if ( class_exists('ET_Builder_Module')) {
        
            $modules_path = trailingslashit(dirname(__FILE__)) . 'modules/';
            
            require_once($modules_path . 'sb_et_cpt_li_title_module.php');
            require_once($modules_path . 'sb_et_cpt_li_content_module.php');
            require_once($modules_path . 'sb_et_cpt_li_gallery_module.php');
            require_once($modules_path . 'sb_et_cpt_li_pt_archive_module.php');
            require_once($modules_path . 'sb_et_cpt_li_loop_archive_module.php');
            
        }
    }
 
?>