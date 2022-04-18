Vue.component("Home", {
  template: `
  <div  >
 
    <div >
      <Botons @currentSentence="sentence=$event" :selectPhrase="sentence"  :num="frasesNum"></Botons>
    </div>
   
    <div>
      <Escena :frasesProp="frases" :selectPhrase="sentence" ></Escena>
    </div>
  </div>
  `,

  data() {
    return {
      frases: [
        {
          name: '“Así es cómo se gana una guerra. No luchando contra lo que odias, sino salvando lo que amas"',
          author: "Roste Tico",img:'/img/1.jpg'
        },
        {
          name: "“¿Quién es más loco: el loco o el loco que sigue al loco?”",
          author: "Obi-Wan",img:'/img/1.jpg'
        },
        { name: "“La guerra no lo hace a uno más grandioso”", author: "Yoda",img:'/img/1.jpg' },
        {
          name: "“Concéntrate en el momento. Siente, no pienses, usa tu instinto”",
          author: "Qui-Gon Jinn",img:'/img/1.jpg'
        },
        {
          name: "“El miedo es el camino hacia el Lado Oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento. Percibo mucho miedo en ti”",
          author: "Yoda",img:'/img/1.jpg'
        },
        {
          name: "“No. No lo intentes. Hazlo, o no lo hagas, pero no lo intentes”",
          author: "Yoda",img:'/img/1.jpg'
        },
        
        
        
      ],
      sentence:0,
      frasesNum:null

     
    };
  },
  beforeMount(){
    this.frasesNum = this.frases.length;
  },
  methods: {
   
  },
  
  props: [],
  
});
