<?php
            
            class sb_et_cpt_li_gallery_module extends ET_Builder_Module {
                function init() {
                        $this->name = __( 'ET CPT Featured Image', 'et_builder' );
                        $this->slug = 'et_pb_cpt_featured_image2';
        
                        $this->whitelisted_fields = array(
                                'image_size',
                                'alt',
                                'title_text',
                                'show_in_lightbox',
                                'url',
                                'url_new_window',
                                'animation',
                                'sticky',
                                'align',
                                'admin_label',
                                'module_id',
                                'module_class',
                                'max_width',
                                'force_fullwidth',
                                'always_center_on_mobile',
                                'use_overlay',
                                'overlay_icon_color',
                                'hover_overlay_color',
                                'hover_icon',
                                'max_width_tablet',
                                'max_width_phone',
                        );
        
                        $this->fields_defaults = array(
                                'show_in_lightbox'        => array( 'off' ),
                                'url_new_window'          => array( 'off' ),
                                'animation'               => array( 'left' ),
                                'sticky'                  => array( 'off' ),
                                'align'                   => array( 'left' ),
                                'force_fullwidth'         => array( 'off' ),
                                'always_center_on_mobile' => array( 'on' ),
                                'use_overlay'             => array( 'off' ),
                        );
        
                        $this->advanced_options = array(
                                'border'                => array(),
                                'custom_margin_padding' => array(
                                        'use_padding' => false,
                                        'css' => array(
                                                'important' => 'all',
                                        ),
                                ),
                        );
                }
            
                function get_fields() {
                        
                        $options = array();
                        $sizes = get_intermediate_image_sizes();
                        
                        foreach ($sizes as $size) {
                                    $options[$size] = $size;
                        }
                        
                        // List of animation options
                        $animation_options_list = array(
                                'left'    => esc_html__( 'Left To Right', 'et_builder' ),
                                'right'   => esc_html__( 'Right To Left', 'et_builder' ),
                                'top'     => esc_html__( 'Top To Bottom', 'et_builder' ),
                                'bottom'  => esc_html__( 'Bottom To Top', 'et_builder' ),
                                'fade_in' => esc_html__( 'Fade In', 'et_builder' ),
                                'off'     => esc_html__( 'No Animation', 'et_builder' ),
                        );
        
                        $animation_option_name       = sprintf( '%1$s-animation', $this->slug );
                        $default_animation_direction = ET_Global_Settings::get_value( $animation_option_name );
        
                        // If user modifies default animation option via Customizer, we'll need to change the order
                        if ( 'left' !== $default_animation_direction && ! empty( $default_animation_direction ) && array_key_exists( $default_animation_direction, $animation_options_list ) ) {
                                // The options, sans user's preferred direction
                                $animation_options_wo_default = $animation_options_list;
                                unset( $animation_options_wo_default[ $default_animation_direction ] );
        
                                // All animation options
                                $animation_options = array_merge(
                                        array( $default_animation_direction => $animation_options_list[$default_animation_direction] ),
                                        $animation_options_wo_default
                                );
                        } else {
                                // Simply copy the animation options
                                $animation_options = $animation_options_list;
                        }
        
                        $fields = array(
                                'image_size' => array(
                                                'label'           => __( 'Image Size', 'et_builder' ),
                                                'type'            => 'select',
                                                'options'         => $options,
                                                'description'       => __( 'Pick a size for the featured image from the list. Leave blank for default.', 'et_builder' ),
                                    ),
                                'alt' => array(
                                        'label'           => esc_html__( 'Image Alternative Text', 'et_builder' ),
                                        'type'            => 'text',
                                        'option_category' => 'basic_option',
                                        'description'     => esc_html__( 'This defines the HTML ALT text. A short description of your image can be placed here.', 'et_builder' ),
                                ),
                                'title_text' => array(
                                        'label'           => esc_html__( 'Image Title Text', 'et_builder' ),
                                        'type'            => 'text',
                                        'option_category' => 'basic_option',
                                        'description'     => esc_html__( 'This defines the HTML Title text.', 'et_builder' ),
                                ),
                                'show_in_lightbox' => array(
                                        'label'             => esc_html__( 'Open in Lightbox', 'et_builder' ),
                                        'type'              => 'yes_no_button',
                                        'option_category'   => 'configuration',
                                        'options'           => array(
                                                'off' => esc_html__( "No", 'et_builder' ),
                                                'on'  => esc_html__( 'Yes', 'et_builder' ),
                                        ),
                                        'affects'           => array(
                                                '#et_pb_url',
                                                '#et_pb_url_new_window',
                                                '#et_pb_use_overlay'
                                        ),
                                        'description'       => esc_html__( 'Here you can choose whether or not the image should open in Lightbox. Note: if you select to open the image in Lightbox, url options below will be ignored.', 'et_builder' ),
                                ),
                                'url' => array(
                                        'label'           => esc_html__( 'Link URL', 'et_builder' ),
                                        'type'            => 'text',
                                        'option_category' => 'basic_option',
                                        'depends_show_if' => 'off',
                                        'affects'         => array(
                                                '#et_pb_use_overlay',
                                        ),
                                        'description'     => esc_html__( 'If you would like your image to be a link, input your destination URL here. No link will be created if this field is left blank unless the image is used on an archive page in which case the image will link to the post type item.', 'et_builder' ),
                                ),
                                'url_new_window' => array(
                                        'label'             => esc_html__( 'Url Opens', 'et_builder' ),
                                        'type'              => 'select',
                                        'option_category'   => 'configuration',
                                        'options'           => array(
                                                'off' => esc_html__( 'In The Same Window', 'et_builder' ),
                                                'on'  => esc_html__( 'In The New Tab', 'et_builder' ),
                                        ),
                                        'depends_show_if'   => 'off',
                                        'description'       => esc_html__( 'Here you can choose whether or not your link opens in a new window', 'et_builder' ),
                                ),
                                'use_overlay' => array(
                                        'label'             => esc_html__( 'Image Overlay', 'et_builder' ),
                                        'type'              => 'yes_no_button',
                                        'option_category'   => 'layout',
                                        'options'           => array(
                                                'off' => esc_html__( 'Off', 'et_builder' ),
                                                'on'  => esc_html__( 'On', 'et_builder' ),
                                        ),
                                        'affects'           => array(
                                                '#et_pb_overlay_icon_color',
                                                '#et_pb_hover_overlay_color',
                                                '#et_pb_hover_icon',
                                        ),
                                        'depends_default'   => true,
                                        'description'       => esc_html__( 'If enabled, an overlay color and icon will be displayed when a visitors hovers over the image', 'et_builder' ),
                                ),
                                'overlay_icon_color' => array(
                                        'label'             => esc_html__( 'Overlay Icon Color', 'et_builder' ),
                                        'type'              => 'color',
                                        'custom_color'      => true,
                                        'depends_show_if'   => 'on',
                                        'description'       => esc_html__( 'Here you can define a custom color for the overlay icon', 'et_builder' ),
                                ),
                                'hover_overlay_color' => array(
                                        'label'             => esc_html__( 'Hover Overlay Color', 'et_builder' ),
                                        'type'              => 'color-alpha',
                                        'custom_color'      => true,
                                        'depends_show_if'   => 'on',
                                        'description'       => esc_html__( 'Here you can define a custom color for the overlay', 'et_builder' ),
                                ),
                                'hover_icon' => array(
                                        'label'               => esc_html__( 'Hover Icon Picker', 'et_builder' ),
                                        'type'                => 'text',
                                        'option_category'     => 'configuration',
                                        'class'               => array( 'et-pb-font-icon' ),
                                        'renderer'            => 'et_pb_get_font_icon_list',
                                        'renderer_with_field' => true,
                                        'depends_show_if'     => 'on',
                                        'description'       => esc_html__( 'Here you can define a custom icon for the overlay', 'et_builder' ),
                                ),
                                'animation' => array(
                                        'label'             => esc_html__( 'Animation', 'et_builder' ),
                                        'type'              => 'select',
                                        'option_category'   => 'configuration',
                                        'options'           => $animation_options,
                                        'description'       => esc_html__( 'This controls the direction of the lazy-loading animation.', 'et_builder' ),
                                ),
                                'sticky' => array(
                                        'label'             => esc_html__( 'Remove Space Below The Image', 'et_builder' ),
                                        'type'              => 'yes_no_button',
                                        'option_category'   => 'layout',
                                        'options'           => array(
                                                'off'     => esc_html__( 'No', 'et_builder' ),
                                                'on'      => esc_html__( 'Yes', 'et_builder' ),
                                        ),
                                        'description'       => esc_html__( 'Here you can choose whether or not the image should have a space below it.', 'et_builder' ),
                                ),
                                'align' => array(
                                        'label'           => esc_html__( 'Image Alignment', 'et_builder' ),
                                        'type'            => 'select',
                                        'option_category' => 'layout',
                                        'options' => array(
                                                'left'   => esc_html__( 'Left', 'et_builder' ),
                                                'center' => esc_html__( 'Center', 'et_builder' ),
                                                'right'  => esc_html__( 'Right', 'et_builder' ),
                                        ),
                                        'description'       => esc_html__( 'Here you can choose the image alignment.', 'et_builder' ),
                                ),
                                'max_width' => array(
                                        'label'           => esc_html__( 'Image Max Width', 'et_builder' ),
                                        'type'            => 'text',
                                        'option_category' => 'layout',
                                        'tab_slug'        => 'advanced',
                                        'mobile_options'  => true,
                                        'validate_unit'   => true,
                                ),
                                'force_fullwidth' => array(
                                        'label'             => esc_html__( 'Force Fullwidth', 'et_builder' ),
                                        'type'              => 'yes_no_button',
                                        'option_category'   => 'layout',
                                        'options'           => array(
                                                'off' => esc_html__( "No", 'et_builder' ),
                                                'on'  => esc_html__( 'Yes', 'et_builder' ),
                                        ),
                                        'tab_slug'    => 'advanced',
                                ),
                                'always_center_on_mobile' => array(
                                        'label'             => esc_html__( 'Always Center Image On Mobile', 'et_builder' ),
                                        'type'              => 'yes_no_button',
                                        'option_category'   => 'layout',
                                        'options'           => array(
                                                'on'  => esc_html__( 'Yes', 'et_builder' ),
                                                'off' => esc_html__( "No", 'et_builder' ),
                                        ),
                                        'tab_slug'    => 'advanced',
                                ),
                                'max_width_tablet' => array(
                                        'type' => 'skip',
                                ),
                                'max_width_phone' => array(
                                        'type' => 'skip',
                                ),
                                'disabled_on' => array(
                                        'label'           => esc_html__( 'Disable on', 'et_builder' ),
                                        'type'            => 'multiple_checkboxes',
                                        'options'         => array(
                                                'phone'   => esc_html__( 'Phone', 'et_builder' ),
                                                'tablet'  => esc_html__( 'Tablet', 'et_builder' ),
                                                'desktop' => esc_html__( 'Desktop', 'et_builder' ),
                                        ),
                                        'additional_att'  => 'disable_on',
                                        'option_category' => 'configuration',
                                        'description'     => esc_html__( 'This will disable the module on selected devices', 'et_builder' ),
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
                        $output = '';
                        
                        $image_size               = $this->shortcode_atts['image_size'];
                        $module_id               = $this->shortcode_atts['module_id'];
                        $module_class            = $this->shortcode_atts['module_class'];
                        $alt                     = $this->shortcode_atts['alt'];
                        $title_text              = $this->shortcode_atts['title_text'];
                        $animation               = $this->shortcode_atts['animation'];
                        $url                     = $this->shortcode_atts['url'];
                        $url_new_window          = $this->shortcode_atts['url_new_window'];
                        $show_in_lightbox        = $this->shortcode_atts['show_in_lightbox'];
                        $sticky                  = $this->shortcode_atts['sticky'];
                        $align                   = $this->shortcode_atts['align'];
                        $max_width               = $this->shortcode_atts['max_width'];
                        $max_width_tablet        = $this->shortcode_atts['max_width_tablet'];
                        $max_width_phone         = $this->shortcode_atts['max_width_phone'];
                        $force_fullwidth         = $this->shortcode_atts['force_fullwidth'];
                        $always_center_on_mobile = $this->shortcode_atts['always_center_on_mobile'];
                        $overlay_icon_color      = $this->shortcode_atts['overlay_icon_color'];
                        $hover_overlay_color     = $this->shortcode_atts['hover_overlay_color'];
                        $hover_icon              = $this->shortcode_atts['hover_icon'];
                        $use_overlay             = $this->shortcode_atts['use_overlay'];
        
                        $module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
        
                        if ( 'on' === $always_center_on_mobile ) {
                                $module_class .= ' et_always_center_on_mobile';
                        }
        
                        // overlay can be applied only if image has link or if lightbox enabled
                        $is_overlay_applied = 'on' === $use_overlay && ( 'on' === $show_in_lightbox || ( 'off' === $show_in_lightbox && '' !== $url ) ) ? 'on' : 'off';
        
                        if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
                                $max_width_values = array(
                                        'desktop' => $max_width,
                                        'tablet'  => $max_width_tablet,
                                        'phone'   => $max_width_phone,
                                );
        
                                et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
                        }
        
                        if ( 'on' === $force_fullwidth ) {
                                ET_Builder_Element::set_style( $function_name, array(
                                        'selector'    => '%%order_class%% img',
                                        'declaration' => 'width: 100%;',
                                ) );
                        }
        
                        if ( $this->fields_defaults['align'][0] !== $align ) {
                                ET_Builder_Element::set_style( $function_name, array(
                                        'selector'    => '%%order_class%%',
                                        'declaration' => sprintf(
                                                'text-align: %1$s;',
                                                esc_html( $align )
                                        ),
                                ) );
                        }
        
                        if ( 'center' !== $align ) {
                                ET_Builder_Element::set_style( $function_name, array(
                                        'selector'    => '%%order_class%%',
                                        'declaration' => sprintf(
                                                'margin-%1$s: 0;',
                                                esc_html( $align )
                                        ),
                                ) );
                        }
        
                        if ( 'on' === $is_overlay_applied ) {
                                if ( '' !== $overlay_icon_color ) {
                                        ET_Builder_Element::set_style( $function_name, array(
                                                'selector'    => '%%order_class%% .et_overlay:before',
                                                'declaration' => sprintf(
                                                        'color: %1$s !important;',
                                                        esc_html( $overlay_icon_color )
                                                ),
                                        ) );
                                }
        
                                if ( '' !== $hover_overlay_color ) {
                                        ET_Builder_Element::set_style( $function_name, array(
                                                'selector'    => '%%order_class%% .et_overlay',
                                                'declaration' => sprintf(
                                                        'background-color: %1$s;',
                                                        esc_html( $hover_overlay_color )
                                                ),
                                        ) );
                                }
        
                                $data_icon = '' !== $hover_icon
                                        ? sprintf(
                                                ' data-icon="%1$s"',
                                                esc_attr( et_pb_process_font_icon( $hover_icon ) )
                                        )
                                        : '';
        
                                $overlay_output = sprintf(
                                        '<span class="et_overlay%1$s"%2$s></span>',
                                        ( '' !== $hover_icon ? ' et_pb_inline_icon' : '' ),
                                        $data_icon
                                );
                        }
        
                        if (has_post_thumbnail( get_the_ID() ) ) {
                                    $image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), $image_size );
                                    $src = $image[0];
        
                                    $output = sprintf(
                                            '<img src="%1$s" alt="%2$s"%3$s />
                                            %4$s',
                                            esc_url( $src ),
                                            esc_attr( $alt ),
                                            ( '' !== $title_text ? sprintf( ' title="%1$s"', esc_attr( $title_text ) ) : '' ),
                                            'on' === $is_overlay_applied ? $overlay_output : ''
                                    );
                    
                                    if ( 'on' === $show_in_lightbox ) {
                                            $output = sprintf( '<a href="%1$s" class="et_pb_lightbox_image" title="%3$s">%2$s</a>',
                                                    esc_url( $src ),
                                                    $output,
                                                    esc_attr( $alt )
                                            );
                                    } else if ( '' !== $url ) {
                                            $output = sprintf( '<a href="%1$s"%3$s>%2$s</a>',
                                                    esc_url( $url ),
                                                    $output,
                                                    ( 'on' === $url_new_window ? ' target="_blank"' : '' )
                                            );
                                    } else if (!is_single()) {
                                            $output = sprintf( '<a href="%1$s"%3$s>%2$s</a>',
                                                    esc_url( get_permalink(get_the_ID()) ),
                                                    $output,
                                                    ( 'on' === $url_new_window ? ' target="_blank"' : '' )
                                            );    
                                    }
                    
                                    $animation = '' === $animation ? ET_Global_Settings::get_value( 'et_pb_image-animation' ) : $animation;
                    
                                    $output = sprintf(
                                            '<div%5$s class="et_pb_module et-waypoint et_pb_image%2$s%3$s%4$s%6$s">
                                                    %1$s
                                            </div>',
                                            $output,
                                            esc_attr( " et_pb_animation_{$animation}" ),
                                            ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( ltrim( $module_class ) ) ) : '' ),
                                            ( 'on' === $sticky ? esc_attr( ' et_pb_image_sticky' ) : '' ),
                                            ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
                                            'on' === $is_overlay_applied ? ' et_pb_has_overlay' : ''
                                    );
                        }
        
                        return $output;
                }
            }
        
            new sb_et_cpt_li_gallery_module();

?>