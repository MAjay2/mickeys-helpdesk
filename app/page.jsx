import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2 className='text-black'>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, 
        libero nobis? Laudantium tenetur magnam id ea sapiente illo vel 
        laboriosam reiciendis quasi voluptatibus? 
        Cupiditate nulla ea, inventore accusantium dicta dolor?
        </p>
      <div className='flex justify-center my-8'>
        <Link href="/tickets" >
          <button className='btn-primary'>View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className='card'>
        <h3>New member of web dev team...</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Amet aperiam illum dolorum dolore illo repudiandae ducimus consectetur, 
          asperiores alias laborum quia voluptatibus voluptates
           laboriosam facilis aliquam sapiente modi optio hic.</p>
        
      </div>

      <div className='card'>
        <h3>New website live...</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Amet aperiam illum dolorum dolore illo repudiandae ducimus consectetur, 
          asperiores alias laborum quia voluptatibus voluptates
           laboriosam facilis aliquam sapiente modi optio hic.</p>
        
      </div>

    </main>
  )
}
