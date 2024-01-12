param location string = resourceGroup().location
param webAppName string = 'alarchat'
param nodeVersion string = '14-lts' //update to run the Node.js version

// App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: '${webAppName}-serviceplan'
  location: location
  sku: {
    name: 'S1'
    capacity: 1
  }