import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Birthday } from '../types/birthday'

export const useAllBirthdays = () => {
  return useQuery({
    queryKey: ['birthdays'],
    queryFn: async () => {
      const { data } = await axios.get<Birthday[]>(
        'http://localhost:8000/birthdays'
      )
      return data
    },
  })
}
