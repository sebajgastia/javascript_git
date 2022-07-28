for( let i=1;i<=12;i++) {
    let ingresarCuota=prompt("ingresar tu cuota actual");
    if(ingresarCuota=="8"){
        console.log("estas al dia con tus cuotas ");
        break;
    }else{
        console.log("te atrasaste por favor contactanos !");
        break;
    }
}