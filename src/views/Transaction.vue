<template>
    <div>
        <div class="receipt-info gap-y-2">
            <div class=" m-1 bg-neutral-400 rounded-md" v-for="(record, index) in records" :key="record.index">
                <div class="order-detail grid">
                    <div class="card">
                        <div class="card grid">
                            <div class="card-wrapper grid grid-row-5 gap-1 m-3 bg-neutral">
                                <div class="card-heading grid grid-cols-2 bg-slate-200 rounded-t-lg">
                                    <div class="text-start ps-2 heading-label">
                                        Order id:
                                    </div>
                                    <div class="heading">
                                        {{ record.id }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200 ">
                                    <div class="text-start ps-2 heading-label">
                                        Total:
                                    </div>
                                    <div class="heading">
                                        ₱{{ record.transac_total_price }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200">
                                    <div class="text-start ps-2 heading-label">
                                        Paid via:
                                    </div>
                                    <div class="heading">
                                        {{ record.transac_mode_of_payment }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200 rounded-b-lg">
                                    <div class="text-start ps-2 heading-label">
                                        Drop point:
                                    </div>
                                    <div class="heading">
                                        {{ record.transac_drop_point }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200 rounded-b-lg">
                                    <!-- <div class="heading">
                                        Phone number
                                    </div>
                                    <div class="heading">
                                        {{ record.phone_num }}
                                    </div> -->
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
    import PocketBase from 'pocketbase'

    const pb = new PocketBase('http://127.0.0.1:8090');

    let transac_list = null

    if(pb.authStore.isValid){
            const transactionList = await pb.collection('transaction').getFullList({
            filter: `user_transac_id.id ~ "${pb.authStore.model.id}"`,
        })
        transac_list = transactionList
    } else {
        const transactionList = {
            'user_transac_id': null,
            'transac_mode_of_payment': null,
            'transac_total_price': null,
            'transac_drop_point': null
        }
        transac_list = transactionList
    }

    // console.log(transactionList);
    // console.log(`model id: ${pb.authStore.model.id}`);
    export default {
        data() {
            return {
                records: transac_list,
            }
        },
    }
</script>

<style scoped>
    .heading-label {
        font-weight: 500;
    }
</style>