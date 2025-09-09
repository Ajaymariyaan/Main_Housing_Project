// pages/index.js (or wherever you use SitesTable)
// import SitesTable from '@/components/SitesTable
import SitesTable from '@/component/SitesTable';
import TestRedux from '@/component/TestRedux';
// import TestRedux from '@/components/TestRedux';


export default function Home() {
  return (
    <div>
      <TestRedux />
      <SitesTable selectedItem="Sites" />
    </div>
  );
}