import Breadcrumb from '@/components/Breadcrumbs';
import {AllProcessessWithSearch, CreateProcess} from '@/components/Process';
import React from 'react';

const ProcessManagement = () => {
  return (
    <div>
      <div className="mx-auto max-w-270">
        <Breadcrumb />
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-8">
            <CreateProcess />
          </div>
          <div className="col-span-8">
            <AllProcessessWithSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessManagement;
