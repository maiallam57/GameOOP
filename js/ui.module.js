
export class UI {
    constructor() {
        this.loaderOut()
    }

    //! ================= loader Functions =================
    loaderIn() {
        $(".loading").removeClass("d-none")
        $("body").addClass("overflow-hidden")
        $('.loading').fadeIn(1, function () {
            $('.loading').fadeOut(300, function () {
                $("body").removeClass("overflow-hidden")
                $(".loading").addClass("d-none")
            })
        })

    }

    loaderOut() {
        $(".loading").removeClass("d-none")
        $("body").addClass("overflow-hidden")
        $('.loading').fadeOut(1000, function () {
            $("body").removeClass("overflow-hidden")
            $(".loading").addClass("d-none")
        })
    }

    //! =============== Display Games =================
    dispalyGames(gameList) {
        this.loaderIn();
        $('#gameData').removeClass('d-none');
        let dispalyedGames = '';
        for (let index = 0; index < gameList.length; index++) {
            dispalyedGames += `
            <div class="col col-sm-6 col-md-4 col-lg-3">
            <div class="card w-100 h-100 bg-transparent text-white p-3 pb-0"  data-id="${gameList[index].id}">
                <img src=${gameList[index].thumbnail} class="card-img-top" alt="${gameList[index].title}">
                <div class="card-body p-2">
                    <div class="d-flex justify-content-between mb-2 px-0">
                        <h5 class="card-title">${gameList[index].title}</h5>
                        <span class="badge h-100 badge-bg-primary p-2">Free</span>
                    </div>
                    <p class="card-text text-center text-secondary">${gameList[index].short_description.split(" ", 8)}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-content-center px-1">
                    <span class="badge badge-color">${gameList[index].genre}</span>
                    <span class="badge badge-color">${gameList[index].platform}</span>
                </div>
            </div>
        </div>
        `
        }
        $('#gameData').html(dispalyedGames);
    }


    //! =============== Display Details =================
    dispalyDetails(game) {
        this.loaderIn();
        $('header').addClass('d-none');
        $('.navbar').addClass('d-none');
        $('#gameDetails').html(`
            <div class="row py-5">
                <div class="d-flex justify-content-between align-items-baseline">
                        <h2>Details Game</h2>
                        <i class="fa fa-close fa-2x" id="closeBtn"></i>
                    </div>
                    <div class="py-2 col-md-4">
                        <img src=${game.thumbnail} alt="${game.title}" class="w-100">
                    </div>
                    <div class="py-2 col-md-8">
                        <h3 class="mb-4">Title: ${game.title}</h3>
                        <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
                        <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                        <p>Developer: <span class="badge text-bg-info">${game.developer}</span></p>
                        <p>Status: <span class="badge text-bg-danger">${game.status}</span></p>
                        <p class="small">${game.description}</p>

                        <a class="btn btn-outline-warning text-white" target="_blank" href=${game.game_url}>Show Game</a>

                </div>
            </div>`);
    }

}





