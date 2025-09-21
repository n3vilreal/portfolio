import { InstagramEmbed } from 'react-social-media-embed';

export default function InterestsCard(props) {
  return (
    <div className='text-white p-7 bg-neutral-600/50 rounded-3xl'>
        <span className='font-semibold text-2xl'>
            {props.text}
        </span>
        <div className='mt-2'>
            <InstagramEmbed 
            className=''
            url={props.link}/>
        </div>
    </div>
  )
}