import BaseComponent from "./BaseComponent.js";

export default class HomeComponent extends BaseComponent {
    constructor() {
        super("#main");
    }

    template() {
        return `
        <div class="row fw-semibold text-center m-5">

        <div class="card col-12 col-md-4 p-3">
            <a href="/#/natural"><img src="src/resources/images/accueilImage/forest.jpg" class="card-img-top" alt="Forêt Amazonienne"></a>
            <div class="card-body">
                <h2>${this.msg.titles.firstTitle}</h2>
                <p class="card-text"><a href="/#/natural" class="link">${this.msg.home.firstParagraph}</p></a>
            </div>
        </div>
        <div class="card col-12 col-md-4 p-3 ">
            <a href="/#/cultural"><img src="src/resources/images/accueilImage/house.jpg" class="card-img-top" alt="Une maison créole"></a>
            <div class="card-body">
                <h2>${this.msg.titles.secondTitle}</h2>
                <p class="card-text"><a href="/#/cultural" class="link">${this.msg.home.secondParagraph}</p></a>
            </div>
        </div>
        <div class="card col-12 col-md-4 p-3 ">
            <a href="/#/restaurant"><img src="src/resources/images/accueilImage/spices.jpg" class="card-img-top" alt="Du piment"></a>
            <div class="card-body">
                <h2>${this.msg.titles.thirdTitle}</h2>
                <p class="card-text"><a href="/#/restaurant" class="link">${this.msg.home.thirdParagraph}.</p></a>
            </div>
        </div>
    </div>

    <p class="text-center slogan s">${this.msg.home.description}</p>
        `;
    }
}