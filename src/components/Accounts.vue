<template>
  <section class="account-container" v-if='this.accounts.length'>
    <ul v-for="account in accounts" :key="account.id" class="account-data-list">
      <li><label>Name:</label>account.LastName, account.FirstName</li>
      <li><label>Email:</label>{{Email}}</li>
      <li><label>Phone Number:</label>{{PhoneNumber}}</li>
      <li><label>Amount Due:</label>{{AmountDue}}</li>
      <li><label>Due Date:</label>{{DueDate}}</li>
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
  border: 2px solid red;
  justify-self: center;
  height: 5em;
}
</style>
