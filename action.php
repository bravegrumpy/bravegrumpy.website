
<p> Hi <? echo htmlspecialchars($_POST['name']); ?>. </p>
<p>You are <?php echo (int) $_POST['age']; ?> years old. </p>
<p><?php if (isset($_POST['accept'])) { echo "You have checked the box"; } else { echo "You have not checked the box"; } ?> </p>

<a href="./dev.php">Go back</a>