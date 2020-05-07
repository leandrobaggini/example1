    $("#config").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionConfig").fadeIn("slow");
    })

    $("#exitConfig").click(function(){
        $("#sectionConfig").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })

    $("#proceres").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionProc").fadeIn("slow");
    })

    $("#exitProc").click(function(){
        $("#sectionProc").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })

    $("#regalos").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionRegalos").fadeIn("slow");
    })

    $("#exitReg").click(function(){
        $("#sectionRegalos").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })


    $("#perfil").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionPerfil").fadeIn("slow");
    })

    $("#exitPerf").click(function(){
        $("#sectionPerfil").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })

    $("#escaner").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionMapa").fadeIn("slow");
    })

    
    $("#exitMapa").click(function(){
        if($("#map").css("opacity") == 1){
            $("#sectionMapa").fadeOut("fast");
            $("#sectionMenu").fadeIn("slow");
        }
    })
    
  
    //Idas y vueltas de los exit y botones

    
    
    //Scripts de sonidos
    var i = 0;
    $("#sonidos").click(function(){
        i++;
        if(i == 1){
            $("#sonidos").css({
            "background" : "url(./assets/img/Off.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
        }
        else if(i == 2){
            $("#sonidos").css({
            "background" : "url(./assets/img/On.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
            i = 0;
        }
       
    })
    //Ese script es para cambiar las imagenes del sonido(on-off)


    //Jquerys de vista previa Section Scaner
    $("#volver").click(function(){
        $("#edificios").toggle("slow");
        $("#map").css({"opacity" : "1"})
        $("#scocirolli").css({"display" : "none"}) //Aca hay que apagar siempre las imagenes, cada vez que se vuelve a ver el mapa(9 img)
    })

    $("#ver").click(function(){
        $("#map").css({"opacity" : "1"})
        $("#edificios").fadeOut("fast");
        $("#sectionMapa").fadeOut("fast");
        $("#sectionEscaner").fadeIn("slow");
    })

    $("#exitScan").click(function(){
        $("#sectionEscaner").fadeOut("fast");
        $("#sectionMapa").fadeIn("fast");
    })

    //Programar que no se abra otra ubicacion si hay una abierta, similar al exit cuando se abre el mapa , que no te deja
