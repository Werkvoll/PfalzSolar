<?php

get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

<div id="main-content">

<?php if ( ! $is_page_builder_used ) : ?>

	<div class="container">
		<div id="content-area" class="clearfix">
			<div id="left-area">

<?php endif; ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<?php if ( ! $is_page_builder_used ) : ?>

					<h1 class="entry-title main_title"><?php the_title(); ?></h1>
				<?php
					$thumb = '';

					$width = (int) apply_filters( 'et_pb_index_blog_image_width', 1080 );

					$height = (int) apply_filters( 'et_pb_index_blog_image_height', 675 );
					$classtext = 'et_featured_image';
					$titletext = get_the_title();
					$thumbnail = get_thumbnail( $width, $height, $classtext, $titletext, $titletext, false, 'Blogimage' );
					$thumb = $thumbnail["thumb"];

					if ( 'on' === et_get_option( 'divi_page_thumbnails', 'false' ) && '' !== $thumb )
						print_thumbnail( $thumb, $thumbnail["use_timthumb"], $titletext, $width, $height );
				?>

				<?php endif; ?>

					<div class="entry-content">
					<?php
						the_content();

						if ( ! $is_page_builder_used )
							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
					?>
					</div> <!-- .entry-content -->

				<div class="et_pb_section  et_pb_section_10 et_pb_with_background et_section_regular">
				
				
					
					<div id="footer_logo" class=" et_pb_row et_pb_row_16">
				
				<div class="et_pb_column et_pb_column_4_4  et_pb_column_25">
				
				<div class="et_pb_module et-waypoint et_pb_image et_pb_animation_left et_pb_image_3 et_always_center_on_mobile et_pb_image_sticky">
				<img src="https://pfalzsolar-exellent1988.c9users.io/wp-content/uploads/2016/02/footer_01.png" alt="" />
			
			</div>
			</div> <!-- .et_pb_column -->
					
			</div> <!-- .et_pb_row -->
				
			</div> <!-- .et_pb_section --><div class="et_pb_section footer_new et_pb_section_12 et_pb_with_background et_section_regular">
				
				
					
					<div class=" et_pb_row et_pb_row_17">
				
				<div class="et_pb_column et_pb_column_1_4  et_pb_column_26">
				
				<div id="footer_first_row" class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left footer_spalten et_pb_text_12">
				

<ul><li>PFALZSOLAR GmbH</li><li>Kurfürstenstraße 29</li><li>67061 Ludwigshafen</li><li>Telefon: 0621 585 2506</li><li>Fax: 0621 585 2490</li><li>E-Mail: <a href="mailto:info@pfalzsolar.de">info@pfalzsolar.de</a></li></ul>


			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_4  et_pb_column_27">
				
				<div id="footer_spalte_02" class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left footer_spalten et_pb_text_13">
				

<ul><li>hidden</li><li><a href="/privatkunden">Privatkunden</a></li><li><a href="/investoren">Geschäftskunden, Investoren &amp; Partner</a></li><li><a href="/referenzen/">Referenzen</a></li><li><a href="/wir-sind/">Wir sind</a></li></ul>


			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_4  et_pb_column_28">
				
				<div id="footer_spalte_03" class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left footer_spalten et_pb_text_14">
				

<ul><li>hidden</li><li><a href="/kontakt/">Kontakt</a></li><li><a href="/presse/">Presse</a></li><li><a href="/news/">News</a></li><li><a href="/karriere/">Karriere</a></li></ul>


			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_4  et_pb_column_29">
				
				<div id="footer_spalte_04" class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left footer_spalten et_pb_text_15">
				

<ul><li>hidden</li><li><a href="/impressum/">Impressum</a></li><li><a href="/agb/">AGB</a></li><li><a href="/widerruf/">Widerruf</a></li><li><a href="/datenschutz/">Datenschutz</a></li></ul>


			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column -->
					
			</div> <!-- .et_pb_row -->
				
			</div> <!-- .et_pb_section -->
				</div> <!-- .entry-content -->
				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>

<?php if ( ! $is_page_builder_used ) : ?>

			</div> <!-- #left-area -->

			<?php get_sidebar(); ?>
		</div> <!-- #content-area -->
	</div> <!-- .container -->

<?php endif; ?>

</div> <!-- #main-content -->

<?php get_footer(); ?>