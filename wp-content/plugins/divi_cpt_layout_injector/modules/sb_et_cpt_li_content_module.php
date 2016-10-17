<?php

class sb_et_cpt_li_content_module extends ET_Builder_Module {
                function init() {
                    $this->name = __( 'ET CPT Content', 'et_builder' );
                    $this->slug = 'et_pb_cpt_text';
            
                    $this->whitelisted_fields = array(
                        'excerpt_only',
                        'show_read_more',
                        'read_more_label',
                        'admin_label',
                        'module_id',
                        'module_class',
                    );
            
                    $this->fields_defaults = array();
                    //$this->main_css_element = '.et_pb_cpt_text';
                                $this->main_css_element = '%%order_class%%';
                    
                                $this->advanced_options = array(
                                        'fonts' => array(
                                                'text'   => array(
                                                        'label'    => esc_html__( 'Text', 'et_builder' ),
                                                        'css'      => array(
                                                                'main' => "{$this->main_css_element} p",
                                                        ),
                                                ),
                                                'headings'   => array(
                                                        'label'    => esc_html__( 'Headings', 'et_builder' ),
                                                        'css'      => array(
                                                                'main' => "{$this->main_css_element} h1, {$this->main_css_element} h2, {$this->main_css_element} h3, {$this->main_css_element} h4",
                                                        ),
                                                ),
                                                'buttons'   => array(
                                                        'label'    => esc_html__( 'Read More Button', 'et_builder' ),
                                                        'css'      => array(
                                                                'main' => "{$this->main_css_element} .et_pb_more_button",
                                                        ),
                                                ),
                                        ),
                                        'background' => array(
                                                'settings' => array(
                                                        'color' => 'alpha',
                                                ),
                                        ),
                                        'border' => array(),
                                        'custom_margin_padding' => array(
                                                'css' => array(
                                                        'important' => 'all',
                                                ),
                                        ),
                                );
                }
            
                function get_fields() {
                    $fields = array(
                                'excerpt_only' => array(
                                                'label'           => __( 'Excerpt Only?', 'et_builder' ),
                                                'type'            => 'yes_no_button',
                                                'option_category' => 'configuration',
                                                'options'         => array(
                                                                'off' => __( 'No', 'et_builder' ),
                                                                'on'  => __( 'Yes', 'et_builder' ),
                                                ),
                                                'description'       => __( 'Should this show content only or excerpt?', 'et_builder' ),
                                ),
                                'show_read_more' => array(
                                                'label'           => __( 'Show Read More?', 'et_builder' ),
                                                'type'            => 'yes_no_button',
                                                'option_category' => 'configuration',
                                                'options'         => array(
                                                                'off' => __( 'No', 'et_builder' ),
                                                                'on'  => __( 'Yes', 'et_builder' ),
                                                ),
                                                'affects'=>array('#et_pb_read_more_label'),
                                                'description'       => __( 'Should a read more button be shown below the content?', 'et_builder' ),
                                ),
                                'read_more_label' => array(
                                                'label'       => __( 'Read More Label', 'et_builder' ),
                                                'type'        => 'text',
                                                'depends_show_if'=>'on',
                                                'description' => __( 'What should the read more button be labelled as? Defaults to "Read More".', 'et_builder' ),
                                ),
                                'admin_label' => array(
                                                'label'       => __( 'Admin Label', 'et_builder' ),
                                                'type'        => 'text',
                                                'description' => __( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
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
                    $module_id          = $this->shortcode_atts['module_id'];
                    $module_class       = $this->shortcode_atts['module_class'];
                    $excerpt_only       = $this->shortcode_atts['excerpt_only'];
                    $show_read_more       = $this->shortcode_atts['show_read_more'];
                    $read_more_label       = $this->shortcode_atts['read_more_label'];
                    
                    $read_more_label = ($read_more_label ? $read_more_label:'Read More');
                    
                    $module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
            
                    //////////////////////////////////////////////////////////////////////
                    
                                if ($excerpt_only == 'on') {
                                                $content = apply_filters('the_content', get_the_excerpt());
                                } else {
                                                $content = apply_filters('the_content', get_the_content());
                                }
                                
                                if ($show_read_more == 'on') {
                                                $content .= '<p><a class="button et_pb_more_button" href="' . get_permalink(get_the_ID()) . '">' . $read_more_label . '</a></p>';
                                }
                    
                    //////////////////////////////////////////////////////////////////////
            
                    $output = sprintf(
                        '<div%5$s class="%1$s%3$s%6$s">
                            %2$s
                        %4$s',
                        'clearfix ',
                        $content,
                        esc_attr( 'et_pb_module' ),
                        '</div>',
                        ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
                        ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
                    );
            
                    return $output;
                }
            }
        
            new sb_et_cpt_li_content_module();

?>