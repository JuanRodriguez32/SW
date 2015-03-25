/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcular() {
    var x, y;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;

    if (isNaN(x)) {
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
    }
    else if (isNaN(y)) {
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
    }
    else
    {
        var rta = parseInt(x) + parseInt(y);
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        ;
    }
}

function concatenar(){
    var x, y;
    x= document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    var z = x+y;
    
    alert(z);
    
     document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + z + "</div>";
}

function ordenar(){
    
    var x,y,z;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;
    
    var a,b,c;
    
    //para sacar el mayor
    if(x>y && x>z)
    {
        a = x;
        if(y>z)
        {
            b= y;
        }
        if(z>y)
        {
            b = z;
        }
        if(y<z)
        {
            c=y;
        }
        if(z<y)
        {
            c=z;
        }
        
    }
    
   else if ( y>x && y>z)
   {
         a = y;
        if(x>z)
        {
            b= x;
        }
        if(z>x)
        {
            b = z;
        }
        if(x<z)
        {
            c=x;
        }
        if(z<x)
        {
            c=z;
        }
   }
   
   else if (z>x && z>y)
   {
        a = z;
        if(x>y)
        {
            b= x;
        }
        if(y>x)
        {
            b = y;
        }
        if(x<y)
        {
            c=x;
        }
        if(y<x)
        {
            c=y;
        }
   }
   
    

