

async function checkENS(name) {
    const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
    
    const resolver = await provider.getResolver(name);
    
    if (!resolver) {
        console.log("❌ 该 ENS 名称没有解析器");
        return;
    }
    
    const addr = await resolver.getAddress();
    console.log(`✅ ENS 解析到地址: ${addr}`);
}

checkENS("yourname.eth");
