$(document).on('ready', funcMain);


function funcMain()
{
	$("#add_row4").on('click',mayusculas);
}


function mayusculas(){ 
    var name_table=document.getElementById("tabla4");
    
    //contador de palabras
    var textoArea = document.getElementById("area").value;
    var numeroCaracteres = textoArea.length;
    var inicioBlanco = /^ /;
    var finBlanco = / $/;
    var variosBlancos = /[ ]+/g ;
    var saltoLinea = /\n/;
    textoArea = textoArea.replace(inicioBlanco,"");
    textoArea = textoArea.replace(finBlanco,"");
    textoArea = textoArea.replace(variosBlancos," ");
    textoArea = textoArea.replace(saltoLinea," ");
    var textoAreaDividido = textoArea.split(" ");
    var numeroPalabras = textoAreaDividido.length;
    var txt = [" "];

  var patron=textoArea.toUpperCase();
        
            var row = name_table.insertRow(0+1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = '<p name="numero_f[]" class="non-margin">'+patron+'</p>';    
}
    
   
    
    
