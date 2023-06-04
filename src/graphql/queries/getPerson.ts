import { useQuery } from "@apollo/client"
import { GET_PERSON } from "../queries"

export default function getPerson(id: number) {
  const ops = useQuery(GET_PERSON, {
    variables: { id },
  })
  return (ops);
}