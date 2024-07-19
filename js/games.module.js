import { UI } from "./ui.module.js";


export class Games {
    constructor() {
        this.ui = new UI()
        this.getGame("mmorpg");

        //! =============== NAV Functions =================
        $("nav a").on("click", function (e) {
            e.preventDefault();
            $("nav .active").removeClass("active");
            $(this).addClass("active");
            console.log($(this).data("category"));
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
            console.log(games);
            this.ui.dispalyGames(games);

        } catch (error) {
            console.log(error)
        }
    }
}