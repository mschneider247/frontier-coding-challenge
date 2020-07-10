<template>
  <div id="app">
    <body>
        <header>
            <h1>Frontier customer accounts</h1>
        </header>
        <h2>Accounts</h2>
        <main>
          <section>
            <section class="account-column grid" id="active-account-column">
              <h3>Active</h3>
              <accounts :accounts="accounts" :filter="0" :sortAccounts="sortAccounts"/>
            </section>
            <section class="account-column grid" id="overdue-account-column">
              <div class="account-container-title" id="overdue-account-container-title">
                <h3>Overdue</h3>
              </div>
              <accounts :accounts="accounts" :filter="2" :sortAccounts="sortAccounts"/>
            </section>
            <div class="account-column grid" id="inactive-account-column">
              <div class="account-container-title" id="inactive-account-container-title">
                <h3>Inactive</h3>
              </div>
              <accounts :accounts="accounts" :filter="1" :sortAccounts="sortAccounts"/>
            </div>
          </section>
        </main>
        <footer>
          <!-- <p class="copy">&copy;<script>document.write(new Date().getFullYear())</script></p> -->
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
    }
  },
  created() {
    this.setAccounts()
  },
  updated() {
    this.sortAccounts()
  }
}
</script>

<style>
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
  display: block;
  font-size: 1.5em;
  color:#006643;
}
main {
  display: flex;
}
footer {
  background-color:#006643;
  color: #fff;
}
#overdue-account-container-title > h3{
  color: #B22222;
}
#inactive-account-container-title > h3 {
  color:#808080;
}
.account-container-title {
  justify-self: center;
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
.copy {
  place-self: end;
  grid-row-start: 2;
  grid-column-start: 2;
}  
</style>
