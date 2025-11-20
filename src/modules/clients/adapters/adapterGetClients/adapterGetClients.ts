import { Client } from '@/modules/clients/domain/types';
import { getClients } from '@/modules/clients/services/getClients';

import { toClient } from '../transformers/toClient';

const adapterGetClients = async (): Promise<Client[]> => {
  const response = await getClients();
  return response.data.map(toClient);
};

export { adapterGetClients };
