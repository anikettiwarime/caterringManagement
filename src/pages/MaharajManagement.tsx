import Breadcrumb from '@/components/Breadcrumbs'
import AllMaharajWithSearch from '@/components/Maharaj/AllMaharajWithSearch'
import CreateMaharaj from '@/components/Maharaj/CreateMaharaj'
import React from 'react'

const MaharajManagement = () => {
  return (
    <div>
      <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-8">
          <CreateMaharaj />
        </div>
        <div className="col-span-8">
          <AllMaharajWithSearch />
        </div>
      </div>
    </div>
    </div>
  )
}

export default MaharajManagement
