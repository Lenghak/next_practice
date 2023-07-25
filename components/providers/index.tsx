import { TrpcProvider } from "./trpc";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TrpcProvider>{children}</TrpcProvider>;
};

export { Providers };
