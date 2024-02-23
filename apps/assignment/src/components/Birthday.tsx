import { Birthday } from '../types/birthday'

interface BirthdayProps {
  birthday: Birthday
}

const Birthday = ({ birthday }: BirthdayProps) => {
  return (
    <div className='flex items-center justify-center mb-6'>
      <img
        src={birthday.profileImageURL}
        className='mr-4 w-[60px] rounded-full'
      />
      <p className='grow font-semibold text-xl leading-6'>
        {birthday.name}
        <br />
        <span className='font-normal text-base text-slate-500'>
          {birthday.age} years
        </span>
      </p>
    </div>
  )
}

export default Birthday
