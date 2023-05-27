import { useEffect } from "react";
import { ethers } from "ethers";
import { useAppDipatch } from "../redux/config/hooks";
import { updateBlockChainData } from "../redux/slices/blockChainSlice";
import schema from "../contract/TodoLists.json";

function useConnectWallet() {
  const dispatch = useAppDipatch();
  useEffect(() => {
    (async ()=>{
      try {
        const { ethereum } = window as any;
  
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
  
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
  
          ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
  
          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const balance = await provider.getBalance(schema.contractAddress);
          
          dispatch(
            updateBlockChainData({
              signer,
              account: account[0],
              balance
            })
          );
        } else {
          alert("Please set-up metamask!!");
        }
      } catch (error) {
        console.log("Error  is here:", error);
      }
    })()
  }, []);
}

export default useConnectWallet;
