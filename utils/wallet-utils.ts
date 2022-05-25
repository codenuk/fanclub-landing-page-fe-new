export const hiddenWallet = (walletAddress: string): string =>
  walletAddress?.replace(/(.{6})(.*)(.{4})/g, "$1...$3");
