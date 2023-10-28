 
const books = [
    { id:"1",title:"El perfume del Rey", author: "Karine Bernal Lobo", img:"../img/libro1.JPG",desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis "}, 
    { id:"2",title: "1984", author: "Georgel Orwell", img:"../img/libro2.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"3",title: "Historia del tiempo", author: "Stephen W.Hawking", img:"../img/libro3.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"4",title: "12 reglas para vivir", author: "Jordan B.Peterson", img:"../img/libro4.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"5",title: "Purple Hearths", author: "Tess Wakefield", img:"../img/libro5.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"6",title: "Ignite me", author: "Tahereh Mafi", img:"../img/libro6.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"7",title: "Shadow me", author: "Tahereh Mafi", img:"../img/libro7.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"8",title: "El dia que dejo de nevar en Alaska", author: "Alice Kellen", img:"../img/libro8.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"9",title: "Nosotros en la Luna", author: "Alice Kellen", img:"../img/libro9.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"10",title: "Las Alas de Sophie", author: "Alice Kellen", img:"../img/libro10.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"11",title: "El Héroe perdido", author: "Rick Riordan", img:"../img/libro11.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"12",title: "El hijo de Neptuno", author: "Rick Riordan", img:"../img/libro12.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"13",title: "La casa de Hades", author: "Rick Riordan", img:"../img/libro13.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"14",title: "El Ladrón del Rayo", author: "Rick Riordan", img:"../img/libro14.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"15",title: "La batalla del Laberinto", author: "Rick Riordan", img:"../img/libro15.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"16",title: "La pirámide roja", author: "Rick Riordan", img:"../img/libro16.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"17",title: "El trono de fuego", author: "Rick Riordan", img:"../img/libro17.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"18",title: "Harry Potter y la piedra filosofal", author: "J.K Rowling", img:"../img/libro18.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"19",title: "Harry Potter y las reliquias de la Muerte", author: "J.K Rowling", img:"../img/libro19.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"20",title: "Los Crímenes de Grindelwald", author: "J.K Rowling", img:"../img/libro20.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"21",title: "Animales Fántasticos y donde encontrarlos", author: "J.K Rowling", img:"../img/libro21.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"22",title: "Los cuentos de Beedle el Bardo", author: "J.K Rowling", img:"../img/libro22.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis "},
    { id:"23",title: "Todo lo que nunca fuimos", author: "Alice Kellen", img:"../img/libro23.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"24",title: "Todo lo que somos juntos", author: "Alice Kellen", img:"../img/libro24.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"25",title: "El chico que dibujaba constelaciones", author: "Alice Kellen", img:"../img/libro25.JPG",desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"26",title: "Tú y yo invencibles", author: "Alice Kellen", img:"../img/libro26.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"27",title: "El lenguaje de las espinas", author: "Leihg Bardugo", img:"../img/libro27.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"28",title: "La marca de Atenea", author: "Rick Riordan", img:"../img/libro28.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"29",title: "La sangre del Olimpo", author: "Rick Riordan", img:"../img/libro29.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"30",title: "El mar de los Mounstros", author: "Rick Riordan", img:"../img/libro30.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"31",title: "Harry Potter y la camara secreta ", author: "J.K Rowling", img:"../img/libro31.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"32",title: "Harry Potter y el prisionero de Azkaban", author:"J.K Rowling", img:"../img/libro32.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"33",title: "Harry Potter y el misterio del principe", author: "J.K Rowling", img:"../img/libro33.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"34",title: "Harry Potter y el legado maldito", author: "J.K Rowling", img:"../img/libro34.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"35",title: "Hogwarts una guia incompleta y poco fiable", author: "J.K Rowling", img:"../img/libro35.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"36",title: "Quidditch a traves de los tiempos", author: "J.K Rowling", img:"../img/libro36.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"37",title: "Historias breves de Hogwarts", author: "J.K Rowling", img:"../img/libro37.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"38",title: "Magnus Chase y los Dioses de Agard, El martillo de Thor", author: "Rick Riordan", img:"../img/libro38.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"39",title: "Magnus Chase y los Dioses de Agard, El Barco de los muertos", author: "Rick Riordan", img:"../img/libro39.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"40",title: "Magnus Chase y los Dioses de Agard, La espada del tiempo", author: "Rick Riordan", img:"../img/libro40.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"41",title: "Cuando no queden más estrellas que contar", author: "María Martínez", img:"../img/libro41.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"42",title: "La biblioteca de los sueños imposibles", author: "Lin Rina", img:"../img/libro42.png", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"43",title: "El planeta que inventamos", author: "Lucía Gil", img:"../img/libro43.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
    { id:"44",title: "El jardín de las Mariposas", author: "Dot. Hutchison", img:"../img/libro44.JPG", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet neque nobis " },
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookList = document.getElementById("bookList");
const book = document.getElementById("books");
const Est = document.getElementById("EST");


// Función para mostrar resultados de búsqueda
function displaySearchResults(results) {
    // Limpiar la lista de libros
    bookList.innerHTML = "";

    var html_contenedor = document.getElementById("content-book");
    var list_books = "";

    // Mostrar los resultados
    results.forEach(book => {

        var content_book= html_contenedor.innerHTML
        .replace("[[IMAGEN]]",book.img)
        .replace("[[TITULO]]",book.title)
        .replace("[[DESC]]", book.desc)
        .replace("[[EST-BOOK]]",book.estado);

        //content_book = content_book.replace("[[TITULO]]",book.title)    
        //const li = document.createElement("li");
        //li.textContent = ` `;
        //li.innerHTML = ` `; 
        list_books += content_book;
    });

    bookList.innerHTML = list_books;
}

// Función para realizar la búsqueda
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(results);
}

// Manejar el evento de clic en el botón de búsqueda
searchButton.addEventListener("click", searchBooks);

bookList.innerHTML = list_books; 
