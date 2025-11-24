import { Client } from '@/modules/clients/domain/types';
import { getClientById } from '@/modules/clients/services/getClientById';

import { toClient } from '../transformers/toClient';
import { AdapterGetClientByIdParams } from './types';

const adapterGetClientById = async (
  params: AdapterGetClientByIdParams,
): Promise<Client> => {
  const response = await getClientById(params);
  return toClient(response.data);
};

export { adapterGetClientById };
