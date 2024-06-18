import amqp, { Connection, Channel } from "amqplib/callback_api";

function connectRabbitMQ(retries = 5, delay = 5000): Promise<Channel> {
  return new Promise((resolve, reject) => {
    const rabbitmqUrl = "amqp://rabbitmq:rabbitmq@rabbitmq:5672";

    const tryConnect = (retriesLeft: number) => {
      amqp.connect(rabbitmqUrl, (err, connection: Connection) => {
        if (err) {
          if (retriesLeft <= 0) {
            return reject(err);
          }
          console.log(
            `Retrying connection to RabbitMQ in ${delay / 1000} seconds...`
          );
          setTimeout(() => tryConnect(retriesLeft - 1), delay);
        } else {
          connection.createChannel((err, channel: Channel) => {
            if (err) {
              return reject(err);
            }
            resolve(channel);
          });
        }
      });
    };

    tryConnect(retries);
  });
}

export default connectRabbitMQ;
