<?php
include '../calc/calc.php';
include '/calc/ps-calc.php';
$data['result'] = ps_calculation($_POST);
exit;

?>