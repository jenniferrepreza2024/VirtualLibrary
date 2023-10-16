// Datos de ejemplo (puedes reemplazarlos con tus propios datos)
    
const books = [
    { title:"El perfume del Rey", author: "Karine Bernal Lobo", img:"../img/libro1.JPG"   },
    { title: "1984", author: "Georgel Orwell", img:"../img/libro2.JPG" },
    { title: "Historia del tiempo", author: "Stephen W.Hawking", img:"../img/libro3.JPG" },
    { title: "12 reglas para vivir", author: "Jordan B.Peterson", img:"../img/libro4.JPG" },
    { title: "Purple Hearths", author: "Tess Wakefield", img:"../img/libro5.JPG" },
    { title: "Ignite me", author: "Tahereh Mafi", img:"../img/libro6.JPG" },
    { title: "Shadow me", author: "Tahereh Mafi", img:"../img/libro7.JPG" },
    { title: "El dia que dejo de nevar en Alaska", author: "Alice Kellen", img:"../img/libro8.JPG" },
    { title: "Nosotros en la Luna", author: "Alice Kellen", img:"../img/libro9.JPG" },
    { title: "Las Alas de Sophie", author: "Alice Kellen", img:"../img/libro10.JPG" },
    { title: "El Héroe perdido", author: "Rick Riordan", img:"../img/libro11.JPG" },
    { title: "El hijo de Neptuno", author: "Rick Riordan", img:"../img/libro12.JPG" },
    { title: "La casa de Hades", author: "Rick Riordan", img:"../img/libro13.JPG" },
    { title: "El Ladrón del Rayo", author: "Rick Riordan", img:"../img/libro14.JPG" },
    { title: "La batalla del Laberinto", author: "Rick Riordan", img:"../img/libro15.JPG" },
    { title: "La pirámide roja", author: "Rick Riordan", img:"../img/libro16.JPG" },
    { title: "El trono de fuego", author: "Rick Riordan", img:"../img/libro17.JPG" },
    { title: "Harry Potter y la piedra filosofal", author: "J.K Rowling", img:"../img/libro18.JPG" },
    { title: "Harry Potter y las reliquias de la Muerte", author: "J.K Rowling", img:"../img/libro19.JPG" },
    { title: "Los Crímenes de Grindelwald", author: "J.K Rowling", img:"../img/libro20.JPG" },
    { title: "Animales Fántasticos y donde encontrarlos", author: "J.K Rowling", img:"../img/libro21.JPG" },
    { title: "Los cuentos de Beedle el Bardo", author: "J.K Rowling", img:"../img/libro22.JPG" },
    { title: "Todo lo que nunca fuimos", author: "Alice Kellen", img:"../img/libro23.JPG" },
    { title: "Todo lo que somos juntos", author: "Alice Kellen", img:"../img/libro24.JPG" },
    { title: "El chico que dibujaba constelaciones", author: "Alice Kellen", img:"../img/libro25.JPG" },
    { title: "Tú y yo invencibles", author: "Alice Kellen", img:"../img/libro26.JPG" },
    { title: "El lenguaje de las espinas", author: "Leihg Bardugo", img:"../img/libro27.JPG" },
    { title: "La marca de Atenea", author: "Rick Riordan", img:"../img/libro28.JPG" },
    { title: "La sangre del Olimpo", author: "Rick Riordan", img:"../img/libro29.JPG" },
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookList = document.getElementById("bookList");

// Función para mostrar resultados de búsqueda
function displaySearchResults(results) {
    // Limpiar la lista de libros
    bookList.innerHTML = "";

    // Mostrar los resultados
    results.forEach(book => {
        const li = document.createElement("li");
        //li.textContent = ` `;
        li.innerHTML = `<p> ${book.title} by ${book.author} </p> <img src="${book.img }"  /> `;
        bookList.appendChild(li);
    });
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
