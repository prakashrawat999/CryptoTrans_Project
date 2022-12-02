// ES6 fat arrow function using async await function.. for improve code structure and performance..
const ContractDeployProcess = async () => {
  // Hardhat always run the compile task when running scripts with its command line interface.
  // await hre.run('compile');
  // it is responsible for deploying contract

  // we get contract to deploy.
  const MyTransContract = await hre.ethers.getContractFactory("MyTransContract");
  const transactionsContract = await MyTransContract.deploy();

  await transactionsContract.deployed();

  console.log("Contract Deploy Addresss 👍 ", transactionsContract.address);
};

const executeProcess = async () => {
  try {
    await ContractDeployProcess();
    console.log("Process succesfully💯...  chal ab soja kaafi kaam kr lia 😄 ");
    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
executeProcess();