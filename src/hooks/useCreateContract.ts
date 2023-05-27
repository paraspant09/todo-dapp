import { useEffect, useState } from "react";
import schema from "../contract/TodoLists.json";
import { ethers } from "ethers";
import { useAppSelector } from "../redux/config/hooks";

function useCreateContract() {
  const signer = useAppSelector((state) => state.blockchain.signer);
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        if(!signer) return;
        
        setContract(
          new ethers.Contract(schema.contractAddress, schema.abi, signer)
        );
      } catch (error) {
        console.log("Error  is here:", error);
      }
    })();
  }, [signer]);

  return {
    contract,
  };
}

export default useCreateContract;
