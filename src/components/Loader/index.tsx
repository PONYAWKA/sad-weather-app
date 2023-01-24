import { LoaderBody, Spinner, SpinnerInner } from "@/components/Loader/styled";

export const Loader = () => {
  return (
    <LoaderBody>
      <Spinner>
        <SpinnerInner></SpinnerInner>
      </Spinner>
    </LoaderBody>
  );
};
