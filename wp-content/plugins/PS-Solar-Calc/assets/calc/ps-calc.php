<?php
function get_EV_ps($data)
{

    
    switch ($data['Dachausrichtung']){
        case 90:
        case 270:
            $Correction = 1.5;
            break;
        case 160:
             $Correction = 2.5; 
            break;
        default:
            $Correction = 0;
            break;
            
    }
    
      $Verbrauch = $data['Verbrauch'];
      $Size = Size();
      $EV_L = array(
'size' => array(2.52, 2.9, 3.08, 3.36, 3.92, 4.76, 5.32, 6.16, 6.72, 7.56, 8.12, 8.96, 9.8),
'500' => array(9.8493949695, 8.6407824568, 8.1666070060, 7.5253181351, 6.5050030480, 5.4078341757, 4.8612806390, 4.2218855349, 3.8820222936, 3.4641643824, 3.2323708859, 2.9376959165, 2.6924528443),
'1000' => array(18.4153964059, 16.2780853477, 15.4305899528, 14.2735401997, 12.4131055012, 10.3852473922, 9.3665990264, 8.1666070060, 7.5253181351, 6.7329929169, 6.2920960536, 5.7298966609, 5.2599871881),
'1500' => array(25.9689308907, 23.1058894305, 21.9599602691, 20.3888743438, 17.8401834081, 15.0247701424, 13.5940283960, 11.8966677618, 10.9832376248, 9.8493949695, 9.2160580112, 8.4057223111, 7.7274730763),
'2000' => array(32.7381678795, 29.2741164369, 27.8819907680, 25.9689308907, 22.8410608775, 19.3521180267, 17.5658742091, 15.4305899528, 14.2735401997, 12.8308813500, 12.0216779473, 10.9832376248, 10.1101611785),
'2500' => array(38.8820952809, 34.9227839735, 31.1081420568, 31.1081420568, 27.4762711122, 23.4043740771, 21.3026880159, 18.7790683969, 17.4053514625, 15.6845504461, 14.7150283133, 13.4657973255, 12.4131055012),
'3000' => array(44.4682207614, 40.1190809910, 38.3482713164, 35.8830992818, 31.8116417889, 27.2126567885, 24.8341554807, 21.9599602691, 20.3888743438, 18.4153964059, 17.2999638905, 15.8585188597, 14.6395969106),
'3500' => array(49.6013492761, 44.9083680415, 42.9963113517, 40.3261102095, 35.8830992818, 30.8164162257, 28.1794922326, 24.9900943075, 23.2405954161, 21.0331544099, 19.7832520328, 18.1643289887, 16.7913567765),
'4000' => array(54.3273164336, 49.3627211122, 47.3196894040, 44.4682207614, 31.8116417889, 34.2362346101, 31.3681174933, 27.8819907680, 25.9689308907, 23.5495177865, 22.1737671360, 20.3888743438, 18.8722266426),
'4500' => array(58.7178766702, 53.5063911829, 51.3639507833, 48.3561343226, 43.3146036830, 37.4894578486, 34.4115125915, 30.6567436611, 28.5862654434, 25.9689308907, 24.4779845465, 22.5394985751, 20.8864929130),
'5000' => array(62.8082251222, 57.3884065703, 55.1489144568, 52.0105786679, 46.7188512455, 40.5775379620, 37.3221843690, 33.3209999261, 31.1081420568, 28.3002812040, 26.7009255057, 24.6192334303, 22.8410608775),
'5500' => array(66.6085750568, 61.0412930537, 58.7178766702, 55.4542866280, 49.9525305914, 43.5197196328, 40.1003652916, 35.8830992818, 33.5382042843, 30.5560404998, 28.8515203510, 26.6326692377, 24.7359965821),
'6000' => array(70.1505075195, 64.4661906978, 62.0878112111, 58.7178766702, 53.0137670790, 46.3267473943, 42.7606006032, 38.3482713164, 35.8830992818, 32.7381678795, 30.9373173130, 28.5862654434, 26.5760460263),
'6500' => array(73.4368711178, 67.6847808731, 65.2577238299, 61.8149242190, 55.9311405967, 49.0181404650, 45.3056360201, 40.7143187268, 38.1467682246, 34.8510582744, 32.9598231620, 30.4867011214, 28.3657688916),
'7000' => array(76.4684124265, 70.7111469725, 68.2497178181, 64.7420430123, 58.7178766702, 51.5929600737, 47.7582790919, 42.9963113517, 40.3261102095, 36.8989387911, 34.9227839735, 32.3344925903, 30.1110718620),
'7500' => array(79.2619832508, 73.5458948501, 71.0699275555, 67.5173004088, 61.3834000490, 54.0592799481, 50.1181880640, 45.1920451643, 42.4346060070, 38.8820952809, 36.8293878845, 34.1319808971, 31.8116417889),
'8000' => array(81.8163462289, 76.1870278138, 73.7236240624, 70.1505075195, 63.9211495748, 56.4318590882, 52.3820072801, 47.3196894040, 44.4682207614, 40.8003243675, 38.6802966590, 35.8830992818, 33.4700216122),
'8500' => array(84.1425373245, 78.6473265911, 76.2035131136, 72.6374744691, 66.3461122809, 58.7178766702, 54.5662662979, 49.3766963882, 46.4413839336, 42.6642222693, 40.4736296146, 37.5885730044, 35.0884144432),
'9000' => array(86.2844070940, 80.9274256385, 78.5238882571, 74.9861274269, 68.6633012900, 60.9221230093, 56.6764987564, 51.3639507833, 48.3561343226, 44.4682207614, 42.2197750926, 39.2462004197, 36.6681709631),
'9500' => array(88.2539626486, 83.0284707252, 80.6846883882, 77.1877529541, 70.8747708948, 63.0392818349, 58.7178766702, 53.2848081109, 50.2146177668, 46.2247110812, 43.9137886515, 40.8593921339, 38.2101636333),
'10000' => array(90.0547746800, 84.9763839754, 82.6859217762, 79.2619832508, 72.9819072616, 65.0762415316, 60.6940290688, 55.1489144568, 52.0105786679, 47.9360164946, 45.5635374354, 42.4346060070, 39.7112861723),
'11000' => array(93.1789853779, 88.4738591547, 86.2844070940, 83.0044396550, 76.8809134411, 68.9291946482, 64.4412128677, 58.7178766702, 55.4542866280, 51.2193938716, 48.7448728709, 45.4615618633, 42.6118434461),
'12000' => array(95.6684677387, 91.4661531294, 89.4184823432, 86.2844070940, 80.3860864545, 72.4947422110, 67.9423689287, 62.0878112111, 58.7178766702, 54.3273164336, 51.7660408683, 48.3561343226, 45.3769456426),
'13000' => array(97.5538696096, 93.9819364383, 92.1140370494, 89.1745257779, 83.4981879071, 75.7790928204, 71.2132757091, 65.2577238299, 61.8149242190, 57.2886724322, 54.6402707170, 51.1198486227, 48.0322952726),
'14000' => array(98.8083370996, 96.0200529255, 94.3885260544, 91.6937634824, 86.2844070940, 78.7863743423, 74.2605150862, 68.2497178181, 64.7420430123, 60.1149475986, 57.3884065703, 53.7561971427, 50.5787194927),
'15000' => array(99.5101182870, 97.6074410159, 96.2400076753, 93.8591056496, 88.7852074368, 81.5279006044, 77.0749505680, 71.0699275555, 67.5173004088, 62.8082251222, 60.0195723074, 56.2861947399, 53.0137670790));

	
	$groesse	= array_keys($EV_L['size'],getClosest($Size,$EV_L['size']));
	
	$value = (roundUpToAny($Verbrauch/100))*100;
	while (!array_key_exists(strval($value),$EV_L)){
		$value += 500;
		
}
    
	$EV = $EV_L[strval($value)][$groesse[0]];
    if($data['Day'] == 1)$EV +=5+$Correction;
    else $EV +=$Correction;
            
        
        
        
        
        
        
    
 //DEBUG
//global $results;
//$results['DEBUG.$EV']=$EV;
 return $EV;
};
function performancematrix($x, $Ausrichtung)
{
    $Matrixergebnis = 0;
    if ($x <= 10 && $x >= 0) {
        switch ($Ausrichtung) {
        case 0:
            $Matrixergebnis = 0.8072;
            break;

        case 90:
            $Matrixergebnis = 0.8697;
            break;

        case 135:
            $Matrixergebnis = 0.9113;
            break;

        case 180:
            $Matrixergebnis = 0.9282;
            break;

        case 225:
            $Matrixergebnis = 0.9128;
            break;

        case 270:
            $Matrixergebnis = 0.8718;
            break;

        case 160:
            $Matrixergebnis = 0.8708;
            break;
        }
    }
    elseif (($x <= 24 && $x >= 11)) {
        switch ($Ausrichtung) {
        case 0:
            $Matrixergebnis = 0.6944;
            break;

        case 90:
            $Matrixergebnis = 0.8503;
            break;

        case 135:
            $Matrixergebnis = 0.9441;
            break;

        case 180:
            $Matrixergebnis = 0.9815;
            break;

        case 225:
            $Matrixergebnis = 0.9477;
            break;

        case 270:
            $Matrixergebnis = 0.8544;
            break;

        case 160:
            $Matrixergebnis = 0.8524;
            break;
        }
    }
    elseif (($x <= 35 && $x >= 25)) {
        switch ($Ausrichtung) {
        case 0:
            $Matrixergebnis = 0.5549;
            break;

        case 90:
            $Matrixergebnis = 0.8103;
            break;

        case 135:
            $Matrixergebnis = 0.9477;
            break;

        case 180:
            $Matrixergebnis = 1;
            break;

        case 225:
            $Matrixergebnis = 0.9538;
            break;

        case 270:
            $Matrixergebnis = 0.8154;
            break;

        case 160:
            $Matrixergebnis = 0.8129;
            break;
        }
    }
    elseif (($x <= 50 && $x >= 36)) {
        switch ($Ausrichtung) {
        case 0:
            $Matrixergebnis = 0.5087;
            break;

        case 90:
            $Matrixergebnis = 0.7928;
            break;

        case 135:
            $Matrixergebnis = 0.939;
            break;

        case 180:
            $Matrixergebnis = 0.9949;
            break;

        case 225:
            $Matrixergebnis = 0.9462;
            break;

        case 270:
            $Matrixergebnis = 0.7979;
            break;

        case 160:
            $Matrixergebnis = 0.7954;
            break;
        }
    }
    elseif (($x >= 51)) {
        switch ($Ausrichtung) {
        case 0:
            $Matrixergebnis = 0.4152;
            break;

        case 90:
            $Matrixergebnis = 0.7471;
            break;

        case 135:
            $Matrixergebnis = 0.9054;
            break;

        case 180:
            $Matrixergebnis = 0.9649;
            break;

        case 225:
            $Matrixergebnis = 0.9132;
            break;

        case 270:
            $Matrixergebnis = 0.7532;
            break;

        case 160:
            $Matrixergebnis = 0.7502;
            break;
        }
    }

    return $Matrixergebnis;
};

