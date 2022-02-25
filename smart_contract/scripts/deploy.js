

const main = async()=>  {
  const Transection = await hre.ethers.getContractFactory("Transection");
  const transection = await Transection.deploy();

  await transection.deployed();

  console.log("Transection contract deployed to.." , transection.address);
}


// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const runMain= async()=>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

runMain();