let movie = [

    // english
    {"name": "65", "rating": "PG-13", "duration": "1h 33m", "year": 2023, "image": "./assets/images/playlist/eng/65.jpg", "link": ""},
    {"name": "Extinction", "rating": "R", "duration": "1h 35m", "year": 2018, "image": "./assets/images/playlist/eng/Extinction.jpg", "link": ""},
    {"name": "Snake Eyes", "rating": "PG-13", "duration": "1h 33m", "year": 2023, "image": "./assets/images/playlist/eng/snake-eyes.jpg", "link": ""},
    {"name": "Alienoid", "rating": "PG-13", "duration": "2h 1m", "year": 2021, "image": "./assets/images/playlist/eng/alienoid.jpg", "link": ""},
    {"name": "Spectral", "rating": "PG-13", "duration": "1h 47m", "year": 2016, "image": "./assets/images/playlist/eng/spectral.jpg", "link": ""},
    {"name": "Next", "rating": "PG-13", "duration": "1h 36m", "year": 2007, "image": "./assets/images/playlist/eng/next.jpg", "link": ""} ,
    
    // korean
    {"name": "The Wailing", "rating": "Not Rated", "duration": "2h 36m", "year": 2016, "image": "./assets/images/playlist/korea/The-Wailing.jpg", "link": ""},
    {"name": "OldBoy", "rating": "R", "duration": "2h 0m", "year": 2003, "image": "./assets/images/playlist/korea/oldboy.jpg", "link": ""},
    {"name": "New World", "rating": "Not Rated", "duration": "2h 14m", "year": 2013, "image": "./assets/images/playlist/korea/new-world.jpg", "link": ""},
    {"name": "I Saw the Devil", "rating": "PG-13", "duration": "2h 24m", "year": 2010, "image": "./assets/images/playlist/korea/i-saw-the-devil.jpg", "link": ""},
    {"name": "Tidal Move", "rating": "R", "duration": "2h 0m", "year": 2009, "image": "./assets/images/playlist/korea/tidal-wave.jpg", "link": ""},
    {"name": "Train to Busan", "rating": "PG-13", "duration": "1h 58m", "year": 2016, "image": "./assets/images/playlist/korea/train-to-busan.jpg", "link": ""} ,

    // china
    {"name": "IP Man 3", "rating": "PG-13", "duration": "1h 45m", "year": 2015, "image": "./assets/images/playlist/china/ip-man-3.jpg", "link": ""},
    {"name": "Fearless", "rating": "PG-13", "duration": "2h 21m", "year": 2006, "image": "./assets/images/playlist/china/fearless.jpg", "link": ""},
    {"name": "The Monkey King", "rating": "PG", "duration": "1h 36m", "year": 2023, "image": "./assets/images/playlist/china/the-monkey-king.png", "link": ""},
    {"name": "Yesterday Once More", "rating": "PG-13", "duration": "1h 40m", "year": 2023, "image": "./assets/images/playlist/china/yesterday-once-more.jpg", "link": ""},
    {"name": "Born to Fly", "rating": "PG-13", "duration": "2h 8m", "year": 2023, "image": "./assets/images/playlist/china/born-to-fly.jpg", "link": ""},
    {"name": "Green Night", "rating": "PG-13", "duration": "1h 32m", "year": 2023, "image": "./assets/images/playlist/china/green-night.jpg", "link": ""} ,

]


const wrapper = document.querySelector(".movie-detail-wrapper");


// get the idd from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let idd = urlParams.get('id');
let id = parseInt(idd);
id -= 1
console.log('Received ID:', id);
    
wrapper.innerHTML = `
    <div class="col-8 col-md-12 movie-detail-card position-relative" 
        style="background-image: url('${movie[id].image}'),linear-gradient(rgba(43, 41, 41, 0.427), rgba(105, 105, 98, 0.737));
            background-position: center; background-repeat: no-repeat; background-blend-mode:soft-light;
            background-size: cover;">

           <!-- Here is the content  -->

        


    </div>
`;