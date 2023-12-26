/* eslint-disable */

import { Meditation } from '../renderer/meditations';
import { getTable } from './helper';

export default async function getMeditations() {
  const data = await getTable('meditation', '*');

  console.log('data', data);
  return data as unknown as Meditation[];
}
