# alexa-toaster 
This is a simple use case for integrating the Amazon Echo (Alexa) with Spark Core WiFi device.
# Flash the Spark Core
Go to https://build.particle.io and login with your account.

- Flash your Spark Core with "sparkToaster.ino" file
- Update line 21 and 22 in index.js file and update the file with your Spark Core name and access token

# Install and upload the Lambda
Clone this project, go into the cloned folder and run
 - npm install
 - Create a new Alexa Skill
 - Update line 17 in index.js with your skill APP_ID
 
Zip the files and upload it to the Amazon Lambda Function service.

https://aws.amazon.com/lambda/

# Creat a new Alexa Skill
Follow this instruction to create a new Skill with Alexa
https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit

# Creat a Lambda Function:
 
The easiest way to build the cloud-based service for an Alexa skill is by using AWS Lambda, an Amazon Web Services offering that runs your code only when it’s needed and scales automatically, so there is no need to provision or continuously run servers. You simply upload the code for your Alexa skill and Lambda does the rest, executing it in response to Alexa voice interactions and automatically managing the compute resources for you. Please look at this link for [more details].


[more details]: https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit?sc_channel=Portal&sc_campaign=Alexa&sc_detail=TAAS
