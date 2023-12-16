import clsx from "clsx";

const ListItem = ({
  title,
  children,
  href,
  className,
  avatar,
}: {
  title: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  avatar?: React.ReactNode;
}) => (
  <div className="flex items-center">
    {avatar}
    <div
      className={clsx(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground",
        className
      )}
    >
      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {title}
      </div>
      <p className="text-sm font-medium leading-none">{children}</p>
    </div>
  </div>
);


export default ListItem