import { useRef } from "react";

export default function useOauth2() {
  const popupRef = useRef<null>();
  const grantAuthorization = () => {
    popupRef.current = null;
  };

  return {};
}
