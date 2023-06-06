/**
 * 1. install stripe and react stripe js
 * 2. create a checkout form with card element ( card elements contain: card number, expiration date, CVS, zip code )
 * 3. create account on stripe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. On the Server site install the stripe: npm install --save stripe
 * 8. create a payment intent API with payment method type: ['card']
 * 9. make sure you provide amount in cents ( multiply price with 100)
 * 10. call payment intent API to get client secret and store it in a state
 * 11. use confirm card payment API with client secret and card info;
 * 12. display confirm card error and success
 * 13. display confirm card success
 * 14. Do things after payment
 * 
 * 
 */