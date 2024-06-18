import { rabbitmq } from "../config";
import { findByLogin as findUser } from "./user.service";
import { findByLogin as findRepositories } from "./repository.service";

interface User {
  id: number;
  name: string;
}

export async function startRabbitmqService() {
  const channel = await rabbitmq();

  const queue = "user_queue";
  channel.assertQueue(queue, { durable: true });

  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const payload = JSON.parse(msg.content.toString());

      try {
        const user = await findUser(payload.data.login);
        const repositories = await findRepositories(payload.data.login);

        channel.sendToQueue(
          msg.properties.replyTo,
          Buffer.from(
            JSON.stringify({
              ...user,
              repositories,
            })
          ),
          {
            correlationId: msg.properties.correlationId,
          }
        );
        channel.ack(msg);
      } catch (error) {
        const response = { error };
        channel.sendToQueue(
          msg.properties.replyTo,
          Buffer.from(JSON.stringify(response)),
          {
            correlationId: msg.properties.correlationId,
          }
        );
        channel.ack(msg);
      }
    }
  });
}

export default startRabbitmqService;
