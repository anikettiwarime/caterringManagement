import React from 'react';
import PersonalInfoForm from './PersonalInfo';
import Breadcrumb from '../Breadcrumbs';

const Cateror: React.FC = () => {
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5">
          <PersonalInfoForm />
        </div>
      </div>
    </div>
  );
};

export default Cateror;
