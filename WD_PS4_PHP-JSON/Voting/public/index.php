<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Voting__PHP</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<section class="voting">
  <h1>Choose your Steel Hunter!</h1>
  <div class="voting_items">
    <img class="voting_item" src="assets/images/FLAME%20SWORD.png" alt="FLAME SWORD">
    <img class="voting_item" src="assets/images/RATTLESNAKE.png" alt="RATTLESNAKE">
    <img class="voting_item" src="assets/images/RED%20DAWN.png" alt="RED DAWN">
  </div>
  <form class="voting_options" method="post">
    <input class="voting_option" type="submit" name="vote" value="FLAME SWORD">
    <input class="voting_option" type="submit" name="vote" value="RATTLESNAKE">
    <input class="voting_option" type="submit" name="vote" value="RED DAWN">
  </form>
    <?php
    session_start();
    require "../../Voting/core/function.php";
    ?>
  <div class="viewResults">
    <a href="result.php">VIEW RESULT</a>
  </div>
</section>
</body>
</html>
