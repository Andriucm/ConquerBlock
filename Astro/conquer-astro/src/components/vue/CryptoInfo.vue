<template>
    <div v-if="loading">Cargando datos...</div>
    <div v-else>
        <h2>Precios de Criptomonedas</h2>
        <ul>
            <li v-for="crypto in prices" :key="crypto.name">
                {{ crypto.name }}: ${{ crypto.price }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ZodNull } from 'astro:schema';
import { ref, onMounted, onUnmounted } from 'vue';

const prices = ref([]);
const loading = ref(false);
const interval = ref(null);

const fetchInfo = async () => {
    loading.value = true;
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
        const data = await response.json();
        prices.value = [
            { name: "Bitcoin", price: data.bitcoin.usd },
            { name: "Ethereum", price: data.ethereum.usd }
        ];
    } catch (err) {
        console.error("Error fetching Info", err);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchInfo()
    interval.value = setInterval(fetchInfo, 10000);
});

onUnmounted(() => {
    clearInterval(interval.value);
});
</script>