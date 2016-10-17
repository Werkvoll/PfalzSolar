
<?php
function getPV_S($Verbrauch)
{
    $Anlagengroesse = 0;
    if ($Verbrauch <= 3000) {
        $Anlagengroesse = 2.61;
    }
    elseif ($Verbrauch <= 3900 && $Verbrauch > 3000) {
        $Anlagengroesse = 3.19;
    }
    elseif ($Verbrauch <= 4300 && $Verbrauch > 3900) {
        $Anlagengroesse = 3.48;
    }
    elseif ($Verbrauch <= 5150 && $Verbrauch > 4300) {
        $Anlagengroesse = 4.06;
    }
    elseif ($Verbrauch <= 6000 && $Verbrauch > 5150) {
        $Anlagengroesse = 4.93;
    }
    elseif ($Verbrauch <= 6750 && $Verbrauch > 6000) {
        $Anlagengroesse = 5.51;
    }
    elseif ($Verbrauch <= 7750 && $Verbrauch > 6750) {
        $Anlagengroesse = 6.38;
    }
    elseif ($Verbrauch <= 8500 && $Verbrauch > 7750) {
        $Anlagengroesse = 6.96;
    }
    elseif ($Verbrauch <= 9500 && $Verbrauch > 8500) {
        $Anlagengroesse = 7.83;
    }
    elseif ($Verbrauch <= 10500 && $Verbrauch > 9500) {
        $Anlagengroesse = 8.41;
    }
    elseif ($Verbrauch <= 11250 && $Verbrauch > 10500) {
        $Anlagengroesse = 9.28;
    }
    elseif ($Verbrauch > 11250) {
        $Anlagengroesse = 9.86;
    }

//DEBUG
//global $results;
//$results['DEBUG.$Anlagengroesse']=$Anlagengroesse;
 return $Anlagengroesse;
}

function check_max_size($Flaeche)
{
    if ($Flaeche <= 16) {
        $max = 2.61;
    }
    
    elseif ($Flaeche <= 20 && $Flaeche > 16) {
        $max = 3.19;
    }
    elseif ($Flaeche <= 21 && $Flaeche > 20) {
        $max = 3.48;
    }
    elseif ($Flaeche <= 24 && $Flaeche > 21) {
        $max = 4.06;
    }
    elseif ($Flaeche <= 29 && $Flaeche > 24) {
        $max = 4.93;
    }
    elseif ($Flaeche <= 32 && $Flaeche > 29) {
        $max = 5.51;
    }
    elseif ($Flaeche <= 37 && $Flaeche > 32) {
        $max = 6.38;
    }
    elseif ($Flaeche <= 41 && $Flaeche > 37) {
        $max = 6.96;
    }
    elseif ($Flaeche <= 46 && $Flaeche > 41) {
        $max = 7.83;
    }
    elseif ($Flaeche <= 49 && $Flaeche > 46) {
        $max = 8.41;
    }
    elseif ($Flaeche <= 58 && $Flaeche > 49) {
        $max = 9.28;
    }
    elseif ($Flaeche > 58) {
        $max = 9.86;
    }

//DEBUG
//global $results;
//$results['DEBUG.$max']=$max;
 return $max;
};

