<template>
    <div class="">
        <div class="h-screen grid bg-neutral-300 pb-5">
            <div class="report-generated grid grid-cols-2">
                <div class="bar-container grid place-content-center">
                  <Bar :data="data" :options='options'/>
                </div>
                <div class="total-income-wrapper text-center grid place-content-center">
                  <div class=" px-5 border-black bg-red-400 rounded-xl grid place-content-center">
                    <div class="grid-container-wrapper-label flex justify-center font-bold ">
                      <p class="generated-report-label font-serif">
                        Your Overall sales:
                      </p>
                    </div>
                    <div class="grid-generated-sales-wrapper-value flex justify-center font-semibold text-white">
                      <p class="generated-report">
                        ₱ {{ total_rev.total_gross }}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PocketBase from 'pocketbase';
const pb = new PocketBase('https://ecom2024.pockethost.io/')

const records = await pb.collection('dashboard_and_analytics').getFullList({
})

const transactions_tbl = await pb.collection('total_gross').getOne(1, {
});
console.log(transactions_tbl.total_gross);

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,Colors)

ChartJS.defaults.font.size = 20;
ChartJS.defaults.color = 'black'

export default {
  name: 'Analytics',
  components: {
    Bar
  },
  data() {
    return {
        total_rev: transactions_tbl,
        data: {
          labels:['Delivered Items','Items in Inventory', 'Transactions '],
          datasets: [{ 
            data: [records[0].total_delivered_products, records[0].total_products, records[0].total_transactions],
            label: 'Report',
            backgroundColor: [
              'lime',
              'orange',
              'skyblue'
            ],
            color: 'red'
          }],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Sales Report'
            }
          }
        },
    }
  }
}
</script>

<style>
  .generated-report {
    font-family: 'Lumanisimo';
    font-size: 40px;
  }

  .generated-report-label {
    font-size: 30px;
  }
</style>