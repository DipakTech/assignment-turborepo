import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BirthdaySkeleton = () => {
  return (
    <SkeletonTheme baseColor='#FD6AA7' highlightColor='#FD6AA7'>
      <div className='flex items-center justify-center mb-6'>
        <div className='mr-4 bg-gray-500 w-[60px] h-[60px] rounded-full'></div>
        <div className='grow font-semibold text-xl leading-6  '>
          <Skeleton height={20} highlightColor='#FD6AA7' width={100} />
          <span className='font-normal text-base '>
            <Skeleton height={15} highlightColor='#FD6AA7' width={50} />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default BirthdaySkeleton
