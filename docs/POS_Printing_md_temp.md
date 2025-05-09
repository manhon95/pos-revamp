POS Printing

Project goals

1.  POS printing to meet business requirements.

2.  Define best practices for a codebase to ensure future-proof app
    development.

3.  Ensure easy debugging for development and long-term maintenance.

Project Scope

Background

+------+------------------------+--------------------------------------+
| **   | **Name**               | **Description**                      |
| No** |                        |                                      |
+------+------------------------+--------------------------------------+
| 1    | Print Queue Slow       | 5 printers available                 |
|      |                        |                                      |
|      |                        | - Printers a, b, c wait for each     |
|      |                        |   other                              |
+------+------------------------+--------------------------------------+
| 2    | Print Queue Overload   | Too many print jobs in queue causes  |
|      |                        | POS system to lag                    |
+------+------------------------+--------------------------------------+
| 3    | Printer Not Responding | Users unaware which printer is       |
|      | (POS: 打印機沒有回應)  | unresponsive                         |
+------+------------------------+--------------------------------------+
| 4    | Printer Missing        | Receipts not printed and no error    |
|      | Receipts (漏單)        | reported                             |
+------+------------------------+--------------------------------------+
| 5    | Network issue          | The system cannot print receipts     |
|      |                        | when there is no internet access     |
|      |                        |                                      |
|      |                        | TODO: ask for more detail            |
+------+------------------------+--------------------------------------+
| 6    | Lack of Debugging      | No logs and monitoring for print     |
|      | Tools                  | jobs, printers, or device status     |
|      |                        |                                      |
|      |                        | - Makes debugging difficult for      |
|      |                        |   developers                         |
+------+------------------------+--------------------------------------+

Features and Functionality

1.  Receipt Generation and Printing

<!-- -->

4.  Data Source Integration

<!-- -->

2.  Printer Integration and Connectivity

3.  Printing Queue Management

4.  User Interface

5.  Customization and Template

6.  Error Handling and Reliability

7.  Logging and Monitoring

8.  Security and Compliance

9.  Scalability and Maintenance

Deliverables

1.  **POS Printing Application**: Optimized for high-volume F&B
    receipts, featuring scalable, future-proof capabilities.

<!-- -->

5.  **Codebase Best Practices**: Structured and documented codebase
    adhering to industry standards, ensuring scalability,
    maintainability, and ease of future extensions.

Requirements

Functional Requirements

[Receipt Generation and Printing]{.underline}

- generate receipts containing order details

- support printing receipts on current **Printer List**

- support printing of barcodes, QR codes and images

- support receipt printing in multiple languages

- support multiple printers to print receipts simultaneously
  **(issue1)**

- support fallback printer **(enh5)**

- support printer assignment (tag) **(enh2)**

[Data Source Integration]{.underline}

- support order polling (online)

- support local network order (offline) **(issue5)**

[Printer Integration and Connectivity]{.underline}

- support current printers

- support ethernet connection

- support usb connection

- support auto-detect connected printers and configure settings for
  immediate use

[Printing Queue Management]{.underline} **(enh3)**

- support list view for printing queue **(issue4) (enh1,3)**

- support kill job(s)

- support resume job(s)

- support pause job(s)

[User Interface]{.underline}

- support printer connectivity IP setting

- support printer connectivity MAC address setting **(enh4)**

- support OmniWe **GQL:ShopDevice.configs**

- TBC\...

[Customization and Template]{.underline}

- support OmniWe API **GQL:ShopReceiptTemplate**

[Error Handling and Reliability]{.underline} **(issue3, 4)**

- queue print jobs during network or printer downtime and process them
  once connectivity is restored

- display alerts for printer issues, such as paper out, printer offline

- automatically retry failed print jobs up to three times before
  notifying the user

[Logging and Monitoring]{.underline} **(issue6)**

- log all print activities, including successes and failures, for
  troubleshooting

- TBC: push metrics (printer health, hardware health, \...etc)

[Security and Compliance]{.underline}

- require user authentication (e.g., username/password or OAuth) to
  access print functions and settings

- maintain an audit trail of changes to receipt templates, printer
  settings, and user access.

[Scalability and Maintenance]{.underline}

- handle high transaction volumes, supporting at least **1000**
  simultaneous print jobs per store **(issue2)**

- provide automatic software updates to support new printer models and
  features (code push)

- TBC: remote monitoring tools for administrators to check printer and
  application status.remote monitoring tools for administrators to check
  printer and application status.

- TBC: expose an API for integration with third-party systems, such as
  inventory or CRM software.

Non-Functional Requirements

+------------------+---------------------------------------------------+
| **Name**         | **Description**                                   |
+------------------+---------------------------------------------------+
| Printing queue   | Min: 1000 message per second                      |
| batch size       |                                                   |
|                  | Max: 5000 message per second                      |
+------------------+---------------------------------------------------+
| Printing         | TBC: Min: ?? ms -\> action -\>                    |
| Response time    |                                                   |
|                  | use case -\> to -\> print (total: time)           |
|                  |                                                   |
|                  | - F&B mobile order : order polling \<= 5s         |
|                  |                                                   |
|                  | - Local network: \<= 1s                           |
+------------------+---------------------------------------------------+

User Requirements (Enhancement)

