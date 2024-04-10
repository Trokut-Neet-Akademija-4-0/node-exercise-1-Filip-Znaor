import Product from '/.productInterface'

interface Cart {
    id: number
    product: Product []
    total: number
    discountedTotal: number
    userId: number
    totalProducts: number
    totalQuantity: number
  }

  export default Cart