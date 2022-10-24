
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { of, switchMap, forkJoin, map, mergeMap, tap, takeUntil } from 'rxjs';
import '../css/styles.css';
import * as utils from './helpers';



let currentSelectedBook;
//  Display filtered books
const subFilterBooks = utils.filteredBooks$.subscribe(books => {
    document.getElementById('spinner').classList.add('d-none');
    document.getElementById('books-container').classList.remove('d-none');
    utils.createBookCardView(books);
})

utils.subscription.add(subFilterBooks);

// Display categories in the drom-down
const subCategories = utils.categories.subscribe(categories => utils.createSelectCategoryDropDown(categories));

utils.subscription.add(subCategories);

// Display current selected book
const subCurrentSelectedBookId = utils.currentSelectedBookId$.pipe(
    tap(() => {
        document.getElementById('book-spinner').classList.remove('d-none')
        document.getElementById('current-book').innerHTML = '';
        document.getElementById('filter-title').innerText = '';
    }),
    switchMap(id => {
        return utils.bookById(+id).pipe(
            mergeMap(book => forkJoin([of(book), ...book.shopId.map(id => utils.shopById(id))])),
            map(([book, ...shops]) => ({ ...book, shops })))
    })
).subscribe((book) => {
    currentSelectedBook = book;
    document.getElementById('filter-title').innerText = currentSelectedBook.name;
    document.getElementById('book-spinner').classList.add('d-none')
    utils.createCurrentSelectedBookView(currentSelectedBook)
});

utils.subscription.add(subCurrentSelectedBookId);

//Reset current selected book on changing the categories

const subSelectCategory = utils.selectCategory$.subscribe((v)=>{
    const isCurrentBookView = Boolean(document.getElementById('current-book').children.length);
    const isFilterTitle = Boolean(document.getElementById('filter-title').textContent);
    if(isCurrentBookView && isFilterTitle) {
        document.getElementById('current-book').innerHTML = '';
        document.getElementById('filter-title').innerText = '';
    };
    currentSelectedBook = null;
})

utils.subscription.add(subSelectCategory);


// create the dom elements from returned array
//utils.appreciatedBooks$.pipe(takeUntil(utils.unsubscribe$)).subscribe(books=>utils.createAppreciatedBooksViewFromBookArr(books));

//create dom element from returnet book
utils.appreciatedBook$.pipe(takeUntil(utils.unsubscribe$)).subscribe(book=>{    
    if(!book) return;    
    utils.createAppreciatedBooksView(book)
})
