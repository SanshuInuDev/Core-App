import { useContext } from "react";
import { AppContext } from "../components/AppProvider";

export default function useAppProvider() {
  return useContext(AppContext)
}