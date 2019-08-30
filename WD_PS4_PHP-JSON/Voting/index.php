<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Voting__PHP</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<section class="voting">
  <h1>Choose your Steel Hunter!</h1>
  <div class="voting_items">
    <img class="voting_item" src="assets/images/FLAME SWORD.png" alt="FLAME SWORD">
    <img class="voting_item" src="assets/images/RATTLESNAKE.png" alt="RATTLESNAKE">
    <img class="voting_item" src="assets/images/RED DAWN.png" alt="RED DAWN">
  </div>
  <form class="voting_options" method="post">
    <input class="voting_option" type="submit" name="vote" value="FLAME SWORD">
    <input class="voting_option" type="submit" name="vote" value="RATTLESNAKE">
    <input class="voting_option" type="submit" name="vote" value="RED DAWN">
  </form>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['vote'])) {
        $result = $_POST['vote'];
        $fileName = "date.json";
        if (file_exists($fileName)) {
            $date = json_decode(file_get_contents($fileName));
            $date->{'voting'}->{$result}++;
            writeToFile($date, $fileName);
        } else {
            $option = array("FLAME SWORD" => 0, "RATTLESNAKE" => 0, "RED DAWN" => 0);
            $option[$result]++;
            $date = array('voting' => array("FLAME SWORD" => $option["FLAME SWORD"],
                "RATTLESNAKE" => $option["RATTLESNAKE"],
                "RED DAWN" => $option["RED DAWN"]));
            writeToFile($date, $fileName);
        }
        header('Location: result.php');
    }
    ?>
    <?php
    function writeToFile($date, $pathToFile)
    {
        $file = fopen($pathToFile, 'w');
        fwrite($file, json_encode($date));
        fclose($file);
    }

    ?>
  <div class="viewResults">
    <a href="result.php">VIEW RESULT</a>
  </div>
</section>
</body>
</html>
