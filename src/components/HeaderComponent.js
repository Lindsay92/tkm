import BaseComponent from "./BaseComponent.js";

export default class HeaderComponent extends BaseComponent {

    constructor() {
        super("#header");
    }

    template() {
        return `
        <h1 class="title text-center ">
            ${this.msg.brand}
        </h1>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid color">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center fs-3 text" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/#/home">
                                ${this.msg.navbar.firstItem}   
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/#/about">
                                ${this.msg.navbar.secondItem}     
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="lien-menu nav-link active" href="">
                                ${this.msg.navbar.thirdItem}            
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                        <a class="lien-menu nav-link active" href="/#/signIn">
                            <img src="src/resources/images/user.svg">                                
                        </a>
                </div>
            </div>
        </nav>
        `;
    }
}