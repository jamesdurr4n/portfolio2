// Elements Selecting
const book = document.querySelector("#book-name");
const author = document.querySelector("#author-name");
const year = document.querySelector("#published-year");
const submit = document.querySelector(".btn");
const list = document.querySelector(".book-list");

// Add Event listener
submit.addEventListener('click', function(e) {
    e.preventDefault();

    if (book.value == '' && author.value == '' && year.value == '') {


        // Warning Class added
       book.classList.add('warning');
       author.classList.add('warning');
       year.classList.add('warning');

       // Warning text added
       book.setAttribute("placeholder", "Write a book name.")
       author.setAttribute("placeholder", "Write an authors name")
       year.setAttribute("placeholder", "Write the published year")

       // Remove Warning text & class
       function removeWarning() {
             // Warning Class removed
                book.classList.remove('warning');
                author.classList.remove('warning');
                year.classList.remove('warning');

       // Warning text removed
                book.setAttribute("placeholder", "")
                author.setAttribute("placeholder", "")
                year.setAttribute("placeholder", "")
       }

       setTimeout(removeWarning, 1024)

    } else if (book.value == '') {
        // For individual warning
        book.classList.add('warning');
        book.setAttribute("placeholder", "Write a book name.")

        function removeBookWarning() {
            book.classList.remove('warning')
            book.setAttribute("placeholder", "")
        }
        setTimeout(removeBookWarning, 1024)


    } else if (author.value == '') {
        // For individual warning
        author.classList.add('warning');
        author.setAttribute("placeholder", "Write an author name.")

        function removeAuthorWarning() {
            author.classList.remove('warning')
            author.setAttribute("placeholder", "")
        }
        setTimeout(removeAuthorWarning, 1024)



    } else if (year.value == '') {
        // For individual warning
        year.classList.add('warning');
        year.setAttribute("placeholder", "Write the published year.")

        function removeYearWarning() {
            year.classList.remove('warning')
            year.setAttribute("placeholder", "")
        }
        setTimeout(removeYearWarning, 1024)



    } else {
        // Row creation and register
        const newRow = document.createElement('tr');
        list.appendChild(newRow);

        // New book column creation and take input
        const newBookColumn = document.createElement('th');
        newRow.appendChild(newBookColumn);
        newBookColumn.innerText = book.value;

        // New Author column creation and take input
        const newAuthorColumn = document.createElement('th');
        newRow.appendChild(newAuthorColumn);
        newAuthorColumn.innerText = author.value;

        // New Published Year column creation and take input
        const newYearColumn = document.createElement('th');
        newRow.appendChild(newYearColumn);
        newYearColumn.innerText = year.value;
    }
    // Blank all the boxes after input taken
    book.value = '';
    author.value = '';
    year.value = '';

})