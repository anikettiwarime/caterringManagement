import Breadcrumb from '@/components/Breadcrumbs';
import {
  CreateCateror,
  AllCaterorsWithSearch,
} from '@/components/users/Caterors';

const Cateror = () => {
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-8">
          <CreateCateror />
        </div>
        <div className="col-span-8">
          <AllCaterorsWithSearch />
        </div>
      </div>
    </div>
  );
};

export default Cateror;
