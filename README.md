# sipgate-io-record-plaground

## Usage

```bash
ngrok http 3000 # add this URL as sipgate.io incoming and outgoing endpoint
yarn && yarn start
```

## curl

```bash
# Get XML
curl -XPOST localhost:3000

# Upload file
cp test.wav /tmp/
curl -F 'data=@/tmp/test.wav' localhost:3000/upload
```
