import Navbar from '../Components/Navbar'

import Image from 'next/image'
export default function Blog() {
  return (
  <>
  <Navbar />
  <h1>
    Blog Page
  </h1>

   <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"  width={500} height={500} > 
   </Image>
  
  </>
  )
}
