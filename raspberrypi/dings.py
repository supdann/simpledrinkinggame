# SMall game for the Summer Party at The Drivery
import RPi.GPIO as GPIO
import time
import requests

API_HIT_URL = "http://172.20.10.2:5000/hit"

GPIO.setmode(GPIO.BOARD)
PIN_ECHO = 13

GPIO.setup(PIN_ECHO, GPIO.IN)


counter = 0
while True:

    while GPIO.input(PIN_ECHO)==0:
        pass

    counter = counter + 1
    # Do the API Call here
    try:
        requests.get(API_HIT_URL)
    except:
        print("Something happened but np")

    print("Got it: ",counter)

    time.sleep(0.7)
