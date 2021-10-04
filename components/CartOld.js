app.component('cart-old', {
    template:
        /*html*/
        `
        <section>
			<div class="container">
				<h3 class="subtitle">Корзина</h3>
				<p v-if="cart.length === 0">Ваша корзина пуста</p>
				<div class="product--card--wrap">
					<div v-for="(product, index) in this.cart" :key="index" class="product--card">
						<img :src="product.image" alt="">
						<h3 class="card-title">{{ product.name }}</h3>
						<div class="price-wrap">
							<span class="card-subtitle">Цена:</span>
							<span class="card-price">{{ product.price }}грн</span>
						</div>
						<div class="quantity-wrap">
							<span class="card-subtitle">Количество:</span>
							<div class="input-group">
								<input class="quantity-input" type="tel" :value="product.quantity">
								<div class="span-group">
									<i @click="incrementQuantity(product, index)" class="fas fa-caret-up"></i>
									<i @click="decrementQuantity(product, index)" class="fas fa-caret-down"></i>
								</div>
							</div>
						</div>
						<p class="card-subtitle">Описание:</p>
						<p class="card-desc">{{ product.desc }}</p>
						<div class="card-btn-wrap">
							<button @click="removeFromCart(product)" class="remove-from-cart-btn">Убрать из корзины</button>
						</div>
					</div>
				</div>
				<p class="card-total">Общая сумма: <span>{{ total }}</span> грн</p>

				<delivery></delivery>

				<button @click="checkout" class="to-cart-btn">Оплатить товары</button>
				<br />
				<button @click="toCatalog" class="to-cart-btn">Назад</button>
			</div>
		</section>`,
    data() {
        return {
        }
    },
    props: {
        products: {
            type: Object,
            required: true
        },
        cart: {
            type: Array,
            required: true
        }

    },
    methods: {
        checkout() {
            console.log(this.total)
        },
        incrementQuantity(product) {
            product.quantity < 100 ? product.quantity++ : product.quantity
        },
        decrementQuantity(product) {
            product.quantity > 1 ? product.quantity-- : product.quantity
        },
        removeFromCart(product) {
            // this.cart[this.cart.indexOf(product)].
            this.cart.splice(this.cart.indexOf(product), 1)
        },
        toCatalog() {
            this.$emit('to-catalog')
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