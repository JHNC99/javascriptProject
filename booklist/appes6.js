class Book{
    constructor (title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        console.log(title);
    } 
}

 class UI{
     static addBookToList(book){
        const List=document.querySelector('#book-list');
        //create tr
        const row=document.createElement('tr');
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete">x</td>
        `;
        //roow append to lIst
        List.appendChild(row);
     }

     static showAlert(message,className){  
         // Create div
        const div=document.createElement('div');
        div.className=`alert ${className}`
        //append message to div
        div.appendChild(document.createTextNode(message));
        //add show alert to UI
        const container=document.querySelector('.container');
        
        const form=document.querySelector('#book-form');
        
        container.insertBefore(div,form);
        // container.insertBefore(div, form);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000);
     }
     
     static deleteBook(target){
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
     }

     static clearFields(){
        document.querySelector('#title').value="";
        document.querySelector('#author').value="";
        document.querySelector('#isbn').value="";
     }
 }

 document.querySelector('#book-form').addEventListener('submit',function(e){
    //Get form values
     const title=document.querySelector('#title').value,
     author=document.querySelector('#author').value,
     isb=document.querySelector('#isbn').value;
     //instance book 
     const book=new Book(title,author,isb);

     if(title === '' || author === '' || isbn === '') {
        // Error alert
        UI.showAlert('Please fill in all fields', 'error');
      }
    else{
         //Add book to UI list
        UI.addBookToList(book);
        Store.addBook(book);
        //sowh success
        UI.showAlert('Book added','success');
        UI.clearFields();
    }
     e.preventDefault();
 });


 //Add Storage
 class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach(function(book){
        // Add book to UI
        UI.addBookToList(book);
      });
    }
  
    static addBook(book) {
      const books = Store.getBooks();
  
      books.push(book);
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBookLS(isbn) {
      const books = Store.getBooks();
  
      books.forEach(function(book, index){
       if(book.isbn === isbn) {
        books.splice(index, 1);
       }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
 // delete book
document.querySelector('#book-list').addEventListener('click',function(e){
    UI.deleteBook(e.target);
    removeBookLS(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book deleted','success');
   
});
document.addEventListener('DOMContentLoaded', Store.displayBooks);