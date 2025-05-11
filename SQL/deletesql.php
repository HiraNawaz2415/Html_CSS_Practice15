<!DOCTYPE html>
<html>
<head>
<title> My table in Mysql</title>  
</head>
<body>
    $conn=new msqli("localhost","root","","mydb");
     sql="CREATE TABLE	 MyMom(
         id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
         firstName VARCHAR(60) NOT NULL,
         lastName VARCHAR(60) NOT NULL,
         email VARCHAR(30),
         reg_date TIMESTAMP DEFAUT
         CURRENT_TIMESTAMP ON UPDATE
         CURRENT TIMESTAMP)";
      if($conn->query($sql)==TRUE)
        echo  "Table has been created successfully"
       else
       die("Table not been created".$conn->error);
</body>
</html>
