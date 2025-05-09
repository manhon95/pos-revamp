# projectbrief.md

## Project Brief

**Additional Goals:**
- Ensure future-proof, maintainable codebase with best practices.
- Provide easy debugging and monitoring for development and long-term maintenance.
- Meet business-critical requirements for reliability and error handling in POS printing environments.


**Goal:** Build a mobile app (Expo/React Native) for the catering industry.

**Function:**
- Polls order receipts and sends them to one or more peripheral thermal printers.
- Supports concurrent connections to multiple printers.
- Each printer can be connected via Bluetooth, WiFi, Serial (USB/RS232), or Ethernet.

**Scope:**
- Mobile, receipt polling, peripheral printing, catering focus.
- Each printer connection maintains its own profile and printing queue.
- Users can switch physical printers and resume printing queues if connection is lost or printer is unavailable.
- Multiple master devices (with the app) may exist at a location, each with independent profiles/queues per printer, polling the same server but not communicating with each other.
