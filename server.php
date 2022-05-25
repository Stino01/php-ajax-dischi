<?php
    include __DIR__ . '/database.php';

    $result = [];

    if(isset($_GET['genre'])) {
        foreach($disc as $el) {
            if($el['genre'] == $_GET['genre']) {
                $result[] = $el;
            }
        }
    } else {
        $result = $disc;
    }
    
    header('Content-Type: application/json');
    echo json_encode($result);
?>