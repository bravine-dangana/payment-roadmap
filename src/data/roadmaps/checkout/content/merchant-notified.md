# Merchant Notified of Payment Status

The merchant system receives the final payment notification and updates the order accordingly.

## Notification Channels

- **Webhook/Callback** - HTTP POST to merchant server
- **WebSocket** - Real-time push notification
- **Polling** - Merchant polls for status
- **Email/SMS** - Human-readable notification

## Merchant Actions on Success

1. Update order status to "Paid"
2. Trigger fulfillment workflow
3. Send receipt to customer
4. Update inventory
5. Record in accounting system

@article@Payment Notification Integration@https://developer.safaricom.co.ke
