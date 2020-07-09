<template>
  <section class="account-container" v-if='this.accounts.length'>
    <ul v-for="account in accounts" :key="account.id" class="account-data-list">
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
  props: ['accounts'],
}
</script>

<style scoped>
.account-container {
  justify-self: center;
  height: 100%;
}
</style>
