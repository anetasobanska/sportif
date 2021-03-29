import '../sass/index.scss';
import '../js/flip';

class SportImage{
    constructor(){
        this.apiUrl = 'https://api.pexels.com/v1/search?query=';
        this.imgUrl = 'https://api.pexels.com/v1/photos/';
        this.imgEl1 = document.getElementById('1');
        this.imgEl2 = document.getElementById('2');
        this.imgEl3 = document.getElementById('3');
        this.imgEl4 = document.getElementById('4');

        this.init();
    }

    listImgJogging(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.apiUrl}jogging`, {
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
    getImgJogging(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.imgUrl}3601094`, {
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

    listImgBike(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.apiUrl}bike`, {
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
    getImgBike(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.imgUrl}351300`, {
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

    listImgStairs(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.apiUrl}stairs`, {
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
    getImgStairs(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.imgUrl}1309897`, {
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

    listImgHome(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.apiUrl}home gym`, {
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
    getImgHome(){
        const API_KEY = process.env.API_KEY;
        return fetch(`${this.imgUrl}2780762`, {
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

    init(){
        this.getImgJogging()
        .then(src => this.imgEl1.setAttribute('src', src.src.tiny));

        this.listImgJogging()
        .then(img => console.log(img.photos))

        this.getImgBike()
        .then(src => this.imgEl2.setAttribute('src', src.src.tiny));

        this.listImgBike()
        .then(img => console.log(img.photos))

        this.getImgStairs()
        .then(src => this.imgEl3.setAttribute('src', src.src.tiny));

        this.listImgStairs()
        .then(img => console.log(img.photos))

        this.getImgHome()
        .then(src => this.imgEl4.setAttribute('src', src.src.tiny));

        this.listImgHome()
        .then(img => console.log(img.photos))

    }

}

document.addEventListener('DOMContentLoaded', () => {
    new SportImage();
})