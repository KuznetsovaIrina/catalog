import MainLayout from "./../../components/MainLayout";
import PageLayout from "./../../components/PageLayout";
import Cart from "../../components/cart/Cart";
import Categories from "../../components/categories/Categories";
import axios from "axios";
import { IGroup } from "../../interfaces";

interface IServicePageProps {
  groups: Array<IGroup>;
}

const ServicePage = ({ groups }: IServicePageProps) => {
  return (
    <MainLayout metaTitle="Страница Услуги" title="Услуги">
      <PageLayout Sidebar={<Categories categories={groups} />}>
        <p>Service Info</p>
      </PageLayout>
      <Cart />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const groupsResponce = await axios.get(
    `https://himinfo.net/cl/test/api/?PriceTree=${encodeURIComponent('{"id":"0"}')}`
  );
  const groups: Array<IGroup> = await groupsResponce.data.price;

  return {
    props: {
      groups,
    },
  };
}

export default ServicePage;
