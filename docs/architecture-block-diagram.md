# App Architecture Block Diagram

```mermaid
flowchart TD
    OP[Order Poller]\n(Polls server for orders)
    OR[Order Router]\n(Routes orders)
    TC[Task Creator]\n(Creates print tasks)
    TB[Task Broker]\n(Task queue & profile retrieval)
    PC[Printing Compiler]\n(Compiles print data)
    PM[Profile Manager]\n(Manages printer profiles)
    PD[Printer Driver]\n(Controls printer hardware)
    V[View (UI/UX)]\n(User interface)

    OP --> OR
    OR --> TC
    TC --> TB
    TB --> PC
    TB --> PM
    PC --> PD
    PM --> PD
    PD --> V
    TB --> V
    OP --> V

    subgraph Peripheral Printers
        PD
    end
    subgraph User
        V
    end
```

This diagram visualizes the modular architecture of the app, showing the flow from polling orders to printing and user interaction.
