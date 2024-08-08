import React, {useState} from 'react';
import {VerticalTab} from '@/components/VerticalTab';
import {clientConditonalRender} from '@/components/Client/CreateClientRouting';

const Client: React.FC = () => {
  const [jsxElement, setJsxElement] = useState<JSX.Element>();

  return (
    <div className="mx-auto max-w-270">
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <VerticalTab
            tabData={clientConditonalRender}
            setJsxElement={setJsxElement}
          />
        </div>
        <div className="col-span-6">{jsxElement}</div>
      </div>
    </div>
  );
};

export default Client;
