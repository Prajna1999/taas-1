import {  Text } from '@vercel/examples-ui'
import { Chat8 } from '../../components/Chat8'


function critic() {
    return (
        <>
         
        {/* <Navbar /> */}
        
        <div className="flex flex-row justify-center  ml-48 h-screen gap-24  bg-gray-100">
          
        {/* <Sidebar /> */}
            
          <section className="flex w-3/4  mt-12  flex-col gap-3">
            <Text variant="h2">AI Chat Bot:</Text>
            <div>
              <Chat8 />
            </div>
          </section>
        </div>
        </>
      )
}

export default critic