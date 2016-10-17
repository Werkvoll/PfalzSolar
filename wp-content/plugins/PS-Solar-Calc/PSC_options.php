<?php
add_action( 'admin_menu', 'PSC_add_admin_menu' );
add_action( 'admin_init', 'PSC_settings_init' );


function PSC_add_admin_menu(  ) { 

	add_options_page( 'Pfalz-Solar SolarCalculator', 'Pfalz-Solar SolarCalculator', 'manage_options', 'psc', 'psc_options_page' );

}


function PSC_settings_init(  ) { 

	register_setting( 'pluginPage', 'PSC_settings' );

	add_settings_section(
		'PSC_pluginPage_section', 
		__( 'Einstellungen für das Plugin  "Pfalz Solar - SolarCalc Plugin"', 'PSC' ), 
		'PSC_settings_section_callback', 
		'pluginPage'
	);

	add_settings_field( 
		'Modulesize', 
		__( 'Angabe der Modulgröße in m²', 'PSC' ), 
		'PSC_text_field_0_render', 
		'pluginPage', 
		'PSC_pluginPage_section' 
	);

	add_settings_field( 
		'Moduleperformance', 
		__( 'Angabe der ModulLeistung in kWp', 'PSC' ), 
		'PSC_text_field_1_render', 
		'pluginPage', 
		'PSC_pluginPage_section' 
	);

	add_settings_field( 
		'Reward', 
		__( 'Vergütung in Cent/ kWh für Anlagen bis 10 kWp ', 'PSC' ), 
		'PSC_text_field_2_render', 
		'pluginPage', 
		'PSC_pluginPage_section' 
	);

	add_settings_field( 
		'Investment', 
		__( 'Investitionskosten pro kWp', 'PSC' ), 
		'PSC_text_field_3_render', 
		'pluginPage', 
		'PSC_pluginPage_section' 
	);
	add_settings_field( 
		'Zusatz', 
		__( 'Zusatzkosten pro kWp für Anlagen < 3kWp', 'PSC' ), 
		'PSC_text_field_3_b_render', 
		'pluginPage', 
		'PSC_pluginPage_section' 
	);
	
	// GGEW PART
	add_settings_section(
		'PSC_GGEW_section', 
		__( 'Einstellungen für die GGEW Variablen', 'PSC' ), 
		'PSC_settings_section_callback2', 
		'pluginPage'
	);

	add_settings_field( 
		'Vertragslaufzeit', 
		__( 'Vertragslaufzeit in Monaten', 'PSC' ), 
		'PSC_text_field_4_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);

	add_settings_field( 
		'IvKosten', 
		__( 'spez. Investitionskosten PV', 'PSC' ), 
		'PSC_text_field_5_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);

	add_settings_field( 
		'Wartung', 
		__( 'Wartungskosten in € p.a.', 'PSC' ), 
		'PSC_text_field_6_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	add_settings_field( 
		'Wartung_SP', 
		__( 'Wartungskosten mit Speicher in € p.a.', 'PSC' ), 
		'PSC_text_field_6b_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	add_settings_field( 
		'Versicherung', 
		__( 'Versicherungskosten in € p.a. pro kWp', 'PSC' ), 
		'PSC_text_field_7_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	
	add_settings_field( 
		'Platzhalter', 
		__( 'Platzhalter GGEW', 'PSC' ), 
		'PSC_text_field_8_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	
	add_settings_field( 
		'Inflation', 
		__( 'Inflation in %', 'PSC' ), 
		'PSC_text_field_9_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	add_settings_field( 
		'S_Inflation', 
		__( 'Srompreisinflation in %', 'PSC' ), 
		'PSC_text_field_9a_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	add_settings_field( 
		'Reward_future', 
		__( 'Vergütung in Cent/ kWh für Anlagen bis 10 kWp ab dem 20\'n Jahr ', 'PSC' ), 
		'PSC_text_field_9b_render', 
		'pluginPage', 
		'PSC_pluginPage_section' 
	);
	
	add_settings_field( 
		'Zins', 
		__( 'Zinssatz p.a.', 'PSC' ), 
		'PSC_text_field_10_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	
	add_settings_field( 
		'Rendite', 
		__( 'Renditeerwartung EK vor Steuern in %', 'PSC' ), 
		'PSC_text_field_11_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	
	add_settings_field( 
		'FkAnteil', 
		__( 'FK Anteil in %', 'PSC' ), 
		'PSC_text_field_12_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	
	add_settings_field( 
		'Kundenbonus', 
		__( 'Abzug GGEW Kunde in € p.m.', 'PSC' ), 
		'PSC_text_field_13_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	add_settings_field( 
		'Speicher', 
		__( 'Kosten für den Stromspeicher in €', 'PSC' ), 
		'PSC_text_field_14_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
	add_settings_field( 
		'PLZ', 
		__( 'Akzeptierte Postleitzahlen  Kommagetrennt', 'Wordpress' ), 
		'PSC_textarea_field_0_render', 
		'pluginPage', 
		'PSC_GGEW_section' 
	);
}


function PSC_text_field_0_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Modulesize]' value='<?php echo $options['Modulesize']; ?>'>
	<?php

}


function PSC_text_field_1_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Moduleperformance]' value='<?php echo $options['Moduleperformance']; ?>'>
	<?php

}


function PSC_text_field_2_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Reward]' value='<?php echo $options['Reward']; ?>'>
	<?php

}


function PSC_text_field_3_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Investment]' value='<?php echo $options['Investment']; ?>'>
	<?php

}
function PSC_text_field_3_b_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Zusatz]' value='<?php echo $options['Zusatz']; ?>'>
	<?php

}



