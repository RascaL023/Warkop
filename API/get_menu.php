<?php
// Header bahwa ini bertipe json
header('Content-Type: application/json');

$menu = file_get_contents('menu.json');

echo $menu;
?>