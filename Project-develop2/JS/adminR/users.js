/*function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = (JSON.parse(xhttp.responseText))[0].users;
    console.log(userDatas);*/




users = [{
        "id": "1",
        "username": "user-01",
        "password": "pass-01",
        "firstname": "Kiss",
        "lastname": "Árpád",
        "country": "Magyarország",
        "state": "Budapest",
        "zipcode": "1001",
        "city": "Budapest",
        "address": "Kacsóh Pongrác út 11.",
        "sex": "férfi",
        "birthdate": "1990. 02. 12.",
        "email": "kiss.arpad@gmail.com",
        "phone": "+36701234567"
    },
    {
        "id": "2",
        "username": "user-02",
        "password": "pass-02",
        "firstname": "Kovács",
        "lastname": "Géza",
        "country": "Magyarország",
        "state": "Győr-Moson-Sopron",
        "zipcode": "9023",
        "city": "Győr",
        "address": "Tihanyi Árpád út 72.",
        "sex": "férfi",
        "birthdate": "1980. 01. 01.",
        "email": "kovacs.geza@gmail.com",
        "phone": "+36304367843"
    },
    {
        "id": "3",
        "username": "user-03",
        "password": "pass-03",
        "firstname": "Karvaly",
        "lastname": "Beáta",
        "country": "Magyarország",
        "state": "",
        "zipcode": "1089",
        "city": "Budapest",
        "address": "Sárkány utca 4.",
        "sex": "nő",
        "birthdate": "1963. 12. 31.",
        "email": "karvaly.beata@gmail.com",
        "phone": "+36203857390"
    },
    {
        "id": "4",
        "username": "user-04",
        "password": "pass-04",
        "firstname": "Láncos",
        "lastname": "Csombor",
        "country": "Magyarország",
        "state": "Pest",
        "zipcode": "2100",
        "city": "Gödöllő",
        "address": "Szabadság tér 110.",
        "sex": "férfi",
        "birthdate": "2000. 03. 21.",
        "email": "lancos.csombor@gmail.com",
        "phone": "+36707329871"
    },
    {
        "id": "5",
        "username": "user-05",
        "password": "pass-05",
        "firstname": "Csermely",
        "lastname": "Fruzsina",
        "country": "Magyarország",
        "state": "Budapest",
        "zipcode": "2100",
        "city": "Budapest",
        "address": "Jónás utca 2.",
        "sex": "nő",
        "birthdate": "2001. 05. 15.",
        "email": "csermely.fruzsina@gmail.com",
        "phone": "+36302849382"
    },
    {
        "id": "6",
        "username": "user-06",
        "password": "pass-06",
        "firstname": "Csáth",
        "lastname": "Lukács",
        "country": "Magyarország",
        "state": "",
        "zipcode": "1120",
        "city": "Budapest",
        "address": "Szentlélek tér 4.",
        "sex": "férfi",
        "birthdate": "1939. 07. 11.",
        "email": "csath.lukacs@gmail.com",
        "phone": "+36206674329"
    },
    {
        "id": "7",
        "username": "user-07",
        "password": "pass-07",
        "firstname": "Seszták",
        "lastname": "Éva",
        "country": "Magyarország",
        "state": "Komárom-Esztergom",
        "zipcode": "2800",
        "city": "Tatabánya",
        "address": "Bánya köz 1.",
        "sex": "nő",
        "birthdate": "1965. 08. 20.",
        "email": "sesztak.eva@gmail.com",
        "phone": "+36304738282"
    },
    {
        "id": "8",
        "username": "user-08",
        "password": "pass-08",
        "firstname": "Bánki",
        "lastname": "Donát",
        "country": "Magyarország",
        "state": "",
        "zipcode": "1218",
        "city": "Budapest",
        "address": "Zsigmond Vilmos utca 42.",
        "sex": "férfi",
        "birthdate": "1970. 09. 03.",
        "email": "banki.donat@gmail.com",
        "phone": "+36304638738"
    },
    {
        "id": "9",
        "username": "user-09",
        "password": "pass-09",
        "firstname": "Fehér",
        "lastname": "Antal",
        "country": "Magyarország",
        "state": "Budapest",
        "zipcode": "1090",
        "city": "Budapest",
        "address": "Szépia köz 5.",
        "sex": "férfi",
        "birthdate": "1994. 05. 05.",
        "email": "feher.antal@gmail.com",
        "phone": "+36705874838"
    },
    {
        "id": "10",
        "username": "user-10",
        "password": "pass-10",
        "firstname": "Zsémbes",
        "lastname": "Judit",
        "country": "Magyarország",
        "state": "Budapest",
        "zipcode": "1032",
        "city": "Budapest",
        "address": "Marcona út 76.",
        "sex": "nő",
        "birthdate": "2001. 01. 01.",
        "email": "zsembes.judit@gmail.com",
        "phone": "+36204839281"
    }
];










let tableHead = ['Azonosító', 'Felhasználónév', 'Jelszó', 'Vezetéknév', 'Keresztnév',
    'Ország', 'Állam/Megye', 'Irányítószám', 'Város', 'Cím', 'Nem', 'Születési dátum',
    'Email cím', 'Telefonszám'
];

let property = ['id', 'username', 'password', 'firstname', 'lastname', 'country',
    'state', 'zipcode', 'city', 'address', 'sex', 'birthdate', 'email', 'phone'
];


generateHead(tableHead);
generateTds(users);


function generateHead(tableHead) {

    for (let i = 0; i < tableHead.length; i++) {
        let thead = `<thead>
                    <tr>
                    <th><strong>${tableHead[i]}</strong>
                    </th>
                    </tr>
                    </thead>`;

        document.querySelector('#thead').innerHTML += thead;
    }
    return thead;
}

function generateTds(users) {

    for (let i in users) {
        for (let j in users[i]) {
            let tbody = `<tbody>
                        <tr>
                        <td>${users[i][j]}
                        </td>
                        </tr>
                        </tbody>`;


            document.querySelector('#tbody').innerHTML += tbody;
        }

    }
}

$('.btn').click(function () {
    $('#table').animate({
        bottom: '0px',
        opacity: 1,
    }, 500, 'swing', function () {});
});