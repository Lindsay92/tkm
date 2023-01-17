import BaseComponent from "./BaseComponent.js";

export default class AboutComponent extends BaseComponent {

    constructor() {
        super("#main");
    }

    template() {
        return `
        <div class=" row align-items-center fw-semibold text-center m-5  justify-content-center">

        <p class="mb-5">${this.msg.about.firstParagraph}</p>

        <div class="polaroid col-12 col-md-6">
            <img src="src/resources/images/accueilImage/lezard.jpg" alt="${this.msg.about.firstTitle}" class="image">
            <div class="container">
            <p>${this.msg.about.firstTitle}</p>
            </div>
          </div>
          
          <div class="col-12 col-md-6">
            <p>${this.msg.about.secondParagraph}</p>
          </div>

          <div class="col-12 col-md-6">
            <p>${this.msg.about.thirdParagraph}</p>
          </div>

          <div class="polaroid col-12 col-md-6">
            <img src="src/resources/images/accueilImage/flower2.jpg" alt="${this.msg.about.secondTitle}" class="image">
            <div class="container">
            <p>${this.msg.about.secondTitle}</p>
            </div>
          </div>
    </div>
        `;
    }
}