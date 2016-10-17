<?php
/**
* Plugin Name: Elegant Tweaks Portfolio Posts
* Plugin URI: http://shop.eleganttweaks.com/divi/posts-plugin/
* Description: Divi posts display same as project posts
* Version: 1.02
* Author: Brad Crawford
* Author URI: http://www.eleganttweaks.com
**/

/**
* Version 1.0.1
* 
* Added Pagination to standard portfolio layout
*
* Version 1.0.2
*
* Fixed Pagination issues shortcode placed on homepage
* Fixed issues with blurry thumbnails
*
**/

function e_tweaks_fw_blog( $atts ) {
	$a = shortcode_atts( array(
        'layout' => 'carousel',
        'categories' => '',
        'display' => '10',
        'title' => 'on',
        'date' => 'on',
        'text' => 'dark',
        'color' => '#fff',
        'opacity' => '.9',
        'lightbox' => 'off',
        'autorotate' => 'off',
        'speed' => '7000'
	), $atts );
		

    // The Query
    $args = array(
        'category_name' => "{$a['categories']}",
        'posts_per_page' => "{$a['display']}"
        );

    $layout = "{$a['layout']}";
    $title = "{$a['title']}";
    $date = "{$a['date']}";
    $text = "{$a['text']}";
    $color = "{$a['color']}";
    $opacity = "{$a['opacity']}";
    $background = hex2rgba($color, $opacity);
    $lightbox = "{$a['lightbox']}";
    $rotate = "{$a['autorotate']}";
    $speed = "{$a['speed']}";
    
    ob_start();
        
    //Begin wrap posts in fullwidth portfolio tags
    echo '<div class="et_pb_fullwidth_portfolio et_pb_fullwidth_portfolio_'.$layout.' et_pb_module et_pb_bg_layout_light" data-auto-rotate="'.$rotate.'" data-auto-rotate-speed="'.$speed.'">
            <div class="et_pb_portfolio_items clearfix data-portfolio-columns="">';
    query_posts( $args );

    // The Loop
    while ( have_posts() ) : the_post();
    $width = 320;
    $height = 241;
	$height = (int) apply_filters( 'et_pb_portfolio_image_height', $height );
	$thumbnail = get_thumbnail( $width, $height, $classtext, $titletext, $titletext, false, 'Blogimage' );
	$thumb = $thumbnail["thumb"];
    list($thumb_src, $thumb_width, $thumb_height) = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), array( $width, $height ) );
        echo '<div id="post-'.get_the_id().'" class="et_pb_portfolio_item et_pb_grid_item post-'.get_the_id().' project type-project status-publish has-post-thumbnail hentry">
                <div class="et_pb_portfolio_image landscape">';
                    
                    if ($lightbox == 'off') {
                        echo '<a href="'.get_permalink().'">';
                    } else {
                        echo '<a href="'.$thumb_src.'" class="et_pb_lightbox_image">';
                    }
                    
					print_thumbnail( $thumb, $thumbnail["use_timthumb"], $titletext, $width, $height );
                    echo '<div class="meta"><span class="et_overlay" style="background: '.$background.';"></span>';
                    if (($title == 'on') && ($text == 'light')) {
                        echo '<h3 style="color: #fff;">'.get_the_title().'</h3>';
                    }
                    elseif ($title == 'on') {
                        echo '<h3>'.get_the_title().'</h3>';
                    }
                    
                    if (($date == 'on') && ($text == 'light')) {
                        echo '<p class="post-meta" style="color: #e1e1e1;">'.get_the_date().'</p>';
                    }
                    elseif ($date == 'on') {
                        echo '<p class="post-meta">'.get_the_date().'</p>';
                    }
                        
                    echo '</div>
                    </a>
                </div>
              </div>';
    endwhile;
    
    echo '  </div><!-- .et_pb_portfolio_items -->
		 </div> <!-- .et_pb_fullwidth_portfolio -->';
    
    // Reset Query
    wp_reset_query();
    
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}

