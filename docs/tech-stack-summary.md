# Tech Stack & Packages Summary

This document summarizes the main technologies, packages, and libraries used in this POS application, based on project documentation and context.

## Core Tech Stack

- **Expo / React Native**: Cross-platform mobile app framework for iOS and Android.
- **JavaScript / TypeScript**: Main programming languages.
- **SQLite**: Local database for queue and profile persistence.
- **Local Storage**: For storing printer profiles and queue data.

## Printer Communication Libraries (Recommended)

- **Bluetooth:**
  - [`react-native-ble-plx`](https://github.com/dotintent/react-native-ble-plx): Widely used for BLE communication. Works with many Bluetooth printers. Not available in Expo Go; requires custom dev client or bare workflow.
  - [`react-native-bluetooth-escpos-printer`](https://github.com/januslo/react-native-bluetooth-escpos-printer): For ESC/POS printers, supports classic Bluetooth (not BLE). Requires native modules.
- **WiFi:**
  - [`react-native-tcp-socket`](https://github.com/Rapsssito/react-native-tcp-socket): Enables TCP socket communication for sending print jobs to network printers. Requires bare workflow or custom dev client.
  - [`react-native-udp`](https://github.com/tradle/react-native-udp): For UDP-based printer protocols.
- **Serial (USB/RS232):**
  - [`react-native-usb-serialport`](https://github.com/hoanghiepvo/react-native-usb-serialport): For USB/RS232 serial communication. Android only; requires native modules.
- **Ethernet:**
  - Use the same TCP/UDP socket libraries as WiFi for Ethernet-connected printers.

> _Expo users:_ These libraries require the bare workflow or a custom development client, as Expo Go does not support custom native modules by default.
> _Always verify printer compatibility and test with your target devices._

## Task Queue Libraries (Recommended)

- **SQLite-based persistence:**
  - [`expo-sqlite`](https://docs.expo.dev/versions/latest/sdk/sqlite/): SQLite API for Expo projects (works in managed workflow).
  - [`WatermelonDB`](https://github.com/Nozbe/WatermelonDB): High-performance reactive database for React Native, ideal for complex local persistence and can be adapted for queue management.
- **Queue Management Logic:**
  - Implement queue processing, concurrency, and retry logic in JavaScript/TypeScript using persisted tasks from the database.
  - Optionally use libraries like [`async`](https://caolan.github.io/async/) for in-memory task queueing and control flow, in combination with persistent storage.

> _Note:_ There is no fully plug-and-play task queue library for React Native; these tools provide the building blocks for a robust, persistent, and reliable task queue system.

## Logging Libraries (Recommended)

### Local Logging

- [`react-native-logs`](https://github.com/onubo/react-native-logs): Flexible logging framework for React Native. Supports log levels, custom transports, and can be extended for remote logging. Works in Expo and bare workflow.
- [`loglevel`](https://github.com/pimterry/loglevel): Lightweight JavaScript logging library, simple and effective for basic needs.
- Built-in `console`: Useful for development/debugging, but not structured or persistent.

### Cloud Logging / Remote Monitoring

- [`Sentry`](https://sentry.io/for/react-native/): Industry standard for error and performance monitoring. Integrates with Expo and bare React Native.
- [`Bugsnag`](https://www.bugsnag.com/platforms/react-native-error-reporting/): Real-time error monitoring and reporting, supports logs and breadcrumbs.
- [`Firebase Crashlytics`](https://firebase.google.com/docs/crashlytics/get-started?platform=react-native): Crash reporting and logging, requires bare workflow or custom dev client for full integration.
- [`LogRocket`](https://logrocket.com/): Session replay and logging for advanced debugging and monitoring.

> _Tip:_ Use `react-native-logs` for local logging and forward important logs/errors to Sentry or another cloud provider for comprehensive monitoring.

## Additional Dependencies

- **Expo**: For device APIs, build, and deployment support.
- **JSON**: Used for queue persistence and local data interchange.

## Constraints

- Multi-printer, multi-connection support (Bluetooth, WiFi, Serial, Ethernet).
- Persistent, isolated profiles and queues per device.
- Cross-platform compatibility.

---

## Testing Libraries (Recommended)

### Unit & Integration Testing

- [`Jest`](https://jestjs.io/): The default test runner for React Native projects. Supports snapshot testing, mocks, and code coverage. Integrates seamlessly with Expo and React Native.
- [`React Native Testing Library (RNTL)`](https://callstack.github.io/react-native-testing-library/): User-centric utilities for testing React Native components. Built on top of Jest.
- [`React Test Renderer`](https://reactjs.org/docs/test-renderer.html): For rendering React components to JS objects without the DOM.

### End-to-End (E2E) Testing

- [`Detox`](https://wix.github.io/Detox/): Industry standard for end-to-end testing of React Native apps. Automates real devices/simulators. Requires native build (not supported in Expo Go; use with Expo bare workflow or custom dev client).
- [`Appium`](https://appium.io/): Cross-platform mobile automation tool. Can be used for E2E testing but is more complex to set up than Detox.

> _Tip:_ For most projects, use Jest with React Native Testing Library for unit/integration tests. Use Detox for E2E if you have a custom dev client or bare workflow.

_This summary is based on the current tech context and may be updated as the project evolves._
