# Webhook / Callback Fired

A webhook is an HTTP POST request sent to the merchant's server with the payment result.

## Webhook Payload

```json
{
  "transactionId": "MP2024001",
  "status": "SUCCESS",
  "amount": 1000,
  "currency": "KES",
  "phone": "254712345678",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Best Practices

- **Verify signatures** - Validate webhook authenticity
- **Idempotency** - Handle duplicate webhooks gracefully
- **Quick response** - Return 200 immediately, process async
- **Retry logic** - Handle failed webhook deliveries
- **Logging** - Log all webhook events

@article@Webhook Best Practices@https://developer.safaricom.co.ke/docs/callbacks
@article@Securing Webhooks@https://stripe.com/docs/webhooks
