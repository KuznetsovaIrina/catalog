import MainLayout from "./../components/MainLayout";
import PageLayout from "./../components/PageLayout";
import Cart from "../components/cart/Cart";
import Categories from "../components/categories/Categories";
import Services from "./../components/services/Services";
import axios from "axios";
import { IGroup, IService } from "../interfaces";

interface ICatalogPageProps {
  services: Array<IService>;
  groups: Array<IGroup>;
}

const CatalogPage = ({ services, groups }: ICatalogPageProps) => {
  return (
    <MainLayout
      metaTitle="Наши Услуги"
      title="Услуги"
      description="Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов."
    >
      <PageLayout Sidebar={<Categories categories={groups} />}>
        <Services services={services} />
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

export default CatalogPage;
