
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
        let dispalyedGames = '';
        for (let index = 0; index < gameList.length; index++) {
            dispalyedGames += `
            <div class="col col-sm-6 col-md-4 col-lg-3">
            <div class="card w-100 h-100 bg-transparent text-white p-3 pb-0">
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
        let dispalyedDetails = '';


        $('gameData').html(dispalyedDetails);
    }

}





