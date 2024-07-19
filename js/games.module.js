import { UI } from "./ui.module.js";
import { GameDetails } from "./details.module.js";


export class Games {
    constructor() {
        this.ui = new UI()
        this.getGame("mmorpg");

        //! =============== NAV Functions =================
        $("nav a").on("click", function (e) {
            e.preventDefault();
            $("nav .active").removeClass("active");
            $(this).addClass("active");
            new Games().getGame($(this).data("category"));
        });

    }

    //! ================= games Functions =================
    async getGame(category) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '126db3a292msh9dd607edd030b5bp146e41jsnff4310f09cd1',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            let games = await api.json();
            this.ui.dispalyGames(games);
            this.startEvent();

        } catch (error) {
            console.log(error)
        }
    }


    startEvent() {
        $(".card").each((index, item) => {
            $(item).on("click", () => {
                this.showDetails($(item).data("id"));
            });
        });
    }

    showDetails(idGame) {
        new GameDetails(idGame);
        $('#gameDetails').fadeIn(100, function () {
            $('#gameData').addClass('d-none');
            $('#gameDetails').removeClass('d-none');
        });
    }



}