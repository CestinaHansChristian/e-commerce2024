<template>
    <div>
        <div class="text-center h-72 m-1">
            <div class="relative ">
                <div class="grid relative align-middle transaction-heading bg-slate-300 py-1 rounded-t-xl">
                    <h1 class="sticky top-0">
                        Transaction
                    </h1>
                </div>
                <div class="transaction-body border-2 border-black ">
                    <div class="scrollbar overflow-y-scroll grid-rows-2 h-60">
                        <div class="receipt-info gap-2">
                            <div class="grid border-2 border-black m-1">
                                <div class="order-detail grid grid-cols-2 justify-center">
                                    <div class="transaction-id border-2 border-black">
                                        <img src="" alt="" class="h-40 w-40">
                                    </div>
                                    <div class=" transaction-number grid grid-rows-3 justify-center border-2 border-black">
                                        <div class="prod-name">
                                            sample name
                                        </div>
                                        <div class="prod-total">
                                            1000
                                        </div>
                                        <div class="to-delivered">
                                            Gcash
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>