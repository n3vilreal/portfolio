import InterestsCard from '../Cards/InterestsCard';

export default function Interests() {

    const interests = [
        {
            name : "Visual Art",
            link : "https://www.instagram.com/reel/DKz6E8SR1jb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            name : "Video Editing",
            link : ""
        },
        {
            name : "Coding",
            link : ""
        },
    ]
  return (
    <div className='w-screen'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
        {interests.map((i, index) => (
            <InterestsCard
                key={index}
                text={i.name}
                link={i.link}
            />
        ))}
    </div>
    </div>
  )
}
