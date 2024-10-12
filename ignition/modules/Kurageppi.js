import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const KurageppiModule = buildModule("KurageppiModule", (m) => {
  const kurageppi = m.contract("Kurageppi");

  return { kurageppi };
});

export default KurageppiModule;
