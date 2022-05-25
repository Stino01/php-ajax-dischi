<?php
    include __DIR__ . '/database.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style.css">
    <title>PHP Dischi</title>
</head>
<body>
        <header>
            <select name="genere" id="genere">
                <option value="">All</option>
                <option value="genre"></option>
            </select>
        </header>
        <main>
            <div class="container">
                <?php foreach($disc as $song) { ?>
                <div class="box">
                    <div class="img-holder">
                        <img src="<?php echo $song['poster'] ?>" alt="<?php echo $song['title'] ?>">
                    </div>
                    <h3><?php echo $song['title'] ?></h3>
                    <div class="sub">
                        <p><?php echo $song['author'] ?></p>
                        <p><?php echo $song['year'] ?></p>
                    </div>
                </div>
                <?php } ?>
            </div>
        </main>
</body>
</html>