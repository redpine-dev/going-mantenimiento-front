import { Client } from '@/modules/clients/domain/types';
import { deleteClient } from '@/modules/clients/services/deleteClient';

import { toClient } from '../transformers/toClient';
import { AdapterDeleteClientParams } from './types';

const adapterDeleteClient = async (
  params: AdapterDeleteClientParams,
): Promise<Client> => {
  const response = await deleteClient(params);
  return toClient(response.data);
};

export { adapterDeleteClient };