function bundesland ($Bl)
{
    
    switch ($Bl) {
    case 'Baden-Wuerttemberg':
        $Bundesland = 1283;
        break;

    case 'Bayern':
        $Bundesland = 1266;
        break;

    case 'Berlin':
        $Bundesland = 1192;
        break;

    case 'Brandenburg':
        $Bundesland = 1192.5;
        break;

    case 'Bremen':
        $Bundesland = 1149.5;
        break;

    case 'Hamburg':
        $Bundesland = 1108;
        break;

    case 'Hessen':
        $Bundesland = 1173.5;
        break;

    case 'Mecklenburg-Vorpommern':
        $Bundesland = 1198;
        break;

    case 'Niedersachsen':
        $Bundesland = 1151;
        break;

    case 'Nordrhein-Westfalen':
        $Bundesland = 1136;
        break;

    case 'Rheinland-Pfalz':
        $Bundesland = 1205;
        break;

    case 'Saarland':
        $Bundesland = 1213;
        break;

    case 'Sachsen':
        $Bundesland = 1226;
        break;

    case 'Sachsen-Anhalt':
        $Bundesland = 1177;
        break;

    case 'Schleswig-Holstein':
        $Bundesland = 1153.5;
        break;

    case 'Thueringen':
        $Bundesland = 1182;
        break;
     case 'GGEW':
        $Bundesland = 1253.2;
        }
    return $Bundesland;
};
function Runden2Dezimal($x) { $Ergebnis = round($x * 100) / 100 ; return $Ergebnis; };

