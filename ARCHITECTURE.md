# Decentralized Provenance & Cold-Chain Compliance Ledger on Layer-2 Rollups — System Architecture & Specifications

## 1. High-Level Workflow
```mermaid
L1["1. Physical & Sensor Edge Layer"] --> L2["2. Telemetry & Gateway Layer"] --> L3["3. Stream Analytics & Rules Engine"] --> L4["4. Time-Series & Historical Storage"] --> L5["5. Monitoring & Actuation Dashboard"]
```

## 2. Textual Workflow Architecture
See the generated architecture topology in the platform fundamentals suite.

## 3. Data Flow Specification
### Tier 1: 1. Physical & Sensor Edge Layer (Hardware / Embedded)
Physical sensor transducers and edge microcontrollers capturing environmental and telemetry signals in real time.
**Components:**
- **Sensor Transducers** (`Analog / Digital Transducers`): Captures raw physical metrics (temperature, moisture, motion, acoustic)
- **Edge Microcontroller** (`ESP32 / Arduino / ARM`): Performs sampling, ADC conversion, and hardware interrupts
- **Signal Conditioner** (`Moving Average / Kalman Filter`): Eliminates noise, clips spurious spikes, and performs calibration

### Tier 2: 2. Telemetry & Gateway Layer (Network / Ingestion)
Lightweight, low-bandwidth communication protocols routing packets from field nodes to central services.
**Components:**
- **Wireless Edge Gateway** (`MQTT / LoRaWAN / BLE`): Bridges radio frequency packets to IP networks
- **Ingestion Controller** (`Express / Mosquitto`): Authenticates device tokens, decrypts payloads, and throttles packets
- **Edge Ring Buffer** (`In-Memory FIFO Buffer`): Ensures zero packet loss during network intermittent drops

### Tier 3: 3. Stream Analytics & Rules Engine (Real-Time Analytics)
Continuous event evaluation, anomaly threshold detection, and automatic actuator command triggering.
**Components:**
- **Stream Event Parser** (`Event-Driven Worker`): Decompresses telemetry packets and maps timestamps
- **Threshold Rules Engine** (`Rule Evaluator`): Evaluates critical bounds and flags threshold excursions
- **Actuator Command Dispatcher** (`Hardware Relay Bus`): Dispatches automated relay toggles, motor controls, or alarms

### Tier 4: 4. Time-Series & Historical Storage (Persistence / Time-Series)
High-throughput append-only time-series persistence for telemetry alongside relational configuration tables.
**Components:**
- **Time-Series Store** (`Time-Series Engine`): Stores indexed sensor observations with timestamp partitioning
- **Device Configuration DB** (`ACID Relational DB`): Maintains node identities, geo-coordinates, and calibration curves
- **Actuation Audit Ledger** (`Structured Log Store`): Immutable log of all automated and manual control events

### Tier 5: 5. Monitoring & Actuation Dashboard (Presentation / Visualizer)
Interactive monitoring console displaying live telemetry gauges, historical trends, and manual actuation overrides.
**Components:**
- **Live Telemetry Dashboard** (`React / Tailwind CSS`): Renders real-time gauge widgets, scatter plots, and heatmaps
- **Device Control Panel** (`REST / WebSocket Client`): Allows manual actuator overrides and calibration adjustment
- **Notification Dispatcher** (`Webhook / Push Notification`): Dispatches SMS, email, and push warnings during anomalies


## 4. Security & Scalability
- Authenticated session tokens and role-based policies isolate critical operations.
- Decoupled tier boundaries enable independent optimization and stress testing.
- Schema validation ensures data integrity across all internal interfaces.
