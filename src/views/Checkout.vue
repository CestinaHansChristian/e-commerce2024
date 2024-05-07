<template>
    <div>
        <teleport to='#modal'>
            <div class="h-screen absolute grid place-content-center w-full">
                <div class="">
                    <div class="card bg-slate-400 p-3 grid grid-rows-2 gap-y-2 rounded-lg">
                        <h1 class="bg-neutral-300 text-center rounded-md">
                            Confirm your purchase
                        </h1>
                        <div class="card-total-price grid grid-cols-2 gap-x-2">
                            <div class="total-desc grid">
                                <p class=" text-start font-semibold">
                                    To pay:
                                </p>
                            </div>
                            <div class="total-dynamic grid">
                                <p class="bg-slate-200 text-center rounded-lg">
                                    ₱ <span class="font-semibold">{{ price_to_pay }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="card-payment-option grid grid-row-2">
                            <div class="payment-heading flex font-semibold">
                                <p>Select payment option</p>
                            </div>
                            <div class="payment-heading flex justify-between grid-cols-2 ">
                                <div class="cod-method flex gap-x-2 grid-cols-2 mx-2">
                                    <div class="controller-method flex place-self-center">
                                        <input type="radio" name="payment" id="" value="COD" v-model="paymentMethod">
                                    </div>
                                    <div class="controller-method">
                                        <img src="../../public/money.png" alt="cod" srcset="" class="object-contain h-14 w-14">
                                    </div>
                                </div>
                                <div class="gcash-method grid-cols-2 flex gap-x-2 place-content-center">
                                    <div class="controller-method flex place-self-center">
                                        <input type="radio" name="payment" id="" value="GCASH" v-model="paymentMethod">
                                    </div>
                                    <div class="controller-method">
                                        <img src="../../public/gcash.png" alt="gcash" srcset="" class="object-contain h-20 w-20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-controller grid grid-cols-2">
                            <div class="confirm-purchase  place-self-center">
                                <button @click="checkOut" class="p-1 bg-lime-400 font-semibold rounded-md hover:bg-lime-200">Confirm</button>
                            </div>
                            <div class=" flex confirm-purchase  place-self-center">
                                <button @click="closeModal" class="p-1 bg-red-400 font-semibold rounded-md hover:bg-red-200">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>
<script>
    export default {
        emits: ['close_modal'],
        props: {
            price_to_pay: Number
        },
        data() {
            return {
                secure_payment: this.price_to_pay,
                paymentMethod: ''
            }
        },
        methods: {
            closeModal() {
                console.log('modal closed');
                this.$emit('close_modal',true)
            },
            checkOut() {
                console.log(this.paymentMethod);
                console.log(this.secure_payment);
                alert('Order Posted')
                location.reload()
            }
        },
    }
</script>