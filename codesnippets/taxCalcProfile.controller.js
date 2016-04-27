(function () {
    'use strict';

    angular.module('taxbox2App.TaxCalcProfile')
        .controller('TaxCalcProfileController', TaxCalcProfileController);

    TaxCalcProfileController.$inject = ['$log', '$scope', '$q', 'taxCalcuProfileService', 'API'];

    function TaxCalcProfileController($log, $scope, $q, taxCalcuProfileService, API) {
        
        var vm = this;

        vm.isShowCrossReferences = true;

        $scope.filters = [];

        function addPropertyToDefaultResult(defaultResult, key, value) {

            defaultResult[key] = value;

        }

        function addToAllExtendResults(defaultProperties, property, item, allExtendResults) {

            var result = createExtendDefault(defaultProperties);

            result[property] = item.value;

            allExtendResults.push(result);

        }

        function initFilter() {

            function initLinkedItem() {

                $scope.$watch('filters[0].selectedItems', function (newValue, oldValue) {

                    var beLinkedObject = $scope.filters[0],
                        newDatasource = [],
                        nameToIdListCountry = [],
                        taxList = [];

                    for (var i = 0; i < beLinkedObject.selectOptions.dataSource.length; i++) {
                        if (newValue.indexOf(beLinkedObject.selectOptions.dataSource[i].englishName) > -1) {
                            nameToIdListCountry.push(beLinkedObject.selectOptions.dataSource[i].id);
                        }
                    }

                    newDatasource = $scope.filters[2].dataForFilter.filter(function (item) {
                        return (nameToIdListCountry.indexOf(item.countryId) > -1);
                    });

                    taxList = $("#filter3").data("kendoMultiSelect");
                    taxList.setDataSource(newDatasource);
                    taxList.trigger("change");

                }, true);
            }


            $scope.search = function () {
                var searchObject = {
                    'CountriesName': $scope.filters[0].selectedItems,
                    'TaxName': $scope.filters[2].selectedItems,
                    'DateFrom': $scope.filters[1].selectedDateObject
                };
                taxCalcuProfileService.searchTaxCalculationProfile(searchObject, function (data) {

                }, function () {

                });
            };

            $scope.reset = function () {
                for (var i = 0; i < $scope.filters.length; i++) {
                    if ($scope.filters[i].selectedItems) {
                        $scope.filters[i].selectedItems = [];
                    }
                }
            }

        };

        var taxCalculationProfileColumns = [
                    {
                        field: "description", title: "Tax Variant"
                    },
                    {
                        field: "code", title: "Tax Code"
                    },
                    {
                        field: "effectiveFrom", title: "Effective from", format: "{0:MM/dd/yyyy}"
                    },
                    {
                        field: "effectiveTo", title: "Effective to", format: "{0:MM/dd/yyyy}"
                    }
                    ,
                    {
                        field: "taxpayer", title: "Taxpayer", template: "#= taxpayer && taxpayer.propertyDescription ? taxpayer.propertyDescription : '' #"
                    },

                    //{
                    //    title: "Tax Point", template: "#= taxPoint != undefined && taxPoint.propertyDescription != undefined ? taxPoint.propertyDescription : '' #"
                    //},
                    //{
                    //    field: "rateModel", title: "Rate Model", template: "#= rateModel && rateModel.propertyDescription ? rateModel.propertyDescription : '' #"
                    //},
                    //{
                    //    field: "taxApplicability", title: "Tax Applicability", template: "#= taxApplicability.propertyDescription ? taxApplicability.propertyDescription : '' #"
                    //},
                    //{
                    //    field: "businessType", title: "Business Type", width: "150px", template: "#= businessType.propertyDescription ? businessType.propertyDescription : '' #"
                    //},
                    //{
                    //    field: "premiumDefinition", title: "Premium Definition", width: "150px", template: "#= premiumDefinition.propertyDescription ? premiumDefinition.propertyDescription : '' #"
                    //},
                    //{
                    //    field: "economicCost", title: "Economic Cost", width: "150px", template: "#= economicCost.propertyDescription ? economicCost.propertyDescription : '' #"
                    //},
                    {
                        field: "calculationInformation.locationOfRiskRule", title: "Location of Risk Rules"
                    },
                    {
                        field: "calculationInformation.fxRule", title: "FX Rules"
                    },
                    {
                        field: "calculationInformation.formula", title: "Tax Calculation Formula", width: "auto"
                    },
                    {
                        field: "classInScopeOfTax.nL01", title: "01", width: "30px", template: "#= classInScopeOfTax.nL01 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL02", title: "02", width: "30px", template: "#= classInScopeOfTax.nL02 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL03", title: "03", width: "30px", template: "#= classInScopeOfTax.nL03 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL04", title: "04", width: "30px", template: "#= classInScopeOfTax.nL04 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL05", title: "05", width: "30px", template: "#= classInScopeOfTax.nL05 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL06", title: "06", width: "30px", template: "#= classInScopeOfTax.nL06 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL07", title: "07", width: "30px", template: "#= classInScopeOfTax.nL07 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL08", title: "08", width: "30px", template: "#= classInScopeOfTax.nL08 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL09", title: "09", width: "30px", template: "#= classInScopeOfTax.nL09 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL10", title: "10", width: "30px", template: "#= classInScopeOfTax.nL10 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL11", title: "11", width: "30px", template: "#= classInScopeOfTax.nL11? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL12", title: "12", width: "30px", template: "#= classInScopeOfTax.nL12 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL13", title: "13", width: "30px", template: "#= classInScopeOfTax.nL13 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL14", title: "14", width: "30px", template: "#= classInScopeOfTax.nL14 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL15", title: "15", width: "30px", template: "#= classInScopeOfTax.nL15 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL16", title: "16", width: "30px", template: "#= classInScopeOfTax.nL16 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL17", title: "17", width: "30px", template: "#= classInScopeOfTax.nL17 ? 'Y' : '' #"
                    },
                    {
                        field: "classInScopeOfTax.nL18", title: "18", width: "30px", template: "#= classInScopeOfTax.nL18 ? 'Y' : '' #"
                    }
        ];


        var url = "http://localhost/api";

        $scope.$on("kendoRendered", function(e) {

            $('thead tr th').each(function() {
                $(this).attr('title', $(this).data('title'));
            });

        });

        var countries = [];

        var dataSource = new kendo.data.DataSource({

            data: {},

            schema: {
                parse: function (response) {

                    countries = angular.copy(response.data);

                    return response.data;

                }
            }

        });

        vm.taxCalcProfileOptions = {
            dataSource: dataSource,
            sortable: true,
            pageable: false,

            columns: [
                {
                    field: "countryName",
                    title: "Country Name"
                }
            ]
        };

        

        vm.detailTaxCalcProfileOptions = function(dataItem) {

            taxCalculationProfileDetailData = _.filter(countries, function(item) {
                return item.countryId === dataItem.countryId;
            })[0].taxCalculationProfileDetail;

            return {
                dataSource: {
                    data: taxCalculationProfileDetailData
                },

                columns: [
                    {
                        field: "name",
                        title: "Name"
                    }
                ]
            };
        };

        var subTaxCalculationProfileDetailData = [];

        var taxCalculationProfileDetailData = [];

        vm.subDetailTaxCalcProfileOptions = function(dataItem) {

            if (dataItem) {

                subTaxCalculationProfileDetailData = _.filter(taxCalculationProfileDetailData, function(item) {
                    return item.name === dataItem.name;
                });

                return {
                    dataSource: {
                        data: subTaxCalculationProfileDetailData[0].taxCalculationProfile,

                        schema: {
                            model: {
                                fields: {
                                    effectiveFrom: { type: "date" },
                                    effectiveTo: { type: "date" }
                                }
                            }
                        }
                    },
                    columns: [
                        {
                            field: "description",
                            title: "Tax Variant"
                        },
                        {
                            field: "code",
                            title: "Tax Code"
                        },
                        {
                            field: "effectiveFrom",
                            title: "Effective from",
                            format: "{0:MM/dd/yyyy}"
                        },
                        {
                            field: "effectiveTo",
                            title: "Effective to",
                            format: "{0:MM/dd/yyyy}"
                        }
                    ]
                };
            }

        };

        initFilter();

        function detailInit2(e) {

            var taxCalculationProfiles = e.data.taxCalculationProfile;

            var taxCalculationProfileExtends = [];

            var permittedVariantItems = [];

            angular.forEach(taxCalculationProfiles, function (item) {

                var defaultTaxCalculationProfile = angular.copy(item);

                var calOptions = item.taxCalculationPropertyOptions;

                for (var property in calOptions) {

                    if (calOptions.hasOwnProperty(property)) {

                        if (property != '_events' && property != '_handlers' && property != 'uid' && property != 'parent') {
                            var optionItems = calOptions[property];

                            angular.forEach(optionItems, function (optionItem) {

                                if (optionItem && optionItem.isPermittedVariant === false) {

                                    defaultTaxCalculationProfile[property] = optionItem;

                                } else {

                                    defaultTaxCalculationProfile[property] = "";

                                    permittedVariantItems.push({ key: angular.copy(property), value: angular.copy(optionItem) })
                                }

                            });
                        }

                    }
                }

                taxCalculationProfileExtends.push(defaultTaxCalculationProfile);

                angular.forEach(permittedVariantItems, function (permittedVariantItem) {
                    var taxCalculationProfile = angular.copy(item);

                    taxCalculationProfile[permittedVariantItem.key] = permittedVariantItem.value;

                    //console.log(taxCalculationProfile);

                    taxCalculationProfileExtends.push(taxCalculationProfile);
                });


            });

            //console.log(taxCalculationProfileExtends);

            $("<div/>").appendTo(e.detailCell).kendoGrid({

                dataSource: {

                    data: taxCalculationProfileExtends

                },

                scrollable: false,
                sortable: true,

                columns: taxCalculationProfileColumns

            });
        }

        function detailInit(e) {

            $("<div/>").appendTo(e.detailCell).kendoGrid({

                dataSource: {

                    data: e.data.taxCalculationProfileDetail

                },

                detailInit: detailInit2,

                scrollable: false,
                sortable: true,

                columns: [
                {
                    field: "name", title: "Name", width: "3000px"
                }]
            });
        }

        //Jquery way
        var $taxCalcProfileGrid = $("#taxCalcProfileGrid").kendoGrid({

            dataSource: dataSource,

            detailInit: detailInit,

            sortable: true,
            pageable: false,

            columns: [
                {
                    field: "countryName", title: "Country Name"
                }
            ]
        });


        var mydata2 = [{
            "a": "a1",
            "b": "b1",
            "c": "c1",
            "d": "d1",
            "sub": {
                "e": [{ "value": "e1", "isDepTrai": true }, { "value": "e2", "isDepTrai": false }, { "value": "e3", "isDepTrai": false }],
                "f": [{ "value": "f1", "isDepTrai": false }, { "value": "f2", "isDepTrai": true }],
                "g": [{ "value": "g1", "isDepTrai": true }, { "value": "g2", "isDepTrai": false }]
            }
        }];


        var properties = Object.keys(mydata2[0].sub);

        var subs = mydata2[0].sub;

        var finalResults = [];

        var defaultResult = createExtendDefault(properties);

        var allExtendResults = [];

        for (var key in subs) {

            if (subs.hasOwnProperty(key)) {

                var subItems = subs[key];

                angular.forEach(subItems, function (item) {

                    if (item.isDepTrai) {

                        addPropertyToDefaultResult(defaultResult, key, item.value);

                    }
                    else {
                        addToAllExtendResults(properties, key, item, allExtendResults);
                    }

                });
            }

        }

        allExtendResults.unshift(defaultResult);

        
        var allResults = [];

        angular.forEach(allExtendResults, function (extendsResult) {
            var result = angular.copy(mydata2[0]);
            result.extendObject = extendsResult;

            allResults.push(result);
        });

        console.log(allResults);


        function createExtendDefault(properties) {

            var result = {};

            angular.forEach(properties, function (item) {

                result[item] = "";

            });

 
            return result;

        }

    }

})();


