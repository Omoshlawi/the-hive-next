"use client";
import React, { useEffect } from "react";
import links from "./links";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import clsx from "clsx";
import { Crown, LockKeyhole, UserIcon } from "lucide-react";
import { useApiClient } from "@/app/lib/api";
import { Agency } from "@/app/lib/entities/agency";
import { Skeleton } from "@/app/components/ui/skeleton";
import Tooltip from "@/app/components/display/ToolTip";
import { useSessionContext } from "@/app/context/auth/hooks";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  pathname: string;
  sidebarExpanded: boolean;
  setSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBardLinks: React.FC<Props> = ({
  pathname,
  setSidebarExpanded,
  sidebarExpanded,
}) => {
  const { push } = useRouter();
  const { loading, request, data, error } = useApiClient<{
    roles: { agent?: Agency; agency?: Agency; owner?: Record<string, any> };
  }>({ roles: {} });
  const { setSession, session } = useSessionContext();

  // Responsible for geting user rolles on initial render
  useEffect(() => {
    request({ url: `users/roles`, method: "GET" });
  }, []);

  // Responsible for updating user roles in the session context
  useEffect(() => {
    if (data && session)
      setSession({ ...session, roles: Object.keys(data?.roles ?? {}) });
  }, [data]);

  if (loading)
    return (
      <div className="grid grid-cols-1 gap-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <div className="flex space-x-2">
            <Skeleton className="h-9 w-9 bg-zinc-500 " />
            <Skeleton className="h-9 w-full bg-zinc-500" />
          </div>
        ))}
      </div>
    );
  const userRoles = Object.keys(data?.roles ?? {});
  return (
    <>
      {links.map(({ group, links }, categoryIndex) => {
        return (
          <div key={categoryIndex}>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {group}
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              {links.map(
                ({ href, label, renderIcon, children, roles }, index) => {
                  const isNotEligible = userRoles.every(
                    (r) => !roles.includes(r)
                  );
                  if (!children)
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <Button
                          onClick={() => push(href)}
                          variant={"ghost"}
                          className={` group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:opacity-30 dark:hover:bg-meta-4 ${
                            pathname.includes(href) &&
                            "bg-graydark dark:bg-meta-4"
                          }`}
                        >
                          {renderIcon()}
                          {label}
                        </Button>
                        {isNotEligible && (
                          <Tooltip tipText="Insiffient role">
                            <LockKeyhole />
                          </Tooltip>
                        )}
                      </li>
                    );

                  return (
                    <SidebarLinkGroup
                      key={index}
                      activeCondition={
                        pathname === href || pathname.includes(href)
                      }
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <Link
                              href={children ? "#" : href} //Give link only if has children
                              className={clsx(
                                `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium`,
                                `text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`,
                                {
                                  "bg-graydark dark:bg-meta-4":
                                    pathname === "/" ||
                                    pathname.includes("dashboard"),
                                }
                              )}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {renderIcon()}
                              {label}
                              {/* Show chevron if has children then Rotate  if open else leave */}
                              {children && (
                                <svg
                                  className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                    open && "rotate-180"
                                  }`}
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                    fill=""
                                  />
                                </svg>
                              )}
                            </Link>
                            {/* <!-- Dropdown Submenus only rendered if children is truthy --> */}

                            <div
                              className={clsx(
                                `translate transform overflow-hidden`,
                                {
                                  hidden: !open,
                                }
                              )}
                            >
                              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                {children.map(({ href, label }, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="flex justify-between items-center w-full"
                                    >
                                      <Button
                                        variant={"ghost"}
                                        onClick={() => push(href)}
                                        className={clsx(
                                          `group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:opacity-30`
                                        )}
                                      >
                                        {label}
                                      </Button>
                                      {isNotEligible && (
                                        <Tooltip tipText="Insiffient role">
                                          <LockKeyhole />
                                        </Tooltip>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            {/* <!-- Dropdown Menu End --> */}
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                  );
                }
              )}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default SideBardLinks;
