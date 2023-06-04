import { useQuery } from "@apollo/client"
import { PEOPLE_LIST } from "../queries"

export default function peopleList() {
  const ops = useQuery(PEOPLE_LIST);
  return (ops);
}