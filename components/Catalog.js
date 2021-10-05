app.component('catalog', {
    template:
        /*html*/
        `
        <section>
            <div class="container">
                <h3 class="subtitle">Каталог</h3>
                <div class="product--card--wrap">
                    <div v-for="(product, index) in products" :key="index" class="product--card">
                         <img :src="product.image" alt="">
                        <h3 class="card-title">{{ product.name }}</h3>
                        <div class="price-wrap">
                            <span class="card-subtitle">Цена:</span>
                            <span class="card-price">{{ product.price }}грн</span>
                        </div>
                        <p class="card-subtitle">Описание:</p>
                        <p class="card-desc">{{ product.desc }}</p>
                        <div class="card-btn-wrap">
                            <button @click="addToCart(product)" class="to-cart-btn">В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>`,
    data() {
        return {

        }
    },
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
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product)
        }
    }
})