function get_EV()
{

    global $data;
    global $SP;
    global $modell;
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
    if($modell == 'S'){
    $EV_1 = array(
        500 => 9.533,
        1000 => 17.860,
        1500 => 25.228,
        2000 => 31.844,
        2500 => 37.865,
        2750 => 40.186,
        3000 => 43.355,
        3250 => 45.925,
        3500 => 44.908,
        3600 => 45.824,
        3750 => 44.065,
        3850 => 44.908,
        3900 => 45.326,
        4000 => 43.355,
        4200 => 44.908,
        4300 => 45.672,
        4500 => 42.220,
        4750 => 43.914,
        5000 => 45.564,
        5150 => 46.535,
        5300 => 41.280,
        5500 => 42.422,
        5650 => 43.262,
        6000 => 45.179,
        6250 => 42.939,
        6500 => 44.177,
        6750 => 45.392,
        7000 => 41.906,
        7300 => 43.212,
        7500 => 44.065,
        7750 => 45.117,
        8000 => 43.355,
        8500 => 45.291,
        9000 => 43.355,
        9500 => 45.079,
        10000 => 44.430,
        10500 => 46.012,
        11000 => 44.330,
        11250 => 45.052,
        12000 => 45.179,
        13000 => 47.826,
        14000 => 50.366,
        15000 => 52.795,
        999999 => 52.795
    );
    $EV_2 = array(
        500 => 15,
        1000 => 23,
        1500 => 30,
        2000 => 37,
        2500 => 43,
        2750 => 45,
        3000 => 48,
        3250 => 51,
        3500 => 50,
        3600 => 51,
        3750 => 49,
        3850 => 50,
        3900 => 50,
        4000 => 48,
        4200 => 50,
        4300 => 51,
        4500 => 47,
        4750 => 49,
        5000 => 51,
        5150 => 52,
        5300 => 46,
        5500 => 47,
        5650 => 48,
        6000 => 50,
        6250 => 48,
        6500 => 49,
        6750 => 50,
        7000 => 47,
        7300 => 48,
        7500 => 49,
        7750 => 50,
        8000 => 48,
        8500 => 50,
        9000 => 48,
        9500 => 50,
        10000 => 49,
        10500 => 51,
        11000 => 49,
        11250 => 50,
        12000 => 50,
        13000 => 53,
        14000 => 55,
        15000 => 58,
        999999 => 58
    );
    
    if($data['Day'] == 1){$EV= (find_next($data['Verbrauch'],$EV_2)+$Correction);}
    else {$EV= (find_next($data['Verbrauch'],$EV_1)+$Correction);};
    }
    elseif($modell == 'L'){
      $Verbrauch = $data['Verbrauch'];
      $Size = Size();
      $EV_L = array(
'size' => array(2.61,2.9,3.19,3.48,4.06,4.93,5.51,6.38,6.96,7.83,8.41,9.28,9.86),
'500' => array(9.533,	8.641,	7.902,	7.280,	6.292,	5.229,	4.700,	4.081,	3.753,	3.348,	3.124,	2.839,	2.677),
'1000' => array(	17.860,	16.278,	14.954,	13.829,	12.022,	10.053,	9.065,	7.902,	7.280,	6.513,	6.086,	5.541,	5.229),
'1500' => array(	25.228,	23.106,	21.314,	19.783,	17.300,	14.560,	13.169,	11.520,	10.633,	9.533,	8.919,	8.134,	7.683),
'2000' => array(	31.844,	29.274,	27.097,	25.228,	22.174,	18.772,	17.033,	14.954,	13.829,	12.428,	11.642,	10.633,	10.053),
'2500' => array(	37.865,	34.923,	32.414,	30.249,	26.701,	22.724,	20.674,	18.214,	16.876,	15.202,	14.258,	13.044,	12.344),
'3000' => array(	43.355,	40.119,	37.340,	34.923,	30.937,	26.443,	24.120,	21.314,	19.783,	17.860,	16.774,	15.371,	14.560),
'3500' => array(	48.399,	44.908,	41.906,	39.284,	34.923,	29.964,	27.387,	24.272,	22.564,	20.411,	19.193,	17.616,	16.701),
'4000' => array(	53.060,	49.363,	46.154,	43.355,	38.680,	33.310,	30.504,	27.097,	25.228,	22.866,	21.523,	19.783,	18.772),
'4500' => array(	57.388,	53.506,	50.140,	47.175,	42.220,	36.497,	33.482,	29.808,	27.784,	25.228,	23.772,	21.880,	20.778),
'5000' => array(	61.433,	57.388,	53.869,	50.778,	45.564,	39.531,	36.333,	32.414,	30.249,	27.505,	25.944,	23.910,	22.724),
'5500' => array(	66.279,	61.041,	57.388,	60.448,	48.745,	42.422,	39.062,	34.923,	32.627,	29.709,	28.043,	25.877,	24.611),
'6000' => array(	71.992,	64.466,	60.718,	57.388,	51.766,	45.179,	41.673,	37.340,	34.923,	31.844,	30.082,	27.784,	26.443),
'6500' => array(	76.748,	67.685,	63.859,	60.448,	54.640,	47.826,	44.177,	39.665,	37.142,	33.912,	32.061,	29.642,	28.226),
'7000' => array(	79.170,	70.711,	66.826,	63.348,	57.388,	50.366,	46.586,	41.906,	39.284,	35.918,	33.982,	31.449,	29.964),
'7500' => array(	82.803,	73.546,	69.634,	66.101,	60.020,	52.795,	48.908,	44.065,	41.352,	37.865,	35.850,	33.208,	31.658),
'8000' => array(	85.596,	76.187,	72.279,	68.715,	62.536,	55.134,	51.144,	46.154,	43.355,	39.749,	37.667,	34.923,	33.310),
'8500' => array(	86.983,	78.647,	74.772,	71.195,	64.938,	57.388,	53.295,	48.179,	45.291,	41.578,	39.429,	36.594,	34.923),
'9000' => array(	88.830,	80.927,	77.100,	73.546,	67.237,	59.563,	55.375,	50.140,	47.175,	43.355,	41.141,	38.223,	36.497),
'9500' => array(	92.066,	83.028,	79.287,	75.761,	69.439,	61.662,	57.388,	52.033,	49.003,	45.079,	42.810,	39.807,	38.034),
'10000' => array(	92.785,	84.976,	81.323,	77.846,	71.538,	63.679,	59.338,	53.869,	50.778,	46.761,	44.430,	41.352,	39.531),
'11000' => array(	96.782,	88.474,	84.976,	81.648,	75.454,	67.501,	63.051,	57.388,	54.170,	49.997,	47.558,	44.330,	42.422),
'12000' => array(	99.208,	91.466,	88.177,	84.976,	78.984,	71.053,	66.522,	60.718,	57.388,	53.060,	50.537,	47.175,	45.179),
'13000' => array(	96.782,	93.982,	90.957,	87.926,	82.150,	74.344,	69.777,	63.859,	60.448,	55.978,	53.368,	49.898,	47.826),
'14000' => array(	98.278,	96.020,	93.345,	90.522,	84.976,	77.365,	72.817,	66.826,	63.348,	58.767,	56.077,	52.497,	50.366),
'15000' => array(	99.208,	97.607,	95.333,	92.785,	87.528,	80.144,	75.648,	69.634,	66.101,	61.433,	58.673,	54.990,	52.795));

	
	$groesse	= array_keys($EV_L['size'],getClosest($Size,$EV_L['size']));
	
	$value = (roundUpToAny($Verbrauch/100))*100;
	while (!array_key_exists(strval($value),$EV_L)){
		$value += 500;
		
}
    
	$EV = $EV_L[strval($value)][$groesse[0]];
    if($data['Day'] == 1)$EV +=5+$Correction;
    else $EV +=$Correction;
            
        
        
        
        
        
        
    }
 //DEBUG
//global $results;
//$results['DEBUG.$EV']=$EV;
 return $EV;
};
function getClosest($search, $arr) {
   $closest = null;
   foreach ($arr as $item) {
      if ($closest === null || abs($search - $closest) > abs($item - $search)) {
         $closest = $item;
      }
   }
   return $closest;
}
function roundUpToAny($n,$x=5) {
    return (round($n)%$x === 0) ? round($n) : round(($n+$x/2)/$x)*$x;
}
function find_next($value,$ary){
     $value = floor($value/100)*100;
     while($ary[$value] == null || $ary[$value] == 0){
         $value = $value+ 50;
     }
    return $ary[$value];    
    };
