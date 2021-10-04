app.component('shipping', {
    template:
        /*html*/
        `
        <section class="standalone grey-bg">
            <div class="modal-window">
                <h3 class="subtitle">Доставка</h3>
                <form class="delivery-form">

                    <div class="form-input-group">
                        <label for="fname">Имя:</label>
                        <input type="text" id="fname">
                    </div>

                    <div class="form-input-group">
                        <label for="lname">Фамилия:</label>
                        <input type="text" id="lname">
                    </div>

                    <div class="form-input-group">
                        <label for="tel">Телефон:</label>
                        <input type="tel" id="tel">
                    </div>

                    <div class="form-input-group">
                        <label for="email">Адрес электронной почты:</label>
                        <input type="email" id="email">
                    </div>

                    <div class="form-input-group">
                        <label for="oblast">Область:</label>
                        <input type="text" id="oblast">
                    </div>

                    <div class="form-input-group">
                        <label for="gorod">Город:</label>
                        <input type="text" id="gorod">
                    </div>

                    <div class="form-input-group">
                        <label for="nomer-pochti">Отделение Новой Почты:</label>
                        <input type="text" id="nomer-pochti">
                    </div>

                    <div class="form-checkbox-group">
                        <input type="checkbox" id="call-back"><span>Перезвонить по принятию заказа?</span>
                    </div>
                </form>
                <button>К оплате</button>
            </div>
        </section>`,
    data() {
        return {

        }
    }
})