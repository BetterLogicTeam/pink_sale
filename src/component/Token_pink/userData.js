import Web3 from "web3";
import {
    pinkSaleLockContract,
    pinkSaleLockAbi,
    tokenAbi,
    tokenAdress,
} from "../../utilies/Contract";


export const userData = async (_userAddress) => {
    console.log("User address", _userAddress);
    const web3 = window.web3;
    let pinkSaleToken = new web3.eth.Contract(tokenAbi, tokenAdress);
    let tokenName = await pinkSaleToken.methods.name().call();
    let tokenSymbol = await pinkSaleToken.methods.symbol().call();
    let tokenDecimals = await pinkSaleToken.methods.decimals().call();

    let pinkSaleContract = new web3.eth.Contract(
        pinkSaleLockAbi,
        pinkSaleLockContract
    );

    let _userTokens = await pinkSaleContract.methods.normalLocksForUser(_userAddress).call();
    // let _totalLocked = await pinkSaleContract.methods.normalLocksForUser(_userAddress).call();

    return { tokens: _userTokens, tokenName: tokenName, tokenSymbol: tokenSymbol, tokenDecimals: tokenDecimals };
    console.log("User Data", _userTokens);
}


