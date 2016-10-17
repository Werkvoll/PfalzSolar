<!-- START  Slider -->
<div class="inner-bg plugin_wrapper">
 
  <div class='container' id="psc_plugin">
    <div class="row">
                      <div class="col-sm-12">
                           <form id="Solar" class="registration-form">
                          <!-- PAGE 1 Dachneigung -->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-md-8">Dachneigung</h2><h2 class="right col-md-4">1/7</h2>
                              </div>
                                <div class="row form-group">
                                  <div class='col-sm-2 input_image' id='Dachneigung_01' onclick="Dachneigung(1,8,false)">
                                    <img class='img-rounded' src=<?php echo  self::get_asset_path('images/neigung(1).png')?> alt='Dachneigung_01'>
                                    <p class='img_label'>0°-10°</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachneigung_02' onclick="Dachneigung(2,20,false)">
                                    <img class='img-rounded' src=<?php echo  self::get_asset_path('images/neigung(2).png')?> alt='Dachneigung_02'>
                                    <p class='img_label'>11°-24°</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachneigung_03' onclick="Dachneigung(3,35,false)">
                                    <img class='img-rounded image_clicked' src=<?php echo  self::get_asset_path('images/neigung(3).png')?> alt='Dachneigung_03'>
                                    <p class='img_label'>25°-35°</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachneigung_04' onclick="Dachneigung(4,40,false)">
                                    <img class='img-rounded' src=<?php echo  self::get_asset_path('images/neigung(4).png')?> alt='Dachneigung_04'>
                                    <p class='img_label'>36°-50°</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachneigung_05' onclick="Dachneigung(5,51,false)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/neigung(5).png')?> alt='Dachneigung_05'>
                                    <p class='img_label'>>50°</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachneigung_06' onclick="Dachneigung(6,35,true)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/flaeche(5).png')?> alt='Dachneigung_06'>
                                    <p class='img_label'>eigene Angabe</p>
                                  </div>
                                </div>
                                  <div class='row extra_input' id='Dachneigung_other'>
                                    <div class='form-group'>
                                      <div class="col-sm-6">
                                        <label for="Dachneigung_other">Sofern Sie den exakten Winkel kennen, können Sie diesen hier eintragen</label>
                                        <input type="text" name="Dachneigung_other" placeholder="35°" class="form-control" id="Dachneigung_other">
                                      </div>
                                    </div>
                                  </div>
                                
                                <input type="hidden" name="Dachneigung" value="35">
                              <button type="button" class="btn btn-next">Next</button>
                          </fieldset>

                          <!-- PAGE 2 Dachausrichtung -->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-sm-9">Dachausrichtung</h2><h2 class="right col-sm-3">2/7</h2>
                              </div>
                                <div class="row form-group" >
                                  <div class='col-sm-2 input_image' id='Dachausrichtung_01' onclick="Dachausrichtung(1,270,false)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/rotation(1).png')?> alt='Dachausrichtung_WEST'>
                                    <p class='img_label'>West</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachausrichtung_02' onclick="Dachausrichtung(2,225,false)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/rotation(2).png')?> alt='Dachausrichtung_SUEDWEST'>
                                    <p class='img_label'>Südwest</p>
                                  </div>
                                  <div class='col-sm-2 input_image'  id='Dachausrichtung_03' onclick="Dachausrichtung(3,180,false)">
                                    <img class='img-rounded image_clicked' src=<?php echo  self::get_asset_path('images/rotation(3).png')?> alt='Dachausrichtung_SUED'>
                                    <p class='img_label'>Süd</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachausrichtung_04' onclick="Dachausrichtung(4,160,false)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/rotation(4).png')?> alt='Dachausrichtung_OST_WEST'>
                                    <p class='img_label'>Ost-West</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachausrichtung_05' onclick="Dachausrichtung(5,135,false)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/rotation(5).png')?> alt='Dachausrichtung_SUED_OST'>
                                    <p class='img_label'>Süd-Ost</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachausrichtung_06' onclick="Dachausrichtung(6,90,false)">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/rotation(6).png')?> alt='Dachausrichtung_OST'>
                                    <p class='img_label'>Ost</p>
                                  </div>
                                </div>
                              <input type="hidden" name="Dachausrichtung" value="NULL">
                              <button type="button" class="btn btn-previous">Previous</button>
                              <button type="button" class="btn btn-next">Next</button>
                          </fieldset>

                          <!-- PAGE 3 Dachflaeche -->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-sm-9">Dachflaeche</h2><h2 class="right col-sm-3">3/7</h2>
                              </div>
                                <div class="row">
                                  <div class='col-sm-2 input_image' id='Dachflaeche_01' onclick="Dachflaeche(1,20,false);">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/flaeche(1).png')?> alt='Dachflaeche_20'>
                                    <p class='img_label'>20m²</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachflaeche_02' onclick="Dachflaeche(2,40,false);">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/flaeche(2).png')?> alt='Dachflaeche_40'>
                                    <p class='img_label'>40m²</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachflaeche_03' onclick="Dachflaeche(3,60,false);">
                                    <img class='img-rounded image_clicked'  src=<?php echo  self::get_asset_path('images/flaeche(3).png')?> alt='Dachflaeche_60'>
                                    <p class='img_label'>60m²</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachflaeche_04' onclick="Dachflaeche(4,80,false);">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/flaeche(4).png')?> alt='Dachflaeche_80'>
                                    <p class='img_label'>80m²</p>
                                  </div>
                                  <div class='col-sm-2 input_image' id='Dachflaeche_05' onclick="Dachflaeche(5,35,true);">
                                    <img class='img-rounded'  src=<?php echo  self::get_asset_path('images/flaeche(5).png')?> alt='Dachflaeche_eigene'>
                                    <p class='img_label'>eigene Angaben</p>
                                  </div>
                                  </div>
                                <div class='row extra_input' id='Dachflaeche_other'>
                                  <div class='form-group'>
                                  <div class='col-sm-6'>
                                    <label class="" for="Dachfaeche_other">Sofern Sie den exakten Bauraum kennen, können Sie diesen hier eintragen</label>
                                      <input type="text" name="Dachflaeche_other" placeholder="35m²" class="form-control" id="Dachflaeche_other">
                                    </div>
                                  </div>
                                </div>                              
                              <input type="hidden" name="flaeche" value="60">
                              <button type="button" class="btn btn-previous">Previous</button>
                              <button type="button" class="btn btn-next" onclick='//validate_Dach();
                              setTimeout(function(){Bundeslaender.updateSize();},505);'>Next</button>
                          </fieldset>

                          <!-- PAGE 4 Bundesland / Karte -->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-sm-9">Bundesland</h2><h2 class="right col-sm-3">4/7</h2>
                              </div>
                                <div class="row">
                                    <div class="col-sm-12" id="map" style="overflow: hidden; height: 50vh;">
                                    </div>
                                </div>

                                <div class="tip-selected"></div>
                                 
                             <button type="button" class="btn btn-previous">Previous</button>
                             <button type="button" class="btn btn-next btn-danger" onclick='validate_BL();'>Next</button>
                          </fieldset>

                          <!-- PAGE 5 Nutzerdaten -->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-sm-9">individuelle Angaben</h2><h2 class="right col-sm-3">5/7</h2>
                              </div>
                              <div class='row'>
                                <div class="form-group">
                                  <div class="col-sm-6">
                                    <label class="" for="kw_org">Ihr Stromverbrauch in kWh/Jahr</label>
                                    <div class="persons">
                                      <div id="person_1" class="person" onclick="person('1',true);" onmouseover="person('1',false);">
                                      </div>
                                      <div id="person_2" class="person" onclick="person('2',true);"onmouseover="person('2',false);">
                                      </div>
                                      <div id="person_3" class="person" onclick="person('3',true);"onmouseover="person('3',false);">
                                      </div>
                                      <div id="person_4" class="person" onclick="person('4',true);"onmouseover="person('4',false);">
                                      </div>
                                      <div id="person_5" class="person" onclick="person('5',true);"onmouseover="person('5',false);">
                                      </div>
                                    </div>
                                    <input type="text" name="kw_org" placeholder="1500 kWh/Jahr" class="form-control" id="kw_org">
                                    <i class=" infobutton infobutton_2 popmake-infobutton_1">i</i>
                                  </div>
                                </div>
                              </div>
                                <div class="row">
                                  <div class="form-group">
                                    <div class="col-sm-6">
                                      <label class="" for="Preis">Ihr Stromverbrauch in kWh/Jahr</label>
                                      <input type="text" name="Preis" placeholder="23 Cent /kWh" class="form-control" id="Preis">
                                      <i class=" infobutton infobutton_2 popmake-infobutton_2">i</i>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="form-group">
                                    <div class="col-sm-6">
                                      <label class="" for="Day">Sind in Ihrem Haushalt regelmäßig Personen über Mittag zu Hause?</label>
                                        <div class="day">
                                          <input type="checkbox" value="1" id="day" name="Day" checked />
                                          <label for="day"></label>
                                        </div>
                                        <i class=" infobutton popmake-infobutton_3 popmake-infobutton_3">i</i>
                                    </div>
                                  </div>
                                </div>
                                <button type="button" class="btn btn-previous">Previous</button>
                                <button type="button" class="btn btn-next" onclick='calculation("PS")'>Next</button>
                          </fieldset>
                          
                          <!-- PAGE 6 Ergebnis-->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-sm-9">DAS SPAREN SIE MIT IHRER PHOTOVOLTAIKANLAGE</h2><h2 class="right col-sm-3">6/7</h2>
                              </div>
                               <div class="">
                                  <div class="row lightblue">
                                    <div class="col-sm-8 element_left">Auf ihrem Dach kann eine Photovotaikanlage mit folgender Leistung installiert werden:</div>
                                    <div class="col-sm-4 element_right"><strong>$Size</strong> kWp</div>
                                  </div>
                                  <div class="row lightblue">
                                    <div class="col-sm-8 element_left">Die vorausichtlichen Investitionskosten betragen:</div>
                                    <div class="col-sm-4 element_right"><strong>$Invest</strong> €</div>
                                  </div>
                                  <div class="row lightblue">
                                    <div class="col-sm-8 element_left">Pro Jahr produziert die Photovotaikanlage circa:</div>
                                    <div class="col-sm-4 element_right"><strong>$Power</strong> kWp</div>
                                  </div>
                                  <div class="row lightblue">
                                    <div class="col-sm-8 element_left">Ihr voraussichtlicher Eigenverbrauch beträgt:</div>
                                    <div class="col-sm-4 element_right"><strong>$EV</strong> %</div>
                                  </div>
                                  <div class="row dark_blue">
                                    <div class="col-sm-8 element_left">Durch den Eigenverbrauch von Solarstrom sparen Sie im Vergleich zum vollständigen Netzbezug jährlich circa:</div>
                                    <div class="col-sm-4 element_right"><strong>$Savings</strong> €</div>
                                  </div>
                                  <div class="row dark_blue">
                                    <div class="col-sm-8 element_left">Unter Berücksichtigung der Einspeisevergütung für nicht selbst verbrauchten Solarstrom sparen Sie jährlich zusätzlich circa:</div>
                                    <div class="col-sm-4 element_right"><strong>$Savingsev</strong> €</div>
                                  </div>
                                  <div class="row orange_back">
                                    <div class="col-sm-8 element_left">In Summe ergibt sich eine Jährliche Ersparnis von:</div>
                                    <div class="col-sm-4 element_right"><strong>$Savings_ges</strong> €</div>
                                  </div>
                                  <div class="row lightblue">
                                    <div class="col-sm-12 sub"> *Die tatsächliche Anlagenleistung und der vorraussichtliche Kaufpreis hängen von den individuellen Gegebenheiten bei Ihnen vor Ort ab. Die Ergebnisse des PFALZSOLAR Solarrechners sind deshalb nicht verbindlich,sondern geben lediglich eine Tendenz an. Gerne besichtigen wir Ihre Dachflaeche vor Ort und erstellen Ihnen ein individuelles Angebot.
                                    </div> 
                                  </div>
                               </div>
                               <button type="button" class="btn btn-previous">Previous</button>
                              <button type="button" class="btn btn-next">Next</button>
                          </fieldset>

                          <!-- PAGE 7 Kontakt -->
                            <fieldset>
                              <div class='row calcheader'>
                                <h2 class="left col-sm-9">Kontaktieren Sie uns</h2><h2 class="right col-sm-3">7/7</h2>
                              </div>
                              <div class="popmake-solarrechner-danke" style="display:none"></div>
                                <div class="row">
                                 <?php
                                  echo do_shortcode('[contact-form-7 id="994" title="PfalzSolarContact"]');
                                  ?>
                                </div>
                             <button type="button" class="btn btn-previous">Previous</button>
                          </fieldset>
                        </form>
                      </div>
                </div>
    </div>
</div>

  
<!-- START SCRIPT for Dependancies -->
<?php
wp_enqueue_script( 'validation' );
wp_enqueue_style('ps-solar-rechner');
wp_enqueue_script('bootstrap_js');
wp_enqueue_script('form_script');
wp_enqueue_style('bootstrap');
?>


<script>
jQuery(document).ready(function($) {
mapdraw(); // draw the map
inputs(); // resolve inputs

	jQuery('#popmake-2488').find('.popmake-close').click(function(){location.replace("http://dev.dawolke.de/workspace/PfalzSolar/de/privatkunden/");});
});
</script>

<!-- END SCRIPT for Dependancies -->