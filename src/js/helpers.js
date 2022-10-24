import {
    of,
    delay,
    map,
    combineLatestWith,
    forkJoin,
    fromEvent,
    startWith,
    Subject,
    scan,
    Subscription,
    tap,
    shareReplay
}
    from 'rxjs';
import * as data from './data'


const _currentSelectedBookId = new Subject();
const _appreciatedBook = new Subject();
const _appreciatedBooks = new Subject();
const appreciatedBooks = [];
const _unsubscribe = new Subject();
export const subscription = new Subscription();

const categoryHTML = document.getElementById('category-selection');
const unsubscribeButton = document.getElementById('unsubscribe-tk');
const unsubscribeButtonSub = document.getElementById('unsubscribe');

unsubscribeButton.addEventListener('click', () => _unsubscribe.next());
unsubscribeButtonSub.addEventListener('click', () => subscription.unsubscribe());

export const unsubscribe$ = _unsubscribe.asObservable();
export const currentSelectedBookId$ = _currentSelectedBookId.asObservable();

export const appreciatedBook$ = _appreciatedBook.asObservable().pipe(map((book) => {
    const duplicated = hasDuplicatedItems(appreciatedBooks, book);
    if (!duplicated) {
        appreciatedBooks.push(book);
        return book;
    } else {
        return null;
    }
}))

export const appreciatedBooks$ = _appreciatedBooks.asObservable().pipe(scan((acc, curr) => {
    const duplicated = hasDuplicatedItems(acc, curr);
    if (!duplicated) {
        return [...acc, curr];
    } else {
        return [...acc];
    }
}, []))

export const categories = of(data.categories).pipe(tap(c => console.log(c, "categories")), shareReplay(1), delay(1000));

export const books = of(data.allBooks).pipe(map(books=>books.map(b=>({...b,price:b.price/100}))),delay(1000));

export const booksWithCategories = forkJoin([books, categories]).pipe(
    map(([b, c]) => b.map((b) => ({
        ...b,
        categoryName: c.find(c => b.categoryCode === c.categoryCode)?.name
    })))
)

export const bookById = getBookById;

export const shopById = getShopById;

export const descriprions = of(data.descriprions).pipe(delay(1000));

export const selectCategory$ = fromEvent(categoryHTML, 'change').pipe(startWith(''), tap(e=>console.log(e,"select category event")),shareReplay(1), map((item) => item?.target?.value));



export const filteredBooks$ = selectCategory$.pipe(
    combineLatestWith(booksWithCategories),
    map(([selectedCategory, books]) => books.filter(b => selectedCategory ? selectedCategory === b.categoryCode : true))
)

export function createBookCardView(books) {
    const booksContainer = document.getElementById('book-container');
    booksContainer.innerHTML = '';
    const assetUrl = 'images/'
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'card book-card text-center';
        bookCard.innerHTML = `    
          <div class="text-center"> <img src=${assetUrl + book.img} class="rounded"></div>
            <div class="card-body">
                <h6 class="card-title">${book.author}</h6>
                <p class="small">${book.name}</p>
                <p class="book-price">${book.price} RON</p>
                <p class="lead">${book.categoryName}</p>
                <button  id="${book.id}" class="btn btn-outline-secondary">Detalii</button>
            </div>
  `
        booksContainer.appendChild(bookCard);
        document.getElementById(book.id).addEventListener('click', (event) => { _currentSelectedBookId.next(event.target?.id) });
    });
}

export function createSelectCategoryDropDown(categoryOptions) {
    const categoryDropDown = document.getElementById('category-selection');
    categoryOptions.forEach(o => {
        const option = document.createElement('option');
        option.text = o.name;
        option.value = o.categoryCode;
        categoryDropDown.appendChild(option);
    })
}

export function createCurrentSelectedBookView(book) {
    const currentBookContainer = document.getElementById('current-book');
    const currentBookBody = document.createElement('div');
    currentBookBody.innerHTML = `
    <div>Author: ${book.author}</div>
    <div>Category: ${book.categoryName}</div>
    <div>Publisher: ${book.publisher}</div>
    <div class="mt-2">${book.description}</div>
    <button type="button" class="btn btn-outline-danger" id="apreciate">Appreciate this book</button>
    `
    if (book.shops.length > 0) {
        const table = document.createElement('table');
        table.className = 'table my-3';
        const tableHead = document.createElement('thead');
        tableHead.innerHTML = `
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Shop</th>
          <th scope="col">Address</th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
     `
        table.appendChild(tableHead);
        const tableBody = document.createElement('tbody');
        book.shops.forEach((shop, index) => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
        <th scope="row">${index}</th>
        <td>${shop.name}</td>
        <td>${shop.address}</td>
        <td>${shop.stock}</td>
        `
            tableBody.appendChild(tableRow)
        })
        table.appendChild(tableBody);
        currentBookBody.appendChild(table);
    }
    currentBookContainer.appendChild(currentBookBody);
    document.getElementById('apreciate').addEventListener('click', (e) => {
        _appreciatedBook.next(book);
        _appreciatedBooks.next(book);
    }

    )
}

export function createAppreciatedBooksView(book) {
    const appContainer = document.getElementById('recent-appreciated');
    const appBook = document.createElement('div');
    const assetUrl = 'images/'
    appBook.className = 'appreciated-book';
    appBook.innerHTML = `    
      <div class="text-center"> <img src=${assetUrl + book.img} class="rounded img-fluid"></div>
`
    appContainer.appendChild(appBook)
}

export function createAppreciatedBooksViewFromBookArr(books) {
    const appContainer = document.getElementById('recent-appreciated-books');
    appContainer.innerHTML = '';
    books.forEach(b => {
        const appBook = document.createElement('div');
        const assetUrl = 'images/'
        appBook.className = 'appreciated-book';
        appBook.innerHTML = `    
          <div class="text-center"> <img src=${assetUrl + b.img} class="rounded img-fluid"></div>
    `
        appContainer.appendChild(appBook)
    })

}


function getBookById(id) {
    const book = data.allBooks.find(b => b.id === id);
    book.description = data.descriprions.find(d => d.descriptionId === book.descriptionId)?.description
    return forkJoin([of(book).pipe(delay(2000)), categories]).pipe(map(([b, c]) => ({ ...b, categoryName: c.find(c => b.categoryCode === c.categoryCode)?.name })))
}

function getShopById(id) {
    const shop = data.shops.find(s => s.id === id);
    return of(shop).pipe(delay(1000))
}

function hasDuplicatedItems(arr, item) {
    return arr.filter(i => i.id === item.id).length > 0;
}

