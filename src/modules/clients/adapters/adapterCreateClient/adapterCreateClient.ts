import { Client } from '@/modules/clients/domain/types';
import { createClient } from '@/modules/clients/services/createClient';

import { toClient } from '../transformers/toClient';
import { AdapterCreateClientParams } from './types';

const adapterCreateClient = async (
  params: AdapterCreateClientParams,
): Promise<Client> => {
  const response = await createClient(params);
  return toClient(response.data);
};

export { adapterCreateClient };
