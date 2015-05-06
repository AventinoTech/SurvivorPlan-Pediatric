  
<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

<!-- Form -->
<form id="newform">
	Test form
</form>

  <?php
        // Create connection
        $con=mysqli_connect("localhost","root","root","survivorplan");

        // Check connection
        if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
		echo "<br>";

		//Query 1
        $result = mysqli_query($con,"SELECT * FROM tblpatient");

        while($row = mysqli_fetch_array($result)) {
        echo $row['FirstName'] . " " . $row['LastName'];
        echo "<br>";
        }

		//Query 2
        $result2 = mysqli_query($con,"SELECT * FROM tblsyspatient");

        while($row = mysqli_fetch_array($result2)) {
        echo $row['fieldid'] . " " . $row['fieldtype'];
        echo "<br>";
        }

		
	mysqli_close($con);
 

   ?> 
	<script>
			var form = document.getElementById("newform");
            var element1 = document.createElement("INPUT");
            var element3 = document.createElement("p");
            element3.innerHTML = "label 4"
            form.appendChild(element3);
            element1.type = "text";
            element1.name = "field4";
            form.appendChild(element1);
            var element2 = document.createElement("INPUT");
            var element5 = document.createElement("p");
            element5.innerHTML = "label 5"
            form.appendChild(element5);
            element2.name = "field5";
            element2.type = "text";
            form.appendChild(element2);
        </script>
   
</body>
</html>