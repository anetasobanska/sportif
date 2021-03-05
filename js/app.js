import '../sass/index.scss';

function listImg(){
    const API_KEY = process.env.API_KEY;
    return fetch('https://api.pexels.com/v1/search?query=nature&per_page=1', {
        headers: {
                Accept: 'application/json',
                Authorization: API_KEY
            }
    })
    .then(resp => resp.json())
    .then(data => {
        return data
    })
}

listImg()
.then(photos => console.log(photos));

// class Photo {
//     constructor() {
//         this.API_KEY = '563492ad6f91700001000001996dda134257482db48506482dbb397a';
//         //this.apiUrl = 'https://api.pexels.com/v1';
//         this.galleryDiv = document.querySelector('.gallery');
//         this.search = document.querySelector('.search');
        
//         this.init();
//     }

//     async getImg(){
//         const apiUrl = 'https://api.pexels.com/v1/search?query=nature&per_page=1';
//         const response = await fetch(apiUrl, {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//                 Authorization: this.API_KEY
//             }
//         });       
//     }
// }
