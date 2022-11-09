console.log('Ciao vuejs!');


const {createApp} = Vue;


const DateTime = luxon.DateTime;
const Interval = luxon.Interval;
createApp({
  data() {
    return {
      indexCounter: 0,
      messageCounter: 0,
      newMessageSent: '',
      searchedWord: '',
      isShow: false,

      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
        ],
        },
        {
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ]
    }
  },
  methods: {
    contactClickIssues(index) {
      this.indexCounter = index;
      this.isShow = false;
    },
    sentNewMessage(){
      const now = DateTime.now();
      console.log(this.newMessageSent);
      let newMsgFormat = {
        date: now.setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
        message: this.newMessageSent,
        status: 'sent'
      }
      this.contacts[this.indexCounter].messages.push(newMsgFormat);
      this.newMessageSent = '';
      const interlocutorAnswer = setTimeout(this.generateInterlocutorAnswer, 2000);
    },
    generateInterlocutorAnswer() {
      const now = DateTime.now();
      let newMsgFormat = {
        date: now.setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
        message: "Tu mi dici quello che devo fare ed io lo faccio...",
        status: 'received'
      }
      this.contacts[this.indexCounter].messages.push(newMsgFormat);
    },
    searchByName() {
      this.contacts.forEach(contact => {
        let lowerName = contact.name.toLowerCase();
        let matchName = lowerName.includes(this.searchedWord.toLowerCase());
        if(!matchName) contact.visible = false;
        else contact.visible = true;
      });
    },
    clickControlMenu(index) {
      this.isShow = !this.isShow;
      this.messageCounter = index;
    },
    lastMessageReturn(index){
      if(!this.contacts[index].messages.length) return `No message inside`;
      else {
        return this.contacts[index].messages[this.contacts[index].messages.length - 1].message
      }
    },
    lastDateReturn(index){
      if(!this.contacts[index].messages.length) return `-`;
      else {
        return this.contacts[index].messages[this.contacts[index].messages.length - 1].date
      }
    },
    deleteMessage() {
      this.contacts[this.indexCounter].messages.splice(this.messageCounter, 1);        
    }
  },
  mounted() {
    console.log("Mounted 'boolzapp'");
  }
}).mount("#app");

