import AboutComponent from "./components/AboutComponent.js";
import CulturalComponent from "./components/CulturalComponent.js";
import FooterComponent from "./components/FooterComponent.js";
import HeaderComponent from "./components/HeaderComponent.js";
import HomeComponent from "./components/HomeComponent.js";
import SignInComponent from "./components/SignInComponent.js";
import SignUpComponent from "./components/SignUpComponent.js";
import NaturalComponent from "./components/NaturalComponent.js";
import RestaurantComponent from "./components/RestaurantComponent.js";


export default class Router {

    static init() {
        window.addEventListener("hashchange", (event) => Router.route(event));

        const headerComponent = new HeaderComponent();
        headerComponent.render();

        const footerComponent = new FooterComponent();
        footerComponent.render();

        Router.route();
    };

    static route(event) {
        const hash = window.location.hash;
        let component = null;
        if (hash == "#/home" || hash =="" || hash == "/") {
            component = new HomeComponent();
        }else if (hash == "#/about") {
            component = new AboutComponent();
        }else if (hash == "#/signIn") {
            component = new SignInComponent();
        }else if (hash == "#/signUp") {
            component = new SignUpComponent();
        // }else if (hash == "#/cultural") {
        //     component = new CulturalComponent();
        // }
        }else if (hash == "#/natural") {
            component = new NaturalComponent();
        // }else if (hash == "#/restaurant") {
        //     component = new RestaurantComponent();
        }
            component.render();
        
    }
}