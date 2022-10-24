//all books


export const allBooks = [
    {
        id:1,
        author:'Gabor Mate',
        name:'Cand corpul spune nu',
        img:'cand-corpul-spune-nu.PNG',
        rates:3,
        price:5155,
        categoryCode:'RO',
        publisher:'Curtea Veche',
        descriptionId:'D1',
        shopId:['sh1','sh3']
    },
    {
        id:2,
        author:'Colleen Hoover',
        name:'Totul se termina cu noi',
        img:'totul-se-termina-cu-noi.PNG',
        rates:4,
        price:8899,
        categoryCode:'SF',
        publisher:'Epica',
        descriptionId:'D2',
        shopId:['sh4','sh5']
    },
    {
        id:3,
        author:'Delia Owens',
        name:'Acolo unde canta racii ',
        img:'acolo-unde-canta-racii.PNG',
        rates:5,
        price:2599,
        categoryCode:'FT',
        publisher:'Pandora M',
        descriptionId:'D3',
        shopId:[]
    },
    {
        id:4,
        author:'James Clear',
        name:'Atomic Habits',
        img:'atomic-habits.png',
        rates:1,
        price:5000,
        categoryCode:'TH',
        publisher:'Lifestyle',
        descriptionId:'D4',
        shopId:['sh1','sh5']
    },
    {
        id:5,
        author:'Colleen Hoover',
        name:'Layla',
        img:'layla.png',
        rates:5,
        price:8800,
        categoryCode:'RO',
        publisher:'Epica',
        descriptionId:'D5',
        shopId:['sh1']
    },
    {
        id:6,
        author:'Kevin Dutton',
        name:'Arta manipularii',
        img:'arta-manipularii.png',
        rates:4,
        price:7788,
        categoryCode:'MY',
        publisher:'Globo',
        descriptionId:'D6',
        shopId:['sh4','sh5']
    },
    {
        id:7,
        author:'Colleen Hoover',
        name:'Ugly love',
        img:'ugly-love.png',
        rates:5,
        price:5500,
        categoryCode:'CO',
        publisher:'Epica',
        descriptionId:'D7',
        shopId:[]
    },
    {
        id:8,
        author:'Jone Been',
        name:'Verity',
        img:'verity.PNG',
        rates:5,
        price:10055,
        categoryCode:'RO',
        publisher:'GoodCo',
        descriptionId:'D8',
        shopId:['sh1','sh3']
    }
]

//allcategories

export const categories = [
    {
        id:1,
        categoryCode:'RO',
        name:'Romance'
    },
    {
        id:2,
        categoryCode:'SF',
        name:'Sci-Fi'
    },
    {
        id:3,
        categoryCode:'FT',
        name:'Fantasy'
    },
    {
        id:4,
        categoryCode:'TH',
        name:'Thriller'
    },
    {
        id:5,
        categoryCode:'MY',
        name:'Mystery'
    },
    {
        id:6,
        categoryCode:'CO',
        name:'Contemporary'
    },
]

