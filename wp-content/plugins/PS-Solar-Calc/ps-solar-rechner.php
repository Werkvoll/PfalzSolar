<?php
/*
Plugin Name: Pfalz Solar - SolarCalc Plugin (GGEW)
Description: Das SolarCalc Plugin  errechnet den Ertrag einer Solaranlage und kann als Widget oder Shortcode [ps_solar_rechner] in den Blog eingebunden werden.
Version: 2.0.0
Author: Axel Lodyga
Author URI: http://werkvoll.design:8000/
Author Email: axel@werkvoll.de
License: GPL2



Copyright 2016  werkvoll.de  (email : axe@werkvoll.de)


*/

class PS_Solar_Rechner_Widget extends WP_Widget{
  public function __construct(){
    $name = 'GGEW Solar-Rechner Widget';
    $class = 'PS_Solar_Rechner_Widget';
    $idBase = 'ps-solar-rechner';
    $description = 'Der Solarrechner errechnet den Ertrag einer Solaranlage';

    $widget_ops = array(
        'classname'   => $class,
        'description' => $description);

    $control_ops = array(
        'width' => '100%',
        'height' => '100%',
        'id_base' => $idBase);

    $this->WP_Widget( $idBase, $name, $widget_ops, $control_ops );

// Register AJAX-Functions (ajax.js / PSC_Functions.php)
      wp_enqueue_script( 'PSC-ajax-handle',  self::get_asset_path('js/ps_ajax.js'), array( 'jquery' ) ); //register AJAX-Handler
      wp_localize_script( 'PSC-ajax-handle', 'PSC_ajax_script', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) ); // deploy AJAX-Handler-URL
      add_action('wp_ajax_calculate_data', 'calculate_data'); // general calculation
      add_action('wp_ajax_nopriv_calculate_data', 'calculate_data' ); // need this to serve non logged in users
      add_action('wp_ajax_get_infobox_var', 'get_infobox_var'); //get variables for The Infoboxes 
      add_action('wp_ajax_nopriv_Dget_infobox_var', 'get_infobox_var' ); // need this to serve non logged in users
      
      
    if (!is_admin()) {
      
      //Register& deplay JS Scripts
      wp_register_script('jquery-jvectormap-2.0.3.min', self::get_asset_path('js/jquery-jvectormap-2.0.3.min.js'), array('jquery'));
      wp_register_script('jquery-jvectormap-de-mill', self::get_asset_path('js/jquery-jvectormap-de-mill.js'), array('jquery','jquery-jvectormap-2.0.3.min'));
      //wp_register_script('jquery.cycle.all', self::get_asset_path('js/jquery.cycle.all.js'), array('jquery'));
      //wp_register_script('jquery.easing', self::get_asset_path('js/jquery.easing.1.3.js'), array('jquery'));
      //wp_register_script('d3', self::get_asset_path('js/d3.min.js'), array('jquery'));
      //wp_register_script('piechart', self::get_asset_path('js/piechart.js'), array('d3'));
      wp_register_script('validation', self::get_asset_path('js/validation.js'), array('jquery','jquery-jvectormap-2.0.3.min','jquery-jvectormap-de-mill'));
      wp_register_script('bootstrap_js', self::get_asset_path('bootstrap/js/bootstrap.min.js'), array('jquery','backstretch','retina'));
      wp_register_script('backstretch', self::get_asset_path('js/jquery.backstretch.min.js'), array('jquery'));
      wp_register_script('retina', self::get_asset_path('js/retina-1.1.0.min.js'), array('jquery'));
      wp_register_script('form_script', self::get_asset_path('js/script.js'), array('bootstrap_js'));
      
      
      //stylesheets
      wp_register_style( 'bootstrap', self::get_asset_path('bootstrap/css/bootstrap.min.css'),array('font-awesome','form-style','general'));
      wp_register_style( 'font-awesome', self::get_asset_path('font-awesome/css/font-awesome.min.css'));
      wp_register_style( 'form-style', self::get_asset_path('font-awesome/css/font-awesome.min.css'));
      wp_register_style( 'general', self::get_asset_path('css/style.css'));
      wp_register_style( 'ps-solar-rechner', self::get_asset_path('css/ps-solar-rechner.css'));
      //wp_register_style( 'ggew-solar-rechner', self::get_asset_path('css/ggew-solar-rechner.css'));
      
    }
  }
    
  public function widget($args, $instance){
    include plugin_dir_path(__FILE__).'assets/templates/PfalzSolar.php';
  }

  public function img_path($relativePath){
    return self::get_asset_path('images/'.$relativePath);
  }

  public function img($relativePath, $class='', $alt=''){
    if(!empty($alt))
      $alt = ' alt="'.$alt.'"';

    if(!empty($class))
      $class = ' class="'.$class.'"';

    echo '<img src="'.$this->img_path($relativePath).'"'.$alt.$class.'/>';
  }
  
  public static function get_asset_path($relativePath){
    return plugin_dir_url(__FILE__).'assets/'.$relativePath;
  }
  
  public static function register(){
    register_widget('PS_Solar_Rechner_Widget');
  }
  
  public static function shortcode($atts){
    $widget = new self();
    
    ob_start();
    $widget->widget(array(), array());
    return ob_get_clean();
  }
}

add_action('widgets_init', 'PS_Solar_Rechner_Widget::register');
add_shortcode( 'ps_solar_rechner', 'PS_Solar_Rechner_Widget::shortcode' );
include 'PSC_options.php';
include ('assets/calc/PSC_Functions.php');