<template>
  <div id="app">
    <body>
        <header>
          <h1>Frontier customer accounts</h1>
        </header>
        <h2>Accounts</h2>
        <main>
          <section>
            <accounts :accounts="accounts" :filter="0" :sortAccounts="sortAccounts"/>
          </section>
          <section>
            <accounts :accounts="accounts" :filter="2" :sortAccounts="sortAccounts"/>
          </section>
          <section>
            <accounts :accounts="accounts" :filter="1" :sortAccounts="sortAccounts"/>
          </section>
        </main>
        <footer>
          <p>{{this.time}}</p>
        </footer>
    </body>
  </div>
</template>

<script>
import Accounts from './components/Accounts.vue'
import { getAccounts } from './apiCall';

export default {
  name: 'app',
  components: {
    Accounts
  },
  data() {
    return {
      accounts: [],
      time: '',
    }
  },
  methods: {
    setAccounts: async function () {
      try {
        const data = await getAccounts();
        this.accounts = data;
      } catch (error) {
        window.console.log('Error setting state', error)
      }
    },
    sortAccounts: function (accounts, filter) {
      return this.accounts.filter(account => {
        return account.AccountStatusId === filter;
      });
    },
    getDate: function () {
      const date = Date(Date.now());
      this.time = 'The time is: ' + date.toString()
    }
  },
  created() {
    this.setAccounts();
    this.getDate();
  },
}
</script>

<style>
main {
  display: flex;
  flex-wrap: wrap;
}
section {
  width: 480px;
  margin: 10px;
  padding: 1%;
}
body {
  height: 100%;
  width: 100%;
  font-family: 'Roboto', Helvetica, Arial, sans-serif
}
header {
  background-color:#006643;
  padding: 4%;
  color: #fff;
}
h1 {
  font-size: 3em;
  font-weight: bold;
}
h2 {
  font-size: 2em;
  color:#006643;
  height: 15px;
}
h3 {
  font-size: 1.5em;
  color:#006643;
}
footer {
  margin: 1%;
  padding: 1%;
  background-color:#006643;
  color: #fff;
}
.account-data-list {
  list-style: none;
}
.account-data-list > li {
  margin: 10px 0;
}
.account-data-list > li > label {
  font-weight: bold;
  margin: 0 5px 0 0;
}
</style>
