<?php
header('Content-Type: application/json');

$menu = file_get_contents('../data/menu.json');

echo $menu;
?>