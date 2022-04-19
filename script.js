function addToTable() {
  
    let firstName = document.getElementById('sname').value;
    let lastName = document.getElementById('sgrade').value;
    let courseName = document.getElementById('scourse').value;
  var table = document.getElementById("dataTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = courseName;
}
