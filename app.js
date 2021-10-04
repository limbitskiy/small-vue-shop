const app = Vue.createApp({
	data() {
		return {
			products: [
				{ name: 'Клей D4 (10мин)', id: 0, price: 120, image: '/images/item0.png', desc: 'Применяется для склеивания древесины при производстве оконных блоков и дверей (склеивание коробов и полотен); слоистое склеивание древесины и древесных материалов; склеивание минеральных строительных плит методом ручного нанесения.' },
				{ name: 'Клей D4 (20мин)', id: 1, price: 80, image: '/images/item1.png', desc: 'Применяется для склеивания древесины при производстве оконных блоков и дверей (склеивание коробов и полотен); слоистое склеивание древесины и древесных материалов; склеивание минеральных строительных плит методом ручного нанесения.' },
				{ name: 'Клей D4 (35мин)', id: 2, price: 145, image: '/images/item2.png', desc: 'Применяется для склеивания древесины при производстве оконных блоков и дверей (склеивание коробов и полотен); слоистое склеивание древесины и древесных материалов; склеивание минеральных строительных плит методом ручного нанесения.' },
				{ name: 'Клей D4 (50мин)', id: 3, price: 105, image: '/images/item3.png', desc: 'Применяется для склеивания древесины при производстве оконных блоков и дверей (склеивание коробов и полотен); слоистое склеивание древесины и древесных материалов; склеивание минеральных строительных плит методом ручного нанесения.' },
			],
			cartEmpty: true,
			cart: [],
			showMain: true,
			// showCart: false,
			showShipping: false
		}
	},
	methods: {
		changeView() {
			window.scrollTo(0, 0)
			document.querySelector('.popup-cart').style.right = '-360px'
			document.querySelector('.popup-cart').dataset.open = 'false'
		},
		toMain() {
			this.changeView()
			this.showShipping = false
			this.showMain = true
		},
		toShipping() {
			this.changeView()
			this.showMain = false
			this.showShipping = true

		},
		updateCart(product) {
			if (this.cart.indexOf(product) !== -1) return
			this.cart.push(product)
			this.cart[this.cart.indexOf(product)].quantity = 1
		}
	}
})