//all descriptions
export const shops = [
    {
        id:'sh1',
        name:'Victoria',
        address:"Cluj Napoca",
        stock:33
    },
    {
        id:'sh2',
        name:'Elene',
        address:"Bocuresti",
        stock:88
    },
    {
        id:'sh3',
        name:'Lorelay',
        address:"Zalau",
        stock:99
    },
    {
        id:'sh4',
        name:'Hope',
        address:"Huedin",
        stock:100
    },
    {
        id:'sh5',
        name:'Beleve',
        address:"Resita",
        stock:33
    }
]
export const descriprions = [
    {
        descriptionId:'D1',
        description:`<p>Cand corpul spune nu este un studiu aprofundat, revelator, plin de informatii utile despre stres si influenta lui asupra sanatatii noastre psihice si fizice.</p>

        <p>Nu exista oameni care sa nu fi trecut prin episoade de stres acut, fie el provocat de fenomene exterioare, fie produs din cauze interioare. Boala secolului al XXI‑lea ne-a facut pe toti sa simtim macar de cateva ori in viata ca am ajuns la capatul puterilor, determinandu-ne sa luam masuri urgente ca sa restabilim echilibrul.</p>
         
        <p>Cartea sa este un semnal de alarma si o pledoarie pentru medicina biopsihosociala, una dintre cele mai bune cai prin care ne putem elibera de aceasta cumplita afectiune a epocii noastre.</p>
        `
    },
    {
        descriptionId:'D2',
        description:`<p>O noua carte de la mult indragita autoare de New Adult, Colleen Hoover.</p>

        <p>Uneori, cei care te iubesc te ranesc cel mai tare. Lily Bloom nu a avut intotdeauna o viata usoara, dar asta nu a oprit-o niciodata sa munceasca din greu pentru a-si indeplini telurile. A evoluat foarte mult: a absolvit liceul, s-a mutat la Boston si si-a inceput propria afacere. Cand Lily il cunoaste pe Ryle Kincaid, un chipes neurochirurg, se simte imediat foarte atrasa de el si viata i se schimba brusc.</p>
        
             
        <p>Cu acest roman indraznet si profund, Colleen Hoover spune o poveste sfasietoare, despre iubire si sacrificiu, care exploreaza orizonturi noi.</p>`
    },
    {
        descriptionId:'D3',
        description:`<p>Cartea care a creat senzatie in intreaga lume si fenomenul care a cucerit mai mult de douasprezece milioane de cititori.</p>

        <p>Cea mai importanta carte a deceniului pentru Business Insider, cartea #1 a anului si bestseller international #1.</p>
        
        <p>Bestsellerul anului pentru The New York Times Book Review.</p>
        
        
       `
    },
    {
        descriptionId:'D4',
        description:`<p>Schimbari mici, rezultate remarcabile</p>
        <p>Inspirandu-se din cele mai noi descoperiri din biologie, psihologie si neurostiinte, James Clear a conceput un ghid usor de asimilat, cu ajutorul caruia obiceiurile bune devin inevitabile, iar cele rele, imposibile.</p>
                  
        <p>"O carte extrem de practica si utila. James Clear extrage informatiile fundamentale despre formarea obiceiurilor, astfel ca tu sa poti realiza mai mult concentrandu-te pe mai putine lucruri." (Mark Manson, autorul bestsellerului Arta subtila a nepasarii)</p>
         
        `
    },
    {
        descriptionId:'D5',
        description:`<p>Iubirea poate sa te bantuie sau sa te vindece.</p>

        <p>Cand Leeds o cunoaste pe Layla, e convins ca-si va petrece tot restul vietii alaturi de ea.</p>
        
        <p>Dar apoi, in urma unui atac neasteptat, Layla se lupta sa supravietuiasca. Dupa saptamani petrecute in spital, fata isi revine fizic, dar cicatricile emotionale si psihice au schimbat-o pe tanara de care Leeds s-a indragostit. Vrand sa-si salveze relatia, Leeds o duce la pensiunea unde s-au cunoscut. Insa, odata ajunsi acolo, purtarea fetei se schimba in mod inexplicabil. Iar aceasta e abia prima dintr-un sir de intamplari neobisnuite.</p>
        
        <p>Leeds se simte instrainat de Layla si, in curand, isi gaseste consolarea langa Willow — un alt oaspete al pensiunii —, de care incepe sa se simta legat. Pe masura ce curiozitatea lui fata de Willow creste, hotararea lui Leeds de-a o ajuta sa gaseasca raspunsuri il plaseaza in conflict direct cu sanatatea lui Layla. In curand, tanarul isi da seama ca trebuie sa faca o alegere, deoarece nu le poate ajuta pe amandoua.</p>
        
        `
    },
    {
        descriptionId:'D6',
        description:`<p>Cartea aceasta este despre un soi special de persuasiune care are o perioada de incubatie de numai cateva secunde si poate dezarma instantaneu pana si cea mai patrunzatoare minte. Este centura neagra la controlul mintii. Nu doar ca intoarce roata, o dinamiteaza cu totul.</p>
    
        <p>"Kevin Dutton nu e Mesia. Dar are o multime de povesti si parabole care arunca o lumina noua asupra felului in care putem fi persuadati." (Terry Jones and Michael Palin)</p>
        
        <p>"Sclipitor… Kevin Dutton este pur si simplu un geniu. Acum spun povestile lui ca si cum ar fi ale mele." (Andy McNab)</p>`
    },
    {
        descriptionId:"D7",
        description:`<p>Atunci cand Tate Collins il intalneste pe Miles Archer, un pilot de avioane tacut, la locul lui, bantuit de un trecut intunecat, ea e constienta ca ceea ce simte nu e tocmai dragoste la prima vedere. Cei doi nu se considera nici macar prieteni, iar singurul lucru pe care il au in comun este o atractie fizica de netagaduit. Dupa ce dorintele lor ies la iveala, cei doi isi dau seama ca tocmai au gasit solutia perfecta pentru o relatie fara alte implicatii. El nu cauta iubire, iar ea nu are timp pentru asa ceva. Aranjamentul lor ar fi extrem de satisfacator, daca Tate ar putea sa respecte cele doua reguli impuse de Miles: nu pune intrebari despre trecut; nu te astepta la un viitor impreuna. </p>

        <p>Ei cred ca se pot descurca, dar, atunci cand in povestea lor se infiripa sentimente adevarate, totul se schimba.</p>`
    },
    {
        descriptionId:'D8',
        description:`<p>Roman nominalizat la categoria 2019 BEST ROMANCE pe Goodreads.com COLLEEN HOOVER, autoarea bestsellerului UGLY LOVE (aflat la a X-a editie in limba romana), revine cu un nou roman plin de suspans.</p>

        <p>Lowen este o scriitoare debutanta, cu mari dificultati financiare. De aceea, cand Jeremy, sotul celebrei autoare Verity Crawford, ii propune sa completeze seria de romane pe care sotia lui, grav vatamata intr-un accident, nu mai este capabila s-o duca la bun sfarsit, Lowen nu poate sa refuze oferta. Astfel, ajunge la resedinta Crawford, cu intentia de a sta cateva zile - atat cat sa caute prin haoticul birou al lui Verity orice notite si posibile schite de care ar avea nevoie ca sa inceapa sa scrie urmatoarele romane. Dar cu cat petrece mai mult timp impreuna cu Jeremy, cu atat mai putin se grabeste sa plece.</p>
        
        <p>COLLEEN HOOVER este autoare a numeroase romane pentru tineri, dintre care nu mai putin de zece figureaza pe listele de bestselleruri New York Times. Sase dintre acestea sunt traduse in limba romana si publicate la Editura Epica: Hopeless. Fara speranta, Speranta pierduta, Slam. Din dragoste pentru Layken, Ugly Love, Confess si Totul se termina cu noi. Colleen locuieste in Texas impreuna cu sotul ei si cu cei trei baieti ai lor. O puteti vizita online accesand www.colleenhoover.com.</p>`
    },

]


