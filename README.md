<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">QB2PandaSync</h3>

  <p align="center">
    Automated invoice sync from QuickBooks to PandaDoc Payments.
    <br />
    <a href="https://github.com/Fran-cio/QB2PandaSync"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Fran-cio/QB2PandaSync/issues">Report Bug</a>
    ·
    <a href="https://github.com/Fran-cio/QB2PandaSync/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

QB2PandaSync removes manual invoice handling by syncing invoice data from QuickBooks into PandaDoc Payments.

### Problem It Solves
- Today, invoices are exported as PDF from QuickBooks and uploaded manually to PandaDoc.
- This process is repetitive and error-prone.
- Finance teams need faster, traceable invoice delivery.

### Target Solution
The project will automate invoice transfer and payment document creation with reliable status tracking.

### Built With
- QuickBooks Online API
- PandaDoc API
- Webhooks / scheduled sync worker
- Secure credentials management

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This repository currently contains project documentation and implementation planning.

### Prerequisites
- A QuickBooks Online account with API access
- A PandaDoc account with Payments enabled
- A GitHub account

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Fran-cio/QB2PandaSync.git
   ```
2. Open the docs folder to review the current plan:
   ```sh
   cd QB2PandaSync
   ls docs
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

This is a documentation-first stage. Start with:
1. `docs/PROJECT_OVERVIEW.md`
2. `docs/CURRENT_PROCESS.md`
3. `docs/FUTURE_INTEGRATION_PLAN.md`
4. `docs/HOW_TO_FOR_NON_TECHNICAL_USERS.md`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Define current manual invoice flow
- [x] Define integration target scope
- [x] Create non-technical onboarding guide
- [ ] Implement QuickBooks invoice ingestion
- [ ] Implement PandaDoc document creation
- [ ] Add status synchronization and retries
- [ ] Add operations dashboard and alerting

See the [open issues](https://github.com/Fran-cio/QB2PandaSync/issues) for upcoming work.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Documentation

- [Project Overview](docs/PROJECT_OVERVIEW.md)
- [Current Manual Process](docs/CURRENT_PROCESS.md)
- [Future Integration Plan](docs/FUTURE_INTEGRATION_PLAN.md)
- [How-To for Non-Technical Users](docs/HOW_TO_FOR_NON_TECHNICAL_USERS.md)
- [Implementation Backlog (Execution-Ready)](docs/IMPLEMENTATION_BACKLOG.md)
- [Integration Field Mapping](docs/INTEGRATION_FIELD_MAPPING.md)
- [Operations Runbook](docs/OPERATIONS_RUNBOOK.md)
- [UAT Checklist (Non-Technical)](docs/UAT_CHECKLIST_NON_TECHNICAL.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/my-improvement`)
3. Commit your changes (`git commit -m "docs: add X [by: role/name]"`)
4. Push to your branch
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Project owner: Francisco Ciordia Cantarella

Project Link: [https://github.com/Fran-cio/QB2PandaSync](https://github.com/Fran-cio/QB2PandaSync)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- QuickBooks Online Developer Docs
- PandaDoc API Docs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Fran-cio/QB2PandaSync.svg?style=for-the-badge
[contributors-url]: https://github.com/Fran-cio/QB2PandaSync/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Fran-cio/QB2PandaSync.svg?style=for-the-badge
[forks-url]: https://github.com/Fran-cio/QB2PandaSync/network/members
[stars-shield]: https://img.shields.io/github/stars/Fran-cio/QB2PandaSync.svg?style=for-the-badge
[stars-url]: https://github.com/Fran-cio/QB2PandaSync/stargazers
[issues-shield]: https://img.shields.io/github/issues/Fran-cio/QB2PandaSync.svg?style=for-the-badge
[issues-url]: https://github.com/Fran-cio/QB2PandaSync/issues
[license-shield]: https://img.shields.io/github/license/Fran-cio/QB2PandaSync.svg?style=for-the-badge
[license-url]: https://github.com/Fran-cio/QB2PandaSync/blob/main/LICENSE
