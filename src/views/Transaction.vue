<template>
    <div>
        <div class="receipt-info gap-y-2">
            <div class=" m-1 bg-neutral-400 rounded-md" v-for="(record, index) in records" :key="record.index">
                <div class="order-detail grid">
                    <div class="card">
                        <div class="card grid">
                            <div class="card-wrapper grid grid-row-5 gap-1 m-3 bg-neutral">
                                <div class="card-heading grid grid-cols-2 bg-slate-200 rounded-t-lg">
                                    <div class="heading">
                                        order id:
                                    </div>
                                    <div class="heading">
                                        {{ record.id }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200 ">
                                    <div class="heading">
                                        To pay:
                                    </div>
                                    <div class="heading">
                                        ₱{{ record.transac_total_price }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200">
                                    <div class="heading">
                                        Paid via:
                                    </div>
                                    <div class="heading">
                                        {{ record.transac_mode_of_payment }}
                                    </div>
                                </div>
                                <div class="card-heading grid grid-cols-2 bg-slate-200 rounded-b-lg">
                                    <div class="heading">
                                        Drop point:
                                    </div>
                                    <div class="heading">
                                        Landmark
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

    const transactionList = await pb.collection('transaction').getFullList({
        filter: pb.filter(`user_transac_id.id ~ "${pb.authStore.model.id}"`),
    })

    // console.log(pbtoken);
    console.log(transactionList);
    // console.log(`model id: ${pb.authStore.model.id}`);
    export default {
        data() {
            return {
                records: transactionList,
            }
        },
    }
</script>