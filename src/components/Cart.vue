<script setup>
    import Checkout from '@/views/Checkout.vue';
</script>
<template>
    <Checkout @close_modal="cancel_payment" :price_to_pay="checkout_to_pay"  v-if="isPaid" />
    <div class="loop-container grid grid-row-3 relative overflow-y-scroll h-60 rounded-md">
        <div class="grid grid-rows-2 py-2 pb-10 bg-slate-400 gap-y-1">
            <div v-for="(product_cart_item, index) in order_desc" :key="product_cart_item.index" class=" grid grid-cols-2 relative items mx-2 py-4 justify-center bg-neutral-200 p-1 rounded-md">
                <div class="product-image mx-1">
                    <img :src='product_cart_item.prod_img' alt="" class="h-14 w-24">
                </div>
                <div class="item-name grid place-content-center font-semibold">
                    <p class="item-name text-center">
                        {{ product_cart_item.prod_name }}
                    </p>
                </div>
            </div>
        </div>
        <div class="sticky grid bottom-0  align-bottom bg-slate-400">
            <div class="controller-wrapper grid-flow-col controller bottom-0 absolute w-full">
                <div class=" bg-slate-400 place-items-stretch grid rounded-md pt-1" >
                    <div class="grid grid-cols-3 justify-between space-x-3">
                        <div class="total-wrapper py-1 ps-1"> 
                            <div class="total-wrapper bg-white rounded-md ps-2 ">
                                Total: {{ !display_order.prod_grand_total ? 0 : display_order.prod_grand_total }}
                            </div>
                        </div>
                        <div class="checkout-wrapper">
                            <button @click="proceedCheckOut(display_order.prod_grand_total)" class="bg-green-300 p-0.5 w-full rounded-lg font-semibold border-2 border-green-400 hover:bg-green-400 duration-300 delay-150">CheckOut</button>
                        </div>
                        <div class="clear-all">
                            <button @click="clearBasket()" class="bg-red-300 p-0.5 w-full rounded-lg font-semibold border-2 border-red-400 hover:bg-red-400 duration-300 delay-150">Clear-all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['to_check_out','price_decrease','price_add'],
        props: {
            display_order: Object,
            order_desc: Array
        },
        data() {
            return {
                isPaid: false,
                item_quantity: 0,
                checkout_to_pay: 0
            }
        },
        methods: {
            clearBasket() {
                location.reload()
            },
            proceedCheckOut(total_price) {
                this.isPaid = !this.isPaid
                this.checkout_to_pay = total_price
                // this.$emit('to_check_out',total_price)
            },
            cancel_payment(status) {
                this.isPaid = !this.isPaid
            },
            addPrice(add_price,index) {
                this.$emit('price_add',this.order_desc[index].prod_stock = this.order_desc[index].prod_stock - 1)
                
                this.display_order.prod_grand_total = parseInt(this.display_order.prod_grand_total) + parseInt(add_price)
                
                console.log(this.order_desc[index].prod_stock);
            },
            decreasePrice(dec_price,index) {
                this.$emit('price_decrease',this.order_desc[index].prod_stock = this.order_desc[index].prod_stock + 1)

                this.display_order.prod_grand_total = parseInt(this.display_order.prod_grand_total) - parseInt(dec_price)
                console.log(this.order_desc[index].prod_stock);
            }
        },
        
    }
</script>

<style scoped>
.text-area {
    resize: none
}


</style>