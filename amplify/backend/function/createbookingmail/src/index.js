const aws = require('aws-sdk');
const ses = new aws.SES();
// const { format } = require('date-fns'); format(bookingDate, 'MMMM dd, yyyy')

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const bookingDate = streamedItem.dynamodb.NewImage.date.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: 'Mass Reservation' },
            Body: {
              Text: { Data: `You have new Mass reservation` },
            },
          },
        })
        .promise();
    }
  }
  return { status: 'done' };
};
