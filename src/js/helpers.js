import { Observable, of, from, concatMap, delay , interval, Subscription, Subject,take, timer, combineLatest,map,tap, combineLatestWith, delayWhen} from 'rxjs';
export function test(){
    console.log("i am the test method")
}

export function runOfOperator() {
    const dataArr = ["Hello", "RxJs", "Lovers"];
    const from$ = of(...dataArr);
    from$.subscribe(
        {
            next: (item) => console.log(item),
            complete: () => console.log('Complete')
        }
    )
}

export function runCombineLatestWith() {
    const source$ = interval(3000).pipe(take(10))
    const a$ = interval(1000).pipe(take(5));
    const b$ = interval(5000).pipe(take(7));
    // const a$ = timer(0,1000).pipe(take(5));
    // const b$ = timer(5000,1000).pipe(take(7));

    // const result$ = combineLatest([a$, b$])
    //     .pipe(
    //         tap(([a, b]) => console.log(`First number: ${a}, second number: ${b}`)),
    //         map(value => value.reduce((p, c) => p + c, 0)))
    //     .subscribe(
    //         (value) => console.log(`Sume of the emited values is => ${value}`)
    //     )

    const result$ = source$.pipe(
        combineLatestWith(a$, b$),
        tap((value) => console.log(value)),
       // tap(([s, a, b]) => console.log(`the source is: ${s} , First number: ${a}, second number: ${b}`)),
        map(value => value.reduce((p, c) => p + c, 0)),
    ).subscribe(
        (value) => console.log(`Sume of the emited values is => ${value}`)
    )
}