app.component('shipping', {
    template:
        /*html*/
        `
        <section class="standalone grey-bg">
            <div class="modal-window">
                <h3 class="modal-title">Оформление заказа</h3>
                <p>Оставьте свой телефон и мы перезвоним Вам для подтверждения заказа и уточнения деталей</p>
                <form class="delivery-form">

                    <div class="form-input-group">
                        <label for="fname"><span class="asterisk">*</span>Имя:</label>
                        <input type="text" id="fname">
                    </div>

                    <div class="form-input-group">
                        <label for="tel"><span class="asterisk">*</span>Телефон:</label>
                        <input type="tel" id="tel">
                    </div>

                </form>
                <button>Готово</button>
            </div>
        </section>`,
    data() {
        return {

        }
    }
})