function check_other($data){
if ($data['Dachneigung'] == null || $data['Dachneigung'] == "nil"){
	$data['Dachneigung'] = $data['Dachneigung_other'];
};
if ($data['Flaeche'] == null || $data['Flaeche'] == 'nil'){
	$data['Flaeche'] = $data['Flaeche_other'];
};
return $data;    
}
function SP_Factor(){
    global $SP;
    
    if ($SP){
        $SP_Factor_a = (600 / Power());
    $SP_Factor =$SP_Factor_a;
    }
    else $SP_Factor = 0;
    //DEBUG
     //global $results;
    //$results['DEBUG.$SP_Factor_a']=$SP_Factor_a;
    return $SP_Factor;
    
}
function Power(){
    global $ps_data;
    $Power = ($ps_data['Jahresertrag'])*Size();
    
 //DEBUG
 //global $results;
//$results['DEBUG.$Power']=$Power;
    return $Power;
}
function Size(){
    global $modell;
    global $data;
    global $ps_data;
        $Size_A = min(check_max_size($data['Flaeche']),getPV_S($data['Verbrauch']));
    $Size_B =$ps_data['Leistung'];
    if ($modell == 'S'){
       $Size = $Size_A;
    }
    elseif ($modell == 'L'){
    $Size =$Size_B;
    }

    //DEBUG
   // global $results;
//$results['DEBUG.$Size_A']=$Size_A;
//$results['DEBUG.$Size_B']=$Size_B;
//$results['DEBUG.$Size']=$Size;
    return $Size;
}
function check_PLZ($PLZ)
{
    $options = get_option('PSC_settings');
    $accepted = explode(',', $options['PLZ']);
    if (in_array((string)$PLZ, $accepted)) return true;
    else return null;
}
function ggew_calculation($data_input){
    global $data;
    global $options;
    global $modell;
    global $SP;
    global $results;
    global $ps_data;
    $results = array();
    $options = get_option('PSC_settings');
    $data_input = check_other($data_input);
    foreach ($data_input as &$value) {
     if (is_numeric($value))$value = (float)$value;
}
    unset($value);
    foreach ($options as &$value) {
     if (is_numeric($value))$value = (float)$value;
}
    unset($value);
    $data = $data_input;
    $ps_data = ps_calculation($data);
$SP = false;
$modell = 'S';
$results['Size_S_val']= Size();
$results['Power_S_val']= Power();
$results['Montly_S_val']= Pacht()/12;
$results['Cust_Savings_S_val']= $options['Kundenbonus'];
$results['Total_Savings_S_val']= 12*18*$options['Kundenbonus']+Savings_ges();
$results['Total_Savings_S_no_val']=12*18*$options['Kundenbonus'];
$results['EV']=get_EV();
//DEBUG
//$resultset['S']=$results;
$modell = 'L';
$results['Size_L_val']= Size();
$results['Power_L_val']= Power();
$results['Montly_L_val']= Pacht()/12;
$results['Cust_Savings_L_val']= $options['Kundenbonus'];
$results['Total_Savings_L_val']= 12*18*$options['Kundenbonus']+Savings_ges();
$results['Total_Savings_L_no_val']=12*18*$options['Kundenbonus'];
//DEBUG
//$resultset['L']=$results;
$results['AutQoute']=Aut_qoute();




$SP = true;
$modell = 'S';
$results['Size_S_val_SP']= Size();
$results['Power_S_val_SP']= Power();
$results['Montly_S_val_SP']= Pacht()/12;
$results['Cust_Savings_S_val_SP']= $options['Kundenbonus'];
$results['Total_Savings_S_val_SP']= 12*18*$options['Kundenbonus']+Savings_ges();
$results['Total_Savings_S_no_val_SP']=Savings_ges();
$results['EV_SP']=get_EV();
//DEBUG
//$resultset['S_SP']=$results;
$modell = 'L';
$results['Size_L_val_SP']= Size();
$results['Power_L_val_SP']= Power();
$results['Montly_L_val_SP']= Pacht()/12;
$results['Cust_Savings_L_val_SP']= $options['Kundenbonus'];
$results['Total_Savings_L_val_SP']= 12*18*$options['Kundenbonus']+Savings_ges();
$results['Total_Savings_L_no_val_SP']=Savings_ges();
$results['AutQoute_SP']=Aut_qoute();
//DEBUG
//$resultset['L_SP']=$results;


$results['Inf']=$options['Inflation'];
$results['Price']=$options['Reward'];
$results['AllInputdata']=$data;


//DEBUG
//$results['DEBUG.option'] = $options;
//$results['DEBUG.SETS'] = $resultset;

//$results['pscalc']=$ps_data;

foreach ($results as &$value) {
   if (is_numeric($value))$value = round($value,2);
}
return $results;    
}
function Degradation(){
    $deg = array();
    $deg_val= 1;
    array_push($deg, $deg_val);
    for ($i = 0;$i <= 24;$i++){
        $deg_val = $deg_val*0.9975;
        array_push($deg, $deg_val);
        };
    
    
 //DEBUG
 //global $results;
//$results['DEBUG.$deg']=$deg;
 return $deg;
    
}
function Verguetung(){
    global $options;
    $ver = array();
    for ($i = 1;$i <= 20;$i++){
        array_push($ver,(1-((get_EV()/100)-SP_Factor()))*(Degradation()[$i-1]*Power())*($options['Reward']/100));
        };
    for ($i = 21;$i <= 25;$i++){
        array_push($ver,(1-((get_EV()/100)-SP_Factor()))*(Degradation()[$i-1]*Power())*($options['Reward_future']/100));
        };
    
 //DEBUG
 //global $results;
//$results['DEBUG.$ver']=$ver;
 return $ver;
    
}
function Savings_EV(){
    global $data;
    global $options;
    $S_EV = array();
    $VPI_S= array();
    for ($i = 0;$i <= 24;$i++){
        array_push($VPI_S,1+($i*($options['S_Inflation']/100)));
        array_push($S_EV,($VPI_S[$i]*($data['Preis']/100))*(((get_EV()/100)+SP_Factor())*(Degradation()[$i]*Power())));
        };
    
    
 //DEBUG
 //global $results;
// $results['DEBUG.$VPI_S'] = $VPI_S;
//$results['DEBUG.$S_EV']=$S_EV;
 return $S_EV;
    
}
function Wartung(){
    global $options;
    global $SP;
    $W_ges = array();
    if(!$SP){
        $Wartung = $options['Wartung'];
    }
    else{
        $Wartung = $options['Wartung_SP'];
    }
    for ($i = 0;$i <= 17;$i++){
        array_push($W_ges,0);
        };
     for ($i = 18;$i <= 24;$i++){
        array_push($W_ges,(($Wartung+$options['Versicherung'])*pow(1+($options['Inflation']/100),$i)));
        };
//DEBUG
//global $results;
//$results['DEBUG.$W_ges']=$W_ges;
 return $W_ges;
    
}
function Savings_ges(){
    global $Pacht;
    $S_ges = array();
    for ($i = 0;$i <= 17;$i++){
        array_push($S_ges,(Savings_EV()[$i]+Verguetung()[$i])-$Pacht);
        };
     for ($i = 18;$i <= 24;$i++){
        array_push($S_ges,(Savings_EV()[$i]+Verguetung()[$i]-Wartung()[$i]));
        };
//DEBUG
//global $results;
//$results['DEBUG.array_sum($S_ges)']=array_sum($S_ges);
 return array_sum($S_ges);
    
    
}
function Aut_qoute(){
    global $data;
    $AuthQuote = (Power()*((get_EV()/100)+SP_Factor())/$data['Verbrauch']);
    
//DEBUG
//global $results;
//$results['DEBUG.$AuthQuote']=$AuthQuote*100;
 return $AuthQuote*100;
}

