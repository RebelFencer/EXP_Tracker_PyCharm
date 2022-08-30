var selectedRow = null
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["Onyx"] = document.getElementById("Onyx").value;
    formData["Gunther"] = document.getElementById("Gunther").value;
    formData["Andrasta"] = document.getElementById("Andrasta").value;
    formData["Varren"] = document.getElementById("Varren").value;
    formData["Phelles"] = document.getElementById("Phelles").value;
    formData["Zhuo"] = document.getElementById("Zhuo").value;
    formData["Salvador"] = document.getElementById("Salvador").value;
    formData["Cadfael"] = document.getElementById("Cadfael").value;

    return formData;
}

//Insert the Data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.perPrice;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.perPrice;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.perPrice;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.perPrice;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//Edit data
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('Onyx').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Gunther').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Andrasta').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Varren').value = selectedRow.cells[3].innerHTML;
    document.getElementById('Phelles').value = selectedRow.cells[4].innerHTML;
    document.getElementById('Zhuo').value = selectedRow.cells[5].innerHTML;
    document.getElementById('Salvador').value = selectedRow.cells[6].innerHTML;
    document.getElementById('Cadfael').value = selectedRow.cells[7].innerHTML;

}


function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Onyx;
    selectedRow.cells[1].innerHTML = formData.Gunther;
    selectedRow.cells[2].innerHTML = formData.Andrasta;
    selectedRow.cells[3].innerHTML = formData.Varren;
    selectedRow.cells[4].innerHTML = formData.Phelles;
    selectedRow.cells[5].innerHTML = formData.Zhuo;
    selectedRow.cells[6].innerHTML = formData.Salvador;
    selectedRow.cells[7].innerHTML = formData.Cadfael;

}

//Delete data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('Onyx').value = '';
    document.getElementById('Gunther').value = '';
    document.getElementById('Andrasta').value = '';
    document.getElementById('Varren').value = '';
    document.getElementById('Phelles').value = '';
    document.getElementById('Zhuo').value = '';
    document.getElementById('Salvador').value = '';
    document.getElementById('Cadfael').value = '';

}