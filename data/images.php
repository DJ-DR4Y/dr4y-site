<?php

$fichiers = scandir("../images/dr4y-001");
console.log($fichiers)

$fichiers = array_slice($fichiers, 2);

// JSON.stringify en JS
echo json_encode($fichiers);

?>