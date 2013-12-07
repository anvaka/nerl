module.exports = AlertDemoCtrl;

function AlertDemoCtrl($scope) {
  $scope.alerts = [
    { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' }, 
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}

// We know this controller is used by alert tag:
require('ag.alert');
