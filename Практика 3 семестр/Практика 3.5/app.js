const App = {
    data() {
        return {
            title: 'Конвертер скорости',
            kmh: 0,
            ms: 0
        }
    },
    methods: {
        onKmhChange(event) {
            const value = parseFloat(event.target.value);
            if (!isNaN(value)) {
                this.ms = value / 3.6;
            } else {
                this.ms = 0;
            }
        },
        onMsChange(event) {
            const value = parseFloat(event.target.value);
            if (!isNaN(value)) {
                this.kmh = value * 3.6;
            } else {
                this.kmh = 0;
            }
        }
    }
}

Vue.createApp(App).mount('#app')