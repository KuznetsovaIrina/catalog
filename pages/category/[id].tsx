import axios from "axios";
import { useRouter } from "next/router";
import MainLayout from "./../../components/MainLayout";
import PageLayout from "./../../components/PageLayout";
import Cart from "../../components/cart/Cart";
import Categories from "../../components/categories/Categories";
import Services from "./../../components/services/Services";
import { IGroup, IService } from "../../interfaces";
import { removeNumber } from './../../utils/index';

interface ICategoryPageProps {
  services: Array<IService>;
  groups: Array<IGroup>;
}

const CategoryPage = ({ services, groups }: ICategoryPageProps) => {
  const router = useRouter();
  const currentGroup = groups.filter((g) => g.folder_id === router.query.id)[0];
  const currentGroupServices = !currentGroup.parent
    ? services.filter((s) => decodeURIComponent(s.top_parent) === decodeURIComponent(currentGroup.name))
    : services.filter((s) => s.folder_id === router.query.id);

  return (
    <MainLayout
      metaTitle={`Услуги | ${removeNumber(decodeURIComponent(currentGroup.name))}`}
      title="Услуги"
      description="Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов."
    >
      <PageLayout Sidebar={<Categories categories={groups} />}>
        <Services services={currentGroupServices} />
      </PageLayout>

      <Cart />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const servicesResponce = await axios.get(
    `https://himinfo.net/cl/test/api/?PriceList`
  );
  const services: Array<IService> = await servicesResponce.data.price_list;

  const groupsResponce = await axios.get(
    `https://himinfo.net/cl/test/api/?PriceTree=${encodeURIComponent('{"id":"0"}')}`
  );
  const groups: Array<IGroup> = await groupsResponce.data.price;

  return {
    props: {
      services,
      groups,
    },
  };
}

export default CategoryPage;