+--------+---------------+--------------------------------------------+
| **No** | **Name**      | **Description**                            |
+--------+---------------+--------------------------------------------+
| 1      | Print         | able to identify which order was printed   |
|        | Tracking      |                                            |
+--------+---------------+--------------------------------------------+
| 2      | Printer       | able to specify which printer handles      |
|        | Assignment    | specific receipt                           |
+--------+---------------+--------------------------------------------+
| 3      | Printer Stuck | able to reprint                            |
|        |               |                                            |
|        |               | able to view print queue                   |
|        |               |                                            |
|        |               | able to test printer                       |
|        |               |                                            |
|        |               | able to restart when printer jams          |
+--------+---------------+--------------------------------------------+
| 4      | MAC Address   | able to use MAC address recognition in     |
|        | Recognition   | settings                                   |
+--------+---------------+--------------------------------------------+
| 5      | Fallback      | able to assign a fallback printer for when |
|        | Printer       | a printer fails                            |
+--------+---------------+--------------------------------------------+

System Requirements

+-----------------------------------------------------------------------+
| **Description**                                                       |
+-----------------------------------------------------------------------+
| **OS:** \> Android 9                                                  |
|                                                                       |
| **RAM:** 4GB                                                          |
|                                                                       |
| **Storage:** 64GB                                                     |
|                                                                       |
| **Screen size:** TBC.. may confirm Jacky current supported screen     |
| size                                                                  |
+-----------------------------------------------------------------------+

System Architecture

Architecture Overview

![](media/1a51a99c8d760359e5af182aa250f6693d5eb380.png){width="6.416666666666667in"
height="3.426240157480315in"}

Technology Stack

+-------------+--------------------------------------------------------+
| **Name**    | **Description**                                        |
+-------------+--------------------------------------------------------+
| Frontend    | - React Native                                         |
|             |                                                        |
|             | - Expo                                                 |
+-------------+--------------------------------------------------------+
| Database    | - SQLite                                               |
+-------------+--------------------------------------------------------+
| Printer     | - TODO\...                                             |
| Integration |                                                        |
+-------------+--------------------------------------------------------+
| API         | - GraphQL: TODO\...                                    |
| Ingrgration |                                                        |
|             | - Rest API: TODO\...                                   |
+-------------+--------------------------------------------------------+
| Security    | JWT?                                                   |
|             |                                                        |
|             | Security Store?                                        |
+-------------+--------------------------------------------------------+
| State       | - React Context API                                    |
| Management  |                                                        |
+-------------+--------------------------------------------------------+
| Styling     | NativeWind ? TODO\...                                  |
|             |                                                        |
|             | Styled Components? TODO\...                            |
+-------------+--------------------------------------------------------+
| Logging and | Sentry ? TODO\...                                      |
| Monitoring  |                                                        |
+-------------+--------------------------------------------------------+
| Development | - Expo CLI                                             |
| and Build   |                                                        |
| Tools       | - TypeScript                                           |
|             |                                                        |
|             | - ESLint + Prettier                                    |
|             |                                                        |
|             | - e2e test?? TODO\...                                  |
+-------------+--------------------------------------------------------+
| DevOps and  | - Expo EAS (Expo Application Services)                 |
| Deployment  |                                                        |
|             | - Gitlab CI/CD                                         |
+-------------+--------------------------------------------------------+

Design

TODO\....

Development Plan

To-dos list

![](media/0fab1791bd1b6e5a9b16fa20100a087d2335f846.jpg){width="6.416666666666667in"
height="2.879180883639545in"}

To-dos Gantt

![](media/d0d2ba78947b750319581daa73f3bc292c4468c9.jpg){width="6.416666666666667in"
height="2.879180883639545in"}

Testing Plan

TODO\....

Deployment Plan

TODO\....

Risk Management

TODO\....

Team and Roles

  -------------------------------------------------------------------- -----------------------------------
  **Person**                                                           **Role**

  [Vicary](https://august-solutions.monday.com/users/37109462)         Project Owner
  [SuperWebster](https://august-solutions.monday.com/users/37372756)   
  [Joseph Cheung](https://august-solutions.monday.com/users/61451575)  

  [Billy](https://august-solutions.monday.com/users/37109756)          Project ??, Developer

  [Victor Law](https://august-solutions.monday.com/users/74482044)     Developer
  -------------------------------------------------------------------- -----------------------------------

References

POS List

  ----------------------------------- -----------------------------------
  **Name**                            **Model No**

  Imin                                Falcon1, Falcon2

  Xiaomi                              TBC\...

  Honor                               TBC\...
  ----------------------------------- -----------------------------------

Printer List

  ------------- ---------------------------------------------------------
  **Name**      **Model** **No**

  Epson         tm-t82x (lan version)

  Citizen       ct-d150 (usb / lan version)

  Citizen       cl-e321 (usb / lan version)

  Xprinter      XP-N160II

  Star          TSP100
  ------------- ---------------------------------------------------------

Receipt Samples

![](media/ea573f104cadf38bc95f9628ff05efaddd506e4b.png){width="6.416666666666667in"
height="3.724514435695538in"}

Printing Architecture Draft

<https://excalidraw.com/#room=66fd7ca45dd4b8b1b7d5,eKYcmnEQdlbMl6mufDK3vA>
