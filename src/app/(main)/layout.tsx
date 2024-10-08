import DashBoardHeader from "@/components/DashboardHeader";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="">
      <DashBoardHeader />
      {children}
    </div>
  );
};

export default MainLayout;
