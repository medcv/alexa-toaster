// Alexa SDK for JavaScript v1.0.00
// Copyright (c) 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved. Use is subject to license terms.

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, tell Greeter to say hello"
 *  Alexa: "Hello World!"
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.c781f118-0826-4ab8-a19c-5e9a1c87299d";
var request = require('request');


var baseUrl = 'https://api.particle.io/v1/devices/{CORE}?access_token={ACCESS_TOKEN}';
var blinkUrl = 'https://api.particle.io/v1/devices/{CORE}/toaster?access_token={ACCESS_TOKEN}';

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * MyToaster is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var MyToaster = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
MyToaster.prototype = Object.create(AlexaSkill.prototype);
MyToaster.prototype.constructor = MyToaster;

MyToaster.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("MyToaster onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

MyToaster.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("MyToaster onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "The Toaster is Ready, How can I serve you ?";
    response.ask(speechOutput);
};

MyToaster.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("MyToaster onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

MyToaster.prototype.intentHandlers = {

    MyToaster: function (intent,session, response)
    {
        HandleSecurityRequest(intent,session,response);
    }
};

function  HandleSecurityRequest(intent, session, response)
{
    //var argCommandsSlots = intent.slots.Commands;
    var argCommandsSlots = "on";

    var argTimeSlots = intent.slots.Time;
    var args = argCommandsSlots + "," + argTimeSlots.value;
    request.post({
        url:     blinkUrl,
        form:    { args: args }
    }, function(error, res, body){

        if (argCommandsSlots == "on")
            response.tellWithCard('Enjoy your breakfast!');
        else
            response.tellWithCard('The Toaster if OFF');

    });



}




// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the MyToaster skill.
    var myToaster = new MyToaster();
    myToaster.execute(event, context);
};


