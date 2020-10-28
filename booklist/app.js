//Book connstructor
function Book(tittle,author,isbn){
    this.tittle=tittle;
    this.author=author;
    this.isb=isbn;
}

//UI constructor

function UI(){
    UI.prototype.addBookToList=function(book){
        const List=document.querySelector('#book-list');
        //create tr
        const row=document.createElement('tr');
        row.innerHTML=`
            <td>${book.tittle}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete">x</td>
        `;
        //roow append to lIst
        List.appendChild(row);
    }
}
UI.prototype.showAlert = function(message, className) {
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
//UI clearfields
UI.prototype.clearFields=function(){
    document.querySelector('#title').value;
    document.querySelector('#author').value;
    document.querySelector('#isbn').value;
}
//UI delete Book
UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}
//addEventlistener
document.querySelector('#book-form').addEventListener('submit',function(e){
   //Get form values
    const title=document.querySelector('#title').value,
    author=document.querySelector('#author').value,
    isb=document.querySelector('#isbn').value;
    //instance book 
    const book=new Book(title,author,isb);
    //Instance Ui
    const ui=new UI();
    //validation form
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
      }
    else{
     //Add book to UI list
        ui.addBookToList(book);
        // Add LocalStorage
        Store(book)
        //sowh success
        ui.showAlert('Book added','success');
        ui.clearFields();
           
    }
    
    e.preventDefault();
});
// delete book
document.querySelector('#book-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteBook(e.target);
    removeBookLS(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book deleted','success');
   
});


//ghet store 
function Store(book){
   let books;
   if(localStorage.getItem('books')===null){
       books=[];
   } 
   else{
       books=JSON.parse(localStorage.getItem('books'));
   }
   books.push(book);
   localStorage.setItem('books',JSON.stringify(books));
}

//remove book LS}
// function removeBookLS(isbn){
//     let books;
   
//     if(localStorage.getItem('books')===null){
//         books=[];
//     }
//     else{
//         books=JSON.parse(localStorage.getItem('books'));
//     }
//     books.forEach(function(book, index){
//         if(book.isbn === isbn) {
//          books.splice(index, 1);
//         }
//        });
   
//        localStorage.setItem('books', JSON.stringify(books));
// }