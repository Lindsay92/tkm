import BaseComponent from "./BaseComponent.js";

export default class SignInComponent extends BaseComponent {

    constructor() {
        super("#main");
    }

    template() {
        return `
        <form class="container col-12 col-md-4 p-3">
                <h2 class="text-center m-3">${this.msg.titles.signInTitle}</h2>

                    <div class="">
                        <div class="mb-3">
                            <label for="email" class="form-label">${this.msg.form.labelEmail}*</label>
                            <input type="email" id="email" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">${this.msg.form.labelPassword}*</label>
                            <input type="text" id="password" class="form-control" >
                        </div>
                    
                        <button type="submit" class="btn btn-secondary">${this.msg.titles.signInTitle}</button>
                    </div>

                    <p class="text-center m-3"><a href="/#/signUp" class="link1">${this.msg.form.text}</a></p>
            </form>
        `;
    }
}