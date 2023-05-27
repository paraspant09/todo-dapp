import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import type {TypedUseSelectorHook} from 'react-redux'

export const useAppDipatch:()=>AppDispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector