import Navbar from '../Components/Navbar'
import Image from 'next/image'
export default function Contact() {
  return (
  <>
  <Navbar />
  <h1>
    Contact Page
  </h1>

   <Image src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"  width={500} height={500} > 
   </Image>
  </>
  )
}
