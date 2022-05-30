
// 1. get element by ID:
let bookList = document.getElementById('book-list');

console.log(bookList)

// 2. get elements by class name:
let titles = document.getElementsByClassName('title');
console.log(titles);
console.log(typeof (titles)) // titles are collection of html elements and its not an array. We can covert to an array object.

// titles.forEach(function(title) {
//     console.log(title);
// }) // The forEach loop will not work. Because the titles is not an array.

console.log(Array.isArray(titles)); // return false
console.log(Array.isArray(Array.from(titles))); // to convert to an array. it will return true

Array.from(titles).forEach(function (title) {
    console.log(title); // it will return the all classes with class as a title. In this there is a h1 and h2 tag with class=title
})


// 4. The Query Selector:
let wrap = document.querySelector('#book-list');
console.log(wrap) // returns <div id="book-list"> ... </div> with all its contents.
// To select only a specific section such as second li with class name, we can use the following
let className = document.querySelector('#book-list li:nth-child(2) .name');
console.log(className); // returns second li => <span class="name">The Wise Man's Fear</span>

// To select all the elements with class=name from all li tags
let books = document.querySelector('#book-list li .name')
console.log(books); // it will only return the first li with class=name from the list. To get all we use querySelectorAll
books = document.querySelectorAll('#book-list li .name') // it will return a NodeList of all li list with class=name. So there is no need to covert to array before loop
books.forEach(function (book) {
    console.log(book); // it will return each class by lopping through all of them
})

// Note: Remember that using getElementsByClassName, we get HTMLCollection and we needs to covert it to an array but with querySelectorAll we get a NodeList and
// there is no need to convert it to array first.


// 5. Changing Text & HTML Content:
books.forEach(function (book) {
    //console.log(book.textContent); // It returns all the contents of spam with class=name
    book.textContent += '(Book Title)'; // (Book Title) is appended to the contents of all class=name
});

// To change the contents:
let bookList2 = document.querySelector('#book-list');
console.log(bookList2.innerHTML); // it returns all the inner contents of id=book-list with all html tags as well.
bookList2.innerHTML += '<p>This is how are going to add HTML'; // it will add to the last of book-list


// 6. Nodes: Every single element inside a HTML is a node. Such as title, header, attribute, comments, h1 tag and etc. But there are different types of nodes.
const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is: ', banner.nodeType); // returns 1
console.log('#page-banner node name is: ', banner.nodeName); // return DIV. the element is a <div>
console.log('#page-banner has child nodes: ', banner.hasChildNodes());

// To return all nodes inside page-banner and the cloneNode should be true
let clonedBanner = banner.cloneNode(true);
console.log(clonedBanner); // it returns all the nodes insides <div>

// If cloneNode is false then only returns the page banner node <div>.
clonedBanner = banner.cloneNode(false);
console.log(clonedBanner);


// 7. Traversing the DOM: Part 1
const bookList3 = document.querySelector('#book-list');
console.log('The parrent node is: ', bookList3.parentNode); // returns <div id='wrapper'> with all its contents
console.log('The parent element is: ', bookList3.parentElement); // it only returns the parent element <div id='wrapper'> with its style properties
console.log('The parent element is: ', bookList3.parentElement.parentElement); // it returns the parent parent element which is the body element


// 8. Traversing the DOM: Part 2
console.log('book-list next sibling is: ', bookList3.nextSibling); // returns sibling one
console.log('book-list next sibling element is: ', bookList3.nextElementSibling); // returns next sibling with all its contents. In this case the <form> with all its contents

console.log('book-list next sibling is: ', bookList3.previousSibling);
console.log('book-list next sibling element is: ', bookList3.previousElementSibling);

bookList3.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else!'


// 9. event: 
let h2 = document.querySelector('#book-list h2');
h2.addEventListener('event', function (e) {
    console.log(e.target); // target is a property of object e and it will return the element. Here returns <h2>....</h2>
    console.log(e) // returns complete description of target element
});

// To delete each book from the application using delete button
// let btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const li = e.target.parentElement; // move to the parent element of delete button which is the li element
//         li.parentNode.removeChild(li); // first it move to the parent of li which is the ul then remove the child which is li
//     });
// });

// We can try the above method even better with the following code
let list = document.querySelector('#book-list ul');
list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        // console.log(e.target); // returns <span class="delete">delete</span>
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li); // a better way to write is
        list.removeChild(li); // same as above code
    }
});

// To prevent an anchor tag <a> from moving to other page
const link = document.querySelector('#page-banner a');
link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Navigation to ', e.target.textContent, 'was prevented');
});


// 11. Interacting with Forms:
// add book-list
const addForm = document.forms['add-book'];

// prevent the form from refreshing when clicked on submit button of form
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //now get the value of input text from the form
    const value = addForm.querySelector('input[type="text"]').value;
    // console.log(value); // the value of the input

    // 12. Creating Elements
    // Now we can create html elements for the book we want to add to our list
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // Add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;


    // 13. Styles & Classes:
    // Add classes to both elements
    // bookName.className = 'name';
    // deleteBtn.className = 'delete' 
    // to append more classes to your class
    //bookName.className += ' name2'; // sometimes we may forget the space inside the the quote. So better to use add() function
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // we can also put styles in html as follows 
    //li.style.color = 'red';
    //li.style.marginTop = '10px';
    li.style.color = 'black'

    // Append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

// 14. Attributes: to get and set attributes

// to set and get the html element attribute
let book = document.querySelector('li:first-child .name');
console.log(book.getAttribute('class')); // return name  as the class='name'
book.setAttribute('class', 'name-2');
console.log(book) // class changed to class="name-2"

// to check an attribute exists or not
console.log(book.hasAttribute('class')) // return true

// to remove an attribute
book.removeAttribute('class');
console.log(book.hasAttribute('class')) // return false


// 15. Checkboxes & Change Events:

let list2 = document.querySelector('#book-list ul');
let checkBox = document.querySelector('#hide');
checkBox.addEventListener('change', function(e) {
    if(checkBox.checked) {
        list2.style.display = 'none';
    }
    else {
        list2.style.display = 'block';
    }
});


// 16.  Custom Search Filter:

// first we will grab the form input element and book li list
const searchBar = document.forms['search-books'].querySelector('input');
const list3 = document.querySelector('#book-list ul');

searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const books = list3.getElementsByTagName('li');
    
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        }
        else {
            book.style.display = 'none';
        }
    });
});


// 17. 
