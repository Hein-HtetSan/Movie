let movie = [

    // english
    {"name": "65", "rating": "PG-13", "duration": "1h 33m", "year": 2023, "image": "./assets/images/playlist/eng/65.jpg", "link": "https://youtu.be/bHXejJq5vr0?si=M1lx-4jV-HoiyaPc"},
    {"name": "Extinction", "rating": "R", "duration": "1h 35m", "year": 2018, "image": "./assets/images/playlist/eng/Extinction.jpg", "link": "https://youtu.be/-ePDPGXkvlw?si=bfZRDowo19hk_o3r"},
    {"name": "Snake Eyes", "rating": "PG-13", "duration": "1h 33m", "year": 2023, "image": "./assets/images/playlist/eng/snake-eyes.jpg", "link": "https://youtu.be/Vd2sm63Xwfw?si=MNaP4T5kECIrcksX"},
    {"name": "Alienoid", "rating": "PG-13", "duration": "2h 1m", "year": 2021, "image": "./assets/images/playlist/eng/alienoid.jpg", "link": "https://youtu.be/JaRLlh8Pw5A?si=BX_De7Mj5S-e-Cek"},
    {"name": "Spectral", "rating": "PG-13", "duration": "1h 47m", "year": 2016, "image": "./assets/images/playlist/eng/spectral.jpg", "link": "https://youtu.be/rmC3ZhIHHi4?si=RW2yLweUiX0YiOz5"},
    {"name": "Next", "rating": "PG-13", "duration": "1h 36m", "year": 2007, "image": "./assets/images/playlist/eng/next.jpg", "link": "https://youtu.be/OwIFRm7sy8E?si=-u9aF9XDnIDH6Uj6"} ,
    
    // korean
    {"name": "The Wailing", "rating": "Not Rated", "duration": "2h 36m", "year": 2016, "image": "./assets/images/playlist/korea/The-Wailing.jpg", "link": "https://youtu.be/43uAputjI4k?si=kid8R4xq1m9skobm"},
    {"name": "OldBoy", "rating": "R", "duration": "2h 0m", "year": 2003, "image": "./assets/images/playlist/korea/oldboy.jpg", "link": "https://youtu.be/tAaBkFChaRg?si=GA_SYM0RMauP1CVb"},
    {"name": "New World", "rating": "Not Rated", "duration": "2h 14m", "year": 2013, "image": "./assets/images/playlist/korea/new-world.jpg", "link": "https://youtu.be/rln9Hx_wPFw?si=JD9NTwTkysrFroPp"},
    {"name": "I Saw the Devil", "rating": "PG-13", "duration": "2h 24m", "year": 2010, "image": "./assets/images/playlist/korea/i-saw-the-devil.jpg", "link": "https://youtu.be/xwWgp1bqVwE?si=mF4uXKK-Exi_tVj6"},
    {"name": "Tidal Move", "rating": "R", "duration": "2h 0m", "year": 2009, "image": "./assets/images/playlist/korea/tidal-wave.jpg", "link": "https://youtu.be/Lwu8Z5aHpNY?si=nABg8zLhw2johUyT"},
    {"name": "Train to Busan", "rating": "PG-13", "duration": "1h 58m", "year": 2016, "image": "./assets/images/playlist/korea/train-to-busan.jpg", "link": "https://youtu.be/pyWuHv2-Abk?si=QbX3zWnGqN43HRxf"} ,

    // china
    {"name": "IP Man 3", "rating": "PG-13", "duration": "1h 45m", "year": 2015, "image": "./assets/images/playlist/china/ip-man-3.jpg", "link": "https://youtu.be/yo7z8c87Egg?si=WXgvVT8a_Yzz1M66"},
    {"name": "Fearless", "rating": "PG-13", "duration": "2h 21m", "year": 2006, "image": "./assets/images/playlist/china/fearless.jpg", "link": "https://youtu.be/W8pfFuBlwKg?si=PxOMJBcbY-hLBwgr"},
    {"name": "The Monkey King", "rating": "PG", "duration": "1h 36m", "year": 2023, "image": "./assets/images/playlist/china/the-monkey-king.png", "link": "https://youtu.be/-Ao79QJNE-s?si=HQBIap9b2aLjZdts"},
    {"name": "Yesterday Once More", "rating": "PG-13", "duration": "1h 40m", "year": 2023, "image": "./assets/images/playlist/china/yesterday-once-more.jpg", "link": "https://youtu.be/rwvKlnIH8Ws?si=PJ8KDQ7GYdi8jgy5"},
    {"name": "Born to Fly", "rating": "PG-13", "duration": "2h 8m", "year": 2023, "image": "./assets/images/playlist/china/born-to-fly.jpg", "link": "https://youtu.be/RcHhSgcIhC4?si=rwXxe3PXbIk8eg9A"},
    {"name": "Green Night", "rating": "PG-13", "duration": "1h 32m", "year": 2023, "image": "./assets/images/playlist/china/green-night.jpg", "link": "https://youtu.be/zu_u8l-v018?si=gKh6kTwsW8-kAmPT"} ,

]


for(let i=0; i<5; i++){
    document.querySelector(".dr-ga-movie-conatiner").innerHTML += `
                    <div class="movie-wrapper col-4 col-md-6 col-sm-12" style=";">
						<div class=" h-30 movie cursor-pointer" style="box-shadow: var(--shadow); background: url(${movie[i].image}); background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
						<div class="movie-details">
							<div class="col-12 h-auto d-flex align-items-center justify-content-end mb-3"></div>
							<div class="col-12 h-auto movie-title ">${movie[i].name}</div>
							<!-- <div class="col-12"></div> -->
							<div class="d-flex align-items-center justify-content-start col-100">
								<div class="col-4 rating ms-1">${movie[i].rating}</div>
								<div class="col-9 dur">${movie[i].duration} - ${movie[i].year}</div>
							</div>
							<div class="col-12 mt-little">
								<a href="./detail.html?id=${i}" class="watch-btn text-decoration-none">
									<span class="ms-1">Watch</span><i class="fa-regular fa-circle-play"></i>
								</a>
							</div>
						</div>
					</div>
    `;
}