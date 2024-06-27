import "datatables.net-dt/css/dataTables.dataTables.css";
import ReactDataTables from "@/components/ReactDataTables";


const data =[
  {
    id: "1",
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$320,800",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421",
  },
  {
    id: "2",
    name: "Garrett Winters",
    position: "Accountant",
    salary: "$170,750",
    start_date: "2011/07/25",
    office: "Tokyo",
    extn: "8422",
  },
  {
    id: "3",
    name: "User 3",
    position: "Developer",
    salary: "$200,800",
    start_date: "2012/04/25",
    office: "New York",
    extn: "6521",
  },
  {
    id: "4",
    name: "User 4",
    position: "Engineer",
    salary: "$190,800",
    start_date: "2012/05/30",
    office: "San Francisco",
    extn: "4821",
  },
  {
    id: "5",
    name: "User 5",
    position: "Designer",
    salary: "$210,400",
    start_date: "2013/04/28",
    office: "Dallas",
    extn: "5921",
  },
  {
    id: "6",
    name: "User 6",
    position: "Analyst",
    salary: "$230,250",
    start_date: "2014/05/29",
    office: "Denver",
    extn: "2022",
  },
  {
    id: "7",
    name: "User 7",
    position: "Manager",
    salary: "$300,750",
    start_date: "2015/06/28",
    office: "Seattle",
    extn: "6123",
  },
  {
    id: "8",
    name: "User 8",
    position: "Architect",
    salary: "$320,500",
    start_date: "2016/07/27",
    office: "Chicago",
    extn: "8421",
  },
  {
    id: "9",
    name: "User 9",
    position: "Engineer",
    salary: "$200,300",
    start_date: "2017/08/25",
    office: "Los Angeles",
    extn: "9622",
  },
  {
    id: "10",
    name: "User 10",
    position: "Analyst",
    salary: "$220,450",
    start_date: "2018/09/26",
    office: "Sandiego",
    extn: "7022",
  },
  {
    id: "11",
    name: "User 11",
    position: "Developer",
    salary: "$290,750",
    start_date: "2019/10/27",
    office: "Boston",
    extn: "5423",
  },
  {
    id: "12",
    name: "User 12",
    position: "Manager",
    salary: "$310,550",
    start_date: "2020/11/25",
    office: "Phoenix",
    extn: "8822",
  },
  {
    id: "13",
    name: "User 13",
    position: "Architect",
    salary: "$300,450",
    start_date: "2021/12/27",
    office: "San Antonio",
    extn: "2122",
  },
  {
    id: "14",
    name: "User 14",
    position: "Designer",
    salary: "$220,300",
    start_date: "2022/01/28",
    office: "Austin",
    extn: "9022",
  },
  {
    id: "15",
    name: "User 15",
    position: "Engineer",
    salary: "$270,350",
    start_date: "2022/02/25",
    office: "Jacksonville",
    extn: "7722",
  },
];

const columns = [
  { data: "name", title: "Name" },
  { data: "position", title: "Position" },
];

const EmployeeTable = () => {
  return <ReactDataTables data={data} columns={columns} />;
};

export default EmployeeTable;
