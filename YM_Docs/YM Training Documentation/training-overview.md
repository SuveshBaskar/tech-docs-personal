Day1: About Yellow Messenger - Kishore

What do we do?

Connect Businesses to Customer via Chat medium

Increase Effeciency - Revenue
Decrease Support Cost
and one more I forgot

How chat bots are going to be the new gen era

Platform History

---

Day2: Flows Suriya

What happens when there is a user messages text?

XMPP => Prediction => Our Logic

XMPP - ejaberd js
Other resource - Strophe js

Logic => Once we got the message and after prediction 

Journeys
Init Function => Steps {Prompts and Validators} => Action

When ever we need to get an input from the user to finish the required intention we need to use the steps. Validators are just to validate the user input and take necessary action based on that particular input

like changing a particular flag or something (should give an example here)

its a preprocessor for the journey - can be used to check the authencation flag
or can be used to extract the required information from the user message before even going into steps (example)


Finally actions, here is where we fulfill the user intention based on the user's inputs

Step Execution
Steps are stored in form of an object in the same order as in the UI. The keys will the step names and the value will be undefined. When the control comes into the steps it looks for the first undefined key value and execute the prompt of that step. Once the user enters the input the validator function will validate the user input and store the input as value of that step. The control then jump to the next undefined value in the step object

Step Navigation 

We know the steps will be executed if the value is undefined, so when we need to go back to a step we can just set it's value as undefined.

If you want to skip a step you can assign a value to that step in the Steps object. You can find the steps object inside app.context

How different channels are integrated?
We have a generic platform which can respond to the messages
So we can different source of messages we have multiple channels like IVR, chat, whatsapp, facebook, line, viber, slack and much more if any

Intro to XMPP

How the bots are connected to XMPP - Websockets

Day3 - Priyanku and Kishore

Kishore -About our ML model - One Hot Encoding and Word2Vec
Priyanku - About the main function
Contextual questions in steps
Promises

One Hot Encoding

main function

this is the function which is executed for each message/event

app.start() is a function which starts the bot. The main function should return app.start() otherwise the bot do not start.

Contextual responses in steps.

Suppose there is a step, that asks the user for a input lets say some id. The user might not know what the id is and he may ask which id do you need?. In such cases, we need tell the answer and ask for the ID again. This is the role of Contextual responses. We need to configure a what response and if the user asks for what then that reply will be given. This makes sure the context is not lost in the middle.