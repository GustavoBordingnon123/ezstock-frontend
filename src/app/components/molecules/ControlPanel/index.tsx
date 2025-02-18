import DashboardButton from "../../atoms/Button/DashboardButton/Index";
import DashboardItem from "../../atoms/DashboardItem/Index";
import SearchInput from "../../atoms/SearchInput/Index";

export default function ControlPanel() {
  return (
    <div className="text-brownText p-10 bg-white rounded-2xl border flex flex-col gap-4 h-full">
      <p className="text-2xl font-medium">Painel de controle</p>
      <div className="mt-4">
        <p className="font-bold">Ultimas movimentações</p>
        <p className="text-sm">Ultimas movimentações</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col gap-8 w-full">
          <DashboardItem />
        </div>
      </div>
    </div>
  );
}
