<?php
include("header.php");
require_once("db_getdataFunctions.php");
$customers = getCustomers();
?>
<table>
		<tr>
			<th>FirstName</th>
            <th>LastName</th>
			<th>Email</th>
		</tr>

<?php
		foreach($customers as $customer){
			echo '<tr>';
			echo '<td>' . $customer['FirstName'] . '</td>';
            echo '<td>' . $customer['LastName'] . '</td>';
			echo '<td>' . $customer['Email'] . '</td>';
			echo '</tr>';
		}

		?>
</table>
<?php include("footer.php");
?>