function ps_calculation($Values){
//Check for other Inputs
$options = get_option( 'PSC_settings');
if ($Values['Dachneigung'] == null || $Values['Dachneigung'] == 'nil' || $Values['Dachneigung'] == nil || $Values['Dachneigung'] == 'null'){
	$Values['Dachneigung'] = intval($Values['Dachneigung_other']);
};
if ($Values['Flaeche'] == null || $Values['Flaeche'] == nil || $Values['Flaeche'] == 'null' || $Values['Flaeche'] == 'nil'){
	$Values['Flaeche'] = intval($Values['Flaeche_other']);
};
if ($Values['Anteil'] == null){
	$Values['Anteil'] = "30";
};
if ($Values['Bundesland'] == null){
	$Values['Bundesland'] = "GGEW";
};
//$Values['Dachneigung'] = ($Values['Dachneigung']);
//define some variiables

 $Matrix = performancematrix(($Values['Dachneigung']),($Values['Dachausrichtung']));
 $Leistung = 0;
 $Anzahl_Module=floor((($Values['Flaeche']) / ($options['Modulesize'])));

if (($Anzahl_Module * ($options['Moduleperformance'])) >= 10){
	 $Leistung = 10;
	}
else {
	 $Leistung = ($Anzahl_Module * ($options['Moduleperformance']));
	}
//Ertragsberechnung
 $Jahresertrag = (0.85 * bundesland($Values['Bundesland']) * $Matrix );
 $Erzeugung = $Jahresertrag*$Leistung;
 $Anteil= get_EV_ps($Values);
 $Values['Anteil'] = $Anteil;
 $Einspeisung = $Erzeugung*(1-(($Anteil)/100));
 $Einspeiseverguetung =Runden2Dezimal((($options['Reward'])*$Einspeisung)/100) ;
 $Bisherige_Stromkosten = (($Values['Verbrauch']) * $Values['Preis'])/100;
 $Eigenverbrauch = $Erzeugung*(($Anteil)/100);
 $Einsparung_Selbstverbrauch = ($Eigenverbrauch*$Values['Preis'])/100;
 $Spar = ($Einsparung_Selbstverbrauch+$Einspeiseverguetung);
 $Price =$Leistung*($options['Investment']);
//OUTPUT

$results = array('Leistung'=>$Leistung,'Price'=>$Price,'Einsparung_Selbstverbrauch'=>$Einsparung_Selbstverbrauch,'Spar'=>$Spar,'Jahresertrag'=>$Jahresertrag,'Erzeugung'=>$Erzeugung,'Einspeisung'=>$Einspeisung,'Einspeiseverguetung'=>Runden2Dezimal($Einspeiseverguetung),'Bisherige Stromkosten'=>$Bisherige_Stromkosten,'Eigenverbrauch'=>$Eigenverbrauch,'Einsparung_Selbstverbrauch'=>Runden2Dezimal($Einsparung_Selbstverbrauch),'VALUES'=>$Values, 'Options'=>$options);

return $results;
};
?>