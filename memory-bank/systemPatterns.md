# systemPatterns.md

## System Patterns

**Architecture:**
- Expo mobile app with modular connection manager for Bluetooth, WiFi, Serial (USB/RS232), and Ethernet printers.
- Polling service fetches order receipts from a central server.
- Each printer connection has its own profile and print queue.
- Queue manager allows users to switch printers and resume jobs if a connection is lost.
- App supports multiple master devices per location, each with independent profiles/queues per printer.
- No direct communication between master devices; all poll the same server.

**Modules:**
1. **Order Poller**: Polls the server for new orders at regular intervals.
2. **Order Router**: Routes incoming orders to the appropriate task creator based on logic (e.g., printer assignment, order type).
3. **Task Creator**: Converts incoming orders into printing tasks, preparing them for the print queue.
4. **Task Broker**: Handles insertion of tasks into the print queue and retrieves printer profiles as needed.
5. **Printing Compiler**: Converts a printing task into printer-ready data, applying formatting and layout rules.
6. **Profile Manager**: Manages creation, update, and deletion of printer connection profiles, and provides profile data to other modules.
7. **Printer Driver**: Controls the hardware interface for each printer (Bluetooth, WiFi, Serial, Ethernet), executing print jobs.
8. **View (UI/UX)**: Manages all user interface and experience aspects, including printer management, queue status, and error handling.

**Key Decisions:**
- Use Expo for cross-platform support.
- Investigate React Native printer libraries for all required interfaces.
- Implement per-printer state management and queue persistence.

**Patterns:**
- Polling loop for order receipts.
- Hardware abstraction for multiple printer interfaces.
- Queue resumption and failover logic.
- Per-device, per-printer isolation.
