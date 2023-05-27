import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface BlockChainDataType {
  signer: any;
  account: string;
  balance: bigint;
}

const initialState: BlockChainDataType = {
  signer: null,
  account: "",
  balance: BigInt(0)
};
export const blockChainSlice = createSlice({
  name: "blockChain",
  initialState,
  reducers: {
    updateBlockChainData: (
      state: BlockChainDataType,
      action: PayloadAction<BlockChainDataType>
    ) => {
      state.signer = action.payload.signer;
      state.account = action.payload.account;
      state.balance = action.payload.balance;
    },
  },
});

// this is for dispatch
export const { updateBlockChainData } = blockChainSlice.actions;

// this is for configureStore
export default blockChainSlice.reducer;
