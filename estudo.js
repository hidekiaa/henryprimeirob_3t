let tabuada = 2;
  function escreva(){
      document.write("<h1> Tabuada do " + tabuada + "</h1>")
      document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*2) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*3) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*4) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*5) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*6) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*7) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*8) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*9) + "<br>");
      document.write(tabuada + " x 1 = " + (tabuada*10) + "<br>");
}
let lista = ["jesus","spessato","duarte","anna","douglas","maria"]
function mostralista(){
document.write("tamanho da lista:"+ lista.length+"<br>");
for(let i = 0; i < lista.length; i++){
    document.write("professor: " + lista[i] + "<br>")
 }
}
function multiplica(){
    for(let i = 1; i <= 10; i++) {
    document.write ("o valor de i = " + i + "<br>");
for(let j = i; j <= 10; j++){
    document.write(i + " x " +j+" = " + (i*j)+ "<br>")
}
}
}
 
 function total(){
    
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;

    for(let i=1; i <= t;i++){
        r = v * (1+(j/100));
        document.write("Mês " + i + "valor" + r + "<br>");
        v = r; 
    }
     
    document.write("Resutado:" + r);

 }
