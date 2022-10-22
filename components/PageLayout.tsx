const PageLayout = ({ children, Sidebar }: any) => {
  return (
    <div className="page-wrap">
      {Sidebar && <aside>{Sidebar}</aside>}
      <div className="content">{children}</div>
    </div>
  );
};

export default PageLayout;
