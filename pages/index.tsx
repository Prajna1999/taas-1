import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import {Sidebar, Navbar} from '../components'
function Home() {
  return (
    <>
     
    {/* <Navbar /> */}
    
    <div className="flex flex-row justify-center  ml-48 h-screen gap-24  bg-gray-100">
      
    {/* <Sidebar /> */}
        
      <section className="flex w-3/4  mt-12  flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div>
          <Chat />
        </div>
      </section>
    </div>
    </>
  )
}

// Home.Layout = Layout

export default Home
