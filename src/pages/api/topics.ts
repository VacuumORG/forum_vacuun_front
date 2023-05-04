import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from './db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: topics, error } = await supabase.from('topics').select('*')

  if (error) {
    return res.json(error)
  }

  return res.json(topics)
}
