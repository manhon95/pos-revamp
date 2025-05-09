# productContext.md

## Product Context

**Business Needs:**
- Reliable, robust printing even under queue overload or network issues.
- Clear error reporting for missing receipts and unresponsive printers.
- Audit trail for changes to templates, printers, and user access.
- User authentication required for print functions and settings.


**Why:** Streamline order fulfillment for catering businesses by automating and managing complex printing scenarios.

**Problem Solved:**
- Manual or error-prone receipt printing, especially with multiple printers and connection types.
- Lost print jobs due to connection issues.
- Need for robust, flexible, and resilient printing workflows in busy environments.

**How:**
- Mobile app connects to multiple printers (Bluetooth, WiFi, Serial, Ethernet).
- Maintains a separate profile and printing queue for each printer connection.
- Allows users to switch printers and resume queues if a printer goes offline.
- Supports multiple master devices per location, each managing its own queues and profiles, all polling the same order server.

**User Experience Goals:**
- Fast, reliable, and easy to use.
- Seamless recovery from printer or connection failures.
- Minimal setup for staff, even in complex environments.
