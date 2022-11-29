# Kaholo AccelQ Plugin
This plugin integrates AccelQ with Kaholo, providing the ability to run AccelQ's Tests.

This plugin is based on [this](https://academy.accelq.com/automate/guide#360061963212) AccelQ documentation.


## Plugin Installation
For download, installation, upgrade, downgrade and troubleshooting of plugins in general, see [INSTALL.md](./INSTALL.md).

##  Plugin Account
1. AccelQ Release URL (String) **Required** - AccelQ's AWS S3 release URL.
2. URL (String) **Required** - Your ACCELQ Application URL in the exact following format: `https://<hostname>:<port_num>`
3. userID (String) **Required** - Your ACCELQ User ID.
4. apiKey (Vault) **Required** - API key available in Profile section of ACCELQ.
5. Tenant Code (String) **Required** - Tenant Code displayed in the Profile section of ACCELQ

## Method: Run AccelQ Tests
A common use case for this plugin is to run the AccelQ tests.

### Parameters
Required parameters have an asterisk (*) next to their names.
* Job ID * - This ID should come from the CI job you saved in ACCELQ application
* Parameters - Enter any optional parameters.


 If you are interested in adding more AccelQ functionality, please let us know! support@kaholo.io.
