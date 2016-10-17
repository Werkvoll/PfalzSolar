<!-- START  Slider -->
	 <script>
 var runned = 0;
	jQuery(document).ready(function($) {
	   
$("#psc_plugin").cycle({
      fx: 'scrollHorz',
      prev: ".prev a",
      startingSlide: 0,
      nowrap:  1, 
      timeout: 0,
      fit:1
     
    });
});
</script>
<div class="plugin_wrapper">
<form id="SolarCalc">
<div id="psc_plugin">
 <!-- Start Page 1  Dachneigung-->  
  <div id="page" >
  <div class="psc_slider_content">
   <div class="calcheader"><h2 class="left">Dachneigung</h2><h2 class="right">1/7</h2></div>
    
    
     <div  class="Radios">
     <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_02" value="8" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"> <label class="label Dachneigung_02" for="Dachneigung_02"><div class="img"></div>0°-10°</label></div>
     <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_03" value="20" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"> <label class="label Dachneigung_03" for="Dachneigung_03"><div class="img"></div>11°-24°</label></div>
  	 <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_04" checked value="35" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');" ><label class="label Dachneigung_04" for="Dachneigung_04"><div class="img"></div>25°-35°</label></div>
  	 <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_05" value="40" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"><label class="label Dachneigung_05" for="Dachneigung_05"><div class="img"></div>36°-50°</label></div>
  	 <div class="calcinput"><input type="radio" name="Dachneigung" id="Dachneigung_06" value="51" onclick="jQuery('.show-onclick1').hide(500,'swing');jQuery('label.Dachneigung_01').show(500,'swing');;jQuery('p#label_other').hide(500,'swing');"><label class="label Dachneigung_06" for="Dachneigung_06"><div class="img"></div>>50°</label></div>
  	 </div>
  	  <div class="calcinput"><input type="radio" class="other" name="Dachneigung" id="Dachneigung_01" value="null" onclick="jQuery('.show-onclick1').toggle(500,'swing');jQuery('#label_other').toggle(500,'swing');jQuery('label.Dachneigung_01').hide(500,'swing');">
  	  <input class=' grad_org show-onclick1 input_small' type="number" id="Dachneigung_01" name="Dachneigung_other"  value='35' step='1' size='2'style="display:none;" >
  	  <input class=' grad_dup show-onclick1 input_small' type="text" id="Dachneigung_01"  placeholder="35°" size='2'style="display:none;">
    <p id="label_other" style="display:none;">Sofern Sie den exakten Winkel kennen, können Sie diesen hier eintragen</p>
  	  <label id="label_other" class="label_small Dachneigung_01" for="Dachneigung_01">Sonstige</label></div>
  	 </div>
    <div class="next" onclick='jQuery("#psc_plugin").cycle("next");'><a href="#">Weiter</a></div>
  </div>
   <!-- End Page 1 Dachneigung -->
 
 <!-- Start Page 2 Dachausrichtung-->  
  <div id="page" >
  <div class="prev"><a href="#">zurück</a></div>
  <div class="psc_slider_content">
    <div class="calcheader"><h2 class="left">Dachausrichtung</h2><h2 class="right">2/7</h2></div>
    
   
    <div class="Radios">
    <div class="calcinput_2"><input type="radio"  id="Dachausrichtung_01" name="Dachausrichtung" value="270" ><label class="label Dachausrichtung_01" for="Dachausrichtung_01"><div class="img"></div> West</label></div>
     <div class="calcinput_2"><input type="radio"  id="Dachausrichtung_02"name="Dachausrichtung" value="225" ><label class="label Dachausrichtung_02" for="Dachausrichtung_02"> <div class="img"></div>Süd-West</label></div>
  	 <div class="calcinput_2"><input type="radio"  id="Dachausrichtung_03" name="Dachausrichtung" checked value="180"><label class="label Dachausrichtung_03" for="Dachausrichtung_03"><div class="img"></div>Süd</label></div>
  	 <div class="calcinput_2"><input type="radio"  id="Dachausrichtung_04" name="Dachausrichtung" value="160"><label class="label Dachausrichtung_04" for="Dachausrichtung_04"><div class="img"></div>Ost-West</label></div>
     <div class="calcinput_2"><input type="radio" id="Dachausrichtung_05" name="Dachausrichtung" value="135" ><label class="label Dachausrichtung_05" for="Dachausrichtung_05"><div class="img"></div>Süd-Ost</label></div>
     <div class="calcinput_2"><input type="radio"  id="Dachausrichtung_06" name="Dachausrichtung" value="90" ><label class="label Dachausrichtung_06" for="Dachausrichtung_06"><div class="img"></div>Ost</label></div>
  	 
  	 
  	 
  	 
  	 
  	 </div>
  	 </div>
    <div class="next" onclick='jQuery("#psc_plugin").cycle("next");'><a href="#">Weiter</a></div>
  </div>
   <!-- End Page 2 Dachausrichtung -->
 
 
  <!-- Start Page 3  Dachfläche-->  
  <div id="page" >
  <div class="prev"><a href="#">zurück</a></div>
  <div class="psc_slider_content">
      <div class="calcheader"><h2 class="left">Dachfäche</h2><h2 class="right">3/7</h2></div>
     
      <div  class="Radios">
      <div class="calcinput"><input type="radio"  id="Flaeche_02"  name="Flaeche" value="20" onclick="jQuery('.show-onclick2').hide(500,'swing')" ><label class="label Flaeche_02" for="Flaeche_02"><div class="img"></div> 20m² </label></div>
     <div class="calcinput"><input type="radio"  id="Flaeche_03"  name="Flaeche" value="40" checked onclick="jQuery('.show-onclick2').hide(500,'swing')"><label class="label Flaeche_03" for="Flaeche_03"><div class="img"></div> 40m²</label></div>
  	 <div class="calcinput"><input type="radio"  id="Flaeche_04"  name="Flaeche" value="60" onclick="jQuery('.show-onclick2').hide(500,'swing')"><label class="label Flaeche_04" for="Flaeche_04"><div class="img"></div> 60m²</label></div>
  	 <div class="calcinput"><input type="radio"  id="Flaeche_05"  name="Flaeche" value="80" onclick="jQuery('.show-onclick2').hide(500,'swing')"><label class="label Flaeche_05" for="Flaeche_05"><div class="img"></div> 80m²</label></div>
  	 <div class="calcinput"><input type="radio" class="other"  id="Flaeche_01" name="Flaeche" value="null" onclick="jQuery('.show-onclick2').show(500,'swing')"><label class="label_other Flaeche_01" for="Flaeche_01"><div class="img"></div>eigene Angabe </label></div>
  	 <p class="show-onclick2" id="label_other2" style="display:none;">Falls Sie die genaue Größe Ihrer belegbaren Dachfläche kennen, können Sie diese hier in m² eintragen.</p>
  	 <input class='square_org show-onclick2 input_small other' type="number" name="Flaeche_other" size='2'  value='35' step ='1'style="display:none;">
  	 <input class='square_dup show-onclick2 input_small other' type="text"  placeholder='35m²' size='2'style="display:none;">
  	 </div>
  	  
    </div>
    <div class="next" onclick='validate_Dach();'><a href="#">Weiter</a></div>
  </div>
   <!-- End Page 3 Dachfläche-->
 
   <!-- Start Page 4 Karte --> 
  <div id="page">
    <div class="calcheader"><h2 class="left">Bundesland</h2><h2 class="right">4/7</h2></div>
    <div class="tip-selected"></div>
   <div id="map"></div>
   <div class="calcinput" style="display:none;"><input id="BL" type="hidden" name="Bundesland" value="NULL"></div>
    
    <div class="next" onclick='validate_BL();'><a href="#">Weiter</a></div>
  </div>
   <!-- End Page 4 Karte -->
 
  <!-- Start Page 5 Individuelle Daten -->  
  <div id="page" >
  <div class="prev"><a href="#">zurück</a></div>
  <div class="psc_slider_content">
      <div class="calcheader"><h2 class="left">Ihre individuellen Daten</h2><h2 class="right">5/7</h2></div>
    <div  class="Radios">
    <div class="calcinput individual_data">
    <div class="individual_inputs" >
    <div class="prev"><a href="#">zurück</a></div>
    <div class="persons">
        <div id="person_1" class="person" onclick="person('1',true);" onmouseover="person('1',false);"></div>
        <div id="person_2" class="person" onclick="person('2',true);"onmouseover="person('2',false);"></div>
        <div id="person_3" class="person" onclick="person('3',true);"onmouseover="person('3',false);"></div>
        <div id="person_4" class="person" onclick="person('4',true);"onmouseover="person('4',false);"></div>
        <div id="person_5" class="person" onclick="person('5',true);"onmouseover="person('5',false);"></div>
    </div>
    <input class="kw_org Verbrauch input_small" id="Verbrauch" name="Verbrauch" type="number" value='1500' style="display:none !important;" >
    <input class="kw_dup dup Verbrauch input_small" id="Verbrauch"  type="text" value="1500 kWh/Jahr">
    <label class="Verbrauch_label label_2" for="Verbrauch">Ihr Stromverbrauch in kWh/Jahr</label>
    <i class=" infobutton infobutton_2 popmake-infobutton_1">i</i>
    </div>
    
    <div class="individual_inputs">
    <input class="cent_org Preis input_small" id="Preis" name="Preis" type="number" value='23' style="display:none !important;" >
    <input class="cent_dup dup Preis input_small" id="Preis"  type="text" placeholder='23 cent/kWh' >
    <label class="Preis_label label_2" for="Preis">Ihr aktueller Nettostrompreis in Cent/kWh</label>
    <i class=" infobutton infobutton_2 popmake-infobutton_2">i</i>
    </div>
    
    <div class="individual_inputs">
    <!--input  class="pro_org Anteil input_small" id="Anteil" name="Anteil"   type="number" value='30'  style="display:none !important;">
    <input  class="pro_dup dup  Anteil input_small" id="Anteil"  type="text" placeholder='30%' >
    <div>-->
    <label class="label">Sind in Ihrem Haushalt regelmäßig Personen über Mittag zu Hause?</label><i class=" infobutton popmake-infobutton_3 popmake-infobutton_3">i</i>
    <div class="day">
          <input type="checkbox" value="1" id="day" name="Day" checked />
      <label for="day"></label>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    <div class="next"><a onclick='calculation("PS");' href="#">Weiter</a></div>
  </div>
   <!-- End Page 5 -->
   
   <!-- Start Page 6 Ergebnis-->  
  <div id="page" >
  <div class="prev" onclick='window.location.reload()'><a>NEU</a></div>
  <div class="psc_slider_content">

      <div class="calcheader"><h2 class="left">DAS SPAREN SIE MIT IHRER PHOTOVOLTAIKANLAGE</h2><h2  class="right">6/7</h2></div>
      <div id='results_table' >
        <ol id='results_list'>
          <li class='result_list_e'><div class='results_list_element light_blue'>
          <div class='element_left' id='e_1_l'> Auf ihrem Dach kann eine Photovotaikanlage mit folgender Leistung installiert werden:</div>
          <div class='element_right' id='e_1_r'><strong>$Size</strong> kWp</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element light_blue'>
          <div class='element_left' id='e_2_l'> Die vorausichtlichen Investitionskosten betragen:</div>
          <div class='element_right' id='e_2_r'><strong>$Invest</strong> €</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element light_blue'>
          <div class='element_left' id='e_3_l'> Pro Jahr produziert die Photovotaikanlage circa:</div>
          <div class='element_right' id='e_3_r'><strong>$Power</strong> kWp</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element light_blue'>
          <div class='element_left' id='e_4_l'> Ihr voraussichtlicher Eigenverbrauch beträgt:</div>
          <div class='element_right' id='e_4_r'><strong>$EV</strong> %</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element dark_blue'>
          <div class='element_left' id='e_5_l'> Durch den Eigenverbrauch von Solarstrom sparen Sie im Vergleich zum vollständigen Netzbezug jährlich circa:</div>
          <div class='element_right' id='e_5_r'><strong>$Savings</strong> %</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element dark_blue'>
          <div class='element_left' id='e_6_l'> Unter Berücksichtigung der Einspeisevergütung für nicht selbst verbrauchten Solarstrom sparen Sie jährlich zusätzlich circa:</div>
          <div class='element_right' id='e_6_r'><strong>$Savingsev</strong> 
          %</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element orange_back'>
          <div class='element_left' id='e_7_l'> In Summe ergibt sich eine Jährliche Ersparnis von:</div>
          <div class='element_right' id='e_7_r'><strong>$Savings_ges</strong> %</div>
          </div>
          </li>
          <li class='result_list_e'><div class='results_list_element lightblue new_subtext'>
          <div class='element_left' id='e_7_c'> *Die tatsächliche Anlagenleistung und der vorraussichtliche Kaufpreis hängen von den individuellen Gegebenheiten bei Ihnen vor Ort ab. Die Ergebnisse des PFALZSOLAR Solarrechners sind deshalb nicht verbindlich,
          sondern geben lediglich eine Tendenz an. Gerne besichtigen wir Ihre Dachfläche vor Ort und erstellen Ihnen ein individuelles Angebot.</div>
          </div>
          </li>
      </ol>
      </div>

      <!--
          <div class="resultsheader"><h4 class="left">Durch den Eigenverbrauch von Solarstrom sparen Sie im Vergleich zum vollständigen Netzbezug jährlich circa:</h4><h4  class="right">Unter Berücksichtigung der Einspeisevergütung für nicht selbst verbrauchten Solarstrom sparen Sie jährlich zusätzlich circa:</h4></div>
    <div class="Ersparnis"><div id="Ersparnis"></div><h4 class="ersparnis_sub">In Summe, die jährliche Erspahrnis</h4></div>
    <div class="chart-wrapper"></div>
    <div  id="result">
    <div class="res_label " id="res_power">Installierbare Leistung<div class="results " id="power"></div></div>
    <div class="res_label " id="res_price">Vorraussichtlicher Kaufpreis*<div class="results " id="price"></div></div>
    <div class="res_label " id="res_ammount">jährlich produzierte Strommenge<div class="results" id="ammount"></div></div>
    </div><div class="subtext">*Die tatsächliche Anlagenleistung und der vorraussichtliche Kaufpreis hängen von den individuellen Gegebenheiten bei Ihnen vor Ort ab. Die Ergebnisse des PFALZSOLAR Solarrechners sind deshalb nicht verbindlich,
    sondern geben lediglich eine Tendenz an. Gerne besichtigen wir Ihre Dachfläche vor Ort und erstellen Ihnen ein individuelles Angebot.</div>
    <div class="popmake-solarrechner" style="display:none"></div>
    <div class="popmake-solarrechner-3" style="display:none"></div>
     -->

     <div class="next" onclick='jQuery("#psc_plugin").cycle("next");'><a href="#">Kontakt</a></div>
    </div>
  </div>
   <!-- End Page 6 Ergebnis-->
   <!-- Start Page 7 Kontakt -->  
  <div id="page" >
  <div class="prev"><a href="#">zurück</a></div>
  <div class="psc_slider_content">
    <div class="calcheader"><h2 class="left">Kontaktieren Sie uns</h2><h2  class="right">7/7</h2></div>
      <div class="popmake-solarrechner-danke" style="display:none"></div>
        <div class="Kontakt_Calc">
        <?php
        echo do_shortcode('[contact-form-7 id="994" title="PfalzSolarContact"]');
        ?>
        </div>
    
    </div>
  </div>
   

<!-- START SCRIPT for Dependancies -->
<?php
wp_enqueue_script( 'validation' );
wp_enqueue_style('ps-solar-rechner');
?>


<script>
jQuery(document).ready(function($) {
mapdraw(); // draw the map
inputs(); // resolve inputs

	jQuery('#popmake-2488').find('.popmake-close').click(function(){location.replace("http://dev.dawolke.de/workspace/PfalzSolar/de/privatkunden/");});
});
</script>

<!-- END SCRIPT for Dependancies -->