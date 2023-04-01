
import {  Text } from '@vercel/examples-ui'
import { Chat3 } from '../../components/Chat3'


function warren() {
    return (
        <>
         
        {/* <Navbar /> */}
        
        <div className="flex flex-row justify-center  ml-48 h-screen gap-24  bg-gray-100">
          
        {/* <Sidebar /> */}
            
          <section className="flex w-3/4  mt-12  flex-col gap-3">
            <Text variant="h2">AI Chat Bot:</Text>
            <div>
              <Chat3 />
            </div>
          </section>
        </div>
        </>
      )
}

export default warren;