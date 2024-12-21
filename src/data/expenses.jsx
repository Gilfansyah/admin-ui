import { Icon } from "../components/elements/Icon";

export const ExpensesBreakdowns = [
  {
    id: 1,
    category: "Housing",
    amount: 250,
    percentage: 15,
    link: "/",
    icon: <Icon.Housing />,
    label: "Housing",
    arrow: <Icon.ArrowUp />,
  },
  {
    id: 2,
    category: "Food",
    amount: 350,
    percentage: 8,
    icon: <Icon.Food />,
    arrow: <Icon.ArrowDown />,
  },
  {
    id: 3,
    category: "Transportation",
    amount: 50,
    percentage: 12,
    icon: <Icon.Transportation />,
    arrow: <Icon.ArrowDown />,
  },
  {
    id: 4,
    category: "Entertainment",
    amount: 80,
    percentage: 15,
    icon: <Icon.Entertainment />,
    arrow: <Icon.ArrowDown />,
  },
  {
    id: 5,
    category: "Shopping",
    amount: 420,
    percentage: 25,
    icon: <Icon.Shopping />,
    arrow: <Icon.ArrowUp />,
  },
  {
    id: 6,
    category: "Others",
    amount: 650,
    percentage: 23,
    icon: <Icon.Others />,
    arrow: <Icon.ArrowUp />,
  },
];

export const expensesStatistics = {
  dataKey: "date",
  series: [
    { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
    { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
  ],
  data: [
    {
      id: 1,
      date: "17 Sun",
      amountThisWeek: 25000,
      amountLastWeek: 50000,
    },
    {
      id: 2,
      date: "18 Mon",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 3,
      date: "19 Tue",
      amountThisWeek: 10000,
      amountLastWeek: 50000,
    },
    {
      id: 4,
      date: "20 Wed",
      amountThisWeek: 50000,
      amountLastWeek: 50000,
    },
    {
      id: 5,
      date: "21 Thu",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 6,
      date: "22 Fri",
      amountThisWeek: 25000,
      amountLastWeek: 10000,
    },
    {
      id: 7,
      date: "23 Sat",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
  ]
};

export default ExpensesBreakdowns;