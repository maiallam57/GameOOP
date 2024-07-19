import { UI } from "./ui.module.js";


export class GameDetails {
    constructor(id) {
        this.ui = new UI();

        this.getDetails(id);

    }

    async getDetails(gameId) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '126db3a292msh9dd607edd030b5bp146e41jsnff4310f09cd1',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
            let game = await api.json();
            this.ui.dispalyDetails(game);
            this.startEvent()

        } catch (error) {
            console.log(error)
        }
    }

    startEvent() {
        $('#closeBtn').on('click', function () {
            new UI().loaderIn();
            $('#gameDetails').fadeOut(100, function () {
                $('#gameDetails').addClass('d-none');
                $('#gameData').removeClass('d-none');
                $('header').removeClass('d-none');
                $('.navbar').removeClass('d-none');
            });
        });
    };
};