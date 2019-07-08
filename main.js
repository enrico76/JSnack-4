// JSnack #4:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ["giovanni", "pippo", "topolino", "gengis khan"];
var nomi, lista;

nomi = prompt("qual è il tuo nome?");
console.log(nomi);
lista = invitati.includes(nomi);


if (lista == true) {
  document.getElementById('my_id').innerHTML = nomi + " complimenti sei in lista";

} else {
  document.getElementById('my_id').innerHTML = nomi + " ci dispiace non sei in lista";
}
