/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.7a6e4344-f127-42e7-9a1e-9cb4ad960399';

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


let SKILL_NAME = "Appalachian Trail Facts";
let GET_FACT_MESSAGE = "Here's your fact: ";
let HELP_MESSAGE = "You can say tell me an Appalachian trail fact, or, you can say exit... What can I help you with?";
let HELP_REPROMPT = "What can I help you with?";
let STOP_MESSAGE = "Goodbye!";

const data = [
  'The Appalachian Trail, better known as the A T, stretches about 2,175 miles along the eastern US',
  'The trail cuts through fourteen states along the way, including New Jersey, New York, and Connecticut.',
  'The A T was first proposed in nineteen-thirty-one by Benton MacKaye, a former forester and newspaper editor. He hoped the trail would be a way for people to escape city life and reconnect with wilderness.',
  'The A T was not completed as a continuous footpath until nineteen-thirtyseven.',
  'The A T was largely completed with the work of volunteers who went on to make local trail clubs that still maintain parts of the trail today.',
  'The A T\'s conspicuous white blaze is painted on trees and rocks to guide hikers along the route',
  'A hiker who\'s goal is to hike the whole trail in one go is called a thru hiker.',
  'Only about two thousand hikers attempt to hike the trail in its entirety every year, but millions walk small portions every year.',
  'On average, about five hundred people complete the entire trail every year.',
  'The Appalachian Trail runs from Springer Mountain in Georgia to Mount Katahdin in Maine.',
  'On October 26, twenty seventeen, Dale "Grey Beard" Sanders became the oldest person to hike the entire Appalachian Trail at age 82',
  'The Appalachian Trail Conservancy is the non-profit organization that oversees the maintenance and conservation of the Appalachian trail.',
  'The Appalachian Trail, the Continental Divide Trail, and the Pacific Crest Trail form what is known as the Triple Crown of Hiking in the United States.',
  'The highest point on the Appalachian trail is Clingmans Dome, at six-thousand forty-three feet above sea level.',
  'The trail covers some diverse topography, crossing over high alpine zones and near sea-level river crossings.',
  'Hundreds of shelters, sometimes called lean-twos, are found along the trail offering a roof overhead and a wooden floor for primitive hiker lodging.',
  'The longest stretch of trail through one single state is the state of Virginia at 550 miles.',
  'The shortest stretch of the trail through a single state is 4 miles in West Virginia as the trail passes through Harper\'s Ferry.',
  'The black bear is one of the largest animals that live along the trail',
  'The lowest elevation on the appalachian trail comes when it crosses the Hudson River in New York.'
];

/*const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda(); */
