var users = [{
        email: 'baratheon@got.com',
        password: 'baratheon'
    },
    {
        email: 'bolton@got.com',
        password: 'bolton'
    },
    {
        email: 'florent@got.com',
        password: 'florent'
    },
    {
        email: 'lennister@got.com',
        password: 'lennister'
    },
    {
        email: 'martell@got.com',
        password: 'martell'
    },
    {
        email: 'redwyne@got.com',
        password: 'redwyne'
    },
    {
        email: 'stark@got.com',
        password: 'stark'
    },
    {
        email: 'umber@got.com',
        password: 'umber'
    },
    {
        email: 'tully@got.com',
        password: 'tully'
    },
    {
        email: 'targaryen@got.com',
        password: 'targaryen'
    }
];


setTimeout(function () {
    $('#loginR').modal('show')
}, 2000);

checkIn(users);

function checkIn() {
    $('.btn').click(function () {

        let username = $('#userName').val;
        let password = $('#password').val;
        let spanElem = $('#error').text('');
        let spanElem2 = $('#success').text('');
        let loginAttempt = 0;



        if (username === '' || password == '') {

            $('.btn').before('<span id="error" style="color:red"></span>');
            spanElem += 'Meg kell adnod a felhasználóneved és jelszavad'

        } else {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email !== username && users[i].password !== password) {

                    $('.btn').before('<span id="error" style="color:red"></span>'); //létrehozom az error idjú elemet, amit a spanElem változóba mentek el
                    spanElem += 'Hibás felhasználónév vagy jelszó';
                    loginAttempt++;

                    if (loginAttempt >= 3) {
                        spanElem = '';
                        spanElem += 'Háromszor is elrontottad az adataidat, 24 órára kitiltottunk';
                        $('.btn').attr('class', 'disabled');
                        //$('.btn').off('click');
                    }
                } else if (users[i].email === username && users[i].password === password) {
                    $('.btn').before('<span id="success" style="color:green"></span>');
                    loginAttempt = 0;
                    spanElem2 += `Belépve: ${users[i].email}`;
                    window.open("adminK.html", "_blank");

                }
            }
        }
    });

    $('#forgot').click(function () {
        let email = prompt('Kérem, adja meg e-mail címét: ');

        for (let k in users) {
            let found = users.find(function (elem) {
                return elem.email === email;
            });
            if (!found) {
                alert('Nincs ilyen regisztrált felhasználó');
            } else {
                alert(`Az új jelszót elküldtük a ${users[k].email} címre`);
            }
        }
    });
}