function RBF()
{
    global $options;
    $rbf = (pow((1 + ($options['Rendite']/100)),($options['Vertragslaufzeit'])) - 1) / ($options['Rendite']/100 * (pow((1 + ($options['Rendite']/100)) , ($options['Vertragslaufzeit']))));
//DEBUG
//global $results;
//$results['DEBUG.$rbf']=$rbf;
 return $rbf;
}
function RBF_2()
{
    global $options;
    $rbf = (pow((1 + ($options['Zins']/100)),($options['Vertragslaufzeit'])) - 1) / ($options['Zins']/100 * (pow((1 + ($options['Zins']/100)) , ($options['Vertragslaufzeit']))));
//DEBUG
//global $results;
//$results['DEBUG.$rbf']=$rbf;
 return $rbf;
}

function Annuitaet()
{
    $Barwert = FK_ges();
    global $options;
    $Zins = ($options['Zins']/100);
    $Monate = 12;
    $Zinssatz = pow((1+$Zins),($options['Vertragslaufzeit']));
    $annuitaet = ($Barwert *(($Zinssatz *$Zins)/($Zinssatz -1)));

 //DEBUG
 //global $results;
//$results['DEBUG.$annuitaet']=$annuitaet;
 return $annuitaet;
}
function Kosten_zusatz(){
    $options = get_option( 'PSC_settings' );
    if (Size() < 3){
        $Zusatz = Size() * ($options['Zusatz']);
//DEBUG
//global $results;
//$results['DEBUG.$Zusatz']=$Zusatz;
 return $Zusatz;
    }
    else{
//DEBUG
//global $results;
//$results['DEBUG.$Zusatz']=0;
 return 0;

    }   
}



