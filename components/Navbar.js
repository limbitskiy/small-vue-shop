app.component('navbar', {
    data() {
        return {
            popup: document.querySelector('.popup-cart')
        }
    },
    template:
        /*html*/
        `
        <div class="navbar nav">
			<div class="container">
				<div class="navbar-inner">
					<img class="logo" src="/images/logoWithIcon.svg">
					<div class="nav-btn-group">

                        <i class="fa fa-mobile" aria-hidden="true"><span>+38 (050) 47-55-213</span></i>

						<button @click="openCartPopup($event)" :class="{'btn-orange': this.cart.length > 0}">
							<i class="fas fa-shopping-cart"></i>
						</button>

						<button @click="this.$emit('change-view', 'main-component')">
							<i class="fas fa-home"></i>
						</button>

					</div>
				</div>
			</div>
		</div>`,
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    methods: {
        openCartPopup() {
            if (this.popup.dataset.open === 'false') {
                this.showPopup()
            } else {
                this.hidePopup()
            }
        },
        showPopup() {
            this.popup.style.right = '1em'
            this.popup.dataset.open = 'true'
        },
        hidePopup() {
            this.popup.style.right = '-360px'
            this.popup.dataset.open = 'false'
        }
    },
    created() {
        console.log('navbar created')
    }
})