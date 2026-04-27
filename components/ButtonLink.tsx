import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <Link className="cusec-button-link" href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="cusec-button-link__arrow">
        -&gt;
      </span>
    </Link>
  );
}
