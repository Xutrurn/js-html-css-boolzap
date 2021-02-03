// alert("Hello world");

var app = new Vue({
  el: '#app',
  data: {
    // oggetto user
    user: {
      name: 'Nome Qualunque',
      avatar: '_ioo'
    },
    // array oggetti contatti
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luigi',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Daniele',
        avatar: '_5',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Science-based Grape Pudding alongside Lukewarm Bass Roll',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Fire-Roasted Cambozola tossed with Carolina Jarlsberg and Oatmeal Flatbread',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_6',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Indoor Carrot Burger with a side of Black Truffle and Spinach',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Foamed Watermelon Jam atop Understated Yam Shish-Kebab',
            status: 'received'
          }
        ],
      },
      {
        name: 'Carlo',
        avatar: '_7',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Swiss Process Pulled Pork Muffins with Christmas Muskrat Cookies',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Seasonal Rutabaga Gravy hidden under Blackened Tofu and Mussel Soup',
            status: 'received'
          }
        ],
      },
      {
        name: 'Nicola',
        avatar: '_8',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Highly Seasoned Sea Urchin Fondue topped with Baked Tamarind Foam',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Porcini and Cheddar Water in a mélange of Roman Scallop Brownies',
            status: 'received'
          }
        ],
      },
    ],
    contattoAttivo: 0,

    giorno: dayjs().format("DD-MM-YYYY"),
    ora: dayjs().format("HH:mm:ss"),

    testoInserito: '',
  },




  // inizio methods
  methods: {

    cambiaContatto(index) {
      this.contattoAttivo = index
      this.giorno = dayjs().format("DD-MM-YYYY")
      this.ora = dayjs().format("HH:mm:ss")
    },

    mioMessaggio() {
      var testo = {
        text: this.testoInserito,
        date: dayjs().format("DD-MM-YYYY HH:mm:ss"),
        status: 'sent'
      };
      this.contacts[this.contattoAttivo].messages.push(testo);
      this.testoInserito = "";

      setTimeout(function() {
        var autoMessaggio = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: 'ok',
          status: 'received'
        };
        app.contacts[app.contattoAttivo].messages.push(autoMessaggio);
      }, 1000);
    },









  }
  // fine methods

});









// console.log();
