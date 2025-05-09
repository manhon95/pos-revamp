# techContext.md

## Tech Context

**Tech Stack:**
- Expo/React Native
- JavaScript/TypeScript
- Bluetooth, WiFi, Serial (USB/RS232), and Ethernet printer libraries (to be selected)

**Constraints:**
- Must support multiple concurrent printer connections of various types.
- Must maintain persistent profiles and queues per printer.
- Must isolate profiles/queues per device (multi-master scenario).
- Cross-platform (iOS/Android).

**Dependencies:**
- Expo
- SQLite for queue persistence
- Logging/monitoring tools
- React Native printer libraries (Bluetooth, WiFi, Serial, Ethernet)
- Local storage for profile/queue persistence

- SQLite and JSON for queue persistence.
- Expo
- React Native printer libraries (Bluetooth, WiFi, Serial, Ethernet)
- Local storage for profile/queue persistence
