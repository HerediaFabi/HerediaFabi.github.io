// $(document).ready(function(){
    // set up text to print, each item in array is new line
    var aText = new Array(
        "Hello! welcome to my personal portfolio.", 
        "My name is <cyan>F</cyan>abiana <cyan>H</cyan>eredia.",
        "I'm <underline>Software Developer.</underline> <span id='carita'>&#9786</span>"
        
    );
    var iSpeed = 40; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
    
    function typewriter()
    {
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        var destination = document.getElementById("typedtext");
        
        while ( iRow < iIndex ) {
            sContents += aText[iRow++] + '<br />';
        }

        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        
        if ( iTextPos++ == iArrLength ) {
            iTextPos = 0;
            iIndex++;
            if ( iIndex != aText.length ) {
                iArrLength = aText[iIndex].length;
                setTimeout("typewriter()", 500);
            }
        } else {
            setTimeout("typewriter()", iSpeed);
        }
    }
    
    
    typewriter();
    
    //FIJARSE SI SE PUEDE HACE COMPARANDO EL COLOR DE FONDO DEL BOTON
    function cambiarFondoBoton(idBoton, bandera){
        if(bandera){
            $("#"+idBoton).css("background-color", "#ddd");
            $("#"+idBoton).css("color", "#101010");
            $("#"+idBoton).css("border", "0px");
            // $("#"+idBoton).css("background-color", "red");
        }
        else{
            $("#"+idBoton).css("background-color", "#101010");
            $("#"+idBoton).css("color", "#30C6B7");
            $("#"+idBoton).css("border", "2px solid #30C6B7");
        }
    }

    function cambiarBandera(bandera){
        if(bandera){
            bandera = false;
        }else{
            bandera = true;
        }
        return bandera;
    }

    var banderaBtnTools = true;
    var banderaBtnFrontend = true;
    var banderaBtnBackend = true;

    $("#btnTools").click(function(){
        cambiarFondoBoton("btnTools", banderaBtnTools);
        banderaBtnTools = cambiarBandera(banderaBtnTools);
    })

    $("#btnFrontend").click(function(){
        cambiarFondoBoton("btnFrontend", banderaBtnFrontend);
        banderaBtnFrontend = cambiarBandera(banderaBtnFrontend);
    })
    
    $("#btnBackend").click(function(){
        cambiarFondoBoton("btnBackend", banderaBtnBackend);
        banderaBtnBackend = cambiarBandera(banderaBtnBackend);
    })
//});