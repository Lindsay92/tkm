import BaseComponent from "./BaseComponent.js";

export default class FooterComponent extends BaseComponent {

    constructor() {
        super("footer");
    }

    template() {
        return `
            <div>    
                <span class= "align-items-center "> &copy;  Tout Koulèr Mélanjé 2024 - Tous droits réservés.</span>
            </div>    
            <div>
                <a href="" class="text-decoration-none"><span class= "align-items-center text-dark">Contact</span></a>
                <a href="" class="text-decoration-none"><span class= "align-items-center text-dark">| Politique de confidentialité</span></a>
                <a href="" class="text-decoration-none"><span class= "align-items-center  text-dark">| Mentions Légales</span>
                <a href="" class="text-decoration-none"><span class= "align-items-center text-dark">| Plan du site</span></a>
            </div> 
        `;
    }
}