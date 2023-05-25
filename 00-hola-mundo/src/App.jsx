import FollowCard from "./components/FollowCard"

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#e6deee]">
      <FollowCard name="midudev" username="@midudev" initialIsFollowing="false"></FollowCard>
      <FollowCard name="midudev" username="@midudev" initialIsFollowing="true"></FollowCard>
    </div>
  )
}

export default App