function Abschreibung()
{
    global $options;

    $AB= Invest_ges()/($options['Vertragslaufzeit']);
//DEBUG
//global $results;
//$results['DEBUG.$AB']=$AB;
 return $AB;
}
function EBIT(){
    global $options;
    global $SP;
    if(!$SP){
    $SUM = 0-$options['Wartung'] -$options['Versicherung']-$options['Platzhalter'];
    }
    else{
    $SUM = 0-$options['Wartung_SP'] -$options['Versicherung']-$options['Platzhalter'];
        
    }
    $EBIT =VPI($options['Vertragslaufzeit'],$SUM,$options['Inflation']/100);
    foreach($EBIT as &$bit){
        $bit += -Abschreibung();
    }
//DEBUG
//global $results;
//$results['DEBUG.$EBIT']=$EBIT;
 return $EBIT;
};

function Pacht(){
    global $Pacht;
    $Pacht = (-Kapitalwert()/RBF())*1.19;
//DEBUG
//global $results;
//$results['DEBUG.$Pacht']=$Pacht;
 return $Pacht;
}

function FCF()
{
    $FCF = array();
    foreach(EBIT() as $v){
     array_push($FCF, ($v-Annuitaet()+Abschreibung()));
    }
//DEBUG
//global $results;
//$results['DEBUG.$FCF']=$FCF;
 return $FCF;
};

