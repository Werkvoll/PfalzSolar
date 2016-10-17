




<!-- START  Slider -->
	 <script>
 var runned = 0;
	jQuery(document).ready(function($) {
	   
$("#psc_plugin").cycle({
      fx: 'scrollHorz',
      //next: ".next a",
      //prev: ".prev a",
      startingSlide: 0,
      nowrap:  1, 
      timeout: 0,
      fit:1
     
    });
});
</script>
<!-- START SCRIPT for Dependancies -->
<?php
wp_enqueue_script( 'validation' );
wp_enqueue_style('ggew-solar-rechner');

?>
<div class="plugin_wrapper">
<form id="SolarCalc">
<div id="psc_plugin">
    <!-- Start Page   PLZ-->  
  <div id="page" >
  <div class="psc_slider_content">
   <div class="calcheader"><h2 class="left">Bitte gen Sie Ihre PLZ an</h2><h2 class="right">1/6</h2></div>
   <div class='PLZ'>
   <input class="PLZ input_small" id="PLZ"  type="number" step ='' value='64289' name="PLZ">
    <label class="PLZ_label label" for="PLZ">PLZ</label>
     </div>
    <div class="next"><a onclick='validate_PLZ();' >Weiter</a></div>
  </div>
  </div>
   <!-- End Page  PLZ -->
   <!-- Start Page  Dachausrichtung-->  
  <div id="page" >
  <div class="prev" onclick='jQuery("#psc_plugin").cycle("prev");'><a >zurück</a></div>
  <div class="psc_slider_content">
    <div class="calcheader"><h2 class="left">Dachausrichtung</h2><h2 class="right">2/6</h2></div>
    
   
    <div class="Radios">
     <div class="calcinput"><input type="radio"  id="Dachausrichtung_01" name="Dachausrichtung" value="270" ><label class="label Dachausrichtung_01" for="Dachausrichtung_01"><div class="img"></div> West</label></div>
     <div class="calcinput"><input type="radio"  id="Dachausrichtung_02"name="Dachausrichtung" value="225"checked ><label class="label Dachausrichtung_02" for="Dachausrichtung_02"> <div class="img"></div>Süd-West</label></div>
  	 <div class="calcinput"><input type="radio"  id="Dachausrichtung_03" name="Dachausrichtung" value="180"><label class="label Dachausrichtung_03" for="Dachausrichtung_03"><div class="img"></div>Süd</label></div>
  	 <div class="calcinput"><input type="radio"  id="Dachausrichtung_04" name="Dachausrichtung" value="160"><label class="label Dachausrichtung_04" for="Dachausrichtung_04"><div class="img"></div>Ost-West</label></div>
     <div class="calcinput"><input type="radio" id="Dachausrichtung_05" name="Dachausrichtung" value="135" ><label class="label Dachausrichtung_05" for="Dachausrichtung_05"><div class="img"></div>Süd-Ost</label></div>
     <div class="calcinput"><input type="radio"  id="Dachausrichtung_06" name="Dachausrichtung" value="90" ><label class="label Dachausrichtung_06" for="Dachausrichtung_06"><div class="img"></div>Ost</label></div>
  	 
  	 
  	 
  	 </div>
  	 </div>
    <div class="next" onclick='jQuery("#psc_plugin").cycle("next");'><a >Weiter</a></div>
  </div>
   <!-- End Page  Dachausrichtung -->
   
 <!-- Start Page   Dachneigung-->  
  <div id="page" >
      <div class="prev" onclick='jQuery("#psc_plugin").cycle("prev");'><a >zurück</a></div>
  <div class="psc_slider_content">
   <div class="calcheader"><h2 class="left">Dachneigung</h2><h2 class="right">3/6</h2></div>
    
    
     <div  class="Radios">
     <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_02" value="8" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"> <label class="label Dachneigung_02" for="Dachneigung_02"><div class="img"></div>0°-10°</label></div>
     <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_03" value="20" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"> <label class="label Dachneigung_03" for="Dachneigung_03"><div class="img"></div>11°-24°</label></div>
  	 <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_04" checked value="35" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');" ><label class="label Dachneigung_04" for="Dachneigung_04"><div class="img"></div>25°-35°</label></div>
  	 <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_05" value="40" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"><label class="label Dachneigung_05" for="Dachneigung_05"><div class="img"></div>36°-50°</label></div>
  	 <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_06" value="51" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"><label class="label Dachneigung_06" for="Dachneigung_06"><div class="img"></div>>50°</label></div>
  	 <div class="calcinput"><input type="radio" class="other" name="Dachneigung" id="Dachneigung_01" value="nil" onclick="jQuery('.show-onclick1').toggle(500,'swing');jQuery('#label_other').toggle(500,'swing');jQuery('label.Dachneigung_01').hide(500,'swing');"><label class="label_other Flaeche_01" for="Dachneigung_01"><div class="img"></div>eigene Angabe </label></div>
  	  <input class=' grad_org org show-onclick1 input_small' type="number" id="Dachneigung_01" name="Dachneigung_other"  value='35' step='1' size='2'style="display:none;">
  	  <input class=' grad_dup dup show-onclick1 input_small' type="text" id="Dachneigung_01"  value="35°" size='2'style="display:none;">
    <p id="label_other" style="display:none;">Sofern Sie den exakten Winkel kennen, können Sie diesen hier eintragen</p>
  	  </div>
    <div class="next" onclick='jQuery("#psc_plugin").cycle("next");'><a >Weiter</a></div>
  </div>
  </div>
   <!-- End Page Dachneigung -->
 
 
 
 
  <!-- Start Page 3  Dachfläche-->  
  <div id="page" >
  <div class="prev" onclick='jQuery("#psc_plugin").cycle("prev");'><a >zurück</a></div>
  <div class="psc_slider_content">
      <div class="calcheader"><h2 class="left">maximal verfügbare Dachfäche</h2><h2 class="right">4/6</h2></div>
     
      <div  class="Radios">
      <div class="calcinput"><input type="radio"  id="Flaeche_02"  name="Flaeche" value="20" onclick="jQuery('.show-onclick2').hide(500,'swing')" ><label class="label Flaeche_02" for="Flaeche_02"><div class="img"></div> 20m² </label></div>
     <div class="calcinput"><input type="radio"  id="Flaeche_03"  name="Flaeche" value="40" onclick="jQuery('.show-onclick2').hide(500,'swing')"><label class="label Flaeche_03" for="Flaeche_03"><div class="img"></div> 40m²</label></div>
  	 <div class="calcinput"><input type="radio"  id="Flaeche_04"  name="Flaeche" value="60"checked onclick="jQuery('.show-onclick2').hide(500,'swing')"><label class="label Flaeche_04" for="Flaeche_04"><div class="img"></div> 60m²</label></div>
  	 <div class="calcinput"><input type="radio"  id="Flaeche_05"  name="Flaeche" value="80" onclick="jQuery('.show-onclick2').hide(500,'swing')"><label class="label Flaeche_05" for="Flaeche_05"><div class="img"></div> 80m²</label></div>
  	 <div class="calcinput"><input type="radio" class="other"  id="Flaeche_01" name="Flaeche" value="nil" onclick="jQuery('.show-onclick2').show(500,'swing')"><label class="label_other Flaeche_01" for="Flaeche_01"><div class="img"></div>eigene Angabe </label></div>
  	 <p class="show-onclick2" id="label_other2" style="display:none;">Sofern Sie den exakten Bauraum kennen, können Sie diesen hier in m² eintragen</p>
  	 <input class='square_org org show-onclick2 input_small other' type="number" name="Flaeche_other" size='2'  value='35' step ='1'style="display:none;">
  	 <input class='square_dup dup show-onclick2 input_small other' type="text"  value='35m²' size='2'style="display:none;">
  	 </div>
  	  
    </div>
    <div class="next"><a   onclick='validate_Dach();'>Weiter</a></div>
  </div>
   <!-- End Page 3 Dachfläche-->
  <!-- Start Page 5 Individuelle Daten -->  
  <div id="page" >
  <div class="prev" onclick='jQuery("#psc_plugin").cycle("prev");'><a >zurück</a></div>
  <div class="psc_slider_content">
      <div class="calcheader"><h2 class="left">Ihre individuellen Daten</h2><h2 class="right">5/6</h2></div>
    <div  class="Radios">
    <div class="calcinput individual_data">
    <div>
    <div class="persons">
        <div id="person_1" class="person" onclick="person('1',true);" onmouseover="person('1',false);"></div>
        <div id="person_2" class="person" onclick="person('2',true);"onmouseover="person('2',false);"></div>
        <div id="person_3" class="person" onclick="person('3',true);"onmouseover="person('3',false);"></div>
        <div id="person_4" class="person" onclick="person('4',true);"onmouseover="person('4',false);"></div>
        <div id="person_5" class="person" onclick="person('5',true);"onmouseover="person('5',false);"></div>
    </div>
    <input class="kw_org org Verbrauch input_small" id="Verbrauch"  type="number" step ='250' value='1500' name="Verbrauch">
    <input class="kw_dup dup Verbrauch input_small" id="Verbrauch_dup dup"  type="text" value="1500 kWh/Jahr">
    <label class="Verbrauch_label label" for="Verbrauch">Ihr Stromverbrauch in kWh/Jahr</label><i class=" infobutton infobutton_2 popmake-infobutton_1">i</i>
    </div>
    <div>
    <label class="label">Sind in Ihrem Haushalt regelmäßig Personen über Mittag zu Hause?</label><i class=" infobutton infobutton_2 popmake-infobutton_2">i</i>  
    <div class="day">
          <input type="checkbox" value="1" id="day" name="Day" checked />
      <label for="day"></label>
    </div>
    </div>
    <div>
    <label class="label">Sind Sie bereits Stromkunde der GGEW</label><i class=" infobutton infobutton_2 ">i</i>  
    <div class="day">
          <input type="checkbox" value="1" id="day" name="Kunde" checked />
      <label for="Kunde"></label>
    </div>
    </div>
    <div>
    <input class="cent_org org Preis input_small" id="Preis"  type="number" step='0.1' name="Preis" value="22">
    <input class="cent_dup dup Preis input_small" id="Preis"  type="text" value='27 cent/kWh' >
    <label class="Preis_label label" for="Preis">Ihr aktueller Brottostrompreis in Cent/kWh</label><i class=" infobutton infobutton_2 popmake-infobutton_3">i</i>
    </div>
    </div>
    </div>
    </div>
    <div class="next"><a onclick='calculation("GGEW");' >Weiter</a></div>
  </div></form>
   <!-- End Page 5 -->
   
    <!-- Start Page 6 Ergebnis-->  
 <div id="page" >
  <div class="prev" onclick='jQuery("#psc_plugin").cycle("prev");'><a>zurück</a></div>
  <div class="psc_slider_content">
    <div class="calcheader"><h2 class="left">Pachten Sie ihre Solaranlage</h2><h2  class="right">6/6</h2></div>
    <div class='result'>
        <div id='over_100' style="display:none;"></div>
        <div class='Size_S left'>
            <div class="no_SP"><h2 class='Size_head'>Sonnendach S</h2><i class=' infobutton popmake-calc_s_info'>i</i></div>
            <div class="SP"><h2 class='Size_head'>Sonnendach S mit Speicher</h2><i class=' infobutton popmake-calc_s_info_sp'>i</i></div>
            
            <div class="Akku">
                     <h3 id='Akku_S'>Ergebnis mit Speicher anzeigen! </h3>
            
                </div>
            <div class='Leistung E_box'>
                    <div class="no_SP"><h3 id='Power_S'>Leistung Ihrer PV-Anlage: </h3><div class='values'><h3 class ='val' id='Power_S_val'>123</h3><h4  class ='val_unit' >kWp</h5> </div></div>
                    <div class="SP"><h3 id='Power_S'>Leistung Ihrer PV-Anlage: </h3><div class='values'><h3 class ='val' id='Power_S_val_SP'>123</h3><h4 class ='val_unit' >kWp</h5></div></div>
               
                
            
                </div><i class=' no_SP infobutton popmake-calc_s_info_2'>i</i>
                    <i class='SP infobutton popmake-calc_s_info_2_sp'>i</i>
            <div class='Montly E_box'>
                    <div class="no_SP"><h3 id='Montly_S'>Monatliche Pacht: </h3><div class='values'><h3 class ='val' id='Montly_S_val'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>
                    <div class="SP"><h3 id='Montly_S'>Monatliche Pacht: </h3><div class='values'><h3 class ='val' id='Montly_S_val_SP'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>


               </div><i class=' no_SP infobutton popmake-calc_s_info_3'>i</i>
                    <i class='SP infobutton popmake-calc_s_info_3_sp'>i</i>
            <div class='for_customers E_box'>
                    <div class="no_SP"><h3 id='Cust_Savings'>Monatliche Ersparnis für GGEW-Stromkunden: </h3><div class='values_2'><h3 class ='val' id='Cust_Savings_S_val'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>
                    <div class="SP"><h3 id='Cust_Savings'>Monatliche Ersparnis für GGEW-Stromkunden: </h3><div class='values_2'><h3 class ='val' id='Cust_Savings_S_val_SP'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>


               
                </div><i class=' no_SP infobutton popmake-calc_info_4'>i</i>
                    <i class='SP infobutton popmake-calc_info_4'>i</i>
            <div class='total_savings E_box'>
                     <div class="no_SP"><h3 id='Total_Savings'>Ihre Ersparnis über die Anlagenlebensdauer:</h3><div class='values_2'><h3 class ='val' id='Total_Savings_S_val'>123</h3><h4 class ='val_unit' >€*</h4></div></div>
                    <div class="SP"><h3 id='Total_Savings'>Ihre Ersparnis über die Anlagenlebensdauer:</h3><div class='values_2'><h3 class ='val' id='Total_Savings_S_val_SP'>123</h3><h4 class ='val_unit' >€*</h4></div></div>


                </div><i class=' no_SP infobutton popmake-calc_s_info_5'>i</i>
                    <i class='SP infobutton popmake-calc_s_info_5_sp'>i</i>
            <div class='kontakt_CTA E_box' onclick='toggleContact("opt");'>
                <p>Fordern Sie ihr unverbindliches Angebot an.</p>
            </div>
        
        </div>
     <div class='Size_L right'>
             <div class="no_SP_L"><h2 class='Size_head'>Sonnendach L</h2><i class=' infobutton popmake-calc_l_info'>i</i></div>
            <div class="SP_L"><h2 class='Size_head'>Sonnendach L mit Speicher</h2><i class=' infobutton popmake-calc_l_info_sp'>i</i></div>
            
            <div class="Akku">
                      <h3 id='Akku_L'>Ergebnis mit Speicher anzeigen! </h3>
                        
                </div>
            <div class='Leistung E_box'>
                    <div class="no_SP_L"><h3 id='Power_L'>Leistung Ihrer PV-Anlage: </h3><div class='values'><h3 class ='val' id='Power_L_val'>123</h3><h4 class ='val_unit' >kWp</h4></div></div>
                    <div class="SP_L"><h3 id='Power_L'>Leistung Ihrer PV-Anlage: </h3><div class='values'><h3 class ='val'  id='Power_L_val_SP'>123</h3><h4 class ='val_unit' >kWp</h4></div></div>


                </div><i class=' no_SP_L infobutton popmake-calc_l_info_2'>i</i>
                    <i class='SP_L infobutton popmake-calc_l_info_2_sp'>i</i>
            <div class='Montly E_box'>
                    <div class="no_SP_L"><h3 id='Montly_L'>Monatliche Pacht: </h3><div class='values'><h3 class ='val' id='Montly_L_val'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>
                    <div class="SP_L"><h3 id='Montly_L'>Monatliche Pacht: </h3><div class='values'><h3 class ='val' id='Montly_L_val_SP'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>


                </div><i class=' no_SP_L infobutton popmake-calc_l_info_3'>i</i>
                    <i class='SP_L infobutton popmake-calc_l_info_3_sp'>i</i>
            <div class='for_customers E_box'>
                    <div class="no_SP_L"><h3 id='Cust_Savings'>Monatliche Ersparnis für Kunden: </h3><div class='values_2'><h3 class ='val'  id='Cust_Savings_L_val'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>
                    <div class="SP_L"><h3 id='Cust_Savings'>Monatliche Ersparnis für Kunden: </h3><div class='values_2'><h3 class ='val'  id='Cust_Savings_L_val_SP'>123</h3><h4 class ='val_unit' >€</h4><h5 class='mwst'>(ink. MwSt.)</h5></div></div>


                </div><i class=' no_SP_L infobutton popmake-calc_info_4'>i</i>
                    <i class='SP_L infobutton popmake-calc_info_4'>i</i>
            <div class='total_savings E_box'>
                     <div class="no_SP_L"><h3 id='Total_Savings'>Ihre Ersparnis über die Anlagenlebensdauer:</h3><div class='values_2'><h3 class ='val'  id='Total_Savings_L_val'>123</h3><h4 class ='val_unit' >€*</h4></div></div>
                    <div class="SP_L"><h3 id='Total_Savings'>Ihre Ersparnis über die Anlagenlebensdauer:</h3><div class='values_2'><h3 class ='val'  id='Total_Savings_L_val_SP'>123</h3><h4 class ='val_unit' >€*</h4></div></div>

                </div><i class=' no_SP_L infobutton popmake-calc_l_info_5'>i</i>
                    <i class='SP_L infobutton popmake-calc_l_info_5_sp'>i</i>
            <div class='kontakt_CTA E_box ' onclick='toggleContact("max");'>
                <p>Fordern Sie ihr unverbindliches Angebot an.</p>
            </div>
        
        </div>
        <div class='subtext'><p>*Bitte beachten Sie, dass es sich bei den Ergebnissen um Prognosewerte handelt, die sich auf grund des Wetters oder einer Veränderung ihrer Verbrauchsverhalten ändern können.</p></div>
    </div>
    
    </div>
    </div><!-- End Page 6 -->
    
<!-- Start Page 7 Kontakt -->  
  <div id="page" >
  <div class="prev" onclick='jQuery("#psc_plugin").cycle("prev");'><a>zurück</a></div>
  <div class="psc_slider_content">
    <div class="calcheader"><h2 class="left">Kontaktieren Sie uns</h2></div>
    <div class="Kontakt_Calc">
        <?php
        echo do_shortcode('[contact-form-7 id="451" title="Vielen Dank für Ihr Interesse"]');
       
        ?>
    </div>
    
    </div>
  </div>
   <!-- End Page 7 Kontakt-->
  </div>
 </div>
   
    
</div>
</div>




<script>
jQuery(document).ready(function($) {
//mapdraw(); // draw the map
inputs(); // resolve inputs

var codebox = jQuery('#Code_enabler'),
    state = false;
// Click Handler
codebox.on('click', function(){
   $('#code_plugin_box').toggle('500');  
    
   if(!state)$('#Code_enabler').html("Solarrechner schließen!");  
   else $('#Code_enabler').html("Solarrechner öffnen!");  
    
    state =!state;
    
   
});
});
</script>

<!-- END SCRIPT for Dependancies -->