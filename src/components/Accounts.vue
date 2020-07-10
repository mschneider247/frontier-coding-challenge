<template>
  <section class="account-container" v-if='this.accounts.length'>
    <ul v-for="account in sortAccounts(accounts, filter)" :key="account.id" class="account-data-list">
      <li><label>Name: </label>{{account.LastName}}, {{account.FirstName}}</li>
      <li><label>Email: </label>{{account.Email}}</li>
      <li><label>Phone Number: </label>{{account.PhoneNumber}}</li>
      <li><label>Amount Due: </label>{{account.AmountDue}}</li>
      <li><label>Due Date: </label>{{account.PaymentDueDate}}</li>
    </ul>
  </section> 
</template>

<script type="application/javascript">
export default {
  name: 'Accounts',
  props: {
    accounts: Array,
    filter: Number,
    sortAccounts: Function,
  },

}
</script>

<style scoped>
ul {
  padding: 1%;
  font-weight: 300;
  background-color: rgba(0, 146, 204, .2);
}
.account-container {
  justify-self: center;
  height: 100%;
  background-color: rgba(0, 146, 204, .2);
  padding: 2%;
  border-radius: 2px;
  max-width: 440px;
}
</style>
