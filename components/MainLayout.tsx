import Header from "./header/Header";
import Head from "next/head";
import Search from "./search/Search";

interface IMainLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  metaTitle: string
}

const MainLayout = ({
  children,
  title,
  description,
  metaTitle,
}: IMainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="top-panel">
            <h1>{title}</h1>
            <Search />
          </div>
          {description && <p className="page-description">{description}</p>}
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
