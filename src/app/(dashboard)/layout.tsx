import DashBoardHeader from "../(dashboard)/components/DashboardHeader";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <DashBoardHeader />
      <div className="w-[480px] lg:w-[1024px] md:w-[740px] mx-auto space-y-8 mt-14 relative">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
