<link rel="stylesheet" href="JT-styles.css">
<div class="topnav">
  <a class="active" href="http://ict-458.nmsu.edu/~jeremyt/">Home</a>
  <a href="mypodcast.html"> My Podcast</a>
  <a href="contactme.html"> Contact me</a>
  <a href="resources.html"> Resources</a>
  <a href="JT-addressBook.html"> Address Book</a>
</div>

<?php
// define variables and set to empty values
$nameErr = $emailErr = "";
$name = $email = $username = $comment = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
   
     $name = test_input($_POST["name"]);
     $username = test_input($_POST["username"]);
     $serialID = test_input($_POST["serialID"]);
     $phone = test_input($_POST["phone"]);
     $email = test_input($_POST["email"]);
     $comment = test_input($_POST["comment"]);
      

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>



<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $username;
echo "<br>";
echo $phone;
echo "<br>";
echo $serialID;
echo "<br>";
echo $comment;
echo "<br>";

?>