export * from './commands';
import { EmdiClient } from './emdi-client';

export const connect = async (deviceId: number, accessToken: number): Promise<EmdiClient> => {
    const client = new EmdiClient();
    await client.connect(deviceId, accessToken);
    return client;
};
