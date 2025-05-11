<!DOCTYPE html>
<html>
<head>
<title> My practice web page</title>
</head>
<body>
   <table border="ipx" "width=400">
   <tr>
    <td>03472661331</td>
    </tr>
    <tr>
    <td>hira2415@gmail.com</td>
    </tr>
    </table>
    </br>
   <p>According to:
   <blockquote>
        <q>Health is wealth</q>
   </blockquote>
   </p>
  <bdo dir="rtl">This is text</bdo>
 <p><cite>The scream</cite>  by william edwards </p>
 <h1>Image as alink</h1></br>
   <a href="HOME1.html">
       <img src="C:\Users\ms\Documents\images\home.jpg">
   </a>
  
<?php
$servername = "localhost";
$username = "root";
$password = "";
$db="mydb";

// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) 
{
  die("Connection failed: " . $conn->connect_error);
}
else
{
echo "Connected successfully";
}
 $sql="INSERT INTO hira(id,Name,lastname,Age)
      VALUES ('1','HIRA','Nawaz','20')";
    if($conn->($sql)===TRUE)
     echo "Data  has been successully entered";
   else
    echo"Oops! error in inserting data ".$conn->error;
 $conn->close();
 ?>          
</body>
</html>
