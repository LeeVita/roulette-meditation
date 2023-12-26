/* eslint-disable import/prefer-default-export */
import { createClient } from '@supabase/supabase-js';
import env from '../../env';

const url = env.DB_URL as string;
const anon = env.ANON as string;

const supabase = createClient(url, anon);

async function getTable(tableName: string, select: string = '*') {
  const { data, error } = await supabase.from(tableName).select(select);

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw new Error('Houve um erro ao buscar dados de meditação!', {
      cause: error.message,
    });
  }

  return data;
}

export { getTable };
