new Vue({
    el: '#main',
    data () {
        return {
            searchInput: '',
            results: '',
        }
    },
    methods: {
        search() {
            fetch('https://jsonplaceholder.typicode.com/users', {
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    this.results = data
                })
                .catch((data) => {
                    console.log('ca marche pas')
                })
        },
    },
    mounted() {
        this.search()

    },
    computed: {
        filteredUser(){
            return this.results.filter(el => el.username.toLowerCase().includes(this.searchInput.toLowerCase()))
        }
    }
})