function Kapitalwert()
{
    global $options;
    $KW= -EigenKaptital();
    foreach(FCF() as $periode => $FCF){
     $KW= $KW +($FCF/(pow((1+($options['Rendite']/100)),($periode + 1))));
    }
//DEBUG
//global $results;
//$results['DEBUG.$KW']=$KW;
 return $KW;
};


function Invest_ges()
{    global $SP;
     global $options;
     $Invest_k = ($options['IvKosten'])*1.05;
     if(!$SP){
     $Invest= (Size() * $Invest_k) + Kosten_zusatz();
     }
     else{
     $Invest= (Size() * $Invest_k) + Kosten_zusatz() + $options['Speicher'];
     }
 //DEBUG
//global $results;
//$results['DEBUG.$Invest']=$Invest;
 return $Invest;
}
function FK_ges(){
    $Investment = Invest_ges();
    global $options;
    $FK_ges= $Investment *($options['FkAnteil']/100);
//DEBUG
//global $results;
//$results['DEBUG.$FK_ges']=$FK_ges;
 return $FK_ges;
    
}
function EigenKaptital(){
    $EK = Invest_ges() -FK_ges();
//DEBUG
//global $results;
//$results['DEBUG.$EK']=$EK;
 return $EK;
};

function VPI($Laufzeit,$Betrag,$Inflation)
{
    $Betrag_ges = array();
        for ($i = 0;$i < $Laufzeit;$i++){
        array_push($Betrag_ges,( $Betrag*(1+($i*$Inflation))));
        };
    //DEBUG
//global $results;
//$results['DEBUG.$Betrag_ges']=$Betrag_ges;
 return $Betrag_ges;
    
    
};





?>