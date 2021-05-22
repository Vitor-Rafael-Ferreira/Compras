let saldo = prompt("Digite aqui o seu saldo bancario") 

let Produto = ("2500") 
alert("a TV 4k LG custa 2500 reais, clique em OK para continuar a compra! ")
 
if(saldo >= 2500 ) alert(`Compra bem-sucedida, seu saldo atual é:${saldo - Produto} R$)`) 
 
else if (saldo < 2500) alert('Ooops, Saldo insuficiente') 
