import { Client } from '@/modules/clients/domain/types';
import { updateClient } from '@/modules/clients/services/updateClient';

import { toClient } from '../transformers/toClient';
import { AdapterUpdateClientParams } from './types';

const adapterUpdateClient = async (
  params: AdapterUpdateClientParams,
): Promise<Client> => {
  const response = await updateClient(params);
  return toClient(response.data);
};

export { adapterUpdateClient };
