const hre =require('hardhat')

async function main(){
     const arti = await hre.ethers.getContractFactory("chai");
     const deploy = await arti.deploy();
     console.log(deploy.address);
}

main().catch((errors)=>{
    console.error(errors);
    process.exit(1);
})