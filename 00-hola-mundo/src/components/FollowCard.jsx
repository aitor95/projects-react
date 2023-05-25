import React, { useState } from 'react'

const FollowCard = ({ name, username, initialIsFollowing }) => {

    const [isFollowing, setFollowing] = useState(initialIsFollowing);
    const handleFollow = () => setFollowing(!isFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    return (
        <article className="flex flex-row items-center justify-between w-[350px] h-24 bg-slate-900 rounded-lg px-4 shadow-xl mt-5">
            <header className="flex items-center h-full">
                <img src="https://unavatar.io/midudev" alt="midudev" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col grow ml-5">
                    <strong className="text-white uppercase">{name}</strong>
                    <span className="text-gray-500">{username}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleFollow} className={`bg-white rounded-full px-3 py-1 font-semibold group transition ease-in-out ${isFollowing ? `hover:bg-[#700f0f97] hover:text-red-500` : ``} `}>
                    <span className={isFollowing ? `group-hover:hidden` : 'inline'}>{text}</span>
                    <span className={isFollowing ? `hidden group-hover:inline` : `hidden`}>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default FollowCard