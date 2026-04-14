import Image from 'next/image'
import text from '../../public/assets/text.png'
import call from '../../public/assets/call.png'
import video from '../../public/assets/video.png'

export default function TimelineCard({ item }) {
    const { method,name, date } = item

    return (
        <div className="w-4xl   flex items-center gap-4 p-4 bg-base-200 shadow-base-200  rounded-lg">

            {/* Icon */}
            <div>
                {method === "text" && (
                    <Image src={text} alt="text" width={30} height={30} />
                )}

                {method === "call" && (
                    <Image src={call} alt="call" width={30} height={30} />
                )}

                {method === "video" && (
                    <Image src={video} alt="video" width={30} height={30} />
                )}
            </div>

            {/* Content */}
            <div>
                <h2 className="font-semibold capitalize">
                   {method === "text" && (
                    <p> <span className='font-semibold'>Text</span> with {name}</p>
                )}

                {method === "call" && (
                   <p> <span className='font-semibold'>Call</span> with {name}</p>
                )}

                {method === "video" && (
                    <p> <span className='font-semibold'>Video</span> with {name}</p>
                )}
                </h2>
                <p className="text-xs opacity-60">
                    {date || "No date"}
                </p>
            </div>

        </div>
    )
}