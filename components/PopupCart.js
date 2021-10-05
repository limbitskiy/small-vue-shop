app.component('popup-cart', {
    template:
        /*html*/
        `
    <ul class="popup-cart" data-open="false">
		<p v-if="this.cart.length === 0">Корзина пуста</p>
		<li v-for="(product, index) in this.cart" :key="index">
			<div class="popup-item-section">
				<img :src="product.image" alt="">
			</div>

			<div class="popup-item-section">
				<span class="cart-item-name">{{ product.name }}</span>
			</div>

			<div class="popup-item-section">
				<span class="cart-item-price">{{ product.price }}грн</span>
			</div>

			<div class="popup-item-section" @click="removeFromCart(product)">
				<i class="fas fa-trash"></i>
			</div>
		</li>
        <p class="total" v-if="this.cart.length > 0">К оплате: <span>{{ this.total }}</span> грн</p>
        <button v-if="this.cart.length > 0" @click="this.$emit('change-view', 'shipping')">Заказать</button>
	</ul>
    `,
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    methods: {
        removeFromCart(product) {
            this.cart.splice(this.cart.indexOf(product), 1)
        }
    },
    computed: {
        total() {
            return this.cart.reduce((sum, item) => {
                return sum += item.price * item.quantity
            }, 0)
        }
    }
})