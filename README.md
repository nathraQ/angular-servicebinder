# angular-servicebinder

This is a service to bind the setters and getters of any service to a controller or $scope.
This can be helpful if you share data between different controllers by using a service. If you add getter and setter
methods for properties within the service you can use the servicebinder to automaticly define set and get on a
controller or $scope.

## Use
Add the Sudomake module to your dependencies.
Inject the SudomakeServicebinderService into your controller and call ```bindService(this, service, propertyArray)```,
where *this* is the current controller (can also be *$scope*), *service* is the over-looking service and *propertyArray*
is a string array with the name of the properties you wand to bind.
For those property strings applies the following rule. For **stringName** must exist a **setStringName(value)** and a
**getStringName()** method within the *service*.
