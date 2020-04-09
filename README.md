![WiM](wimlogo.png)


# NSS

An Angular CLI web application, the National Streamflow Statistics (NSS) Program is a computer program that provides a simple method for 
applying regional flood-peak streamflow estimates and low flow frequency/duration streamflow estimates. See https://water.usgs.gov/osw/programs/nss/index.html
for more information.

### Prerequisites

This project has dependencies that require Angular CLI, Node 6.9.0  or higher, and NPM 3 or higher. NPM is downloaded with Node.js here: https://nodejs.org/en/.

```
npm install -g @angular/cli

```

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Installing

```
Clone the repo and navigate to folder.
```

```
'npm install' to install all dependencies.
```

```
'ng serve' to build and run the application.
```

## Building and testing

```
ng build --prod --base-href
```

## Deployment

Deploy to AWS S3 bucket test.wim.usgs.gov, nss directory

## Built With

* [Angular](https://angular.io/) - The main web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Highcharts](https://www.highcharts.com/products/highcharts/) - Flowchart and Hydrograph

## Contributing

Please read [CONTRIBUTING.md]() for details on the process for submitting pull requests to us. Please read [CODE_OF_CONDUCT.md]() for details on adhering by the [USGS Code of Scientific Conduct](https://www2.usgs.gov/fsp/fsp_code_of_scientific_conduct.asp).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

Advance the version when adding features, fixing bugs or making minor enhancement. Follow semver principles. To add tag in git, type git tag v{major}.{minor}.{patch}. Example: git tag v2.0.5

To push tags to remote origin: `git push origin --tags`

*Note that your alias for the remote origin may differ.

## Authors

* **[Jeremy Newson](https://www.usgs.gov/staff-profiles/jeremy-k-newson)**  - *Point of Contact* - [USGS Web Informatics & Mapping](https://wim.usgs.gov/)
* **[Katrin Jacobsen](https://www.usgs.gov/staff-profiles/katrin-jacobsen)**  - *Developer* 
* **[Andrea Medenblik](https://www.usgs.gov/staff-profiles/andrea-s-medenblik)**  - *Developer* 
* **[Harper Wavra](https://www.usgs.gov/staff-profiles/harper-wavra)**  - *Developer* 


See also the list of [contributors](https://github.com/USGS-WiM/NSS/graphs/contributors) who participated in this project.

## License

This project is licensed under the Creative Commons CC0 1.0 Universal License - see the [LICENSE.md](LICENSE.md) file for details

## Suggested Citation
In the spirit of open source, please cite any re-use of the source code stored in this repository. Below is the suggested citation:

`This project contains code produced by the Web Informatics and Mapping (WIM) team at the United States Geological Survey (USGS). As a work of the United States Government, this project is in the public domain within the United States. https://wim.usgs.gov`


## Acknowledgments

* [angular cli](https://angular.io/)
* [angular-2-dropdown-multiselect](http://softsimon.github.io/angular-2-dropdown-multiselect/)
* [Mathjax](https://www.mathjax.org/)
* [Angular2-Toaster](https://github.com/stabzs/Angular2-Toaster)


## About WIM
* This project authored by the [USGS WIM team](https://wim.usgs.gov)
* WIM is a team of developers and technologists who build and manage tools, software, web services, and databases to support USGS science and other federal government cooperators.
* WiM is a part of the [Upper Midwest Water Science Center](https://www.usgs.gov/centers/wisconsin-water-science-center).
