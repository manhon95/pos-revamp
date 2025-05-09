# Catering Order Receipt Printing App

A robust, future-proof mobile app for the catering industry, designed for reliable POS receipt printing with advanced queue management, error handling, and maintainability in mind.

A cross-platform mobile app (built with Expo/React Native) for the catering industry, designed to poll order receipts from a server and manage printing to multiple peripheral thermal printers via Bluetooth, WiFi, Serial (USB/RS232), or Ethernet.

---

## Features
- **Maintainability & Best Practices:** Codebase structured for long-term development and easy debugging.
- **Robust Queue Management:** Prevents overload and lag, supports multiple printers and concurrent jobs.
- **Comprehensive Error Reporting:** Detects and reports missing receipts, unresponsive printers, and network issues.
- **Logging & Monitoring:** Tracks print jobs, printer/device status, and system events for easy debugging and maintenance.
- **Audit Trails:** Maintains a history of changes to receipt templates, printer settings, and user access.
- **User Authentication:** Secure access to print functions and settings.
- **Multi-printer support:** Connect to and manage multiple printers concurrently.
- **Multiple connection interfaces:** Bluetooth, WiFi, Serial (USB/RS232), Ethernet.
- **Per-printer profiles and queues:** Each printer has its own connection profile and print queue.
- **Queue resumption:** Resume printing tasks if a connection is lost or a printer is unavailable.
- **Multi-master device support:** Multiple devices can connect to the same printer, each maintaining independent queues and profiles.
- **Polling:** Regularly polls a central server for new order receipts.
- **Extensible architecture:** Modular and class-based for easy maintenance and extension.
- **Multi-printer support:** Connect to and manage multiple printers concurrently.
- **Multiple connection interfaces:** Bluetooth, WiFi, Serial (USB/RS232), Ethernet.
- **Per-printer profiles and queues:** Each printer has its own connection profile and print queue.
- **Queue resumption:** Resume printing tasks if a connection is lost or a printer is unavailable.
- **Multi-master device support:** Multiple devices can connect to the same printer, each maintaining independent queues and profiles.
- **Polling:** Regularly polls a central server for new order receipts.
- **Extensible architecture:** Modular and class-based for easy maintenance and extension.

## Architecture
- See `/memory-bank/` for in-depth system, tech, and product documentation.
- See `/docs/architecture-diagram.md` and `/docs/architecture-block-diagram.md` for visual diagrams.

## Core Modules
- **Order Poller:** Polls the server for new orders.
- **Order Router:** Routes orders to the appropriate task creator.
- **Task Creator:** Converts orders into print tasks.
- **Task Broker:** Manages print queues and printer profiles.
- **Printing Compiler:** Formats print tasks for printers.
- **Profile Manager:** Handles printer connection profiles.
- **Printer Driver:** Controls hardware for each printer type.
- **View (UI/UX):** User interface for managing printers, queues, and tasks.

## Technologies
- **Expo / React Native** (JavaScript/TypeScript)
- **SQLite** and **JSON** for queue persistence
- **Bluetooth, WiFi, Serial, Ethernet** printer libraries (to be selected)

## Getting Started
1. **Clone the repository**
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the app:**
   ```sh
   npx expo start
   ```
4. **Configure printers and profiles** in the app UI

## Documentation
- All project documentation and architectural decisions are tracked in `/memory-bank/`.
- POS Printing requirements and business context are summarized in `/docs/POS Printing.docx` and `/docs/POS_Printing_md_temp.md`.
- Diagrams and class structures are in `/docs/`.
- All project documentation and architectural decisions are tracked in `/memory-bank/`.
- Diagrams and class structures are in `/docs/`.

## Contributing
Pull requests and issues are welcome! Please see the memory bank for system patterns and context before contributing.

## License
MIT
