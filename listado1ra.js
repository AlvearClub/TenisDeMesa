

  var script_url = "https://script.google.com/macros/s/AKfycbxZ_KeX9t1l4r9b4WzKzbHiHSA1LBPjyeWbJafG9B0puuLD4LL6/exec";

  // print the returned data
  function ctrlq(e) {


	$("#re").html(e.result);
	$("#re").css("visibility","visible");
	read_value();

  }

  const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: 'ABERRRRRRRR.png' });

  await browser.close();
})();

function read_value() {

  

$("#re").css("visibility","hidden");

   document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {

  
  
var nro= 1;
  for (var i = 1; i < json.records.length; i++) {
    if (json.records[i-1].CATEGORIAS.includes('1ra')) {
      

     document.write(nro);

     document.write(json.records[i-1].NOMBRES);
    document.write(json.records[i-1].PUNTAJETMT);
    document.write(json.records[i-1].LINK);
    nro= nro +1;
    document.write('<br>');
    }
  }
    // Set the variables from the results array
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");



        var header = table.createTHead();
		var row = header.insertRow(0);
    var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var nro= 1;

    cell0.innerHTML = "<b>N°</b>";
		cell1.innerHTML = "<b>Nombre y Apellido</b>";
    cell2.innerHTML = "<b>Puntaje TMT</b>";
    cell3.innerHTML = "<b>Perfil</b>";

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 1; i < json.records.length; i++) {
        if (json.records[i-1].CATEGORIAS.includes('1ra')) {

          tr = table.insertRow(-1);
  				var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = nro;
  				tabCell = tr.insertCell(-1);
  				tabCell.innerHTML = json.records[i-1].NOMBRES;
          tabCell = tr.insertCell(-1);
  				tabCell.innerHTML = json.records[i-1].PUNTAJETMT;
          tabCell = tr.insertCell(-1);
  				tabCell.innerHTML = json.records[i-1].LINK;
          nro= nro +1;
          }
        }


        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		$("#re").css("visibility","visible");
    });
    
  }