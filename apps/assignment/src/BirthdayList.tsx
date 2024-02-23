// BirthdayList.tsx
import Birthday from './components/Birthday.tsx'
import BirthdaySkeleton from './components/BirthdaySkeleton.tsx'
import { useAllBirthdays } from './hooks/birthday.ts'
import { Modal } from '@repo/assignment-ui/modal'

const BirthdayList = () => {
  const { data: birthdays, isLoading } = useAllBirthdays()

  const skeletons = [1, 2, 3, 4, 5, 6, 7]

  return (
    <Modal title='24 birthdays today'>
      {isLoading
        ? skeletons.map((skeleton) => <BirthdaySkeleton key={skeleton} />)
        : birthdays?.map((birthday) => (
            <Birthday key={birthday.id} birthday={birthday} />
          ))}
      <button className='w-full bg-gradient-to-r from-[#e56ed2] to-[#ff6aa3] shadow-[0px_9px_15px_-6px_#FE6AA4] mt-10 p-4 text-white font-semibold text-lg rounded-md hover:bg-gradient-to-l hover:from-[#e56ed2] hover:to-[#ff6aa3] transition-all duration-200 ease-in'>
        View all
      </button>
    </Modal>
  )
}

export default BirthdayList
