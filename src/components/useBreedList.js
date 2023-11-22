import { useQuery } from "@tanstack/react-query";
import fetchBreadList from "./API/fetchBreedList";
export default function useBreedList(animal) {
  const results = useQuery(["breads", animal], fetchBreadList);

  return [results?.data?.breeds ?? [], results.status];
}
