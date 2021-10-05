app.component('main-component', {
    props: {
        products: {
            type: Array,
            required: true
        },
        cart: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
        <main class="main-content">

			<jumbotron></jumbotron>

			<catalog class="grey-bg" :products="products" :cart="cart" @add-to-cart="addToCart">
			</catalog>

			<about></about>

			<why-us class="grey-bg"></why-us>

		</main>`,
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product)
        }
    }
})