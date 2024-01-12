param appName string = 'AlarChat'
param location string = 'northeurope'
param gitRepoUrl string = 'https://git.aasa.cloud/aasa/aasachat'
param gitBranch string = 'main'
param sku string = 'F1'

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: '${appName}-plan'
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: sku
  }
}

resource webApp 'Microsoft.Web/sites@2020-06-01' = {
  name: appName
  location: location
  dependsOn: [
    appServicePlan
  ]
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|14-lts'
      appSettings: [
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '14.17.6'
        }
      ]
    }
    repositorySiteName: appName
    repositorySiteType: 'ExternalGit'
    publishingProfile: {
      gitUrl: gitRepoUrl
      branch: gitBranch
    }
  }
}
