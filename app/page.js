'use client'
import { useState } from 'react';
import PlasticBox from './components/PlasticBox';
import plasticData from './data/plasticData';

export default function Home() {
  const [data, setData] = useState(plasticData)

  //Updates data based on its id and increment value.id is 1 for Type 1, id is 2 for type 2, etc..
  const updateData = (id,increment) => {
    const updated = data.map(item => {
      if (item.id == id){
        item.count+= increment
      }
      return item
    })
    setData(updated)   
  }


  return (
    <div className="p-4 min-h-screen bg-blue-50">
      <h1 className="text-lg text-black sm:text-3xl font-semibold mb-4">Plastic Segregation Status</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8  sm:px-20">
        {data.map((plastic, index) => (
          <PlasticBox
          
            key={index}
            image={plastic.image}
            type={plastic.type}
            count={plastic.count}
          />
        ))}
      </div>
    </div>
  )
}
