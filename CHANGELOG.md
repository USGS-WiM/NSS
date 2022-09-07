# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/USGS-WiM/NSS/tree/dev)

### Added

- Added citation option with bulk upload statistics
- Added "Limit by regulation status" filter in sidebar
- Added equivalent years of record, drainage area export, and order index to equations table 
- Allow user to sort Variable Types by Statistic Group in Settings

### Changed

- Changed MathJax reference from Cloudflare to jsDelivr
- Updated Gagestats bulk upload template
- Changed how statistic filter in the settings works. Filters client side instead of service side. 

### Removed

- Removed unitsystem indicator in the NSS scenario calls

### Fixed

- Fixed Appendix table header printing issue
- Fixed batch upload issue where "null" was sent instead of `null` when no years of record were entered into bulk upload spreadsheet
- Fixed help request form submission
- Fixed Gagestats bearer token authentication issues 
- Fixed bug where you cannot edit a unit system
- Fixed bug where loginError variable was not being used correctly

## [v1.1.0](https://github.com/USGS-WiM/NSS/releases/tag/v1.1.0) - 2021-07-13
## [v1.0.0](https://github.com/USGS-WiM/NSS/releases/tag/v1.0.0) - 2017-07-07