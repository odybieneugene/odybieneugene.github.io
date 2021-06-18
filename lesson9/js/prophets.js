const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let img= document.createElement('img')
            
           

            h2.innerHTML = ` ${prophets[i].name}  ${prophets[i].lastname}`;
            p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('Alt', `The official potrait of ${prophets[i].name} ${prophets[i].lastname}!`)
         

            card.append(h2);
            card.append(p1);
            card.append(p2);
            card.append(img);

            document.querySelector('div.cards').append(card);
        }

        });

 