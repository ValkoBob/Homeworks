<h1>Task7</h1>
<p>Program should count sessions.</p>
<?php
if (!isset($_SESSION['count'])) {
    $_SESSION['count'] = 0;
} else {
    $_SESSION['count']++;
}
echo '<p>Your session is № ' . $_SESSION["count"] . '</p>';
