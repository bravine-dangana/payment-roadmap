# Transaction Validation

Transaction validation ensures the payment request is legitimate and meets all business rules before processing.

## Validation Checks

- **Duplicate detection** - Prevent double charges
- **Amount limits** - Daily/transaction limits check
- **Merchant status** - Active merchant account
- **Currency validation** - Correct currency codes
- **Timestamp validation** - Request not expired

## Idempotency

Using idempotency keys ensures the same transaction is not processed twice even if the request is retried.

@article@Payment Validation Best Practices@https://stripe.com/docs/idempotency
