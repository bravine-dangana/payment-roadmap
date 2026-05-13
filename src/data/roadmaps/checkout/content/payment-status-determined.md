# Payment Status Determined

The final payment status is determined based on all validations and MNO responses.

## Possible Statuses

- **SUCCESS** - Payment completed, funds transferred
- **FAILED** - Payment could not be processed
- **PENDING** - Awaiting MNO confirmation
- **TIMEOUT** - No response within time limit
- **CANCELLED** - Customer cancelled on phone

## Status Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Insufficient funds |
| 17 | Transaction limit exceeded |
| 1032 | Request cancelled by user |

@article@M-PESA Result Codes@https://developer.safaricom.co.ke/docs/result-codes
