import BaseComponent from "./BaseComponent.js";

export default class SignUpComponent extends BaseComponent {

    constructor() {
        super ("#main");
    }

    template() {
        return `
        <form class="container col-12 col-md-4 p-3">
                <h2 class="text-center m-3">${this.msg.titles.signUpTitle}</h2>

                    <div class="">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">${this.msg.form.labelFirstName}*</label>
                            <input type="text"  id="firtsName"
                            class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">${this.msg.form.labelLastName}*</label>
                            <input type="text"
                            id="lastName" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">${this.msg.form.labelEmail}*</label>
                            <input type="email" id="email" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">${this.msg.form.labelPassword}*</label>
                            <input type="text" id="password" class="form-control">
                        </div>
                    
                        <button type="submit" class="btn btn-secondary">${this.msg.titles.signUpTitle}</button>
                    </div>
            </form>
        `;
    }
}