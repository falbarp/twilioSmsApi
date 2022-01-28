# Foobar

A simple API to send SMS using Twilio

## Installation


```bash
npm init
```

## Usage
### SendSms ()
Send a SMS to an unique or multiples phone numbers
Values
- Body: Text to send. Less than 140 characters
- To: Destination numbers. Single number in a string, multiple values in a array
- From: Phone number that sends sms (optional)


### SendSms ()
Function

```javascript
sendSms('Your text here', '+3455555555', '+3400000000')
sendSms('Tour text here', ['+3455555555' ,'+3410000000', '+3410000001', +3410000002'])
```

### Url/SendSms/

In order to send sms from a url

```bash
https://url/SendSms/:body/:to/
```
Values
- Body: Text to send. Less than 140 characters
- To: Destination numbers. Single number in a string, multiple values in a array
- From: Phone number that sends sms (optional)

```bash
https://url/SendSms/:your text her /:+3455555555/
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)