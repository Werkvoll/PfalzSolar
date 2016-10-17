<?php

class sb_et_cpt_li_title_module extends ET_Builder_Module {
                function init() {
                    $this->name = __( 'ET CPT Title', 'et_builder' );
                    $this->slug = 'et_pb_cpt_title';
            
                    $this->whitelisted_fields = array(
                        'module_id',
                        'module_class',
                    );
            
                    $this->fields_defaults = array();
                    //$this->main_css_element = '.et_pb_cpt_title';
                    //$this->advanced_options = array();
                    //$this->custom_css_options = array();
                    
                    $this->main_css_element = '%%order_class%%';
                    
                                $this->advanced_options = array(
                                        'fonts' => array(
                                                'text'   => array(
                                                        'label'    => esc_html__( 'Text', 'et_builder' ),
                                                        'css'      => array(
                                                                'main' => "{$this->main_css_element} h1, {$this->main_css_element} h1 a",
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
            
                    $module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
            
                    //////////////////////////////////////////////////////////////////////
                      
                    if (is_single()) {
				$content = '<h1 itemprop="name" class="cpt_title page_title entry-title">' . get_the_title() . '</h1>';
		    } else {
				$content = '<h1 itemprop="name" class="cpt_title page_title entry-title"><a href="' . get_permalink(get_the_ID()) . '">' . get_the_title() . '</a></h1>';
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
        
            new sb_et_cpt_li_title_module();

?>