<?php
include 'calc.php';
include 'ps-calc.php';

function serialtoArray($serial){
$results =array();
$raw = explode('&',$serial);
    foreach($raw as $v){
    $part=explode('=',$v);
         $results[$part[0]]=$part[1];
    }
return $results;

}

function plz_check (){
$data = check_PLZ(serialtoArray($_POST['result'])['PLZ']);
echo json_encode($data) ;
wp_die();     
}


function calculate_data ( ){
$data = ps_calculation(serialtoArray($_POST['result']));
 echo json_encode($data);
 wp_die();
}
function GGEW_calculate_data( ){
$data = ggew_calculation(serialtoArray($_POST['result']));
 echo json_encode($data);
 wp_die();
}

function get_infobox_var( ){
$data = infoboxes(serialtoArray($_POST['result']));
 echo json_encode($data) ;
 wp_die();
}

?>