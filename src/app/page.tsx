import AmChartPieChart from "@/components/Charts/AmChartComponent";
import Table from "@/components/Table";
import TableComponent from "@/components/Table";
import EmployeeTable from "@/components/EmployTable";




export default function Home() {
  return (
    <div>
      <h1>Olá mundo!</h1>
      <AmChartPieChart/>

     <EmployeeTable/>
    </div>
  );
}
