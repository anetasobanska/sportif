import '../sass/index.scss';
import '../js/flip';

function listImg(){
    const API_KEY = process.env.API_KEY;
    return fetch('https://api.pexels.com/v1/search?query=jogging', {
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
function getImg(){
    const API_KEY = process.env.API_KEY;
    return fetch('https://api.pexels.com/v1/photos/3601094', {
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

const imgTag = document.querySelector('img');
getImg().then(imgSrc => imgTag.setAttribute('src', imgSrc.src.tiny));

listImg()
.then(img => console.log(img.photos));