function e_tweaks_blog( $atts ) {
	$a = shortcode_atts( array(
        'categories' => '',
        'display' => '10',
        'title' => 'on',
        'date' => 'on',
        'text' => 'dark',
        'color' => '#fff',
        'opacity' => '.9',
        'pagination' => 'off'
	), $atts );
		

    // The Query

    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $et_paged = is_front_page() ? get_query_var( 'page' ) : get_query_var( 'paged' );

	if ( is_front_page() ) {
		$paged = $et_paged;
	}
	
    $args = array(
        'category_name' => "{$a['categories']}",
        'posts_per_page' => "{$a['display']}",
        'paged' => $paged
        );

    $title = "{$a['title']}";
    $date = "{$a['date']}";
    $text = "{$a['text']}";
    $color = "{$a['color']}";
    $opacity = "{$a['opacity']}";
    $pagination = "{$a['pagination']}";
    $background = hex2rgba($color, $opacity);
        
    ob_start();
        
    //Begin wrap posts in fullwidth portfolio tags
    echo '<div class="et_pb_portfolio_grid clearfix et_pb_module et_pb_bg_layout_light  et_pb_portfolio_0">';
    query_posts( $args );

    // The Loop
    while ( have_posts() ) : the_post();
    $width = 400;
    $height = 284;
	$height = (int) apply_filters( 'et_pb_portfolio_image_height', $height );
	$thumbnail = get_thumbnail( $width, $height, $classtext, $titletext, $titletext, false, 'Blogimage' );
	$thumb = $thumbnail["thumb"];
    list($thumb_src, $thumb_width, $thumb_height) = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), array( $width, $height ) );
        echo '<div id="post-'.get_the_id().'" class="et_pb_portfolio_item et_pb_grid_item post-'.get_the_id().' project type-project status-publish has-post-thumbnail hentry">
                <a href="'.get_permalink().'">';
                    
                    echo '<span class="et_portfolio_image">';
							print_thumbnail( $thumb, $thumbnail["use_timthumb"], $titletext, $width, $height );
                        echo '<span class="et_overlay" style="background: '.$background.';"></span></span></a>';
                        
                    if (($title == 'on') && ($text == 'light')) {
                        echo '<h2 style="color: #fff;"><a href="'.get_permalink().'">'.get_the_title().'</a></h2>';
                    }
                        
                    elseif ($title == 'on') {
                        echo '<h2><a href="'.get_permalink().'">'.get_the_title().'</a></h2>';
                    }
                    
                    if (($date == 'on') && ($text == 'light')) {
                        echo '<p class="post-meta" style="color: #e1e1e1;">'.get_the_date().'</p>';
                    }
                    elseif ($date == 'on') {
                        echo '<p class="post-meta">'.get_the_date().'</p>';
                    }
                        
                    echo '</div><!-- .et_pb_portfolio_item -->';
    endwhile;
    
    echo '</div><!-- .et_pb_portfolio -->';
    if ($pagination == 'on'){
    if ( function_exists( 'wp_pagenavi' ) )
					wp_pagenavi();
				else
					get_template_part( 'includes/navigation', 'index' );
    }
    
    // Reset Query
    wp_reset_query();
    
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}

 //Helper functions
function hex2rgba($color, $opacity) {

$default = 'rgb(255,255,255,.9)';

//Return default if no color provided
if(empty($color))
      return $default; 

//Sanitize $color if "#" is provided 
    if ($color[0] == '#' ) {
        $color = substr( $color, 1 );
    }

    //Check if color has 6 or 3 characters and get values
    if (strlen($color) == 6) {
            $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
    } elseif ( strlen( $color ) == 3 ) {
            $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
    } else {
            return $default;
    }

    //Convert hexadec to rgb
    $rgb =  array_map('hexdec', $hex);

    //Check if opacity is set(rgba or rgb)
    if($opacity){
        if(abs($opacity) > 1)
            $opacity = .9;
        $output = 'rgba('.implode(",",$rgb).','.$opacity.')';
    } else {
            $opacity = .9;
        $output = 'rgba('.implode(",",$rgb).','.$opacity.')';
    }

    //Return rgb(a) color string
    return $output;
}

add_shortcode( 'tweak_fwblog', 'e_tweaks_fw_blog' );
add_shortcode( 'tweak_blog', 'e_tweaks_blog' );

?>