//GGEW Part
function PSC_text_field_4_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Vertragslaufzeit]' value='<?php echo $options['Vertragslaufzeit']; ?>'>
	<?php

}
function PSC_text_field_5_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[IvKosten]' value='<?php echo $options['IvKosten']; ?>'>
	<?php

}
function PSC_text_field_6_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Wartung]' value='<?php echo $options['Wartung']; ?>'>
	<?php

}
function PSC_text_field_6b_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Wartung_SP]' value='<?php echo $options['Wartung_SP']; ?>'>
	<?php

}
function PSC_text_field_7_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Versicherung]' value='<?php echo $options['Versicherung']; ?>'>
	<?php

}
function PSC_text_field_8_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Platzhalter]' value='<?php echo $options['Platzhalter']; ?>'>
	<?php

}
function PSC_text_field_9_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Inflation]' value='<?php echo $options['Inflation']; ?>'>
	<?php

}function PSC_text_field_9a_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[S_Inflation]' value='<?php echo $options['S_Inflation']; ?>'>
	<?php

}
function PSC_text_field_9b_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Reward_future]' value='<?php echo $options['Reward_future']; ?>'>
	<?php

}
function PSC_text_field_10_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Zins]' value='<?php echo $options['Zins']; ?>'>
	<?php

}
function PSC_text_field_11_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Rendite]' value='<?php echo $options['Rendite']; ?>'>
	<?php

}
function PSC_text_field_12_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[FkAnteil]' value='<?php echo $options['FkAnteil']; ?>'>
	<?php

}
function PSC_text_field_13_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Kundenbonus]' value='<?php echo $options['Kundenbonus']; ?>'>
	<?php

}
function PSC_text_field_14_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<input type='text' name='PSC_settings[Speicher]' value='<?php echo $options['Speicher']; ?>'>
	<?php

}
function PSC_textarea_field_0_render(  ) { 

	$options = get_option( 'PSC_settings' );
	?>
	<textarea cols='26' rows='15' name='PSC_settings[PLZ]'> 
		<?php echo $options['PLZ']; ?>
 	</textarea>
	<?php

}


function PSC_settings_section_callback(  ) { 

	echo __( 'Berechnungspremissen', 'PSC' );

}
function PSC_settings_section_callback2(  ) { 

	echo __( 'GGEWpremissen', 'PSC' );

}


function PSC_options_page(  ) { 

	?>
	<form action='options.php' method='post'>
		
		<h2>PSC</h2>
		
		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>
		
	</form>
	<?php

}

?>