"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = () => {
  const { userAgent } = useUserAgentContext();

  return (
    <div>
      <BackToHome />

      {/* Content for when JavaScript is enabled */}
      {userAgent ? (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      ) : (
        <div>No user agent</div>
      )}

      {/* Fallback content for when JavaScript is disabled */}
      <noscript>
        <div className="flex font-mono font-semibold text-sm text-red-600">
          JavaScript is disabled. Please enable JavaScript to view the UserAgent information.
        </div>
      </noscript>
    </div>
  );
};
