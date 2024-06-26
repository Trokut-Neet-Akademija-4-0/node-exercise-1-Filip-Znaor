import ICart from './interfaces/cartInterface'
import ICartProduct from './interfaces/cartProductInterface'

class Cart implements ICart {
    constructor() {
        this.id = 0
        this.products = []
        this.total = 0
        this.discountedTotal = 0
        this.totalProducts = 0
        this.totalQuantity = 0
        this.userId = 0
    }

    products: ICartProduct[]

    id: number

    
}
