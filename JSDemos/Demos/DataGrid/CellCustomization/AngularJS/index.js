var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.dataGridOptions = {
        dataSource: weekData,
        showRowLines: true,
        showBorders: true,
        showColumnLines: false,
        sorting: {
            mode: "none"
        },
        paging: {
            pageSize: 10
        },
        onCellPrepared: function(options) {
            var fieldData = options.value,
                fieldHtml = "";
            if(fieldData && fieldData.value) {
                if(fieldData.diff) {
                    options.cellElement.addClass((fieldData.diff > 0) ? "inc" : "dec");
                    fieldHtml += "<div class='current-value'>" +
                        DevExpress.localization.formatNumber(fieldData.value, {type: "currency", currency: "USD", precision: 2 }) +
                        "</div> <div class='diff'>" +
                        Math.abs(fieldData.diff).toFixed(2) +
                        "  </div>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        columns: [
            {
                dataField: "date",
                dataType: "date",
                width: 110
            },
            "open",
            "close",
            {
                caption: "Dynamics",
                minWidth: 320,
                cellTemplate: "cellTemplate"
            },
            "high",
            "low"
        ]
    };
});