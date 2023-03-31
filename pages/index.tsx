import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import {Sidebar, Navbar} from '../components'
function Home() {
  return (
    <>
     
    <Navbar />
    <div className="flex flex-row justify-center items-center w-screen h-screen gap-24  bg-gray-100">
      
      {/* <section className="flex flex-col gap-6 bg-red-500">
        <Text variant="h1">OpenAI GPT-3 text model usage example</Text>
        <Text className="text-zinc-600">
          In this example, a simple chat bot is implemented using Next.js, API
          Routes, and OpenAI API.
        </Text>
      </section> */}
        <Sidebar />
        
      <section className="flex w-8/12  flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="container h-9/12 mx-auto">
          <Chat />
        </div>
      </section>
    </div>
    </>
  )
}

// Home.Layout = Layout

export default Home
