import BaseComponent from "./BaseComponent.js";

export default class HomeComponent extends BaseComponent {
    constructor() {
        super("#main");
    }

    template() {
        return `

        <div class="m-4">
            <p class="text-center fs-5"><a href="/#/natural" class="link-title">${this.msg.titles.prestations}</a></p>
        </div>
        
        <div class="row fw-semibold text-center m-5">

        <div class="card col-12 col-md-4 p-3">
            <img src="src/resources/images/accueilImage/forest.jpg" class="card-img-top" alt="Forêt Amazonienne">
            <div class="card-body">
                <h2>${this.msg.titles.firstTitle}</h2>
                <p class="card-text">${this.msg.home.firstParagraph}</p>
            </div>
        </div>
        <div class="card col-12 col-md-4 p-3 ">
            <img src="src/resources/images/accueilImage/house.jpg" class="card-img-top" alt="Une maison créole">
            <div class="card-body">
                <h2>${this.msg.titles.secondTitle}</h2>
                <p class="card-text">${this.msg.home.secondParagraph}</p>
            </div>
        </div>
        <div class="card col-12 col-md-4 p-3 ">
            <img src="src/resources/images/accueilImage/spices.jpg" class="card-img-top" alt="Du piment"></a>
            <div class="card-body">
                <h2>${this.msg.titles.thirdTitle}</h2>
                <p class="card-text">${this.msg.home.thirdParagraph}</p>
            </div>
        </div>
    </div>


    <p class="text-center slogan s">${this.msg.home.description}</p>
        `;
    }
}