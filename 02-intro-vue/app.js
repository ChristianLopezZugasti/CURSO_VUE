const { createApp, ref,computed } = Vue

const orignalQuotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

const app = createApp({
    setup(){
        //se ponen las propiedaes y metodos,
        //ref es otra forma de v-model mas chafa
        const showAuthor = ref(true)
        const quotes = ref(orignalQuotes)

        const newMessage = ref('')

        //dentro de computed esta esperando una funcion
        const totalQuotes = computed( () => {
            return quotes.value.length;
        })

        const toggleAuthor = () => {
            console.log(showAuthor)
            showAuthor.value= !showAuthor.value
        }

        const addQuote = () => {
            
            quotes.value.unshift( {quote: newMessage.value, author:"Christian"})
            newMessage.value = ''
        }

        return{
            showAuthor,
            quotes,
            toggleAuthor,
            addQuote,
            totalQuotes,
            newMessage
        }
    }
    
})

app.mount('#myApp');

//v-if crea el comonentenrte de html o lo elimina
//v-show, oculta el eleemnto 
//las propuedades computadas, son funciones que se ejecutan
///cuando una de las propiedades que esa involucrada dentro de la funcion
//cambia 