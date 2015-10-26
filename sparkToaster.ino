int led=D7;

void setup() {

  pinMode(led, OUTPUT); // set the D7 LED as output
  Spark.function("toaster",toasterFunc);    // a POST request for "toaster" will reference toasterFunc, defined below

}


// call the below function when the POST request matches it
int toasterFunc(String args) {
int argsIndex = args.indexOf(',');
String command = args.substring(0, argsIndex);
String duration = args.substring(argsIndex+1, args.length());

    if (command == "on") {
        digitalWrite(led, HIGH);    // turn it on
        delay(duration.toInt()*1000);
         digitalWrite(led, LOW);    // turn it off
        return 1;   // return 1 to show that this worked.
    }
    else if(command == "off"){
         digitalWrite(led, LOW);    // turn it on
        return 1;   // return 1 to show that this worked.
    }
    else {
        return -1; // return -1 to show that it did not work.
    }
}


void loop() {
}

