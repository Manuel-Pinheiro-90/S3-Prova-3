/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(" Esercizio A ", sum)


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)
console.log(" Esercizio B ", random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = { name: "Manuel", surname: "Pinheiro", age: 33 }

console.log("Esercizio C", me)

/* ESERCIZIO D

  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/


delete me.age;
console.log("Esercizio D", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

let skills = ["css ", "HTML", "forse un giorno JG "];

me.skills = skills;
console.log("Esercizio E", me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

let pushhare = "odio e villipendio"

skills.push(pushhare);
console.log("Esercizio F", me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("esercizio G", me) //mi sono accorto tardi di non aver isolato i vari esercizzi,  quindi si modificano tra di loro chiedo venia non so se si dovesse impedirlo o meno.



// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {

  let caso = Math.floor(Math.random() * 6) + 1;
  console.log("Esercizio 1 ", caso);
}

dice()

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(x, y) {
  if (x > y) { return console.log(x, " è il numero maggiore ") }
  else { return console.log(y, " è il numero maggiore") }
}

whoIsBigger(43, 11)


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stacca) {
  return stacca.split(" ");
}

let risultatoArr = splitMe("I love coding");
console.log("Esercizio 3 ", risultatoArr)



/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/



function deleteOne(bomba, Vera) {
  if (Vera === true) { return bomba.substring(1) }
  else { return bomba.substring(0, bomba.length - 1); }
}
console.log("Esercizio 4 true ", deleteOne("banana", true))
console.log("Esercizio 4 folse ", deleteOne("banana", false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  let rob = "";

  for (let i = 0; i < stringa.length; i++) {
    const carattere = stringa[i];


    if (isNaN(parseInt(carattere))) {
      rob += carattere;
    }
  }

  return rob;
}
let risultato = onlyLetters("ho 25 cani e 7 gatti");
console.log("Esercizio 5 ", risultato);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {

  const tesTemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //trovato online senno avrei messo solo la @
  return tesTemail.test(email);
}

console.log("Esercizio 6 ", isThisAnEmail("manuel.pibilo@libero.it"))


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let data = new Date()
  let giornoSettimana = ["domenica", "lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato"]
  let dy = data.getDay()
  return giornoSettimana[dy]
}

console.log("Esercizio 7 oggi è il ", whatDayIsIt())


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}


function rollTheDices(numLanci) {
  let valoriLanci = [];
  let sum = 0;

  for (let i = 0; i < numLanci; i++) {
    let valore = dice();
    valoriLanci.push(valore);
    sum += valore;

  }
  return {
    sum: sum,
    valoriLanci: valoriLanci
  };
}


let finale = rollTheDices(4);
console.log("Esercizio 8 - Risultato  lancio dei dadi:", finale);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(giornoCompleanno, Mesecompleanno) {
  const oggi = new Date();
  const giornoAttuale = oggi.getDate();
  const meseAttuale = oggi.getMonth() + 1
  return giornoAttuale === giornoCompleanno && meseAttuale === Mesecompleanno;
}

const gC = 12
const mC = 4
const compleanno = isTodayMyBirthday(gC, mC);
if (compleanno) {
  console.log("Esercizio 10  oggi è il mio compleanno")
} else { console.log(" oggi non è il mio compleanno") }


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto, nomeProprieta) {

  if (oggetto.hasOwnProperty(nomeProprieta)) {
    delete oggetto[nomeProprieta];
  }

  return oggetto
}
const Ogesempio = {
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
  Year: '2001',
  imdbID: 'tt0120737',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'
};

const ogModificato = deleteProp(Ogesempio, "type");
console.log("Esercizio 11", ogModificato)


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


function newestMovie(movies) {
  let filmPiuRecente = null;
  let annoPiuRecente = 0;

  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    const annoFilm = parseInt(film.Year);

    if (annoFilm > annoPiuRecente) {
      filmPiuRecente = film;
      annoPiuRecente = annoFilm;
    }
  }

  return filmPiuRecente;
}

const filmPiuRecente = newestMovie(movies);
console.log("Esercizio 12 - Film più recente:", filmPiuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;

}
const numeroFilm = countMovies(movies);
console.log("Esercizio 13", numeroFilm);


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const years = movies.map((movie) => movie.Year); 
  return years;
}

const anniDeiFilm = onlyTheYears(movies);
console.log("Esercizio 14:", anniDeiFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const lastMilleniumMovie = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const year = parseInt(movie.Year);


    if (year <= 2000) {

      lastMilleniumMovie.push(movie);
    }


  }

  return lastMilleniumMovie
}

const millennioPassato = onlyInLastMillennium(movies)
console.log("Esercizio 15 - Film del millennio scorso:", millennioPassato)
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  let totalYears = 0;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const year = parseInt(movie.Year);

    totalYears += year;
  }

  return totalYears;
}

const sommaAnniProduzione = sumAllTheYears(movies);
console.log("Esercizio 16 - Somma degli anni di produzione:", sommaAnniProduzione);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(searchString, movies) {
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });

  return filteredMovies;
}

const searchString = "Lord";
const risultatiRicerca = searchByTitle(searchString, movies);

console.log("Esercizio 17 ", risultatiRicerca);


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function Recupero() {
  const contenitore = document.getElementById('container');
  return contenitore;
}
const Richiamo = Recupero();


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function select() {
  const bubu = document.getElementsByTagName('td');
  return bubu

}
const richiamo = select()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTd() {
  const elementiTd = document.getElementsByTagName('td');

  for (let i = 0; i < elementiTd.length; i++) {
    const elementoTd = elementiTd[i];
    const TextEl = elementoTd.textContent.trim();
    console.log(TextEl);
  }
}
stampaTd()


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/


function aggiungiColoreRossoAiLink() {
const links = document.querySelectorAll('a');
links.forEach(link => {
      link.style.backgroundColor = 'red';
  });
}


aggiungiColoreRossoAiLink();




/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function coloreRosso() {
  const links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.style.backgroundColor = 'red';
  }
}


coloreRosso();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElemento() {

  const Nl = document.createElement('li');
  const testo = document.createTextNode('Nuovo elemento');
  Nl.appendChild(testo);
  const lista = document.getElementById('myList');
  lista.appendChild(Nl);
}

aggiungiElemento();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista() {
  const lista = document.getElementById('myList');

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
svuotaLista();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasseTR() {
  const trElements = document.getElementsByTagName('tr');
  for (let i = 0; i < trElements.length; i++) {
    trElements[i].classList.add('test');
  }
}
aggiungiClasseTR();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


