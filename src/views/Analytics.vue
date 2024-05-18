<template>
    <div>
        <!-- <button></button> -->
        <div class="h-screen grid bg-neutral-200">
            <div class="report-generated">
                <Bar :data="data" :options='options'/>
            </div>
        </div>
    </div>
</template>

<script>

import PocketBase from 'pocketbase';
const pb = new PocketBase('https://ecom2024.pockethost.io/')

const records = await pb.collection('dashboard_and_analytics').getFullList({
});



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

export default {
  name: 'Analytics',
  components: {
    Bar
  },
  data() {
    return {
        data: {
                labels:['Delivered Items','Inventory Items', 'Transactions Occurred'],
                datasets: [{ 
                    data: [records[0].total_delivered_products, records[0].total_products, records[0].total_transactions],
                    label: 'Generated Report',
                    backgroundColor: [
                    'lime',
                    'orange',
                    'skyblue'
                    ],
                    borderColor: [
                        'Black'
                    ],
                    
                }],
        },
        options: {
            responsive: true,
            // plugins: {
            //     legend: {
            //         display: true,
            //         labels: {
            //             color: 'white',
            //         },
            //     },
            // }
        },
      borderWidth: 1
    }
  }
}
</script>