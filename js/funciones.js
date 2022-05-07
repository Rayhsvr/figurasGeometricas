// Función para calcular el área de un círculo
function areaCirculo() {
    try {
    const PI = 3.141592654;
    let radio = document.getElementById("radio").value;
    let r=parseInt(radio);
    if (r >= 1) {
    let area = PI*r*r;
    document.getElementById("area").value=area;
    return area;
    }else{
        window.alert("Proporcione un valor mayor o igual a 1");
    }
    } catch (error) {
        window.alert("Proporcione un valor mayor o igual a 1");
    }
}

// Función para calcular el área de un cuadrado
function areaCuadrado() {
    try {
    let lado = document.getElementById("lado").value;
    let l=parseInt(lado);
    if (l >= 1) {
        let area = 0;
        // Aquí va el código para calcular el area

        document.getElementById("area").value=area;
        return area;
    }else{
        window.alert("Proporcione un valor mayor o igual a 1");
    }
    } catch (error) {
        window.alert("Proporcione un valor mayor o igual a 1");
    }
}

// Función para calcular el área de un rectángulo
function areaRectangulo() {
    try {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let b=parseInt(base);
    let a=parseInt(altura);
    if (b >= 1 && a >= 1) {
        let area = 0;
        // Aquí va el código para calcular el area
    
        document.getElementById("area").value=area;
        return area;
    }else{
        window.alert("Proporcione un valor mayor o igual a 1");
    }
    } catch (error) {
        window.alert("Proporcione un valor mayor o igual a 1");
    }
}

// Función para calcular el área de un triángulo
function areaTriangulo() {
    try {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let b=parseInt(base);
    let a=parseInt(altura);
    if (b >= 1 && a >= 1) {
        let area = 0;
        // Aquí va el código para calcular el area
    
        document.getElementById("area").value=area;
        return area;
    }else{
        window.alert("Proporcione un valor mayor o igual a 1");
    }
    } catch (error) {
        window.alert("Proporcione un valor mayor o igual a 1");
    }
}

// Función para limpiar los formularios
function limpiar(opcion) {
    switch(opcion) {
        case 1:
            document.getElementById("radio").value="";
            break;
        case 2:
            document.getElementById("lado").value="";
            break;
        case 3:
        case 4:
            document.getElementById("base").value="";
            document.getElementById("altura").value="";
            break;
        }
    document.getElementById("area").value="";
    
}