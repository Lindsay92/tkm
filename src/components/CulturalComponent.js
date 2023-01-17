import BaseComponent from "./BaseComponent.js";

export default class CulturalComponent extends BaseComponent {

    constructor() {
        super("#main");
    }

    template() {
        return `
        <div class="row justify-content-around text-center m-5">
                <h2 class="col-12 col-md-4"><a href="/#/natural" class="link-title">${this.msg.titles.firstTitle}</a></h2>
                <h2 class="col-12 col-md-4 fw-bolder">${this.msg.titles.secondTitle}</h2>
                <h2 class="col-12 col-md-4"><a href="/#/restaurant" class="link-title">${this.msg.titles.thirdTitle}</a></h2>
            </div>
            

                <form class="">
                    <label for="search" class="form-label fw-semibold">${this.msg.labelSearch}</label>
                    <div class="input-group  col-12 col-md-5">
                        <input type="text" class="form-control" id="search">
                        <button class="btn btn-outline-secondary" type="submit">${this.msg.search}</button>
                    </div>
                </form>

                <div class="row align-items-center justify-content-center fw-semibold text-center m-5">
                    <div class="card col-12 col-md-3 p-3 m-1">
                        <img src="src/resources/images/accueilImage/forest.jpg" class="card-img-top" alt="...">
                        <div class="card-body my-1">
                            <h2>Lieu</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href=""><img src="src/resources/images/heart.svg"></a>
                        </div>
                    </div>
                    <div class="card col-12 col-md-3 p-3 m-1">
                        <img src="src/resources/images/accueilImage/forest.jpg" class="card-img-top" alt="...">
                        <div class="card-body my-1">
                            <h2>Lieu</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href=""><img src="src/resources/images/heart.svg"></a>
                        </div>
                    </div>
                    <div class="card col-12 col-md-3 p-3 m-1">
                        <img src="src/resources/images/accueilImage/resto.jpg" class="card-img-top" alt="...">
                        <div class="card-body my-1">
                            <h2>Lieu</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href=""><img src="src/resources/images/heart.svg"></a>
                        </div>
                    </div>
                    <div class="card col-12 col-md-3 p-3 m-1 ">
                        <img src="src/resources/images/accueilImage/resto.jpg" class="card-img-top" alt="...">
                        <div class="card-body my-1">
                            <h2>Lieu</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href=""><img src="src/resources/images/heart.svg"></a>
                        </div>
                    </div>
                    <div class="card col-12 col-md-3 p-3 m-1 ">
                        <img src="src/resources/images/accueilImage/resto.jpg" class="card-img-top" alt="...">
                        <div class="card-body my-1">
                            <h2>Lieu</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href=""><img src="src/resources/images/heart.svg"></a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="d-flex justify-content-end">
                        <button class="btnColor" id="scrollUp">
                            <a href="#top"><img class="btn" src="src/resources/images/arrow-up.svg"/></a>
                        </button>
                    </div>
                </div>
        `;
    }
}
