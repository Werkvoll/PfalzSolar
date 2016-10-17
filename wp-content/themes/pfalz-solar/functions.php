<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',get_stylesheet_directory_uri() . '/style.css',array('parent-style'));
}

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


//Import scripts

wp_register_script( 'modernizr.custom',  dirname( get_bloginfo('stylesheet_url') ).'/js/dependencies/modernizr.custom.js','1.0.0' , true);
wp_register_script( 'lightbox-2.6.min.js',  dirname( get_bloginfo('stylesheet_url') ).'/js/dependencies/lightbox-2.6.min.js','2.6.0' , true);
wp_enqueue_script( 'slick',  dirname( get_bloginfo('stylesheet_url') ).'/slick/slick.js', array('jquery','modernizr.custom','lightbox-2.6.min.js','jquery.easing') ,'1.5.9' , true);
wp_enqueue_script( 'PSlider',  dirname( get_bloginfo('stylesheet_url') ).'/js/projectslider.js', array('slick') ,'1.0.0' , false);
wp_enqueue_script( 'ps_solar',  dirname( get_bloginfo('stylesheet_url') ).'/js/dependencies/ps_solar.js', array('jquery') ,'1.0.0' , true);
wp_dequeue_script( 'google-maps-api');
// DIVI CPT


/**
 * Hide Divi Builder "project" type
 */
add_filter('et_project_posttype_args', 'mytheme_et_project_posttype_args', 10, 1);
function mytheme_et_project_posttype_args($args) {
  return array_merge($args, array(
    'public' => false
  ));
}

//Login-Page Style

function my_login_logo() {
?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url( <?php echo dirname( get_bloginfo('stylesheet_url') ); ?>/images/logoOnCar.png);
        }
    </style>
<?php
}
add_action( 'login_enqueue_scripts', 'my_login_logo' );
function my_login_stylesheet() {
    wp_enqueue_style( 'custom-login',dirname( get_bloginfo('stylesheet_url') ). '/login/custom-login-styles.css' );
    wp_enqueue_script( 'custom-login', dirname( get_bloginfo('stylesheet_url') ). '/login/style-login.js' );
}
add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );



?>
