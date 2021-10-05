app.component('navbar', {
    template:
        /*html*/
        `
        <div class="navbar nav">
			<div class="container">
				<div class="navbar-inner">
					<img class="logo" src="/images/logoWithIcon.svg">
					<div class="nav-btn-group">

                        <i class="fa fa-mobile" aria-hidden="true"><span>+38 (050) 47-55-213</span></i>

						<button @click="openCartPopup($event)">
							<i class="fas fa-shopping-cart"></i>
							<div v-if="this.cart.length !== 0" class="full-cart-circle"></div>
						</button>

						<button @click="this.$emit('to-main')">
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
            let popup = document.querySelector('.popup-cart')
            if (popup.dataset.open == 'false') {
                popup.style.right = '1em'
                popup.dataset.open = 'true'
            } else {
                popup.style.right = '-360px'
                popup.dataset.open = 'false'
            }
        }
    },
    created() {
        console.log('navbar created')
    }
})