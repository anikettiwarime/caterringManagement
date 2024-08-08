import Breadcrumb from '@/components/Breadcrumbs';
import {AllVendorsWithSearch, CreateVendor} from '@/components/Vendor';

const VendorManagement = () => {
  return (
    <div>
      <div className="mx-auto max-w-270">
        <Breadcrumb />
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-8">
            <CreateVendor />
          </div>
          <div className="col-span-8">
            <AllVendorsWithSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
